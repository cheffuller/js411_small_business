import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Dashboard from './components/Dashboard';
import Home from './components/Home';


function App() {
  return (
    <div className="App">
      <Dashboard />
      <Home />
    </div>
  );
}

export default App;
