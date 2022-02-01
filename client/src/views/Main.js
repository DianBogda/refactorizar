import { useEffect, useState } from "react";
import axios from 'axios';
import ProductForm from "../components/ProductForm";
import ProductList from "../components/ProductList";

const Main = () => {

    const [products, setProducts] = useState();
    const [flag, setFlag] = useState();
    const [loaded, setLoaded] = useState(false);

    useEffect(()=> {
        axios.get('http://localhost:8000/api/productos')
            .then(res => {
                // console.log(res.data.productos)
                setProducts(res.data.productos)
                setLoaded(true);
            });
    }, [])

    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id !== productId));
    }

    const createProduct = product => {
        axios.post('http://localhost:8000/api/producto/nuevo', product)
            .then(res => {
                setFlag(!flag)
                setProducts([...products, res.data.productos]);
            })
    }

    return(
        <>
            <ProductForm onSubmitProp={createProduct} initialTitle="" initialPrice="" initialDescription="" />
            <hr/>
            {loaded && <ProductList flag={flag} products={products} removeFromDom={removeFromDom} />}
        </>
    )
}

export default Main;