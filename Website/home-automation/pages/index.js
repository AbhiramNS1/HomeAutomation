import Head from 'next/head'
import {getCookie, hasCookie, setCookie} from "cookies-next"
import  { useRouter } from "next/router"
const { MongoClient, ServerApiVersion } = require('mongodb');
import Login from './login'
import 'dotenv'
export default function Home(props) {
  return (
    <>
      <Head>
        <title>Pluto - Home Automation</title>
        <meta name="description" content="Home automation IOT application.Powered by pluto technologies" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logomin.png" />
      </Head>
      {props.login?<div>Hello {props.user}</div>:<Login/>}
    </>
  )
}


export async function getServerSideProps(context){
  
  if(hasCookie('login',context)){
    const uri = `mongodb+srv://Abhiram:${process.env.PASS}@homeautomation.loml1zn.mongodb.net/?retryWrites=true&w=majority`;
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
    const connection = await client.connect()
    if(connection){
      const res=await client.db("HomeAutomation").collection("users").find({cookie:getCookie("login",context)}).toArray()  
      client.close()
      if(res.length==1)
          return  {props:{login:true,user:res[0].name}}
    }
  }
  return {props:{login:false}}
}





