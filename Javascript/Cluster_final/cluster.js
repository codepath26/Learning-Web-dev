import cluster from 'node:cluster';
import  express from 'express';
import os from 'node:os';
const numCpus = os.availableParallelism();
if(cluster.isPrimary){
console.log(`server is running on 3000 with PID => ${process.pid}`);

for(let i = 0 ; i<numCpus ; i++){
  cluster.fork();
}
}else{
const app = express();
app.get('/' , (req ,res)=>{
  res.send(`hellow from the d4 and server is running with  PID => ${process.pid}`);
  
})
app.get('/slow-page' , (req , res)=>{
   for(let i =0 ; i<9000000000; i++){};
   res.writeHead(200,{"Content-Type" : 'text/plain'});
   res.end(`Hello from the server with pid ${process.pid}`);
})
app.listen(3000 , ()=>{
  console.log(`server is running on prot 3000 with pid => ${process.pid}`);
})
}