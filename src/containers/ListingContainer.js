import { bindActionCreators } from "redux";
import Listing from "../components/ListingComponent"
import { fetchMakes, removeItem } from "../redux/actions";
import { connect } from "react-redux"


const mapStateToProps = (state) => {
  return {
    businesses: state.businesses,
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchMakes, removeItem }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Listing)