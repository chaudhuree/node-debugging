
const http = require('http')
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.write('This is home page')
    res.end('to run this file run npm run startDev')
  } else {
    res.end('something is wrong')
  }
})

server.listen(5000, () => console.log('server is on at Port :5000'))