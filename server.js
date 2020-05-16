const { createServer } = require('http')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = new URL(req.url, 'http://pxservices.live')
    const { pathname, query } = parsedUrl

    if (pathname === '/') {
      app.render(req, res, '/index', query)
    } else if (pathname === '/about') {
      app.render(req, res, '/about', query)
    } else if (pathname === '/cart') {
        app.render(req, res, '/cart', query)
    } else {
      handle(req, res, parsedUrl)
    }
  }).listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})