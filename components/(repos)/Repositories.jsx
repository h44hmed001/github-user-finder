"use client"
import React, { useEffect,useState } from 'react'
import styles from "./page.module.css"
const Repositories = ({repos}) => {
    const [reposits,setReposits]=useState(null)
    const [visible,setVisible]=useState(3)
    console.log(reposits)
    useEffect(()=>{
        const fetching=async()=>{
            const res=await fetch(repos)
            const data=await res.json()
            setReposits(data)
        }
        fetching()
    },[repos])
    console.log(visible)
  return (

    <div className={styles.container}>
        <h2 className={styles.title}>Repositories</h2>
        <div className={styles.reposCont}>
            {reposits&&reposits.slice(0,visible)?.map((repo,ind)=>{
            return( <a target="_blank" className={styles.a} href={repo.clone_url}>

            <div className={styles.repos} key={ind}>
                
                <div className={styles.left}>
                    <h3 className={styles.name}>{repo.name}</h3>
                    {repo.language&&<h5 className={styles.badge}><span >Language:</span>{repo.language}</h5>}
                </div>
                <div className={styles.right}>
                    <div className={styles.badge}>Stars: {repo.stargazers_count}</div>
                    <div className={styles.badge}>Forks: {repo.forks}</div>
                    <div className={styles.badge}>watchers: {repo.watchers}</div>
                </div>
            </div>
            </a>)}
            )}
            </div>
            
            
            {visible===reposits?.length+1&&reposits?.length>4?<button onClick={()=>setVisible(3)} className={styles.button}>Show Less</button>:
            reposits?.length<4?<div></div>:
            <button onClick={()=>setVisible(reposits?.length+1)} className={styles.button}>Show All</button>
            }
            
    </div>
  )
}

export default Repositories
