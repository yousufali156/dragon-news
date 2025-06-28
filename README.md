
# 📰 Dragon News – A Modern Live News Portal

**Dragon News** is a fully responsive and dynamic newspaper web application built using **React.js**. This platform allows users to explore categorized news articles with an intuitive UI, Firebase authentication, and smooth navigation. It’s perfect for anyone building a modern digital news experience.


**Live Site** 👉 [https://dragon-news-y.netlify.app](https://dragon-news-y.netlify.app)

---

## 🌟 Features

- 📚 **Category-Based Navigation**  
  Browse through 29+ news categories like Breaking News, Business, Technology, Health, and more.

- 🧱 **Component-Based React App**  
  Built with reusable components and **React Router** for seamless single-page navigation.

- 🔐 **Firebase Authentication**  
  - Google Login  
  - GitHub Login  
  - Facebook Login

- 🎨 **Modern UI/UX**  
  - Fully responsive design (mobile, tablet, desktop)  
  - Smooth layout using **Tailwind CSS** or **DaisyUI**  
  - Bangla news headlines supported

- 🧩 **Right Sidebar**  
  - Social media quick links (LinkedIn, Facebook, X, Instagram, GitHub, YouTube)  
  - "Quiz Zone" with engaging image-based learning cards

- 📰 **News Feed Cards**  
  Each news card includes:
  - Thumbnail
  - Headline
  - Summary
  - “Read More” link

- 🕒 **Live Time Display**  
  Displays the current day, date, and time in the header bar.

---

## 📸 Preview

![Dragon News Preview](https://i.ibb.co/JFsPHD0L/dragon-news.jpg) 

---

## 🚀 Features

- 🔐 **Firebase Authentication** (Login / Signup)
- 📰 **News Categories** with filtering
- 🎨 **Tailwind CSS** & **DaisyUI** for stunning UI
- ⏩ **Breaking News Marquee** using `react-fast-marquee`
- 📆 **Formatted Dates** via `date-fns`
- 🛣️ **React Router** for smooth client-side routing
- 🔁 **Reusable Components** for clean modular code
- 🌙 **Dark Mode Support** with DaisyUI

---

## 🛠️ Tech Stack

| Tech              | Version     |
|-------------------|-------------|
| React             | ^19.0.0     |
| Tailwind CSS      | ^4.1.4      |
| DaisyUI           | ^5.0.30     |
| Firebase          | ^11.6.1     |
| React Router      | ^7.5.3      |
| Date-fns          | ^4.1.0      |
| React Icons       | ^5.5.0      |
| React Fast Marquee| ^1.6.5      |

---
<br/>
## 📁 Project Structure
dragon-news/
├── public/     # Static public files<br/>
├── src/     # Main source folder<br/>
    ├── assets/     # Static images and logos<br/>
    ├── components/     # Reusable UI components<br/>
    ├── pages/     # Route-level components (Home, Login, News, etc.)<br/>
    ├── routes/     # Private and public routes<br/>
    ├── hooks/     # Custom React hooks<br/>
    ├── contexts/     # Context Providers (Auth, Theme)<br/>
    ├── App.jsx     # Main app component<br/>
    ├── main.jsx     # React root rendering<br/>
    └── index.css     # Global styles<br/>
├── .env.local     # Environment variables for Firebase<br/>
└── tailwind.config.js     # Tailwind CSS configuration<br/>


---
<br/>

## 🛠️ Getting Started

Follow the steps below to set up and run the project locally:

### 🧩 1. Clone the Repository

```bash
git clone https://github.com/yousufali156/dragon-news.git
cd dragon-news

```

📦 2. Install Dependencies

```bash
npm install

```
🔧 3. Run the Development Server

```bash
npm run dev
```


🏗️ 4. Build for Production

```bash
npm run build
```


<br/>




### 🔐 Netlify Setup

To deploy this project on [Netlify](https://www.netlify.com/), follow these steps:

1. **Push your project to GitHub**
   Make sure your latest code is committed and pushed to a GitHub repository.

2. **Login to Netlify**
   Go to [Netlify](https://www.netlify.com/) and log in using your GitHub account.

3. **Create a new site**
   - Click on **“Add new site”** > **“Import an existing project”**
   - Choose **GitHub** and authorize access if prompted
   - Select your **repository**

4. **Configure the build settings**
   - **Build command:** `npm run build`
   - **Publish directory:** `dist` (if you're using Vite) or `build` (if using CRA)

5. **Set Environment Variables (if needed)**
   Go to "Site Settings" > "Environment Variables" and add:
   
   - VITE_API_KEY=your_api_key`
   - `VITE_FIREBASE_AUTH=...` *(based on your project config)*
  

6. **Deploy**
   Click **“Deploy site”** — Netlify will handle the rest 🚀

---

### 💡 Contribution

Contributions are welcome!  
Feel free to fork this repo and submit a pull request.  
If you have any suggestions or find bugs, please open an issue — your feedback is appreciated!

---

## 📄 License

This project is licensed under the [MIT License](https://choosealicense.com/licenses/mit/).  
You're free to use, modify, and distribute it as long as you include proper attribution.

---

### 🙌 Acknowledgements

This project was made possible thanks to the following open-source technologies:

- [React](https://reactjs.org) – A JavaScript library for building user interfaces.
- [Tailwind CSS](https://tailwindcss.com) – A utility-first CSS framework for rapid UI development.
- [DaisyUI](https://daisyui.com) – Tailwind CSS Components library.
- [Firebase](https://firebase.google.com) – Backend-as-a-Service (BaaS) for authentication, database, and more.
- [React Router](https://reactrouter.com) – Declarative routing for React.
- [React Fast Marquee](https://www.npmjs.com/package/react-fast-marquee) – A React component for fast, customizable marquees.
- [Date-fns](https://date-fns.org) – Modern JavaScript date utility library.


### 💰 Support Me

<p align="center">
  <a href="https://buymeacoffee.com/yousufali156" target="_blank">
    <img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" height="60" width="217" />
  </a>
</p>

<p align="center">
  <strong>If you like my work, consider buying me a coffee ☕ to support my projects!</strong>
</p>

