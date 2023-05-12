import React, { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

export default function NotFound() {
  // Navigate component works exactly same as link, it has the same props, and has same state, so we can navigate back to home page

  //useEffect takes two arguments. The first argument passed to useEffect is a function called effect and the second argument (optional) is an array of dependencies.

  //useNavigation is a Hook available in React Router. As stated in their official documentation, this Hook returns any information you need about a page navigation, such as: Global loading indicators. Disabling forms while a mutation is happening.

  const navigate = useNavigate();

  useEffect(()=>{
    setTimeout(()=>{
      // The state is a built-in React object that is used to contain data or information about the component.
      navigate("/", {state: "Error page not Found..!"})
    },1000)
  },[])
  return (
   <h1>NotFound</h1>
  )
}
