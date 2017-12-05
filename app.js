'use strict'

const path = require('path')
const express = require('express')
const serveStatic = require('serve-static')

const app = express()

app.use('/contents', serveStatic(path.join(__dirname, 'public')))

app.get('/dashboard', dashboardRoute)
app.get('/dashboard/*', dashboardRoute)

function dashboardRoute(req, res) {
	res.sendFile('/public/dashboard.html', { root: __dirname });
}

app.get('*', (req, res) => res.sendFile('/public/index.html', { root: __dirname }))

app.listen(8090, () => console.info('App listen on 8090'))