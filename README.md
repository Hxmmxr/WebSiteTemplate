# 🌐 Web Template Gallery

A sleek, GitHub Pages–powered website that showcases downloadable, open-source HTML/CSS templates. Perfect for web devs, freelancers, or educators who want to share clean, ready-to-use layouts with the community.

> 🚀 Live Demo: [https://yourusername.github.io/web-templates-site/](https://yourusername.github.io/web-templates-site/)

---

## 📁 Project Structure

# WebSiteTemplate

web-templates-site/
├── index.html # Main landing page
├── style.css # Styling for site layout and cards
├── script.js # JS to dynamically load templates from JSON
├── data/
│ └── templates.json # Metadata for each template (preview, download links, etc.)
├── downloads/
│ └── *.zip # Zipped versions of templates for download
└── templates/
└── [template-name]/ # Individual template folders with HTML/CSS and screenshots

yaml

---

## 📦 Features

- 📄 **Live Previews** – View templates instantly from the browser  
- 📥 **One-Click Downloads** – Get a ZIP of the full template  
- 🧩 **Modular JSON Structure** – Easily add more templates by editing `templates.json`  
- 🧪 **Offline Support** – Works entirely client-side (no server or database needed)  
- 🚀 **GitHub Pages Ready** – Fully static, deployable to GitHub Pages or any static host  

---

## 🔧 How to Use

### 🛠️ Local Development

You need a simple web server to test `fetch()` locally:

#### Option 1: Python (any OS)
```bash
cd web-templates-site
python -m http.server 8080
Visit: http://localhost:8080

Option 2: Node.js
bash
Copy
Edit
npx serve .
🧱 Add a New Template
Create a folder in templates/your-template-name/

Add index.html, style.css, and a screenshot.png

ZIP the folder and place it in downloads/

---------------------------------------------------------------

Add an entry to data/templates.json like:

json

{
  "name": "Your Template Name",
  "folder": "your-template-name",
  "image": "templates/your-template-name/screenshot.png",
  "description": "One-line description of your layout.",
  "download": "downloads/your-template-name.zip",
  "preview": "templates/your-template-name/index.html"
}

----------------------------------------------------------------

🚀 Deploy to GitHub Pages
Push the repo to GitHub

Go to Settings > Pages

Set:

Source: main

Folder: / (root)

Visit: https://yourusername.github.io/your-repo-name/

🧠 Ideas for Expansion
Add search or filtering (by tags or categories)

Include GitHub repo links per template

Auto-generate thumbnails using Puppeteer

Add analytics (e.g., Plausible or GoatCounter)

🧑‍💻 Created by
DJ The PC Dude
Seattle-based PC tech and web dev
🔗 djthepcdude.com

📄 License
MIT License — Free to use, remix, and distribute.
