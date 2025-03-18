import express from 'express'
import * as Path from 'node:path'

import ideasRoutes from './routes/ideas.ts'

const server = express()
const BASE_URL = '/api/v1'

server.use(express.json())

server.use(`${BASE_URL}/ideas`, ideasRoutes)

if (process.env.NODE_ENV === 'production') {
    server.use(express.static(Path.resolve('public')))
    server.use('/assets', express.static(Path.resolve('./dist/assets')))
    server.get('*', (req, res) => {
        res.sendFile(Path.resolve('./dist/index.html'))
    })
}

export default server
