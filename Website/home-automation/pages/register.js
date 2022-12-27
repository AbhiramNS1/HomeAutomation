import styles from '../styles/Home.module.css'
import Image from "next/image"
import logo from "../public/res/pluto.png"
import {ToastContainer,toast}from  'react-toastify'
import Router, {useRouter} from 'next/router'
import {HashLoader} from 'react-spinners'
import 'react-toastify/dist/ReactToastify.css'
import { useState } from 'react'
import Link from 'next/link'


export default function Register(){
        return(
            <main className={styles.main}>
                <div className={styles.maindiv}>
                    <h1 className={styles.heading}>PLUTO - Register</h1>
                    <Image draggable={false} className={styles.img} src={logo} width="150" heigth="150"></Image>
                    <label for="uname"  className={styles.label}>Create a username</label><br></br>
                    <input id="uname"  className={styles.inputbox} placeholder="username"></input><br></br>
                    <label for="email"  className={styles.label} >Enter email address</label><br></br>
                    <input id="email" type="email" className={styles.inputbox} placeholder="email" ></input>
                    <label for="phno"  className={styles.label} >Enter phone number</label><br></br>
                    <input id="phno" type="tel" className={styles.inputbox} placeholder="phone no" ></input>
                    <button className={styles.loginbutton} >Register </button>
                </div>
            </main>
        )
}