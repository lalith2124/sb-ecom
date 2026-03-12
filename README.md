<div align="center">

# 🛒 sb-ecom — E-Commerce Backend API

**A production-ready RESTful E-Commerce Backend built with Java & Spring Boot**

[![Java](https://img.shields.io/badge/Java-17+-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white)](https://www.oracle.com/java/)
[![Spring Boot](https://img.shields.io/badge/Spring_Boot-3.x-6DB33F?style=for-the-badge&logo=springboot&logoColor=white)](https://spring.io/projects/spring-boot)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-336791?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![JWT](https://img.shields.io/badge/JWT-Auth-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)](https://jwt.io/)
[![Swagger](https://img.shields.io/badge/Swagger-OpenAPI-85EA2D?style=for-the-badge&logo=swagger&logoColor=black)](https://swagger.io/)
[![Maven](https://img.shields.io/badge/Maven-Build-C71A36?style=for-the-badge&logo=apachemaven&logoColor=white)](https://maven.apache.org/)

[Features](#-features) • [Tech Stack](#-tech-stack) • [Architecture](#-system-architecture) • [API Docs](#-api-endpoints) • [Setup](#%EF%B8%8F-getting-started) • [Author](#-author)

</div>

---

## 📌 Overview

**sb-ecom** is a fully functional, scalable E-Commerce REST API built with **Java 17** and **Spring Boot 3**. It implements enterprise-grade design patterns across product management, user authentication, shopping cart, order processing, and address management — all secured with **JWT-based authentication** and **role-based access control**.

This project is designed with clean layered architecture, making it production-ready and straightforward to extend with features like payment gateways, microservices, or cloud deployment.

---

## ✨ Features

### 🔐 Authentication & Security
- User **Registration** and **Login** with encrypted passwords
- **JWT (JSON Web Token)** based stateless authentication
- **Role-Based Access Control** (Admin / User roles)
- Password hashing using **BCrypt** via Spring Security

### 🛍️ Product Management
- Full **CRUD** operations on products
- **Pagination & Sorting** support for product listings
- Image upload support per product
- Associate products with categories

### 📂 Category Management
- Create, update, delete, and fetch categories
- Hierarchical product-to-category associations

### 🛒 Cart Management
- Add products to cart
- Update item quantities dynamically
- Remove individual items from cart
- Cart is persisted per authenticated user

### 📦 Order Management
- Place orders directly from cart
- Full order history per user
- Order status tracking

### 📍 Address Management
- Add, update, and delete delivery addresses
- Retrieve all saved addresses for a user
- Link addresses to orders at checkout

### 📄 API Documentation
- Fully interactive **Swagger UI** (OpenAPI 3.0)
- All endpoints documented with request/response schemas

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| **Language** | Java 17 |
| **Framework** | Spring Boot 3.x |
| **Security** | Spring Security + JWT |
| **ORM** | Spring Data JPA + Hibernate |
| **Database** | PostgreSQL |
| **Build Tool** | Maven |
| **API Docs** | Swagger / OpenAPI 3.0 |
| **Testing** | Postman |
| **Version Control** | Git & GitHub |

---

## 🏗️ System Architecture

```
Client (Browser / Postman / Mobile App)
             │
             ▼
     ┌──────────────┐
     │  JWT Filter  │  ◄── Validates token on every request
     └──────┬───────┘
            │
            ▼
     ┌──────────────────┐
     │ Controller Layer │  ◄── Handles HTTP requests & responses
     └──────┬───────────┘
            │
            ▼
     ┌──────────────────┐
     │  Service Layer   │  ◄── Business logic & validations
     └──────┬───────────┘
            │
            ▼
     ┌────────────────────┐
     │  Repository Layer  │  ◄── Spring Data JPA interfaces
     └──────┬─────────────┘
            │
            ▼
     ┌──────────────┐
     │  PostgreSQL  │  ◄── Persistent data storage
     └──────────────┘
```

### Security Flow

```
Incoming Request
       │
       ▼
JWT Token Present?
   ├── NO  ──► 401 Unauthorized
   └── YES ──► Validate Token
                    │
                    ▼
             Token Valid?
          ├── NO  ──► 403 Forbidden
          └── YES ──► Load User + Roles
                           │
                           ▼
                  Authorize by Role
                  (ADMIN / USER)
                           │
                           ▼
                  ✅ Access Granted
```

---

## 📂 Project Structure

```
src/main/java/com/ecommerce/project/
│
├── 📁 config/          # Spring Security & app configuration
├── 📁 controller/      # REST controllers (entry points)
├── 📁 dto/             # Data Transfer Objects (request/response models)
├── 📁 entity/          # JPA entity classes (database models)
├── 📁 exception/       # Global exception handling & custom exceptions
├── 📁 repository/      # Spring Data JPA repository interfaces
├── 📁 security/        # JWT utility, filters, UserDetailsService
├── 📁 service/         # Business logic & service interfaces
└── 📁 util/            # Helper/utility classes
```

---

## 📬 API Endpoints

### 🔐 Authentication

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| `POST` | `/api/auth/signup` | Register a new user | ❌ Public |
| `POST` | `/api/auth/signin` | Login and receive JWT token | ❌ Public |

### 🛍️ Products

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| `GET` | `/api/products` | Get all products (paginated) | ❌ Public |
| `GET` | `/api/products/{id}` | Get product by ID | ❌ Public |
| `POST` | `/api/products` | Create a new product | ✅ Admin |
| `PUT` | `/api/products/{id}` | Update a product | ✅ Admin |
| `DELETE` | `/api/products/{id}` | Delete a product | ✅ Admin |

### 📂 Categories

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| `GET` | `/api/categories` | Get all categories | ❌ Public |
| `POST` | `/api/categories` | Create a category | ✅ Admin |
| `PUT` | `/api/categories/{id}` | Update a category | ✅ Admin |
| `DELETE` | `/api/categories/{id}` | Delete a category | ✅ Admin |

### 🛒 Cart

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| `GET` | `/api/cart` | View cart | ✅ User |
| `POST` | `/api/cart/products/{productId}/quantity/{qty}` | Add product to cart | ✅ User |
| `PUT` | `/api/cart/products/{productId}/quantity/{operation}` | Update cart item | ✅ User |
| `DELETE` | `/api/cart/{cartId}/product/{productId}` | Remove item from cart | ✅ User |

### 📦 Orders

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| `POST` | `/api/order/users/{email}/payments/{paymentMethod}` | Place an order | ✅ User |
| `GET` | `/api/orders` | Get all orders | ✅ Admin |
| `GET` | `/api/orders/user` | Get logged-in user's orders | ✅ User |

### 📍 Addresses

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| `GET` | `/api/addresses` | Get all addresses | ✅ User |
| `POST` | `/api/addresses` | Add a new address | ✅ User |
| `PUT` | `/api/addresses/{id}` | Update an address | ✅ User |
| `DELETE` | `/api/addresses/{id}` | Delete an address | ✅ User |

> 📝 **Authorization Header format:**
> ```
> Authorization: Bearer <YOUR_JWT_TOKEN>
> ```

---

## ⚙️ Getting Started

### Prerequisites

- Java 17+
- Maven 3.8+
- PostgreSQL 14+

### 1. Clone the Repository

```bash
git clone https://github.com/lalith2124/sb-ecom.git
cd sb-ecom
```

### 2. Configure the Database

Create a PostgreSQL database:

```sql
CREATE DATABASE ecommerce;
```

Update `src/main/resources/application.properties`:

```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/ecommerce
spring.datasource.username=your_postgres_username
spring.datasource.password=your_postgres_password

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true

app.jwtSecret=your_jwt_secret_key
app.jwtExpirationMs=86400000
```

### 3. Build & Run

```bash
./mvnw spring-boot:run
```

The server will start at: **`http://localhost:8080`**

### 4. Explore the API

Open Swagger UI in your browser:

```
http://localhost:8080/swagger-ui/index.html
```

---

## 🧪 Testing the API

You can test all endpoints using:

- **Swagger UI** — interactive browser-based testing at `/swagger-ui/index.html`
- **Postman** — import endpoints and test with JWT token in headers

**Quick Test Flow:**
1. `POST /api/auth/signup` → Register a user
2. `POST /api/auth/signin` → Get JWT token
3. Copy token → Add to `Authorization: Bearer <token>` header
4. Start shopping! 🛒

---

## 🚀 Roadmap

- [ ] 💳 Payment gateway integration (Stripe / Razorpay)
- [ ] 🐳 Docker & Docker Compose containerization
- [ ] ⚡ Redis caching for product listings
- [ ] 🧪 Unit & Integration testing (JUnit 5 + Mockito)
- [ ] ☁️ Cloud deployment on AWS (EC2 / RDS / S3)
- [ ] 🔄 CI/CD pipeline via GitHub Actions
- [ ] 🏗️ Microservices migration
- [ ] 📧 Email notifications for order updates

---

## 👨‍💻 Author

**Lalith K**

[![GitHub](https://img.shields.io/badge/GitHub-lalith2124-181717?style=flat-square&logo=github)](https://github.com/lalith2124)

---

<div align="center">

⭐ **If you found this project useful, please consider giving it a star!** ⭐

</div>
