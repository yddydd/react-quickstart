import React from 'react'
import {
  useParams,
  useRouteMatch,
  useHistory,
  useLocation,
  Redirect,
  Prompt,
  Link,
} from 'react-router-dom'

export default function(props) {
  const params = useParams()
  const { id } = params
  let match = useRouteMatch()
  let history = useHistory()
  let location = useLocation()

  // console.log('route-api-useParams', params)
  // console.log('route-api-useRouteMatch', match)
  // console.log('route-api-useHistory', history)
  // console.log('route-api-useLocation', location)
  return (
    <>
      <Prompt message="你确定要离开当前页面吗？" />
      <h1>aboutid: {id}</h1>
      <Link to="/old-home">去首页</Link>
      {id === 222 && <Redirect to={{
              pathname: "/home",
              state: { from: 1 }
            }}/>}
    </>
  )
}