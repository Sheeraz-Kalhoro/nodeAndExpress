const http = require('http')
const server = http.createServer((req, res)=>{
    // console.log(req)
    if(req.url === '/'){

        res.write('Hello, World From Node Js')
        res.end()
    }
    if(req.url === '/about'){
        res.write('Little History.....')
        res.end()
    }
    res.end("Oops! page not found")
    // res.end(`<h1>Oops can't find the page that you requested..</h1>
    // <a href="/" >Home Page</a>`)
})

server.listen(5000, ()=> console.log('http://localhost:5000'))