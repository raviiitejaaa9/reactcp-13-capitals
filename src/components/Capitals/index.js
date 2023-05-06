import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here

class Capitals extends Component {
  state = {
    activeId: countryAndCapitalsList[0].id,
  }

  onChangeCountry = event => {
    this.setState({activeId: event.target.value})
  }

  getCountryName = activeId => {
    const countryName = countryAndCapitalsList.filter(
      eachItem => eachItem.id === activeId,
    )

    return countryName[0].country
  }

  onClickHead = () => {
    console.log('heading El Clicked')
  }

  render() {
    const {activeId} = this.state
    console.log(activeId)
    const countryName = this.getCountryName(activeId)
    // console.log(countryName)

    return (
      <div className="app-container">
        <div className="card">
          <h1 onClick={this.onClickHead}> Countries and Capitals </h1>

          <div className="capital-container">
            <select value={activeId} onChange={this.onChangeCountry}>
              {countryAndCapitalsList.map(eachItem => (
                <option value={eachItem.id} key={eachItem.id}>
                  {eachItem.capitalDisplayText}
                </option>
              ))}
            </select>

            <p> is capital of which country? </p>
          </div>
          <h1> {countryName} </h1>
        </div>
      </div>
    )
  }
}

export default Capitals
