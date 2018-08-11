import { connect } from 'react-redux';
import { getRecipes } from '../../actions';
import Recipes from '../../components/recipes';

const mapStateToProps = state => {
    return {
        isRecipesFetching: state.isRecipesFetching,
        recipes: state.recipes
    };
};
const mapDispatchToProps = dispatch => {
    return {
        getRecipes: (excludes, includes) =>
            dispatch(getRecipes(excludes, includes))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Recipes);
