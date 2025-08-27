# 🌐 Personal Portfolio Webpage

This is a **personal portfolio/resume webpage** built with **HTML, CSS, and JavaScript**.  
It is designed as a clean, responsive one-page website to showcase **skills, certifications, and experience**, and includes interactive features such as a **Hire Me popup** and **Download CV** option.

🔗 **Live Demo**: [View on GitHub Pages](https://mujtabaalmas.github.io/page/)

---

## ✨ Features

- 🎨 **Modern Responsive Design** – works across desktop, tablet, and mobile.
- 📄 **Resume / CV Download** – one-click CV download button.
- 📬 **Hire Me Popup Form** – integrated with [EmailJS](https://www.emailjs.com/) to send emails directly from the frontend (serverless).
- 🏆 **Certifications Section** – showcase of earned certificates.
- 🔗 **Footer with Links** – social and external links included, responsive for all screen sizes.

---

## 📂 Project Structure

```
page/
│── index.html        # Main webpage
│── README.md         # Project documentation
│── assets/           # (optional) images, icons, CV, certificates
```

---

## 🚀 Deployment (GitHub Pages)

1. Fork or clone this repository:
   ```bash
   git clone https://github.com/mujtabaalmas/page.git
   ```
2. Push the code to a GitHub repo (if not already).
3. Go to **Repository Settings → Pages**.
4. Select branch: `main` → root → Save.
5. Your site will be live at:  
   ```
   https://<your-username>.github.io/page/
   ```

---

## ⚡ EmailJS Setup (Hire Me Form)

This project uses **EmailJS** to send emails without a backend.  

1. Create an account at [EmailJS](https://www.emailjs.com/).  
2. Get your:
   - `SERVICE_ID`
   - `TEMPLATE_ID`
   - `PUBLIC_KEY`
3. Replace them in the `index.html` script:

```javascript
emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
    from_name: name,
    from_email: email,
    message: message,
}, "YOUR_PUBLIC_KEY")
```

4. Done ✅ – the form will now send emails directly to your inbox.

---

## 📸 Screenshot

![Portfolio Screenshot](assets/screenshot.png)  
*(replace with actual screenshot of your live site)*

---

## 🛠️ Tech Stack

- **HTML5**
- **CSS3 (Flexbox & Media Queries)**
- **JavaScript (EmailJS API, DOM Manipulation)**

---

## 📜 License

This project is open-source and available under the [MIT License](LICENSE).

---

👨‍💻 Developed by [Mujtaba Almas](https://github.com/mujtabaalmas)
