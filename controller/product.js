const fs=require('fs');
const mongoose = require('mongoose');
const model = require('../model/product')
const Product=model.Product;

// Create
exports.createProduct = async (req,res) => {
    try{
        const product=new Product(req.body);
        await product.save()
        console.log(product)
        res.status(201).json(req.body)
    }catch(err){
        res.status(400).json(err)
    }
}


exports.getAllProducts = async(req,res) => {
    const products= await Product.find()
    res.json(products)
}


exports.getProduct = async (req,res) => {
    const id= req.params.id;
    const product= await Product.findById(id)
    res.json(product)
}

exports.replaceProduct = async (req,res) => {
    const id= req.params.id;
    try{
    const doc= await Product.findOneAndReplace({_id:id},req.body,{new:true})
    res.status(201).json(doc);
    }catch(err){
        console.log(err);
        res.status(400).json(err);
    }
}

exports.updateProduct = async (req,res) => {
    const id= req.params.id;
    try{
    const doc= await Product.findOneAndUpdate({_id:id},req.body,{new:true})
    res.status(201).json(doc);
    }catch(err){
        console.log(err);
        res.status(400).json(err);
    }
}

exports.deleteProduct = async (req,res) => {
    const id= req.params.id;
    try{
    const doc= await Product.findOneAndDelete({_id:id})
    res.status(201).json(doc);
    }catch(err){
        console.log(err);
        res.status(400).json(err);
    }
}
