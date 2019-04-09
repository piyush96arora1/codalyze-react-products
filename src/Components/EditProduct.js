import React from 'react'
import { Styles } from '../Styles/style';
import { connect } from 'react-redux'
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom'
export class EditProduct extends React.Component {
    constructor(props) {
        super(props)
        this.state = { productName: this.props.location.state.name, productWeight: this.props.location.state.weight, productAvlbl: this.props.location.state.availability, productUrl: this.props.location.state.productUrl, selectedOption: this.props.location.state.pricingTier, priceRange: this.props.location.state.priceRange, isEditable: this.props.location.state.isEditable }
    }
    onRadioChanged = (event) => {
        this.setState({ selectedOption: event.target.value })
        console.log(event.target.value)
    }
    onStateChanged = (event) => {

        let name = event.target.name;
        let value = event.target.value;
        this.setState(
            { [name]: value }
        )
    }
    onChecked = (event) => {


        let checked = event.target.checked
        this.setState({ isEditable: checked })
    }
    onSave = () => {
        let productObj = {
            name: this.state.productName,
            pricingTier: this.state.selectedOption,
            priceRange: this.state.priceRange,
            weight: this.state.productWeight, // In grams,
            availability: this.state.productAvlbl,
            productUrl: this.state.productUrl,
            isEditable: this.state.isEditable
        }

        this.props.onSave(productObj)
    }
    render() {
        let optionsArr = this.state.selectedOption == "budget" ? this.props.pricingInfo.budget : this.props.pricingInfo.premier
        return (<React.Fragment>

            <div className="layout-column layout-margin layout-padding ">
                <div className="layout-row flex">
                    <span className="flex-50">Name</span>
                    <input style={Styles.input} className="flex-50" type="text" name="productName" id="productName" defaultValue={this.state.productName} />
                </div>

                <div className="layout-row flex">
                    <span className="flex-50">Weight</span>
                    <input onChange={this.onStateChanged} style={Styles.input} className="flex-50" type="text" name="productWeight" id="productWeight" value={this.state.productWeight} />
                </div>

                <div className="layout-row flex">
                    <span className="flex-50">Availability</span>
                    <input onChange={this.onStateChanged} style={Styles.input} className="flex-50" type="text" name="productAvlbl" id="productAvlbl" value={this.state.productAvlbl} />
                </div>

                <div className="layout-row flex">
                    <span className="flex-50">Product Url</span>
                    <input onChange={this.onStateChanged} style={Styles.input} className="flex-50" type="text" name="productUrl" id="productUrl" value={this.state.productUrl} />
                </div>

                <div className="layout-row flex">
                    <span className="flex-50">Product Tier</span>
                    <div className="layout-column">
                        <span><input className="flex-25" onChange={this.onRadioChanged} type="radio" checked={this.state.selectedOption == "budget"} name="priceTierBudget" id="proBudget" value="budget" />Budget</span>
                        <span>  <input className="flex-25" onChange={this.onRadioChanged} type="radio" checked={this.state.selectedOption == "premier"} name="priceTierPremier" id="proPremier" value="premier" />Premier</span>
                    </div>
                </div>
                <div className="layout-row flex">
                    <span className="flex-50">Price rannge</span>
                    <select value={this.state.priceRange} onChange={this.onStateChanged} name="priceRange">
                        {optionsArr.map((x) => <option key={x.toString()} value={x.toString()}>{x}</option>)}

                    </select>
                </div>
                <div className="layout-row flex">
                    <span className="flex-50">Is Editable</span>
                    <input type="checkbox" name="isEditable" checked={this.state.isEditable} onChange={this.onChecked} />
                </div>
            </div>
            <div className=" layout-row layout-align-center-center">
                <Button onClick={this.onSave} disabled={this.state.productName.length === 0 || this.state.productWeight.length === 0 || this.state.productUrl.length === 0} style={Styles.Btn} ><Link to="/">Save</Link></Button>
            </div>



        </React.Fragment>)
    }

}

const mapStateToProps = state => {
    return {
        pricingInfo: state.pricingInfo
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onSave: (product) => dispatch({ type: "ONSAVE", payload: product })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(EditProduct)