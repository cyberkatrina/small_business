import { bindActionCreators } from "redux";
import Listing from "../components/ListingComponent"
import { fetchMakes } from "../redux/actions";
import { connect } from "react-redux"


const mapStateToProps = (state) => {
  return {
    businesses: state.businesses
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchMakes }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Listing)