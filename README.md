This project is for microservices deployment in k8s. 

The repo contains backend folder, this project is a backend API built using Flask running on Python.
The service exposes a REST API endpoint that receives user information (name and email) from a frontend service and returns a JSON response confirming the data was received.
This backend is designed to work with an Express frontend service, forming a simple microservices-style architecture. 

Next is frontend folder, which is a frontend web service built using Express.js running on Node.js.
It provides a web form where users can enter their name and email. When the form is submitted, the service sends the data to a backend API implemented in Flask.

User Browser
     │
     ▼
Express Frontend (Port 3000)
     │
     ▼
Flask Backend API (Port 5000)

Technologies Used

JavaScript

Node.js

Express.js

Axios

EJS

body-parser

Python

Flask

JSON for data exchange

Also Contains:

All the necessary configuration files for application deployment in K8s.
Screenshots of output for deployment can be viewed in snapshots folder.
command.txt file has all the necessary commands.
