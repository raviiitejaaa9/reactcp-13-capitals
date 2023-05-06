import {Component} from 'react'

import './index.css'

import ListEl from '../ListEl'

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

  onChangeCountry = id => {
    this.setState({activeId: id})
  }

  onChangeOption = () => {
    this.setState({activeId: 3})
  }

  getCountryName = () => {
    const {activeId} = this.state
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
    const countryName = this.getCountryName()
    // console.log(countryName)

    return (
      <div className="app-container">
        <div className="card">
          <h1 onClick={this.onClickHead}> Countries and Capitals </h1>

          <div className="capital-container">
            <div>
              <select value={countryName}>
                {countryAndCapitalsList.map(eachItem => (
                  <ListEl
                    eachDetails={eachItem}
                    onChangeCountry={this.onChangeCountry}
                    key={eachItem.id}
                  />
                ))}
              </select>
            </div>
            <p> is capital of which country? </p>
          </div>
          <h1> {countryName} </h1>
        </div>
      </div>
    )
  }
}

export default Capitals
