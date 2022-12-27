
import crypto from  "crypto"
import { setCookie} from "cookies-next"
const { MongoClient, ServerApiVersion } = require('mongodb');
export default async function handler(req, res) {
  const {uname,pass}=JSON.parse(req.body)
  const hash=crypto.createHash('sha256').update(pass).digest('hex')
  const client = new MongoClient(process.env.DBURI, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
  const connection = await client.connect()
  if(connection){
    const ress=await client.db("HomeAutomation").collection("users").find({name:uname,hash:hash}).toArray()  
    if(ress.length==1){
      const newcookie=crypto.randomBytes(30).toString("base64")
      const result =await client.db("HomeAutomation").collection("users").updateOne({name:uname,hash:hash},{$set:{cookie:newcookie}})
      if(result){
        console.log(result)
        setCookie("login",newcookie,{httpOnly:true,req:req,res:res})
        res.status(200).json({status:true})
        return
      }
      else res.status(200).json({status:false,reson:"Unable to process the request"})
         
    }
    else  res.status(400).json({status:false,reson:"Invalid credentials"})
    client.close()
  }
  else res.status(500).json({status:false,reson:"Unable to process the request"})
}
