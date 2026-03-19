# MeteoCode - Modern Weather App

A beautifully designed, modern weather application built with React, TypeScript, and TailwindCSS.

## 🚀 Features

- **Modern UI/UX**: Clean, responsive design with smooth animations
- **Real-time Weather Data**: Powered by OpenWeather API
- **Advanced Architecture**: Component-based with proper separation of concerns
- **TypeScript**: Full type safety throughout the application
- **State Management**: React Query for API state management
- **Responsive Design**: Works perfectly on mobile, tablet, and desktop
- **Recent Cities**: Quick access to previously searched locations
- **Detailed Forecasts**: Hourly and 5-day weather forecasts
- **Error Handling**: Graceful error states and loading indicators

## 🛠 Technology Stack

- **Frontend**: React 19 + TypeScript
- **Build Tool**: Vite
- **Styling**: TailwindCSS
- **State Management**: TanStack Query
- **HTTP Client**: Axios
- **Animations**: Framer Motion
- **Icons**: Heroicons
- **Routing**: React Router

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/              # Reusable UI components
│   └── features/        # Feature-specific components
├── pages/               # Page components
├── hooks/               # Custom React hooks
├── api/                 # API service layer
├── services/            # Business logic services
├── utils/               # Utility functions
├── types/               # TypeScript type definitions
└── store/               # Global state management
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd U3-W2-D5-Friday
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env
   ```

   Edit `.env` and add your OpenWeather API key:

   ```
   VITE_OPENWEATHER_API_KEY=your_api_key_here
   ```

   Get your free API key from [OpenWeather](https://openweathermap.org/api)

4. **Start the development server**

   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

## 🎨 Architecture Highlights

### API Layer

- Clean, typed API service with Axios
- Centralized error handling
- Request/response interceptors
- Automatic retry logic

### State Management

- React Query for server state
- Custom hooks for complex logic
- Optimistic updates where applicable
- Proper cache management

### Component Architecture

- Separation of UI and business logic
- Reusable UI components
- Feature-based organization
- Proper TypeScript typing

### Performance Optimizations

- Lazy loading components
- Memoization where needed
- Optimized API calls
- Efficient re-rendering

## 🌟 Key Features

### Modern UI/UX

- Glass morphism effects
- Smooth animations and transitions
- Weather-themed gradients
- Responsive grid layouts
- Micro-interactions

### Weather Data

- Current weather conditions
- Hourly forecasts (24 hours)
- 5-day weather predictions
- Detailed weather metrics
- Weather icons and descriptions

### User Experience

- Recent cities search
- Loading states and skeletons
- Error boundaries
- Intuitive navigation
- Mobile-first design

## 📱 Responsive Design

The application is fully responsive and works seamlessly across:

- **Mobile** (320px+)
- **Tablet** (768px+)
- **Desktop** (1024px+)

## 🎯 Development Best Practices

- **TypeScript**: Strict typing throughout
- **Code Organization**: Feature-based structure
- **Error Handling**: Comprehensive error boundaries
- **Performance**: Optimized rendering and caching
- **Accessibility**: ARIA labels and semantic HTML
- **Testing**: Component testing setup ready

## 🚀 Build and Deploy

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

### Lint code

```bash
npm run lint
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 🙏 Acknowledgments

- [OpenWeather](https://openweathermap.org/) for weather data API
- [TailwindCSS](https://tailwindcss.com/) for utility-first CSS
- [Framer Motion](https://www.framer.com/motion/) for animations
- [Heroicons](https://heroicons.com/) for beautiful icons

---

**Built with ❤️ using modern web technologies**
