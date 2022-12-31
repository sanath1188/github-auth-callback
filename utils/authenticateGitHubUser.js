const fetch = require('node-fetch')

const { getScript } = require('./callbackHtmlPage')

async function authenticateGitHubUser(gitHubAuthCode, cb) {
  const CLIENT_ID = '931bb26a620156d45488';
  const CLIENT_SECRET = '0c1f16b2b9e75a8a57facca83d805d5ca62338df';

  const postOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      code: gitHubAuthCode
    })
  }

  const data = await fetch('https://github.com/login/oauth/access_token', postOptions)
  const response = await data.json()

  cb(
    null,
    {
      statusCode: 200,
      headers: {
        'Content-Type': 'text/html',
      },
      body: getScript('success', {
        token: response.access_token,
        provider: 'github',
      }),
    },
  )
}

exports.authenticateGitHubUser = authenticateGitHubUser