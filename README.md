## Technologies Used

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

> Add your screenshots in a `/public/screenshots/` folder and update the paths below:

| Homepage | Editor | Blog View |
|----------|--------|-----------|
| ![](./public/screenshots/home.png) | ![](./public/screenshots/editor.png) | ![](./public/screenshots/blog.png) |

---

## 📁 Project Setup (with `npm`)

```bash
# Install dependencies
npm install

# Generate Prisma client
npx prisma generate

# Apply DB migrations
npx prisma migrate dev --name init

# Run development server
npm run dev
