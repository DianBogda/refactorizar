import React, { useState, useEffect } from "react";
import axios from 'axios';
import {Link} from 'react-router-dom';
import {
    Paper,
    List,
    ListItem,
    ListItemText,
} from '@material-ui/core';
import DeleteButton from './DeleteButton';

const ProductList = props => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/productos')
            .then(res => setProducts(res.data.productos));

    }, [props.flag])

    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id !== productId))
    }

    return(
        <Paper className="paper" elevation={3}>
            <h2>All Products</h2>
            <List>
                {products.map((product, index) => {
                    return(
                        <ListItem key={index}>
                            <ListItemText
                                primary={<Link to={"/product/" + product._id}>{product.title}</Link>}>
                            </ListItemText>
                            <DeleteButton productId={product._id} succesCallback={removeFromDom}/>
                        </ListItem>

                    )
                })}
            </List>
        </Paper>
    )
}

export default ProductList;

