# Abersoftapp-interview
* * *

This app was built for abersoft interview test.
This app has:
- RESTful endpoint for asset's CRUD operation

# USAGE
```
Make sure you have Node.js and npm in your computer and then run `npm install`.

In order to get access to all of the routes, you will need a `JWT(JSON Web Token) Token` which will be generated automatically after you sign in successfully.

Run `npm start` to start the server.
```

# GLOBAL RESPONSE
```
Common response you found when error on the server

Response (500) = { "message": "Internal Server Error" }
```


## RESTful Endpoint

### POST /login

> post login

_Request Header_
```
{
    "access_token" : <your access token>
}
```

_Request Body_
```
{
    "email": "<email to get insert into>",
    "password": "<password to get insert into>"
}
```

_Response (200)_
```
{
  "access_token": "<your access token>"
}
```

_Response (404 - Not Found)_
```
{
    "message": "Invalid email or password"
}
```

### POST /admin/register

> post register

_Request Header_
```
not needed
```

_Request Body_
```
{
    "email": "<email to get insert into>",
    "password": "<password to get insert into>"
}
```

_Response (201 - Created)_
```
{
  "id": "<server generated id>",
  "email": "<your email>",
  "password": "<your hashed password>",
  "updatedAt": "2020-04-29T08:05:55.184Z",
  "createdAt": "2020-04-29T08:05:55.184Z"
}
```

_Response (400 - Bad Request)_
```
{
    "message": "Incomplete data or Wrong Input"
}
```