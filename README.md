# 🛒 E-Commerce Backend API

A scalable **E-Commerce Backend REST API** built using **Java and Spring Boot**.  
This project provides APIs for managing **users, products, categories, carts, orders, and addresses** with **JWT-based authentication and role-based authorization**.

---

## 🚀 Features

### 🔐 Authentication & Security
- User Registration & Login
- JWT Authentication
- Role-Based Authorization
- Password encryption using Spring Security

### 🛍️ Product Management
- Create products
- Update products
- Delete products
- Fetch products with pagination

### 📂 Category Management
- Create categories
- Update categories
- Delete categories
- Fetch all categories

### 🛒 Cart Management
- Add product to cart
- Update cart item quantity
- Remove items from cart

### 📦 Order Management
- Place orders
- View order history

### 📍 Address Management
- Add address
- Update address
- Delete address
- Get addresses for a user

### 📄 API Documentation
- Swagger / OpenAPI integration

---

## 🛠️ Tech Stack

### Backend
- Java
- Spring Boot
- Spring Security
- Spring Data JPA
- Hibernate

### Database
- PostgreSQL

### Tools
- Maven
- Git & GitHub
- Postman
- Swagger (OpenAPI)

---

## 🏗️ System Architecture

```
Client (Postman / Frontend)
        |
        v
Controller Layer
        |
        v
Service Layer
        |
        v
Repository Layer
        |
        v
PostgreSQL Database
```

Security Flow

```
Client Request
      |
      v
JWT Token Validation
      |
      v
Spring Security Filter
      |
      v
Protected API Endpoints
```

---

## 📚 API Documentation

Swagger UI is available at:

```
http://localhost:8080/swagger-ui/index.html
```

Swagger allows you to:
- Explore all APIs
- Send requests
- View request and response schemas

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/yourusername/ecommerce-backend.git
```

### 2️⃣ Navigate to project folder

```bash
cd ecommerce-backend
```

### 3️⃣ Configure PostgreSQL

Update the `application.properties` file:

```
spring.datasource.url=jdbc:postgresql://localhost:5432/ecommerce
spring.datasource.username=postgres
spring.datasource.password=yourpassword
```

Application will start at:

```
http://localhost:8080
```

---

## 📂 Project Structure

```
src/main/java/com/ecommerce/project
│
├── config
├── controller
├── dto
├── entity
├── exception
├── repository
├── security
├── service
└── util
```

---

## 📬 Example API Endpoints

| Method | Endpoint | Description |
|------|------|------|
| POST | /api/auth/signup | Register user |
| POST | /api/auth/signin | Login user |
| GET | /api/products | Get all products |
| POST | /api/products | Create product |
| PUT | /api/products/{id} | Update product |
| DELETE | /api/products/{id} | Delete product |
| GET | /api/categories | Get all categories |

---

## 🧪 Testing

You can test APIs using:

- Swagger UI
- Postman

Example Authorization Header:

```
Authorization: Bearer <JWT_TOKEN>
```

---

## 🚀 Future Improvements

- Payment gateway integration
- Docker containerization
- Redis caching
- Microservices architecture
- CI/CD pipeline
- Cloud deployment (AWS)

---

## 👨‍💻 Author

**Lalith K**

GitHub: https://github.com/lalith2124

---

⭐ If you like this project, consider **starring the repository**.
