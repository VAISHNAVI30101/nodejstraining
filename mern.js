const express = require('express');
const axios=require('axios');
const app=express();

async function getProducts(){
    const API_DOMAIN ='https://fakestoreapi.com/';
    const response=axios.get(API_DOMAIN+'products');
    console.log(response);
    return (await response).data;
}

app.get('/products/:id',async(req,res)=>{
    console.log(req.params.id);
    const products=await getProductsWithId(req.params.id);
    res.send(products);
})

async function getProductsWithId(id){
    const API_DOMAIN ='https://fakestoreapi.com/';
    const response=axios.get(API_DOMAIN+'products/'+id);
    return (await response).data;
}
const PORT = 3000;
app.get('/',(req,res)=>{
    res.send("Hello world")
})

app.listen(PORT, () =>{
    console.log(`Server is running in PORT:${PORT}`);
});