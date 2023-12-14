import { Routes, Route, Navigate } from 'react-router-dom';

import AddListing from './containers/AddListing';
import Details from './containers/Details';
import Listings from './containers/Listings';
import Login from './containers/Login';

const Router = (props) => {

    const ProtectedRoute = ({
        user,
        redirectPath = '/listing',
        children,
      }) => {
        if (!user) {
          return <Navigate to={redirectPath} replace />;
        }
      
        return children;
      };

    return (
        <Routes>
            <Route path="/*" element={<Listings />} />
            <Route path="/listings" element={<Listings />} />
            <Route path="/login" element={<Login />} />
            <Route path="/details/:listIdx" element={<Details />} />
            <Route path="/add" element={<AddListing />} />
            {/* <Route path="home" element={ <ProtectedRoute user={user}> <Home /> </ProtectedRoute> } /> */}
            {/* <Route path="/user/:id" element={<Profile/>} /> */}
        </Routes>
    );
}

export default Router;