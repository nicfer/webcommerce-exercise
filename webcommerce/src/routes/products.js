import React from 'react';
import {useLoggedIn} from '../tools/loginctrl.js';
import { Link } from 'react-router-dom';
import axios from 'axios'

function DeleteProductButton(props) {
    if (useLoggedIn()) {
        return (
            <button onClick={() =>
                axios.delete('http://localhost:3001/product/'+ props.id )
                .then( props.deleter(props.id) )
            } className='btn btn-secondary btn-sm'>Eliminar</button>
        );}
    return <p>&nbsp;</p>
}

function AddProductButton() {
    if (useLoggedIn())
        return (
            <Link to="/newproduct">
                <button className='btn btn-secondary' >Agregar producto</button>
            </Link>
        );
    return null;
}

class Product extends React.Component {
    render() {
        return (
            <tr>
                <td key='name'>{this.props.name}</td>
                <td key='price'>$ {this.props.price}</td>
                <td key='delete'><DeleteProductButton id={this.props.id} deleter={this.props.deleter} /></td> {/* Necesito algunas cosas más para eliminar productos */}
            </tr>
        );
    }
}

class ProductList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            prods: [],
        }
        this.setProducts = this.setProducts.bind(this)
        this.getProducts = this.getProducts.bind(this)
        this.deleteProduct = this.deleteProduct.bind(this)
        axios.get('http://localhost:3001/products')
        .then((resp) => {
            const prods = [] // Doy formato a los datos almacenados
            for (var i in resp.data)
                prods.push(<Product key={i} id={i} name={resp.data[i].name} price={resp.data[i].price} deleter={this.deleteProduct} />)
            this.setProducts(prods)
    })
    }
    setProducts(p) {
        this.setState({prods: p})
    }
    deleteProduct(p) {
        var prods = this.getProducts().filter( el => el.key !== p )
        this.setProducts(prods)
    }
    getProducts() {
        return this.state.prods
    }
    render() {
        return (
        <>
        <table className='table table-striped'>
            <tbody>
                {this.getProducts()}
            </tbody>
        </table>
        <AddProductButton key='addProduct' />
        </>
    )}
}

export default ProductList;