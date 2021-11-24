const http=require('http')
const fs=require('fs')
var i=0;

const server = http.createServer((req, res) => {
    //console.log(req);
    res.statusCode = 200;
    
    if(req.url==='/favicon.ico'){
      res.setHeader('Content-Type', 'image/jpg');
      fs.readFile('image1.jpg', function (err, data) {
        if (err) return console.error(err);
        //console.log(data.toString());
        res.write(data);
        res.end()
      })
    }
    else if(req.url==='/'){i++;
        res.setHeader('Content-Type', 'text/html');
        fs.readFile('index.html',(err,data)=>{
          if(err){res.end("Can not read index.html.")}
          res.write(data);
          res.end()
        });
    }
    else {
      res.setHeader('Content-Type', 'text/plain');
      res.end("I have received data.")
    }
})
server.listen(3001)