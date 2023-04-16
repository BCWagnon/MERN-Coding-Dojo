import React, { useState } from 'react'
import axios from 'axios';
const ProductForm = () => {

    const [productName, setProductName] = useState(""); 
    const [productPrice, setProductPrice] = useState("");
    const [productDescription, setProductDescription] = useState("");
    
    const onSubmitHandler = (e) => {
        
        e.preventDefault();
        
        axios.post('http://localhost:8000/api/product', {
            productName,    
            productPrice,
            productDescription,
        })
            .then(res=>{
                console.log(res); 
                console.log(res.data);
            })
            .catch(err=>console.log(err))
    }
    
    return (
        <form style={{textAlign:"center"}} onSubmit={onSubmitHandler}>
            <p>
                <h1>Product Manager</h1>
            </p>
            <div style={{width:"20%", marginLeft:"auto", marginRight:"auto"}}>
                <p style={{backgroundColor:"#D3D3D3", width:300, border:"5px black", padding:"10px", margin: "20px", justifyContent:"space-between", display:"flex" }}>
                    <label>Product Name</label>
                    <input type="text" onChange = {(e)=>setProductName(e.target.value)}/>
                </p>
                <p style={{backgroundColor:"#D3D3D3", width:300, border:"5px black", padding:"10px", margin: "20px", justifyContent:"space-between", display:"flex" }}>
                    <label>Price</label>
                    <input type="number" onChange = {(e)=>setProductPrice(e.target.value)}/>
                </p>
                <p style={{backgroundColor:"#D3D3D3", width:300, border:"5px black", padding:"10px", margin: "20px", justifyContent:"space-between", display:"flex" }}>
                    <label>Description</label>
                    <input type="text" onChange = {(e)=>setProductDescription(e.target.value)}/>
                </p>
            </div>
            <input type="submit"/>
        </form>
    )
}
export default ProductForm;


