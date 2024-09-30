import { bindActionCreators } from "redux";
import Details from "../components/DetailsComponent"
import { fetchMakes } from "../redux/actions";
import { connect } from "react-redux"


const mapStateToProps = (state) => {
  return {
    businesses: state.businesses,
    map: state.map
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchMakes }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Details)