import React from 'react'
import { connect } from 'react-redux'
import { Styles } from '../Styles/style';
import { Product } from './Product';

export class ProductsProvider extends React.Component{


render() 
{
    let products= this.props.products.map((x)=>{return <Product key={x.name} product={x}/>})
     
    return(
        <React.Fragment>
            <div style={Styles.Header} className="layout-row layout-margin layout-padding">
                <span className="flex">Name</span>
                <span className="flex">Weight</span>
                <span className="flex">Availabile</span>
                <span className="flex">Editable</span>

            </div>
            <div className="layout-column">
            {products}
            </div>
        </React.Fragment>

    )
}

}

const mapStateToProps=state=>{
return{
    products:state.products
}
}


export default connect(mapStateToProps,null)(ProductsProvider)