import React from 'react'

export default function filmdetail(props) {
    // console.log(props.match)
  return (
    <div>filmdetail-{props.match.params.filmId}</div>
  )
}
