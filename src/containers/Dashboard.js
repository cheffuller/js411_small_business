import { connect } from "react-redux";
import Dashboard from "../components/Dashboard";
import { setListings, setUser } from "../redux/actions";

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setUser: username => dispatch(setUser(username)),
        setListings: listings => dispatch(setListings(listings))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)