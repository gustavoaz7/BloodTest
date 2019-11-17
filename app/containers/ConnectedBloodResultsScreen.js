import { connect } from 'react-redux';
import BloodResultsScreen from '../screens/BloodResultsScreen';
import { loadBloodResultsAC } from '../redux/BloodResults/actionCreators';
import { getBloodResults } from '../redux/BloodResults/getters';

const mapStateToProps = state => ({
  results: getBloodResults(state),
});

const mapDispatchToProps = {
  loadBloodResults: loadBloodResultsAC,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BloodResultsScreen);
