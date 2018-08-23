import React,{Component} from 'react';
import HealthyRecipes from '../../containers/HealthyRecipes';
import SpecialDiets from '../../containers/SpetialDiets';

class FilteredRecipe extends Component{
    render(){
        //const {type,labels}=this.props.filter;
        const {type,labels}={type:"diet",labels:["qed"]};
        const {q}=this.props;
        if(type==="health")
            return <HealthyRecipes q={q} labels={labels} />;
        return <SpecialDiets q={q} labels={labels}/>;
    }
}
export default FilteredRecipe;
