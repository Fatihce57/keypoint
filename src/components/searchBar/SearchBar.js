import React from 'react'
import './_SearchBar.scss'

const SearchBar = (props) => {
  const { handleOnSubmit,searchTerm,handleOnChange } = props

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <input
          type="text"
          className="search"
          placeholder="Search movies..."
          value={searchTerm}
          onChange={handleOnChange}
          />
      </form>
    </div>
  )
}

export default SearchBar
