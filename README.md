## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn serve`

Runs the server oauth github middleware.

### Create a file `.env` to save environment variables as in the exemple below.
`
REACT_APP_CLIENT_ID=#CLIENT_ID_OAUTHGITHUB#
REACT_APP_CLIENT_SECRET=#CLIENT_SECRET_OAUTH_GITHUB#
REACT_APP_REDIRECT_URI=http://localhost:3000/login
REACT_APP_PROXY_URL=http://localhost:5000/authenticate
SERVER_PORT=5000
`

