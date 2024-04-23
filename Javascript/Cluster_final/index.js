import cluster from 'node:cluster';
import  express  from 'express';
import process from 'node:process';
const app = express();



app.get('/' ,(req ,res)=>{
  res.send(`hellow from the server with pid ${process.pid}`)
})
app.listen(3000 ,()=>{
  console.log(`server is runinng on port 3000`);
})