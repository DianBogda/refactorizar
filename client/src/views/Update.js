import React, {useState, useEffect} from "react";
import axios from 'axios';
import {useParams, useNavigate} from 'react-router-dom';
import ProductForm from '../components/ProductForm';
import DeleteButton from "../components/DeleteButton";
import {Button} from '@material-ui/core';

const Update = props =>{

    const {_id} = useParams();
    const navigate = useNavigate();

    const [product, setProduct] = useState();
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/producto/' + _id)
            .then(res => {
                // console.log(res.data.producto)
                setProduct(res.data.producto);
                setLoaded(true);
            })
    }, [])

    const updateProduct = product => {
        axios.put('http://localhost:8000/api/producto/update/' + _id, product)
            .then(res => console.log(res));
    }
 
    return(
        <>
            {loaded && (
                <>
                    <ProductForm
                        onSubmitProp={updateProduct}
                        initialTitle={product.title}
                        initialPrice={product.price}
                        initialDescription={product.description}
                    />
                    <DeleteButton productId={product._id} succesCallback={()=>navigate("/products")}/>
                    <Button style={{marginLeft: 10}} variant="contained" color="primary" size="small" onClick={()=>navigate("/products")}>
                        Home
                    </Button>
                </>
            )}
            
        </>
    )
}

export default Update;