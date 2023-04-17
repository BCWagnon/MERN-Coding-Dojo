import React from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';
import { useEffect } from 'react';
const ProductList = (props) => {

    const { removeFromDom, product, setProduct } = props;

    useEffect(()=>{
    	axios.get("http://localhost:8000/api/product")
    	.then((res)=>{
	    console.log(res.data);
            setProduct(res.data);
	})
    	.catch((err)=>{
            console.log(err);
    	})
    }, [])

    const deleteProduct = (productId) => {
        console.log(productId)
        axios.delete('http://localhost:8000/api/product/' + productId)
            .then(res => {
                removeFromDom(productId)
            })
            .catch((err)=>{
                console.log(err)
            })
    }

    return (
        <div style={{textAlign:"center"}}>
            {
                product.map((product, index)=>{
                return (
                    <div key={index}> 
                        <Link to={"/product/" + product._id}>{product.productName}</Link>
                        <Link to={"/product/edit/" + product._id}>  Update  </Link>
                        <button onClick={(e)=>{deleteProduct(product._id)}}>Delete</button>
                    </div> 
                )})
            }
        </div>
    );
}
export default ProductList;

