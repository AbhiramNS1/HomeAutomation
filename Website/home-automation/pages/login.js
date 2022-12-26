import styles from '../styles/Home.module.css'
import Image from "next/image"
import logo from "../public/res/pluto.png"
import { useState } from 'react/cjs/react.production.min'

function LoginAuth(){
    fetch('/api/login',{})
    console.log("hello world")
}
function ValidateUsername(){
    
}

export default function Login(){
    // setCookie("login",'randomstring',{httpOnly:true,...context})
    const [newstate,setNewState]=useState("")
    return (
        <>
        <main className={styles.main}>
            <div className={styles.maindiv}>
                <h1 className={styles.heading}>PLUTO - LOGIN</h1>
                <Image className={styles.img} src={logo} width="150" heigth="150"></Image>
              <label className={styles.label}>Enter username</label><br></br>
              <input className={styles.inputbox} placeholder="username"></input><br></br>
              <label  className={styles.label} >Enter Password</label><br></br>
              <input className={styles.inputbox} type="password" placeholder="password" ></input>
              <button className={styles.loginbutton} onClick={LoginAuth}>Login </button>
            </div>
        </main>
      </>
    )
}