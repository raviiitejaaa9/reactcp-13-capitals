const ListEl = props => {
  const {eachDetails, onChangeCountry} = props
  // console.log(eachDetails)
  const {id, capitalDisplayText} = eachDetails
  console.log(id)

  const onClickListEl = () => {
    console.log('capitalChanged')
    onChangeCountry(id)
  }
  return (
    <option value={id} onClick={onClickListEl}>
      {capitalDisplayText}
    </option>
  )
}

export default ListEl
