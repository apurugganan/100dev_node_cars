const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet')

const server = http.createServer((req, res) => {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);
  if (page == '/') {
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/api') {
    if('car' in params){
      if(params['car']== 'tesla'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          name: "2022 Tesla Model S Plaid",
          mpg: "396 miles",
          msrp: "$135,990"
        }
        res.end(JSON.stringify(objToJson));
      }//car == tesla
      else if(params['car'] == 'jeep'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          name: "2022 Jeep Wrangler",
          mpg: "22 City / 29 Highway",
          msrp: "$29,995"
        }
        res.end(JSON.stringify(objToJson));
      }//car == jeep
      else if(params['car'] == 'porshe'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          name: "2022 Porshe 911",
          mpg: "18 City / 25 Highway",
          msrp: "$101,200"
        }
        res.end(JSON.stringify(objToJson));
      }//car == porshe
    }//student if
  }//else if
  // else if (page == '/css/style.css'){
  //   fs.readFile('css/style.css', function(err, data) {
  //     res.write(data);
  //     res.end();
  //   });
  else if (page == '/js/main.js'){
    fs.readFile('js/main.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  }else{
    figlet('404!!', function(err, data) {
      if (err) {
          console.log('Something went wrong...');
          console.dir(err);
          return;
      }
      res.write(data);
      res.end();
    });
  }
});

server.listen(8000);
