import React, { useState } from 'react'
import { ReactPropTypes } from 'react'
import './Form.module.css'

const Form = ({ submitSearch }) => {
  const [location, setlocation] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    if (!location || location === '') return;
    submitSearch(location)
  }

  return (
    <form onSubmit={onSubmit}>
      <input
      aria-label="location"
      type="text"
      className={"input"}
      placeholder ="search for location"
      required
      value={location}
      onChange={e => setlocation(e.target.value)}>
      </input>

      <button type="submit" className={"button"} onClick={onSubmit}>Search</button>
    </form>
  )
}
export default Form;
