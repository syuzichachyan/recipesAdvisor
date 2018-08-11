import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Recipe from '../recipe';
import injectSheet from 'react-jss';
import styles from './style';

class Recipes extends Component {
    componentDidMount() {
        const { includes, excludes, getRecipes } = this.props;
        getRecipes(excludes, includes);
    }
    static propTypes = {
        includes: PropTypes.array,
        excludes: PropTypes.array,
        getRecipes: PropTypes.func,
        isRecipesFetching: PropTypes.bool,
        recipes: PropTypes.array,
        classes: PropTypes.object
    };
    static defaultProps = {
        isRecipesFetching: false,
        recipes: []
    };

    render() {
        const { isRecipesFetching, recipes, classes } = this.props;
        if (isRecipesFetching === false) {
            return (
                <div className={classes.recipes}>
                    {recipes.map(item =>
                        item.hits.map(recipe => {
                            return (
                                <Recipe
                                    recipe={recipe.recipe}
                                    key={recipe.recipe.url}
                                />
                            );
                        })
                    )}
                </div>
            );
        } else return <div>loading</div>;
    }
}

export default injectSheet(styles)(Recipes);
