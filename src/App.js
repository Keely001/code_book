// Import necessary CSS and components
import './App.css';
import { Footer, Header } from './components';
import { AllRoutes } from './routes/AllRoutes';

// Define the main App functional component
function App() {
  return (
    <div className="App dark:bg-darkbg">
      {/* Render the Header component */}
      <Header />
      {/* Render all routes */}
      <AllRoutes />
      {/* Render the Footer component */}
      <Footer />
    </div>
  );
}

// Export the App component as the default export
export default App;
