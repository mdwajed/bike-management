# 🛠️ Bike Service Management API

A RESTful API for managing bike customers, bikes, and service records with full CRUD support, built using Node.js, Express, TypeScript, and Prisma ORM with PostgreSQL. It includes features like overdue service tracking and service status updates.

---

## 🌐 Live Backend

🔗 [https://bike-service-api.onrender.com](https://bike-service-api.onrender.com)  
(_Replace with your actual hosted backend URL_)

---

## 🧰 Tech Stack

- **Backend**: Node.js, Express.js
- **Language**: TypeScript
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Deployment**: Render / Railway
- **Utilities**: date-fns, UUID

---

## 🚀 Setup Guide

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/bike-service-api.git
cd bike-service-api
2. Install Dependencies
bash
Copy
Edit
npm install
3. Setup Environment Variables
Create a .env file in the root directory and add:


DATABASE_URL=postgresql://username:password@host:port/dbname
PORT=3000
4. Run Prisma Migrations

npx prisma generate
npx prisma migrate dev --name init
5. Start the Server

npm run dev
API will run on http://localhost:3000

✅ Key Features
Customer Management
Create, update, delete, and view customers.

Bike Management
Manage bikes linked to customers.

Service Records

Add service records with date, description, and status

Mark service as completed with completion date

View all or individual service records

Overdue Service Detection
Automatically fetch services that are pending or in-progress and are older than 7 days.

Standardized API Responses
Consistent structure for success, failure, and error messages.

📬 Example Endpoints
POST /api/customers – Create a customer

GET /api/bikes – List all bikes

POST /api/services – Add a service record

PUT /api/services/:id/complete – Mark service as completed

GET /api/services/status – Fetch overdue/pending services

📦 Folder Structure

/src
  └── app
      ├── modules
      │   ├── customer
      │   ├── bike
      │   └── services
      ├── middlewares
      └── shared
🧑‍💻 Author
Built by Abdul Wajed


```
