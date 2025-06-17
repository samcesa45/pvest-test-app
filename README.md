# ✨p2vest Landing Page

A pixel-perfect, responsive, and animated landing page built with **Next.js**, **Tailwind CSS**, and **Framer Motion**, inspired by a Figma design. It highlights  multi-currency wallet features with modern UI/UX practices.

## 🚀 Features

- ✅ **Pixel-perfect design** following the provided Figma file
- 📱 **Responsive layout** for mobile, tablet, and desktop
- 🎨 **Modern UI/UX** with Tailwind CSS
- 🎥 **Smooth animations** with Framer Motion (scroll-in, fade-in, rotating icons, etc.)
- 🔄 **Animated icon switcher** with curtain-like transitions
- ⬆️⬇️ **Scroll up/down navigation** with buttons
- 🌐 **Cross-browser compatibility**


## 🛠️ Technologies Used

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [React](https://reactjs.org/)

## 📂 Project Structure

```
|__src/
|
── app/
│   ├── page.tsx
|   |
│   ├── layout.tsx
|
├── components/
│   ├──animation/
│   ├── faqs/
│   ├── footer/
│   ├── hero/
│   ├── paybills/
│   ├── shop-online/
│   ├── wallet/
│   └── ...
├── public/
│   ├── images/
│   ├── naira.svg, dollar.svg, send.svg
├── constants/
│   ├── index.tsx
├── styles/
│   ├── globals.css
├── README.md
└── ...
```

## 🧪 How to Use Locally

1. **Clone the repository**

```bash
git clone https://github.com/samcesa45/pvest-test-app.git
cd pvest-test-app
```

2. **Install dependencies**

```bash
npm install
```

3. **Run the development server**

```bash
npm run dev
```

Visit `http://localhost:3000` to see the landing page.

## 🎨 Customization

- **Images**: Replace `public/images` with your own assets.
- **Text & Icons**: Edit text and switch SVG icons via the `AnimatedIconSwitcher` component.

## Future Optimization Tips

- Compress large images using [TinyPNG](https://tinypng.com/)
- Considering enabling lazy loading for images
- Preload critical assets (fonts, icons)


## 📄 License

This project is open-source and available under the [MIT License](LICENSE).