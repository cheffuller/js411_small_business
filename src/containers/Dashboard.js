import { connect } from "react-redux";
import Dashboard from "../components/Dashboard";
import { setUser } from "../redux/actions";

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setUser: username => dispatch(setUser(username))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)