// Here is where we are importing to the two main components we need from the React Router package.
import { Routes, Route } from 'react-router-dom';

// Local imports. Import components we built ourselves
// import App from './App';
import Details from './containers/Details';
import Listings from './containers/Listings';
import Login from './containers/Login';
// import Home from './components/Home';

const Router = () => {
    return (
 //Then we use Routes and Route. Routes acts like a regular JS Switch* Statement 
 //depending on the path in the URL, one of these Routes will be returned and their component rendered 
        <Routes>
            <Route path="/*" element={<Listings/>} />
            <Route path="/listings" element={<Listings/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/details" element={<Details/>} />
            {/* <Route path="/user/:id" element={<Profile/>} /> */}
        </Routes>
    );
}

//Don't forget to export your newly create Router component
export default Router;