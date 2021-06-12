import React from 'react'

function AllFootballers({footballers}) {
  return (
      <table className="table">
        <thead>
          <tr>
            <td>Footballer Name</td>
            <td>Position</td>
            <td>Club</td>
          </tr>
        </thead>
        <tbody>
          {footballers.map(footballer => 
            <tr>
              <td>{footballer.name}</td>
              <td>{footballer.position}</td>
              <td>{footballer.club}</td>
            </tr>
          )}
        </tbody>
      </table>
  )
}

export default AllFootballers
