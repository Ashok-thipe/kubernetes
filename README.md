# Kubernetes Deployment Assignment

**Flask Frontend + Express Backend using Minikube**

## Project Overview

This project demonstrates deploying a simple microservices application on a local Kubernetes cluster using **Minikube**. The application consists of two services:

* **Frontend:** Node.js Express application
* **Backend:** Python Flask API

Both services are containerized with Docker and deployed to Kubernetes using **Deployments** and **Services**.

---

## System Requirements

Minimum system requirements to run this project:

* OS: Ubuntu 22.04 / Linux
* CPU: 2 vCPUs (4 recommended)
* RAM: 4 GB (8 GB recommended)
* Storage: 20 GB free space

Tools used:

* Docker
* Minikube
* kubectl
* Git

---

## Project Structure

```
flask-node-docker-app
│
├── backend
│   ├── app.py
│   ├── requirements.txt
│   └── Dockerfile
│
├── frontend
│   ├── server.js
│   ├── package.json
│   └── Dockerfile
│
├── backend-deployment.yaml
├── backend-service.yaml
├── frontend-deployment.yaml
├── frontend-service.yaml
│
└── README.md
```

---

## Steps to Deploy

### 1. Start Minikube

```
minikube start --driver=docker
```

### 2. Use Minikube Docker Environment

```
eval $(minikube docker-env)
```

### 3. Build Docker Images

```
docker build -t express-backend ./backend
docker build -t flask-frontend ./frontend
```

### 4. Deploy Backend

```
kubectl apply -f backend-deployment.yaml
kubectl apply -f backend-service.yaml
```

### 5. Deploy Frontend

```
kubectl apply -f frontend-deployment.yaml
kubectl apply -f frontend-service.yaml
```

---

## Verify Deployment

Check running pods:

```
kubectl get pods
```

Check services:

```
kubectl get svc
```

---

## Access the Application

Get the service URL:

```
minikube service flask-frontend-service --url
```

Open the URL in a browser to access the frontend application.

---

## Kubernetes Architecture

```
Browser
   │
NodePort Service
   │
Frontend Pod (Express)
   │
ClusterIP Service
   │
Backend Pod (Flask)
```

---

## Screenshots

Included screenshots of:

* Minikube cluster running
* Pods running (`kubectl get pods`)
* Services (`kubectl get svc`)
* Running application in browser

---

## Conclusion

This project demonstrates how to deploy containerized microservices using Kubernetes on a local Minikube cluster. It covers containerization, Kubernetes deployments, service exposure, and internal service communication.
