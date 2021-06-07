const http = require('http')

const server = http.createServer((req, res) => {
  switch(req.url) {
    case '/movies':
      res.end(`
      <h1>Fave Movies</h1>
      <ul>
        <li>Bruh</li>
      </ul>
      `)
      break
    case '/songs':
      res.end(`
      <h1>Fave Songs</h1>
      <ul>
        <li>Bruh</li>
      </ul>
      `)
      break
    case '/foods':
      res.end(`
      <h1>Fave Foods</h1>
      <ul>
        <li>Bruh</li>
      </ul>
      `)
      break
  }

  server.listen(3000, () => console.log('Server is running...'))
})