const http= require("http")
 const server1=http.createServer((req,res)=>{
    res.write(" server1 is requested ")
    res.end()

 })

server1.listen(3000,()=>{
    console.log("Server running on http://localhost:3000")
 })
 //const http= require("http")
 const server2=http.createServer((req,res)=>{
    res.write(" server2 is requested ")
    res.end()

 })

 server2.listen(4000,()=>{
    console.log("Server running on http://localhost:4000")
 })
 //const http= require("http")
 const server3=http.createServer((req,res)=>{
    res.write("Hello from node server3")
    res.end()

 })

 server3.listen(5000,()=>{
    console.log("Server running on http://localhost:5000")
 })