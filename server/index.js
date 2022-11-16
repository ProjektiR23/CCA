const express = require('express')
const cors = require('cors')
const mysql = require('mysql2/promise')
const config = require('./config')


const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))

const port = 3001

app.get("/globalannual",async function (req,res){
    try{
        const connection = await mysql.createConnection(config.db)
        const [result] = await connection.execute('select * from global_annual')

        if (!result) result=[]
        res.status(200).json(result)
    } catch(err){
        res.status(500).json({error:err.message})
    }
    
})
app.get("/globalmonthly",async function (req,res){
    try{
        const connection = await mysql.createConnection(config.db)
        const [result] = await connection.execute('select * from global_monthly')

        if (!result) result=[]
        res.status(200).json(result)
    } catch(err){
        res.status(500).json({error:err.message})
    }
    
})
app.get("/northernhemispherenannual",async function (req,res){
    try{
        const connection = await mysql.createConnection(config.db)
        const [result] = await connection.execute('select * from northern_hemisphere_annual')

        if (!result) result=[]
        res.status(200).json(result)
    } catch(err){
        res.status(500).json({error:err.message})
    }
    
})
app.get("/northernhemispherenmonthly",async function (req,res){
    try{
        const connection = await mysql.createConnection(config.db)
        const [result] = await connection.execute('select * from northern_hemisphere_monthly')

        if (!result) result=[]
        res.status(200).json(result)
    } catch(err){
        res.status(500).json({error:err.message})
    }
    
})
app.get("/southernhemispherenannual",async function (req,res){
    try{
        const connection = await mysql.createConnection(config.db)
        const [result] = await connection.execute('select * from southern_hemisphere_annual')

        if (!result) result=[]
        res.status(200).json(result)
    } catch(err){
        res.status(500).json({error:err.message})
    }
    
})
app.get("/southernhemispherenmonthly",async function (req,res){
    try{
        const connection = await mysql.createConnection(config.db)
        const [result] = await connection.execute('select * from southern_hemisphere_monthly')

        if (!result) result=[]
        res.status(200).json(result)
    } catch(err){
        res.status(500).json({error:err.message})
    }
    
})
app.get("/northernhemisphere2000",async function (req,res){
    try{
        const connection = await mysql.createConnection(config.db)
        const [result] = await connection.execute('select * from norhem_2000_recon')

        if (!result) result=[]
        res.status(200).json(result)
    } catch(err){
        res.status(500).json({error:err.message})
    }
    
})





app.listen(port)