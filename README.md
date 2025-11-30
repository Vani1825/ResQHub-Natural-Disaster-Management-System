# ResQHub - Disaster Management System (React + Tailwind CSS)

A comprehensive disaster management platform built with React and Tailwind CSS. This application helps users stay informed about disasters, find emergency shelters, access emergency kits, and make donations for disaster relief.

## 🚀 Features

- **Dashboard**: Real-time disaster monitoring with statistics
- **Disaster Information**: Detailed pages for Flood, Earthquake, Forest Fire, and Landslide disasters
- **Emergency Shelters**: Search and locate nearby shelters with real-time availability
- **Emergency Kits**: Browse and order pre-configured emergency kits
- **Donation System**: Support disaster relief through monetary donations, supplies, or volunteering
- **Emergency Resources**: Quick access to emergency contacts and safety guidelines
- **Responsive Design**: Fully responsive design using Tailwind CSS

## 🛠️ Technologies Used

- **React 19.2.0**: Modern UI library
- **Vite 7.2.2**: Fast build tool and development server
- **React Router DOM**: Client-side routing
- **Tailwind CSS**: Utility-first CSS framework
- **Font Awesome 6.5.0**: Icon library

## 📦 Getting Started

1. Navigate to the project directory:
```bash
cd resqhub-react
```

2. Install dependencies (if not already installed):
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit: `http://localhost:5173`

## 📁 Project Structure

```
resqhub-react/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       # Navigation component
│   │   └── Footer.jsx       # Footer component
│   ├── pages/
│   │   ├── Home.jsx         # Main dashboard page
│   │   ├── Flood.jsx        # Flood disaster info
│   │   ├── Earthquake.jsx   # Earthquake disaster info
│   │   ├── Fire.jsx         # Forest fire disaster info
│   │   ├── Landslide.jsx    # Landslide disaster info
│   │   ├── EmergencyKit.jsx # Emergency kits page
│   │   └── Donation.jsx     # Donation page
│   ├── App.jsx              # Main app component with routing
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles with Tailwind
├── index.html
├── tailwind.config.js       # Tailwind configuration
└── package.json
```

## 🎨 Available Routes

- `/` - Home (Dashboard)
- `/flood` - Flood disaster information
- `/earthquake` - Earthquake disaster information
- `/fire` - Forest fire disaster information
- `/landslide` - Landslide disaster information
- `/kits` - Emergency kits catalog
- `/donation` - Donation portal

## 🔧 Build for Production

```bash
npm run build
```

## 📞 Emergency Contacts Featured

- Emergency Services: 112
- Red Cross: 0172 254 2180
- RESCUE Punjab: 1122
- Local Emergency: 100

---

**Built with ❤️ for community safety and disaster preparedness**
