
const initialState={products:require('../Products').products,pricingInfo:require('../Products').pricingInfo}

export const rootReducer=(state=initialState,action)=>{


    let modifiedState={...state}
    switch(action.type)
    {
        case "ONSAVE":
        {
            let product={...action.payload}
            let existingProdIndex=state.products.findIndex((x)=>x.name===product.name);
        
           modifiedState.products[existingProdIndex]={...state.products[existingProdIndex],...product}
        
        }
        
    }


    return modifiedState;
}