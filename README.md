* Generate api routes for JS
`php artisan ziggy:generate "resources/js/plugins/ziggy/api-routes.js"`
* Generate api client with password access 
` php artisan passport:client --password`
then put credentials to the .env file
```dotenv
CLIENT_WEB_ID=
CLIENT_WEB_SECRET=
```
