# REST API

## 1. What is a REST API?

**REST** (Representational State Transfer) is an architectural style for designing networked applications.
A **REST API** allows communication between client and server over **HTTP** using standard methods.

* Uses **stateless communication**
* Typically exchanges data in **JSON**
* Built around **resources** (nouns, not verbs)

---

## 2. REST Principles (Constraints)

### 1. Stateless

* Each request contains all required information.
* Server does not store client session state.

### 2. Client–Server Architecture

* Client handles UI.
* Server handles data & business logic.

### 3. Uniform Interface

* Consistent URL structure.
* Standard HTTP methods.
* Predictable responses.

### 4. Cacheable

* Responses define if they can be cached.

### 5. Layered System

* Client doesn’t know if it’s connected directly to server or intermediary.

---

## 3. HTTP Methods in REST

| Method | Purpose                 | Example           |
| ------ | ----------------------- | ----------------- |
| GET    | Retrieve data           | Get all users     |
| POST   | Create resource         | Add new user      |
| PUT    | Update entire resource  | Update user       |
| PATCH  | Update partial resource | Update email only |
| DELETE | Remove resource         | Delete user       |

Example:

```
GET /users
POST /users
GET /users/10
PUT /users/10
DELETE /users/10
```

---

## 4. Resource Naming Best Practices

✔ Use **nouns**, not verbs
✔ Use plural names
✔ Use lowercase
✔ Use hyphens for readability

Good:

```
/users
/orders
/product-categories
```

Bad:

```
/getUsers
/createOrder
/deleteProduct
```

---

## 5. HTTP Status Codes

### 2xx – Success

* 200 OK
* 201 Created
* 204 No Content

### 4xx – Client Errors

* 400 Bad Request
* 401 Unauthorized
* 403 Forbidden
* 404 Not Found

### 5xx – Server Errors

* 500 Internal Server Error
* 503 Service Unavailable

---

## 6. Request Structure

### Headers

* Content-Type
* Authorization
* Accept

### Body (for POST/PUT/PATCH)

Example JSON:

```json
{
  "name": "John Doe",
  "email": "john@example.com"
}
```

---

## 7. Response Structure

Example:

```json
{
  "id": 101,
  "name": "John Doe",
  "email": "john@example.com",
  "createdAt": "2026-02-21T10:00:00Z"
}
```

---

## 8. Authentication Methods

* API Keys
* Basic Auth
* Bearer Token
* JWT (JSON Web Token)
* OAuth 2.0

Example header:

```
Authorization: Bearer <token>
```

---

## 9. Versioning REST APIs

Common approaches:

* URL Versioning

  ```
  /api/v1/users
  ```

* Header Versioning

  ```
  Accept: application/vnd.company.v1+json
  ```

---

## 10. Idempotency

An operation is **idempotent** if making the same request multiple times produces the same result.

* GET → Idempotent
* PUT → Idempotent
* DELETE → Idempotent
* POST → Not idempotent

---

## 11. Filtering, Sorting & Pagination

### Filtering

```
/users?role=admin
```

### Sorting

```
/users?sort=name
```

### Pagination

```
/users?page=2&limit=10
```

---

## 12. REST vs SOAP

| REST          | SOAP     |
| ------------- | -------- |
| Lightweight   | Heavy    |
| Uses JSON     | Uses XML |
| Faster        | Slower   |
| Easier to use | Complex  |

---

## 13. Best Practices

* Use HTTPS
* Use proper status codes
* Validate inputs
* Handle errors properly
* Use consistent naming
* Document API (Swagger / OpenAPI)
* Implement rate limiting

---

## 14. Example REST Flow

1. Client sends `POST /users`
2. Server validates data
3. Server saves user in database
4. Server returns `201 Created` with JSON response

---
