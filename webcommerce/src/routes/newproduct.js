import React from 'react';
import {useLoggedIn} from '../tools/loginctrl.js';
import axios from 'axios'
import AttribField from './elems/attribfield.js';
import { useNavigate } from 'react-router';

function HandleAddProduct(e, navigate, attribs) {
    e.preventDefault();
    axios.post('http://localhost:3001/product/add', attribs)
    .then((resp) => {
        if (resp.status === 200) {
            navigate('/');
        }
    });
}

function NewProduct() {
    const navigate = useNavigate();
    if (useLoggedIn()) { // si estoy logueado, puedo crear productos
        const attribFields = {}
        return (
            <>
            <form onSubmit={(e) => HandleAddProduct(e, navigate, attribFields)}>
                <AttribField label='Nombre:' attrib={attribFields['name']} handleChange={(v) => attribFields['name'] = v } />
                <label>
                    Precio:
                    <input type="text" value={attribFields['price']} onChange={(e) => attribFields['price'] = e.target.value} />
                </label>
                <input type="submit" value="Agregar" />
            </form>
            </>
        );
    } else {
        //navigate('/login'); // no funciona, necesito un poco más de práctica
        return null;
    }
}

export default NewProduct;