# Project Documentation

**Name:** Christian Reed

**Class:** WU14

**Education:** Web Developer

**Educational Institution:** Roskilde Technical School

[Link to my application](https://reeds-newsify.netlify.app/)

## Technologies

- HTML
- CSS/SASS
- JavaScript
- React
- Vite
- Vitest
- React Router
- React Swipeable

---

## Explanation of Third-Party Code Used in the Solution (Technical Documentation)

### Core Technologies

- **React (v18.3.1)**: JavaScript library for building user interfaces with component-based architecture
- **React Router DOM (v6.27.0)**: Handles client-side routing between different pages (Home, Archive, Popular, Settings, Login)
- **Vite (v5.4.10)**: Fast build tool and development server that provides hot module replacement

### Styling

- **SASS**: CSS preprocessor for writing modular, maintainable stylesheets with variables, mixins, and nesting

### Animation & Interaction

- **React Swipeable (v7.0.1)**: Enables touch/swipe gestures for mobile-friendly article navigation in SwipeableArticle component

### Development & Testing

- **Vitest (v2.1.4)**
- **@testing-library/react (v16.0.1)**
- **@testing-library/jest-dom (v6.6.3)**

### API Integration

- **useFetch.jsx**: Custom hook for fetching news data from the New York Times API

---

## Justification for Independent Choices Made During Development

### Component Architecture

I structured the application with a clear separation of concerns:

- **Context API**: Used `CategoryContext` and `ArchiveContext` for global state management instead of prop drilling, making it easier to share category preferences and archived articles across components
- **Custom Hooks**: Created `useFetch` hook to encapsulate data fetching logic and make it reusable across different components

### User Experience Decisions

- **Dark Mode**: Implemented theme switching to reduce eye strain and provide modern UX expectations
- **Swipeable Articles**: Used touch gestures for article navigation, providing an intuitive mobile-first experience similar to popular news apps
- **Onboarding Flow**: Added onboarding to guide new users through app features and category selection
- **Category Filtering**: Implemented `TurnOnOffCategories` to let users customize their news feed

### Animation Choices

- Animated details expansion/collapse
- Splash screen animations
- Swipe gestures with spring physics

### Styling Approach

- **SASS with BEM**: Used SASS for better organization with variables, mixins, and the BEM naming convention for maintainable, scalable CSS
- **Component-scoped styles**: Each component has its own SASS file, promoting modularity

---

## Assessment of Own Effort & Project Execution (Work Process)

### What Went Well

- Successfully implemented a complete news application with multiple features
- Created a modular component structure that's easy to maintain and extend
- Integrated external API (NYT) effectively
- Implemented modern UX patterns (swipe gestures, dark mode, onboarding)
- Set up testing infrastructure with Vitest

### Areas for Improvement

- More organized approach to the assignment
- Better understanding of how to implement the fetch on several pages

---

## Special Points for Assessment
