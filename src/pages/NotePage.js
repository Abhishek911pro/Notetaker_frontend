import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import {  ReactComponent as ArrowLeft } from '../assets/arrow-left.svg';
// 

const NotePage = () => {
 const navigate  = useNavigate();
 const {id} = useParams();
 let [note,setNote] = useState(null)


 useEffect(() =>{
      getNote()
 },[id])

 let getNote = async () => {
  let response = await fetch(`/api/notes/${id}/`)
  let data = await response.json()
  setNote(data)
 }

 let createNote = async () => {
  if (id !== 'new') 
  return
  
  fetch(`/api/notes/create/`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(note)
  })
 }



 let updateNote = async () => {
  if (id === 'new') return
  
  fetch(`/api/notes/${id}/update/`, {
    method: "PUT",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(note)
  })
 }

let deleteNote = async () => {
  fetch(`/api/notes/${id}/delete/`,{
    method: 'DELETE',
    header: {
      'Content-Type': 'application/json'
    }
  })
  navigate('/')
}



let handleSubmit = ()=> {

    if(id !== 'new' && note.body ==''){
      deleteNote()
    } else if(id !== 'new')
    {
      updateNote()
    } else if (id ==='new' && note.body !== null){
      createNote()
    }
    navigate('/')  
 }

  let handleChange = (value) => {
    setNote(note => ({ ...note, 'body': value}))
  }


  return(
    
    <div className="note">
      <div className="note-header">
        <h3>
            <ArrowLeft onClick={handleSubmit} />
        </h3>
        {
          id !== 'new' ? (
            <button onClick={deleteNote}>Delete</button>
          ) : (
            <button onClick={handleSubmit}>Done</button>
          )}
        
      </div>
      <textarea onChange={(e) => {handleChange(e.target.value)}} defaultValue={note?.body}></textarea>
    </div>
  )
}


export default NotePage;