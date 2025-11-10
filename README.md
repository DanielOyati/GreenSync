# GreenSync 🌿

**Empowering sustainable change through data-driven insights.**

---

## 📋 Overview

GreenSync is a browser-based ClimateTech web application built to help organizations, eco-startups, and communities monitor and analyze sustainability data in real time. With AI-powered insights, we provide instant environmental analysis, track sustainability metrics, and offer a real-time community chat feature that brings eco-innovators together — all without the need for a complex backend.

### 🎯 One-Line Pitch

> **"GreenSync — AI-powered sustainability intelligence for a cleaner, smarter planet."**

---

## ✨ Features

- 🌱 **AI Sustainability Insights** - Get instant, data-driven recommendations for reducing environmental impact
- 📊 **Live Sustainability Metrics** - Track carbon footprint, renewable energy usage, waste reduction, and more
- 🌿 **EcoBot Community Chat** - Connect with other organizations and share sustainability challenges
- 📈 **Real-Time Analytics** - Monitor your environmental performance with live dashboard updates
- 💡 **Actionable Recommendations** - AI-powered step-by-step solutions for sustainability challenges

---

## 🛠️ Tech Stack

- **HTML5** - Semantic markup structure
- **Tailwind CSS** - Utility-first styling framework
- **JavaScript (Vanilla)** - Core functionality and interactivity
- **GSAP** - Animation library for smooth interactions
- **Google Gemini AI** - AI-powered sustainability insights
- **Firebase Realtime Database** - Community chat functionality

---

## 🚀 Installation

1. **Clone or download** this repository:
   ```bash
   git clone <repository-url>
   cd GreenSync
   ```

2. **Open the project** in your preferred code editor or IDE.

3. **No build process required** - Simply open `index.html` in a modern web browser, or use a local development server:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js (http-server)
   npx http-server
   
   # Using VS Code Live Server extension
   # Right-click index.html → Open with Live Server
   ```

4. **Access the application**:
   - Local: `http://localhost:8000`
   - Or open `index.html` directly in your browser

---

## 📖 Usage

### Getting Started

1. **Landing Page** (`index.html`)
   - Explore GreenSync's features and benefits
   - Review sustainability metrics and impact reports
   - Submit your sustainability challenge for AI analysis

2. **Submit Metrics** 
   - Select a sustainability category (Carbon Footprint, Renewable Energy, Waste Management, Water Conservation)
   - Describe your sustainability challenge
   - Enter your organization's location
   - Click "ANALYZE METRICS" to get AI-powered insights

3. **Dashboard** (`dashboard.html`)
   - View AI-generated sustainability recommendations
   - Monitor live sustainability metrics (Carbon Footprint, Renewable Energy %, Waste Reduction, etc.)
   - Engage with the EcoBot Community Chat to share experiences and solutions

4. **About** (`about.html`)
   - Learn more about GreenSync's mission and capabilities
   - Understand how AI powers our sustainability intelligence
   - Discover how the platform helps achieve net-zero goals

---

## 🎨 Design Philosophy

GreenSync features an **eco-modern** design aesthetic:

- **Color Palette**: Eco greens (`#B1FD28`), soft grays, whites, and dark charcoal backgrounds
- **Typography**: Clean sans-serif fonts (Inter, Urbanist) for readability
- **UI Elements**: Rounded components, subtle gradients, and smooth animations
- **Tone**: Clean, futuristic, and nature-inspired

---

## 🔧 Configuration

### API Keys

To enable AI insights functionality, you'll need a **Google Gemini API key**:

1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Generate an API key
3. Update the API key in `script.js` (line ~20):
   ```javascript
   const apiKey = "YOUR_GEMINI_API_KEY_HERE";
   ```

### Firebase Setup (for Community Chat)

The EcoBot Community Chat uses Firebase Realtime Database. The current configuration points to a demo Firebase project. For production use:

1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com)
2. Enable Realtime Database
3. Update `chat.js` with your Firebase configuration:
   ```javascript
   const firebaseConfig = {
     apiKey: "YOUR_API_KEY",
     authDomain: "YOUR_AUTH_DOMAIN",
     databaseURL: "YOUR_DATABASE_URL",
     projectId: "YOUR_PROJECT_ID",
     // ... other config
   };
   ```

---

## 📁 Project Structure

```
GreenSync/
├── index.html          # Landing page
├── dashboard.html      # Sustainability dashboard
├── about.html          # About page
├── script.js           # Form submission & AI integration
├── dashboard.js        # Dashboard metrics initialization
├── chat.js             # EcoBot Community chat functionality
├── README.md           # This file
└── img/                # Image assets (illustrations)
```

---

## 🌍 Impact Goals

GreenSync is designed to help organizations:

- **Reduce Carbon Footprint** by up to 40% with AI-powered recommendations
- **Increase Renewable Energy Usage** through data-driven insights
- **Optimize Waste Reduction** strategies with actionable metrics
- **Achieve Net-Zero Goals** through comprehensive environmental monitoring

---

## 🔮 Future Enhancements

Potential features to expand GreenSync's capabilities:

- Real-time carbon tracker with live data integration
- Impact goal progress bars with milestone tracking
- Enhanced EcoBot with deeper sustainability expertise
- Multi-organization comparison and benchmarking
- Export functionality for sustainability reports
- Integration with IoT sensors for real-time data collection

---

## 📝 License

© 2025 GreenSync. All rights reserved.

---

## 👤 Built With

- **AI**: Google Gemini API
- **Database**: Firebase Realtime Database
- **Animation**: GSAP (GreenSock Animation Platform)
- **Styling**: Tailwind CSS
- **Fonts**: Inter, Urbanist (Google Fonts)

---

## 🤝 Contributing

This is a standalone project, but suggestions and improvements are welcome!

---

## 📞 Support

For questions or support, please refer to the About page or contact the development team.

---

**Empowering sustainable change through data-driven insights.** 🌿
