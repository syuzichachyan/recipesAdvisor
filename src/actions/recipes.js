import {
    RECIPES_FETCHING,
    RECIPES_FETCHING_FAILURE,
    RECIPES_FETCHING_SUCCESS
} from '../constants';

export function recipesFetching() {
    return { type: RECIPES_FETCHING };
}

export function recipesFetchingSuccess(recipes) {
    return {
        type: RECIPES_FETCHING_SUCCESS,
        payload: recipes
    };
}

export function recipesFetchingFailure() {
    return { type: RECIPES_FETCHING_FAILURE };
}

export const getRecipes = (excludes, includes) => dispatch => {
    dispatch(recipesFetching());
    let exludecFoods = '';
    includes.forEach(inclFoods => {
        excludes.forEach(
            food => (exludecFoods = exludecFoods + `&excluded=${food}`)
        );
        fetch(
            `https://api.edamam.com/search?q=${inclFoods}&app_id=28fb7256&app_key=b3bccf42eb282f3b21740bf3fa472af3&from=0&to=6&in` +
                exludecFoods
        )
            .then(recipes => recipes.json())
            .then(recipes => {
                dispatch(recipesFetchingSuccess(recipes));
            })
            .catch(error => {
                console.log(error);
                dispatch(recipesFetchingFailure());
            });
    });
};
