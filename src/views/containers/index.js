import { connect } from "react-redux";
import App from "../components";

export const AppContainer = connect(
    function mapStateToProps(state) {
        return { items: state.items }
    }
)(App);