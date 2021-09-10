# Api

Run `npm install` to install dependencies.

Config your database in `/config/config.js`

``
"development": {
    "username": "root",
    "password": null,
    "database": "db_namet",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
  ``

Run `sequelize db:migrate` init server.

Run `npm start` init server.

Endpoints

`http://localhost:3000/user` methods `post` `patch` `delete` `get`

`http://localhost:3000/municipality` methods `post` `patch` `delete` `get`

`http://localhost:3000/mark` methods `post` `patch` `delete` `get`

`http://localhost:3000/vehicle` methods `post` `patch` `delete` `get`
