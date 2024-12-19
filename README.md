# Express CMS  
RESTful API service for CMS applications using [Express framework](https://expressjs.com/) and [Bun](https://bun.sh/).  
Admin page source code can be found [here](https://github.com/muhammadardie/admin-cms), and the front page is [here](https://github.com/muhammadardie/react-cms).  

The alternative version of this service was implemented using Go (echo), which can be found [here](https://github.com/muhammadardie/go-cms).  

## Features  

- API Documentation `Swagger (auto-generate)`  
- Authentication `JSON Web Token (JWT)`  
- CRUD operations `MongoDB`  
- Caching `Redis`  
- Environment variables configuration  

## System Requirements  

- Bun  
- MongoDB  
- Redis  

## Environment Variables  

| **Key**          | **Description**                      |  
| :--------------- | :----------------------------------- |  
| MONGODB_URL      | URL to connect to MongoDB instance   |  
| ACCESS_SECRET    | JWT key for access token             |  
| REFRESH_SECRET   | JWT key for refresh token            |  
| REDIS_ADDRESS    | URL to connect to Redis instance     |  
| REDIS_PASSWORD   | Redis Password                       |  

## Demo  

- **APP**: [https://express-cms.muhammadardie.tech](https://express-cms.muhammadardie.tech)  
- **Documentation**: [https://express-cms.muhammadardie.tech/api-docs/](https://express-cms.muhammadardie.tech/api-docs/)  