import React from 'react'
import searchimg from '../../assets/img/search.svg'
import './search.css'

function Search() {
  return (
    <div className='search' >
    <img src={searchimg} />
      <input type='search' placeholder='...ابحث عن خدمة '/>
    </div>
  )
}

export default Search
