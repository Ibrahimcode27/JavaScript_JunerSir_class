import express from 'express'
import { printthis } from '../controller/user.controller.js'

const app = express()
app.post('/printkaro',printthis)

export default app