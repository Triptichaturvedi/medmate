# 🏥 HealthMate - Healthcare Management Platform

A professional React-based healthcare management web application with a modern, responsive design.

## ✨ Features

- **7 Complete Pages** - Home, Pharmacy, About, Contact, Login, Register, Appointments
- **Professional Logo** - Custom SVG healthcare icon
- **Responsive Design** - Mobile, Tablet, Desktop
- **Modern UI** - Blue (#0b74b8) & Cyan (#00d4ff) theme
- **Search Functionality** - Filter medicines in pharmacy
- **Contact Form** - With validation & feedback
- **High-Quality Images** - From Unsplash

## 🚀 Quick Start

### Install & Run
```bash
cd frontend
npm install
npm start
```

**Access at**: http://localhost:3000

### Build for Production
```bash
npm run build
```

## 📱 Pages & Routes

| Page | Route | Status |
|------|-------|--------|
| Home | `/` | ✅ Complete |
| Pharmacy | `/pharmacy` | ✅ Complete |
| About | `/about` | ✅ Complete |
| Contact | `/contact` | ✅ Complete |
| Login | `/login` | ✅ Ready |
| Register | `/register` | ✅ Ready |
| Appointments | `/appointment` | ✅ Ready |

## 🎨 Design System

**Colors:**
- Primary Blue: `#0b74b8`
- Accent Cyan: `#00d4ff`
- Dark Blue: `#0a3d5c`

**Responsive Breakpoints:**
- Mobile: ≤768px
- Tablet: 768-1024px
- Desktop: >1024px

## 📁 Project Structure

```
frontend/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.js (SVG Logo)
│   │   └── Navbar.css
│   ├── pages/
│   │   ├── Home.js + home.css
│   │   ├── Pharmacy.js + pharmacy.css
│   │   ├── About.js + about.css
│   │   ├── Contact.js + contact.css
│   │   ├── Login.js + login.css
│   │   ├── Register.js + register.css
│   │   └── Appointment.js + appointment.css
│   ├── App.js (Routing)
│   ├── App.css
│   └── index.js
└── package.json
```

## 🔧 Technologies

- React 18
- React Router v6
- CSS3 (Flexbox, Grid, Gradients)
- SVG Icons

## 📝 Features

### **Home Page**
- Hero section with CTA buttons
- Service showcase (3 cards)
- About section with image
- Call-to-action section

### **Pharmacy Module**
- 8 products with pricing
- Search filter by name
- Product cards with images
- Add to cart buttons

### **About Page**
- Company mission
- 4 core values cards
- Features list
- Team imagery

### **Contact Page**
- Contact form with validation
- Contact information
- Contact icons
- Success message

### **Navigation**
- Sticky navbar
- Custom SVG logo
- Professional animations
- Mobile-friendly

## 💡 Customization

**Change Colors**: Update color values in CSS files
**Add Products**: Edit medicines array in Pharmacy.js
**Update Images**: Replace Unsplash URLs with your images
**Modify Text**: Edit content directly in components

## 📦 Dependencies

```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-router-dom": "^6.x.x"
}
```

## 🌟 Highlights

✅ Clean, modular code
✅ Professional design
✅ Fully responsive
✅ No external UI libraries
✅ Production-ready
✅ Easy to customize

## 📧 Support

For questions: support@healthmate.com

---

**Version**: 1.0  
**Status**: Live & Functional  
**Last Updated**: December 2025
