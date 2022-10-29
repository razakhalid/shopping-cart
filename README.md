# shopping-cart

## Project setup
```
yarn install
```

### Running locally
Chrome security will block CORS due to different origins for client
and server, since we're using localhost - this will block app functionality.

#### Here's how to get around it:

##### Mac:
Run this in your terminal:

open -n -a /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --args --user-data-dir="/tmp/chrome_dev_test" --disable-web-security

This will open a new chrome instance with security disabled and allow 
CORS so you can run the app locally.

Warning: Do not use this new Chrome instance to browse since security is disabled

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
