# alx-project-0x02-setup
Next.js Project Setup and Basics

The purpose of this project is to understand next.js setup that will be used for the airbnb project

Project Setup
To initialize the project, we use the following command:

npx create-next-app@latest airbnb-clone --typescript --eslint --tailwind
Choose the following options: - src directory: No
                             - App Router: No 
                             - Customize the default import alias: Yes (use @/* for simpler imports)

This command scaffolds a Next.js project with TypeScript, ESLint, and Tailwind CSS, creating a solid foundation for our Airbnb clone.

TASK 1:
Objective: Scaffold a Next.js project with TypeScript and Tailwind CSS.
Scaffold a Next.js project using npx create-next-app@latest with the name alx-project-2.
Enable TypeScript, ESLint, and Tailwind CSS.
Create the following folder structure:
/components/layout/Header.tsx
/interfaces/index.ts
/public/assets/images
Add basic content to pages/index.tsx to display a welcome message.
Run the application using npm run dev and verify it works on http://localhost:3000.