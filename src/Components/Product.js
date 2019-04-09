import React, { Component } from 'react'
import { Card, Button } from '@material-ui/core'
import { Styles } from '../Styles/style';
import { Link } from 'react-router-dom'
export class Product extends React.Component {
    editProduct = () => {
        console.log("edit")
    }
    render() {
        let Btn = <span><Button style={Styles.Btn}><Link to={{ pathname: "/edit-product", state: this.props.product }}>Edit</Link></Button></span>

        let isEditable = this.props.product.isEditable ? <div>{Btn}</div> : <div></div>
        return (<Card className="layout-row layout-magin layout-padding">

            <span className="flex">{this.props.product.name}</span>
            <span className="flex">{this.props.product.weight}</span>
            <span className="flex">{this.props.product.availability}</span>
            <span className="flex">{isEditable}</span>
        </Card>)
    }

}