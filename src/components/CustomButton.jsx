import React from 'react'
import "./styles/CustomBtn.css"

function CustomButton({ value, onClick }) {
  return (
    <div id='custom-btn'>
      <input id='cstm' type="submit" value={value} onClick={onClick} />
    </div>
  )
}

export default CustomButton
