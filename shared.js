const { Issuer } = require('openid-client');
export const port = process.env.PORT || 3000

export let client;
export let redirect;

export async function makeSureDiscover() {
   if (!client) {
      let xeroIssuer = await Issuer.discover('https://integration-identity.xero-uat.com/.well-known/openid-configuration') // => Promise
      console.log('well-known has resolved')
      console.log('Discovered issuer %s %O', xeroIssuer.issuer, xeroIssuer.metadata);

      client = new xeroIssuer.Client({
         client_id: process.env.XERO_CLIENT_ID,
         client_secret: process.env.XERO_CLIENT_SECRET
      }); // => Client

      redirect = client.authorizationUrl({
         redirect_uri: process.env.NOW_URL + '/callback',
         scope: 'openid email profile',
      }); // => String (URL)

      console.log("​redirectUrl: ", redirect)
   }
}