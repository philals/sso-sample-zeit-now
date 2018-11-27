import { makeSureDiscover, port, redirect } from '../shared';

const express = require('express')
const app = express()
const router = express.Router()

router.get('/login', async (req, res) => {
   await makeSureDiscover();
   console.log('hitting login')
   res.redirect(redirect);
})

app.use('/', router)

app.listen(port, err => {
   if (err) throw err
   console.log(`> Ready On Server http://localhost:${port}`)
})