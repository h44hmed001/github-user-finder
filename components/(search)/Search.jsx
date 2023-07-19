"use client"
import React, { useState } from 'react'
import styles from "./page.module.css"


const Search = ({setUserData,setLoading}) => {
    const [query,setQuery]=useState("")
    const handleSubmit=async()=>{
        setLoading(true)
        const res=await fetch(`https://api.github.com/users/${query}`)
        const data=await res.json()
        setUserData(data)
        setLoading(false)
        setQuery("")
    }
    const onKeyUp=(e)=>{
      if(e.key=="Enter"&&query){
        handleSubmit()
      }
    }
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>Search Users on Github</h1>
        <input onKeyUp={(e)=>onKeyUp(e)} value={query} onChange={(e)=>setQuery(e.target.value)} className={styles.input} placeholder="Search users here"  type='text'/>
        <div className={styles.buttonContainer}>
        <button onClick={handleSubmit} disabled={!query} className={styles.button}>Search</button>
    </div>
    </div>
  )
}

export default Search
