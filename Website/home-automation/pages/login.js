import styles from '../styles/Home.module.css'
import Image from "next/image"
import logo from "../public/res/pluto.png"
import {ToastContainer,toast}from  'react-toastify'
import Router, {useRouter} from 'next/router'
import {HashLoader} from 'react-spinners'
import 'react-toastify/dist/ReactToastify.css'
import { useState } from 'react'
import Link from 'next/link'




function LoginAuth(uname,pass,setLoading){
  if(pass.length<=0 || uname.length<=0){
    toast.error("Password or username cannot be empty",{toastId:'4'});
    setLoading(true)
    return
  }
  if( ValidateUsername(uname) && ValidatePassword(pass)){
      fetch('/api/login',{
        method:'POST',
        body:JSON.stringify({uname,pass})
      }).then(res=>res.json()).then(res=>{
        if(res.status) window.location.href='/'
        else{
          toast.error(res.reson,{toastId:'k'})
          setLoading(false)
        }
      })
  }else setLoading(false)
   
}

function ValidateUsername(text){
  if(text.length!=0 && text.length<5)
      toast.warning("Username must be atleast 5 charectors long",{toastId:'q'})
  else return true
  return false
}
function ValidatePassword(text){
  if(text.length!=0 &&  !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(text))
      toast.error("password must constain Minimum eight characters, at least one letter, one number and one special character ",{toastId:'2'})
  else return true
  return false
}




export default function Login(){

  const [uname,setuname]= useState('')
  const [pass,setpass]=useState('')
  const [loading,setLoading]=useState(false)
    return (
        <main className={styles.main}>
            <ToastContainer/>
            <div className={styles.maindiv}>
              <h1 className={styles.heading}>PLUTO - LOGIN</h1>
              <Image alt='pluto' draggable={false} className={styles.img} src={logo} width="150" heigth="150"></Image>
              <label className={styles.label}>Enter username</label><br></br>
              <input className={styles.inputbox} placeholder="username" onBlur={(e)=>{e.target.value;ValidateUsername(uname)}} onChange={e=>{setuname(e.target.value)}} ></input><br></br>
              <label  className={styles.label} >Enter Password</label><br></br>
              <input className={styles.inputbox} type="password" placeholder="password"  onBlur={(e)=>{ValidatePassword(pass)}} onChange={e=>{setpass(e.target.value)}} ></input>
              {loading?
              <div 
              style={{  width: 70,
                        height: 30,
                        margin: 30,
                        marginLeft:50,
                        marginBottom:40
                      }}><HashLoader color='#00ff00' /></div>
              :
              <button className={styles.loginbutton} onClick={(e)=>{setLoading(true); LoginAuth(uname,pass,setLoading);}} >  Login </button>
              }
               <div style={{color:'white'}}>Do not have an account ? <Link style={{color:'#00ff00'}} href="/register" > Register </Link></div>
            </div>
        </main>
    )
}