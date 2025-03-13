# RM Event

A high-performance, multi-language landing page built with **Next.js** and **Payload CMS**.
The project is designed to be **lightweight, flexible and scalable**, with a headless CMS for content management and MongoDB as the database.

## 🤺 Client Requirements

### **Functional Requirements**  
- Support multiple languages  
- Include a CMS for landing page and blog management  
- Provide multi-role access (Admin, Editors, Translators, Marketing)  
- Expandable with an integrated calendar for future bookings  

### **Non-Functional Requirements**  
- Load under **1.5s** on modern devices, good network conditions, for clients located in eastern and central europe.
- Initial download under **1MB** (rest lazy-loaded)  
- Implement **best-practice SEO optimizations**  
- Run on a **VPS with 1 vCore, 2GB RAM**  

For these quite strict performance requirements I decided not to use **WordPress** and go with a flexible and expandable combo:
- **Next.js** → Server-side rendering (SSR) for speed & SEO  
- **Payload CMS** → Headless, customizable, and scalable  
- **MongoDB** → NoSQL database for flexibility  
- **PM2** → Process management for running Node.js on a VPS  

This setup allows for **easy expansion**, whether adding new content types or integrating future features like bookings.  


## 🛠️ Getting Started  


### Prerequisites  
Ensure you have the following installed:  
- **Node.js (>= 18.0.0)**  
- **npm**
- **MongoDB (local or remote instance)**  

### Installation  

1. Clone the repository:  
   ```sh
   git clone https://github.com/yourusername/rm-event.git
   cd rm-event
   ```  
2. Install dependencies:  
   ```sh
   npm install
   ```  
3. Start the development server:  
   ```sh
   npm run dev
   ```  
4. Open [http://localhost:3000](http://localhost:3000) in your browser.  

## 🚀 Deployment & CI/CD  

This project uses **GitHub Actions** for automatic deployment on a VPS via a self-hosted runner.  

### **Deployment Setup**  
- The application runs via **PM2** for process monitoring.  
- GitHub Actions triggers deployment when changes are pushed to `main`.  
- Server pulls the latest changes, installs dependencies, and restarts the app using PM2.  

To manually start the PM2 process on the server:  
```sh
pm2 start npm --name "rm-event" -- run start
pm2 save
pm2 startup
```  

