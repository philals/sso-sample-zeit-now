## To Deploy

Install the Zeit CLI (https://github.com/zeit/now-cli) and login. Run the following commands:

```
git clone https://github.com/philals/sso-sample-zeit-now
cd ./sso-sample-zeit-now
now -e XERO_CLIENT_ID=@{Your client ID},
now -e XERO_CLIENT_SECRET=@{Your client secret}
now
```

You will be given a now URL for your app. Replace the callback url (https://developer.xero.com/myapps) with this URL and append `/callback` to it. 

Check out `shared.js` for how the app is generating it's callback URL.

#### Hard code ENV Vars

Alternativly add this to your `now.json` for configure env vars.

```
{
  "env": {
    "XERO_CLIENT_ID": "Your client ID"
    "XERO_CLIENT_SECRET": "Your client secret"
  }
}
```


#### One click deploy (NOT WORKING AT THE MOMENT)
[![Deploy to now](https://deploy.now.sh/static/button.svg)](https://deploy.now.sh/?repo=https://github.com/philals/sso-sample-zeit-now&env=XERO_CLIENT_ID&env=XERO_CLIENT_SECRET)

Add the follow env vars:

```
XERO_CLIENT_ID: {Your client ID},
XERO_CLIENT_SECRET: {Your client secret}
```

If this is you're first time using `deploy.now.sh` you will need to add an API key for the `ZEIT API TOKEN` app.

