import { connect } from "react-redux";
import Details from "../components/Details";
import { setUser } from "../redux/actions";

const mapStateToProps = (state) => {
    return {
        user: state.user,
        listings: state.listings
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setUser: username => dispatch(setUser(username))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Details)