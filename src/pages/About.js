import React from 'react'
import { useParams, useRouteMatch, useHistory, Redirect } from 'react-router-dom'

export default function(props) {
  const params = useParams()
  const { id } = params
  let match = useRouteMatch()
  let history = useHistory()

  console.log('route-api-useParams', params)
  console.log('route-api-useRouteMatch', match)
  console.log('route-api-useHistory', history)
  return (
    <>
      <h1>aboutid: {id}</h1>
      {id == 222 && <Redirect to={{
              pathname: "/home",
              state: { from: 1 }
            }}/>}
    </>
  )
}