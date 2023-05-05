import React from 'react'
import { useParams } from 'react-router-dom';


const NotePage = () => {
 const {id} = useParams()

  return(
    <div>
      <h1>single note {id}</h1>
    </div>
  )
}


export default NotePage;