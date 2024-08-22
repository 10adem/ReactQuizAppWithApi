import React from 'react'
import './Dropdown.css'

const Dropdown = ({data, setDifficultyChange}) => {
  return (
    <div className='dropdown'>
        <select onChange={e => setDifficultyChange(e.target.value)}>
          <option value="">Select Difficulty</option>
            {
                data.map((dt,i) => (
                    <option key={i} value={dt}>{dt}</option>
                ))
            }
        </select>
    </div>
  )
}

export default Dropdown