# Detective Stories & Merch - Web Store

A modern web store for detective story subscriptions and exclusive merchandise.

## Features

- **Multiple Subscription Tiers**: Bronze Detective, Silver Investigator, and Gold Case Master plans
- **Exclusive Merchandise**: Detective-themed merchandise available to subscribers
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional interface with smooth interactions

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm

### Installation

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build

Build for production:

```bash
npm run build
```

### Preview

Preview the production build locally:

```bash
npm run preview
```

## Project Structure

- `index.html` - Main HTML file
- `main.js` - JavaScript application logic
- `style.css` - Styling and responsive design
- `package.json` - Project dependencies and scripts
- `vite.config.js` - Vite configuration

## Customization

### Adding New Subscription Plans
Edit the `plans` array in `main.js` to add or modify subscription tiers.

### Adding Merchandise
Edit the `merchandise` array in `main.js` to add new merchandise items.

### Styling
Modify `style.css` to customize colors, fonts, and layout. CSS variables are defined at the root for easy theme changes.

## Technologies Used

- **Vite** - Fast build tool and development server
- **Vanilla JavaScript** - No framework dependencies
- **CSS3** - Modern styling with Grid and Flexbox
- **HTML5** - Semantic markup

## License

This project is open source and available for customization.
