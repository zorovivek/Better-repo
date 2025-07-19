# blogging-website

A full-stack blogging platform built with React, TypeScript, Node.js, and Prisma. It allows users to write, publish, and read blog posts with features like a rich text editor, authentication, author profiles, and a responsive UI. Built for learning and deployment.

[![View Live Site](https://img.shields.io/badge/Live%20Site-Visit-blue?style=for-the-badge&logo=vercel)](https://bit.ly/habibashraf)

## 🌐 Deployed at
**🔗 [bit.ly/habibashraf](https://bit.ly/habibashraf)**

> Hosted on Vercel · Fully responsive · User-authenticated blog platform

---

## 🚀 Technologies Used

- **Frontend**: React, TypeScript, Tailwind CSS
- **Backend**: Node.js, Express
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: JWT / session-based auth
- **Deployment**: Vercel

---

## ✨ Features

- 📝 Rich Text Blog Editor  
- 🔒 User Authentication & Authorization  
- 👤 Author Profiles & Avatars  
- 📱 Mobile-Responsive UI  
- 🔍 Blog Listing & Detail View  
- 🚀 Fast Deployment & Clean Code Structure

---

## 📸 Screenshots

> Add your screenshots in a `/public/screenshots/` folder and link below:

| Homepage | Editor | Blog View |
|---------|--------|-----------|
| ![](./public/screenshots/home.png) | ![](./public/screenshots/editor.png) | ![](./public/screenshots/blog.png) |

---

## 📁 Project Setup

```bash
# Install dependencies
pnpm install

# Setup Prisma
pnpm prisma generate
pnpm prisma migrate dev --name init

# Run dev server
pnpm dev
