import React from 'react'
import { useParams } from 'react-router-dom';


function NotePage() {

  let noteId = useParams.id;

  return (
    <div>
        <h1>single note {noteId}</h1>
    </div>
  )
}

export default NotePage