import { bindActionCreators } from "redux";
import Login from "../components/LoginComponent"
import { changeUser } from "../redux/actions";
import { connect } from "react-redux"


const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ changeUser }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)