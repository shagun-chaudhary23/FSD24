//rfce command is used to make style or can say the basic structure for react component (similar work as we do shift +! in html)
import React from 'react'

function ICard(data) {
  return (
    <div style={{
      border: '4px solid #af2c1e',
      backgroundColor: 'whitesmoke',
      width: '400px',
      margin: '20px auto',
      padding: '20px',
      borderRadius: '12px',
      textAlign: 'center',
      color: '#333'
    }}>
      <h2 style={{ color: 'red' }}>{data.college}</h2>
      <div>
        <img src={data.pic} height="200px" width="200px" ></img>
      </div>
      <h3 style={{ color: 'brown', textAlign: 'left' }}>Roll No.: {data.rollNo}</h3>
      <h3 style={{ color: 'green', textAlign: 'left' }}>Name: {data.name}</h3>
      <h3 style={{ color: 'lightblue', textAlign: 'left' }}>Branch: {data.branch}</h3>
      <h3 style={{ color: 'pink', textAlign: 'left' }}>Section: {data.section}</h3>
      <h3 style={{ color: 'orange', textAlign: 'left' }}>Skills: {data.skills}</h3>
    </div>
  )
}

export default ICard