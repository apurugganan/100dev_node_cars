const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet')

const server = http.createServer((req, res) => {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);
  if (page === '/') {
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  else if (page === '/api') {
    //if query parameter is car
    if('car' in params){
      //if query parameter car is 'tesla'
      if(params['car'] === 'tesla'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = [{
          name: "2022 Tesla Model S Plaid",
          mpg: "396 miles",
          msrp: "$135,990"
        },
        {
          name: "Model S",
          mpg: "405 miles",
          msrp: "$99,900"
        },
        {
          name: "Model Y",
          mpg: "330 miles",
          msrp: "$62,990"
        },
        {
          name: "Model 3",
          mpg: "272 miles",
          msrp: "$46,990"
        },
      ]
        res.end(JSON.stringify(objToJson));
      }
      //if query parameter car is 'jeep'
      else if(params['car'] === 'jeep'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = [{
          name: "2022 Jeep Wrangler",
          mpg: "22 City / 29 Highway",
          msrp: "$29,995"
        },
        {
          name: "2022 Jeep Grand Cherokee",
          mpg: "15 City / 21 Highway",
          msrp: "$38,325"
        },
        {
          name: "2022 Jeep Wagoneer",
          mpg: " 16 City / 22 Highway",
          msrp: "$58,995"
        },
        {
          name: "2022 Jeep Renegade",
          mpg: "24 City / 32 Highway",
          msrp: "$24,195"
        },
        ]
        res.end(JSON.stringify(objToJson));
      }
      //if query parameter car is 'porsche'
      else if(params['car'] === 'porsche'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = [{
          name: "2022 Porsche 911",
          mpg: "18 City / 25 Highway",
          msrp: "$101,200"
        },
        {
          name: "2022 Porsche 718 Boxster",
          mpg: "22mpg combined",
          msrp: "$62,600"
        },
        {
          name: "2022 Porsche 718 Cayman ",
          mpg: "21 City / 27 Highway",
          msrp: "$60,500"
        },
        {
          name: "2022 Porsche Panamera",
          mpg: "18 City / 24 Highway",
          msrp: "$88,400"
        },
      ]
        res.end(JSON.stringify(objToJson));
      }
    }
  }//else if
  else if (page === '/css/style.css'){
    fs.readFile('css/style.css', function(err, data) {
      res.write(data);
      res.end();
    });
  }
  else if (page === '/js/main.js'){
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
