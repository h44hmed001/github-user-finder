"use client"
import Search from '@/components/(search)/Search'
import Image from 'next/image'
import { useState } from 'react'
import { BeatLoader } from 'react-spinners'
import styles from "./page.module.css"
import UserCard from '@/components/(userCard)/UserCard'
export default function Home() {
  const [loading,setLoading]=useState(false)
  const [userData,setUserData]=useState(null)
  //{!loading&&userData?"":"Loading"}
 
  return (
    <div>
      <Search setLoading={setLoading} setUserData={setUserData}/>
      <div className={styles.loader}>
      {loading&&<BeatLoader
  color="#d63636"
  size={3}
  speedMultiplier={1}
/>}</div>
      {userData&&<UserCard userData={userData}/>}
      </div>
    
  )
}
