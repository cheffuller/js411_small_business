import { Routes, Route } from 'react-router-dom';
import AddListing from './containers/AddListing';
import Details from './containers/Details';
import Listings from './containers/Listings';
import Login from './containers/Login';

const Router = () => {

    return (
        <Routes>
            <Route path="/*" element={<Listings />} />
            <Route path="/listings" element={<Listings />} />
            <Route path="/login" element={<Login />} />
            <Route path="/details/:listIdx" element={<Details />} />
            <Route path="/add" element={<AddListing />} />
            {/* <Route path="/add" element={ <ProtectedRoute> <AddListing /> </ProtectedRoute> } /> */}
            {/* <Route path="/user/:id" element={<Profile/>} /> */}
        </Routes>
    );
}

export default Router;