[![Deploy to now](https://deploy.now.sh/static/button.svg)](https://deploy.now.sh/?repo=https://github.com/philals/sso-sample-zeit-now&env=XERO_CLIENT_ID&env=XERO_CLIENT_SECRET)

# One click deploy

Add the follow env vars:

```
XERO_CLIENT_ID: {Your client ID},
XERO_CLIENT_SECRET: {Your client secret}
```

You will be given a now URL for your app. Replace the call back url with this URL and append `/callback` to it. Check out `shared.js` for how we're setting the redirect URL in app.

## More manual deploys:

Install the Zeit CLI (https://github.com/zeit/now-cli) and login. Run the following commands:

```
git clone GITURLHERE
now -e MY_VARIABLE=@acme-api-key
now
```

You will be given a now URL for your app. Replace the call back url with this URL and append `/callback` to it.

Alternativly add this to your `now.json` for configure env vars.

```
{
  "env": {
    "DATABASE_NAME": "test"
  }
}
```