import { bindActionCreators } from "redux";
import Add from "../components/AddComponent"
import { addItem } from "../redux/actions";
import { connect } from "react-redux"


const mapStateToProps = (state) => {
  return {
    businesses: state.businesses
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ addItem }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Add)