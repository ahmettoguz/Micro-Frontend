<h1 id="top" align="center">🚢 Release Version 1.0.0</h1> 

<br/>

## 🔍 Table of Contents

- [Features](#features)
- [Next Release Features](#next-release-features)
- [System Startup](#system-startup)
  - [Developer Mode](#developer-mode)
  - [Production Mode](#production-mode)
 
<br/>

<h2 id="features">🔥 Features</h2>

+ The application has been containerized using Docker.
+ Integration with the backend is complete.

<br/>

<h2 id="next-release-features">🚧 Next Release Features</h2>

- Env variable support.
- Internal communication between backend service.
- Internal communication between email service.
- TLS/HTTPS support.

<br/>
  
<h2 id="system-startup">🚀 System Startup</h2> 

<h3 id="developer-mode">🧪 Developer Mode</h3>

#### Using command line

```
npm run dev
```

#### Using Docker

```
docker build -t micro-frontend-image .

docker run -d -p 8080:80 --name micro-frontend-container micro-frontend-image

docker ps -a

docker rm -f micro-frontend-container
```

<br/>

<h3 id="production-mode">⚡Production Mode</h3> 

1. Follow the instructions in the [`Micro-Docker-Config repository`](https://github.com/ahmettoguz/Micro-Docker-Config) to configure Docker for production.

[🔝](#top)
