# FixHut 🛠️

**Selected Service Category:** Home Repair Services 🔧

**Live Site:** [https://fixhut2.netlify.app](https://fixhut2.netlify.app) 🌐

---

## Project Overview 📋

FixHut is a service-sharing web application designed to allow users to add, update, and delete their own services, browse services shared by others, book services, and manage the status of booked services. The platform focuses on a user-friendly experience with features for service management, booking, and real-time status updates.

---
## Features ✨

- **User Authentication** 🔐: Email/password login and Google social login with JWT token-based authentication for secure access.
- **Service Management** 🛎️: Users can add new services, update existing ones, and delete their own services.
- **Booking System** 📅: Users can book services offered by others with detailed booking forms.
- **Status Management** ⚙️: Service providers can update the status of booked services (pending, working, completed).
- **Responsive Design** 📱💻: Fully responsive UI supporting mobile, tablet, and desktop views.
- **Dynamic Navbar** 🌐: Shows different menu items based on user login status.
- **Search System** 🔍: Search services by name on all service pages, instantly filtering matching results.
- **Theme Toggle** 🌙☀️: Light and dark mode toggling across the entire application.
- **Animations** 🎞️: Engaging animations on landing pages using framer-motion and AOS.
- **JWT-secured Private Routes** 🛡️: Ensures only authenticated users access sensitive pages.
- **Error Handling** 🚫: Custom 404 error page with navigation back to home.
- **Social Media Integration** 📱: Footer includes Facebook and LinkedIn links.

---

## Technology Stack 🛠️

- React 19 ⚛️
- Firebase Authentication 🔥
- JWT for authorization 🛡️
- Tailwind CSS with DaisyUI 🎨
- React Router v7 🧭
- Axios ⚡
- Framer Motion & AOS for animations 🎞️
- React Toastify for notifications 🔔
- SweetAlert2 for confirmation dialogs ✅
- Node.js + Express (Server-side) 🚀
- MongoDB (Database) 🍃

---

## Project Structure 🏗️

- **Public Routes** 🌍: Home, All Services, Login, Registration
- **Private Routes** 🔒: Add Service, Manage Services, Booked Services, Service To Do, Single Service Details, Edit Service Page, Booking Service Page
- **Error Route** ⚠️: Custom 404 Page

---


## Run Locally

Clone the project

```bash
git clone https://github.com/JanayedHossain/fixhut.git

```