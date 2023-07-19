import React from 'react'
import styles from "./page.module.css"
import Avatar from '@mui/material/Avatar';
import Image from 'next/image';
import dayjs from 'dayjs';
import Repositories from '../(repos)/Repositories';
const userCard = ({userData}) => {
  const truncate=(str)=>{
    if (str.split(" ").length>6){
      return str.split(" ").slice(0,6).join(" ")+"..."
    }return str
  }
    console.log(userData)
  return (
    <>
    <div className={styles.container}>
      <div className={styles.left}>
    <div className={styles.imageCont}><Image className={styles.avatar} fill={true} src={userData.avatar_url}/></div>
    <span className={styles.bio}>{userData.bio&&truncate(userData.bio)}</span>
      <button className={styles.button}><a target="_blank" className={styles.a} href={userData.html_url}>See Profile</a></button>

      </div>
      <div className={styles.right}>
        <div className={styles.badges}>
        <div className={styles.badge}>Public Repos: {userData.public_repos}</div>
        <div className={styles.badge}>Followers: {userData.followers}</div>
        <div className={styles.badge}>Following: {userData.following}</div>
        </div>
        <h3 className={styles.name}>{userData.name}</h3>
        <div className={styles.fields}>
        <span className={styles.field}>Company: {userData.company||"None"}</span>
        <span className={styles.field}>Location: {userData.location||"None"}</span>
        <span className={styles.field}>Blog/Website: <a target="_blank" className={styles.a} href={userData.blog}>{userData.blog||"None"}</a></span>
        <span className={styles.field}>Member since: {userData.created_at.split("T")[0]}</span>
        </div>
      </div>
    </div>
    {userData.repos_url&&<Repositories repos={userData.repos_url}/>}
    </>
  )
}

export default userCard
