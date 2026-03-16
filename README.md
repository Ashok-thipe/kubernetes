# Microservices Deployment on Kubernetes

## Overview

This project demonstrates microservices deployment using **Kubernetes**.

The repository contains two services:

- A **backend API** built with **Flask (Python)**
- A **frontend web application** built with **Express.js (Node.js)**

These services communicate with each other and are deployed as separate components in a Kubernetes environment.

---

# Repository Structure

```
.
├── backend/
│   └── Flask backend service
│
├── frontend/
│   └── Express frontend service
│
├── k8s/
│   └── Kubernetes deployment and service configuration files
│
├── snapshots/
│   └── Screenshots of successful deployment and output
│
├── command.txt
│   └── Commands used for deployment and testing
│
└── README.md
```

---

# Backend Service

The **backend** folder contains a REST API built using **Flask** running on **Python**.

### Functionality

The backend service exposes an API endpoint that:

- Receives user data (**name and email**) from the frontend service
- Processes the request
- Returns a **JSON response** confirming that the data has been received

This service acts as the **data processing layer** in the microservices architecture.

---

# Frontend Service

The **frontend** folder contains a web application built using **Express.js** running on **Node.js**.

### Functionality

The frontend service:

- Displays a **web form** where users can enter their **name and email**
- Sends the submitted data to the backend API
- Displays the response returned by the backend

Communication between services is handled using HTTP requests.

---

# System Architecture

```
User Browser
     │
     ▼
Express Frontend (Port 3000)
     │
     ▼
Flask Backend API (Port 5000)
```

The frontend sends user data to the backend service, which processes the request and returns a response.

---

# Technologies Used

## Backend
- Python
- Flask

## Frontend
- JavaScript
- Node.js
- Express.js
- Axios
- EJS
- body-parser

## Data Format
- JSON

## Deployment
- Docker
- Kubernetes

---

# Kubernetes Deployment

This repository includes all the necessary configuration files required to deploy the application on **Kubernetes**.

The configuration includes:

- Deployment files for frontend and backend services
- Service definitions for internal communication
- Container configuration for running the applications

---

# Screenshots

The **snapshots/** folder contains screenshots demonstrating:

- Successful Kubernetes deployment
- Running pods
- Service exposure
- Application output

---

# Commands

The **command.txt** file contains all commands used during:

- Application build
- Kubernetes deployment
- Service verification
- Testing the application

This can be used as a reference to reproduce the deployment steps.

---

# Summary

This project demonstrates a **simple microservices architecture** where:

- A **frontend service** collects user input
- A **backend service** processes the request
- Both services are deployed and managed using **Kubernetes**

The project highlights how containerized services communicate within a Kubernetes environment.
