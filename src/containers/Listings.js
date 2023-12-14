import { connect } from "react-redux";
import Listings from "../components/Listings";
import { setUser, setListings, deleteListing } from "../redux/actions";

const mapStateToProps = (state) => {
    return {
        user: state.user,
        listings: state.listings
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setUser: username => dispatch(setUser(username)),
        setListings: listings => dispatch(setListings(listings)),
        deleteListing: index => dispatch(deleteListing(index))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Listings)