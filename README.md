<h1 id="top" align="center">🚢 Release Version 2.1.0</h1> 

<br/>

## 🔍 Table of Contents

- [Features](#features)
- [Next Release Features](#next-release-features)
- [System Startup](#system-startup)
  - [Developer Mode](#developer-mode)
  - [Production Mode](#production-mode)
 
<br/>

<h2 id="features">🔥 Features</h2>

+ **External Communication:** Manages communication between backend and email service.
+ **Global State Management:** Implemented using Redux for consistent state handling across the application.
+ **Persistent Settings:** Language, theme mode, and theme schema are remembered using localStorage.
+ **Internationalization:** Language support with i18n for a multilingual user experience.
+ **Custom Scrollbar Design:** Unique scrollbar styling to match the application's aesthetic.
+ **Floating Action Button:** A "Go to Top" button for improved navigation.
+ **Multi-Message Snackbar:** Support for displaying multiple snackbars using notistack.
+ **Professional UI/UX:** Modern user interface and experience.
+ **Input Validation:** Enhanced validation support for user inputs.
+ **Dark/Light Theme Mode:** Toggle between dark and light modes.
+ **Theme Schema Customization:** Toggle between default and custom theme schema.
+ **Custom Theme:** Added support for custom themes.
+ **Responsive Design:** Optimized for different screen sizes and devices.
+ **Material-UI Integration:** Extensive use of Material-UI components.
+ **Environment Variables:** Support for environment variables to manage configurations.
+ **Docker Containerization:** The application has been containerized using Docker.
+ **Backend Integration:** Integration with the backend is complete.

<br/>

<h2 id="next-release-features">🚧 Next Release Features</h2>

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
