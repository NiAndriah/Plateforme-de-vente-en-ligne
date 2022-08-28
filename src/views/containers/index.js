import { connect } from "react-redux";
import App from "../components";
import { savaToCart } from "../../lib/actions";

export const AppContainer = connect(
    function mapStateToProps(state) {
        return { items : state.items }
    },
    function mapDispatchToProps(dispatch) {
        return { saveToLocalStorage : items => dispatch(savaToCart(items)) } 
    }
)(App);