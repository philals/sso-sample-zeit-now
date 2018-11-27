import { appHtml, rootHtml } from './htmlStrings';
import { client, makeSureDiscover, port, redirect } from './shared';

const express = require('express')
const app = express()
const router = express.Router()

router.get('/', async (req, res) => {
   await makeSureDiscover();
   res.send(rootHtml)
})

router.get('/login', async (req, res) => {
   await makeSureDiscover();
   console.log('hitting login')
   res.redirect(redirect);
})

router.get('/callback', async (req, res) => {
   await makeSureDiscover();

   let tokenSet = await client.authorizationCallback('https://sso.philalsford.com/callback', req.query) // => Promise
   console.log('received and validated tokens %j', tokenSet);
   console.log('validated id_token claims %j', tokenSet.claims);

   let email = tokenSet.claims.email;

   res.send(appHtml)
})

app.use('/', router)

app.listen(port, err => {
   if (err) throw err
   console.log(`> Ready On Server http://localhost:${port}`)
})