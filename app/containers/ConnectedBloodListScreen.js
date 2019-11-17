import { connect } from 'react-redux';
import BloodListScreen from '../screens/BloodListScreen';
import { loadBloodListAC } from '../redux/BloodList/actionCreators';
import { getBloodListTests } from '../redux/BloodList/getters';

const mapStateToProps = state => ({
  tests: getBloodListTests(state),
});

const mapDispatchToProps = {
  loadBloodList: loadBloodListAC,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BloodListScreen);
