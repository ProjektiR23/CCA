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

app.get("/maunaloaannual",async function (req,res){
    try{
        const connection = await mysql.createConnection(config.db)
        const [result] = await connection.execute('select * from maunaloaco2annual')

        if (!result) result=[]
        res.status(200).json(result)
    } catch(err){
        res.status(500).json({error:err.message})
    }
    
})

app.get("/maunaloamonthly",async function (req,res){
    try{
        const connection = await mysql.createConnection(config.db)
        const [result] = await connection.execute('select * from maunaloaco2monthly')

        if (!result) result=[]
        res.status(200).json(result)
    } catch(err){
        res.status(500).json({error:err.message})
    }
    
})

app.get("/antarcticadata",async function (req,res){
    try{
        const connection = await mysql.createConnection(config.db)
        const [result] = await connection.execute('select * from antarcticdatanew')

        if (!result) result=[]
        res.status(200).json(result)
    } catch(err){
        res.status(500).json({error:err.message})
    }
    
})

app.get("/emissionbycountry1",async function (req,res){
    try{
        const connection = await mysql.createConnection(config.db)
        const [result] = await connection.execute('select * from emissionbycountry1')

        if (!result) result=[]
        res.status(200).json(result)
    } catch(err){
        res.status(500).json({error:err.message})
    }
    
})
app.get("/emissionbycountry2",async function (req,res){
    try{
        const connection = await mysql.createConnection(config.db)
        const [result] = await connection.execute('select * from emissionbycountry2')

        if (!result) result=[]
        res.status(200).json(result)
    } catch(err){
        res.status(500).json({error:err.message})
    }
    
})
app.get("/evolutionofglobal",async function (req,res){
    try{
        const connection = await mysql.createConnection(config.db)
        const [result] = await connection.execute('select * from evolution_of_global')

        if (!result) result=[]
        res.status(200).json(result)
    } catch(err){
        res.status(500).json({error:err.message})
    }

})
app.get("/vostokicecoreco2",async function (req,res){
    try{
        const connection = await mysql.createConnection(config.db)
        const [result] = await connection.execute('select * from vostokicecoreco2')

        if (!result) result=[]
        res.status(200).json(result)
    } catch(err){
        res.status(500).json({error:err.message})
    }

})

app.get("/icecore800kcompositestudy",async function (req,res){
    try{
        const connection = await mysql.createConnection(config.db)
        const [result] = await connection.execute('select * from icecore_800k_compositestudy')

        if (!result) result=[]
        res.status(200).json(result)
    } catch(err){
        res.status(500).json({error:err.message})
    }

})

app.get("/evolutionofglobal",async function (req,res){
    try{
        const connection = await mysql.createConnection(config.db)
        const [result] = await connection.execute('select * from evolution_of_global')

        if (!result) result=[]
        res.status(200).json(result)
    } catch(err){
        res.status(500).json({error:err.message})
    }

})

app.get("/evolutionofglobalco2",async function (req,res){
    try{
        const connection = await mysql.createConnection(config.db)
        const [result] = await connection.execute('select * from evolution_of_global_co2')

        if (!result) result=[]
        res.status(200).json(result)
    } catch(err){
        res.status(500).json({error:err.message})
    }

})




app.listen(port)