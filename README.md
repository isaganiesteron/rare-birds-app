# rare-birds-app
A mini project made for the rare birds application process.

Server [NestJs] (https://docs.nestjs.com/)
Client: [React + Redux Boilerplate] (https://jasonwatmore.com/post/2017/09/16/react-redux-user-registration-and-login-tutorial-example)

## Installation

**make sure you have mongo installed and is running

```bash
cd nest-server
npm i
npm start
```

```bash
cd nest-client
npm i
npm start

```
## Database

There will be no data loaded in the mongo database so you have to load the data to use the app. 

```bash
use nest-server
```
## load users data
```bash
document=([{"username":"tom","password":"pass","role":"admin"},{"username":"jerry","password":"pass","role":"member"}])
```

```bash
db.users.insert(document)
```
## load blogs data
```bash
document=([{"id":1,"title":"React.js Powertools!","status":"published","views":200000,"content":"#lorem ispum #react.js","publishedAt":"2021-01-11T14:16:51.85Z","createdAt":"2021-01-10T14:16:51.85Z","updatedAt":"2021-01-11T14:16:51.85Z"},{"id":2,"title":"Typescript Powertools!","status":"published","views":2000000,"content":"#lorem ispum. #Typescript","publishedAt":"2021-01-11T14:16:51.85Z","createdAt":"2021-01-10T14:16:51.85Z","updatedAt":"2021-01-11T14:16:51.85Z"},{"id":3,"title":"Serverless Powertools!","status":"published","views":500000,"content":"#lorem ispum ## serverless","publishedAt":"2021-01-11T14:16:51.85Z","createdAt":"2021-01-10T14:16:51.85Z","updatedAt":"2021-01-11T14:16:51.85Z"},{"id":4,"title":"Node.js Powertools!","status":"published","views":2000000,"content":"#lorem ispum ## node.js","publishedAt":"2021-01-11T14:16:51.85Z","createdAt":"2021-01-10T14:16:51.85Z","updatedAt":"2021-01-11T14:16:51.85Z"},{"id":5,"title":"Deno Powertools!","status":"published","views":300000,"content":"#lorem ispum ## Deno","publishedAt":"2021-01-11T14:16:51.85Z","createdAt":"2021-01-10T14:16:51.85Z","updatedAt":"2021-01-11T14:16:51.85Z"},{"id":6,"title":"Javascript Powertools!","status":"archived","views":200000,"content":"#lorem ispum ## Javascript","publishedAt":"2021-01-11T14:16:51.85Z","createdAt":"2021-01-10T14:16:51.85Z","updatedAt":"2021-01-11T14:16:51.85Z"}])
```

```bash
db.users.insert(document)
```




