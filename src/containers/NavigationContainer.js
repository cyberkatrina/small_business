import Navigation from "../components/NavigationComponent"
import { connect } from "react-redux"

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Navigation)