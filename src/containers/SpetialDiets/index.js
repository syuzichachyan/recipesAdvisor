import { connect } from 'react-redux';
import { getSpecialDiets, firstPage } from '../../actions';
import SpecialDiets from '../../components/SpecialDiets';
import { bindActionCreators } from 'redux';

const mapStateToProps = state => {
    return {
        specialDiets: state.specialDiets,
        isSpecialDietsFetching: state.isSpecialDietsFetching,
        curPage: state.curPage.specialDiets
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            getSpecialDiets,
            firstPage
        },
        dispatch
    );
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SpecialDiets);
