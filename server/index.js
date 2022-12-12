const express = require('express')
const cors = require('cors')
const mysql = require('mysql2/promise')
const config = require('./config')
const { v4: uuidv4} = require('uuid')
const { db } = require('./config')


const bcrypt =require('bcrypt')
const passport = require('passport')
const BasicStrategy = require('passport-http').BasicStrategy
const jwt = require('jsonwebtoken')
const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt
    const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json());
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended:false}))

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

/*
TOIMIVA REKISTERÖINTI (PÄIVITTÄÄ TIETOKANTAAN)
app.post('/rekisterointi', async function (req, res){

    const salt = bcrypt.genSaltSync(6);
  const hashedPassword = bcrypt.hashSync(req.body.password, salt);
   
    try{
        const connection = await mysql.createConnection(config.db)
        const [result] = await connection.execute("INSERT INTO `users` (username, email, password) VALUES (?,?,?)",[req.body.username , req.body.email, hashedPassword]) 
            if (!result) result=[]
            res.status(200).json({id:result.insertId})
        } catch(err){
            res.status(500).json({error:err.message})
        }
});
*/

app.post('/rekisterointi',
        (req, res) => {

  
const salt = bcrypt.genSaltSync(6);
  const hashedPassword = bcrypt.hashSync(req.body.password, salt);
const newUser = {
    id: uuidv4(),
    username: req.body.username,
    password: hashedPassword,
    email: req.body.email,
  }
  
  users.push(newUser);

  console.log(users);
  res.send("OK");

 


})
const users = [
    {
        id: uuidv4,
        username: 'demouser',
        password:'12355'
    },
    {
        id: uuidv4,
        username: 'testuser',
        password:'12344'
    },
];
//HTTP BASIC
passport.use(new BasicStrategy(
    function(username, password, done) {
        console.log('username: ' + username);
        console.log('password: ' + password);
        //etsii vastaavaa käyttäjänimeä tietokannasta
        //EN SAANUT TOIMIMAAN TIETOKANNAN KANSSA, JOTEN SOVELLUKSESSA ON NYT KOODATTU ARRAY ILMAN TIETOKANTAA
        const user = users.find(u => u.username === username);

        // jos löytyy, niin vertaa salasanoja
        if(user != null){
            // jos salasanat täsmää, niin eteenee reitinkäsittelijälle
            if(bcrypt.compareSync(password, user.password)) {
                done(null, user)
            } else {
                done(null, false);
            }


        } else{
            //epäonnistunut, pyynnön peruminen
            done(null, false);
        }
    }
));

const jwtOptions ={
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: "SuperSalainenAvain"
}


passport.use(new JwtStrategy(jwtOptions, function(jwt_payload, done) {
    console.log('JWT kelpaa' );
    console.log('payload pitää paikkaansa' );
    console.log(jwt_payload);

    done(null, jwt_payload);
}))
app.get('/suojattu', passport.authenticate('basic',{session: false }), (req,res) => {
    console.log('Suojattu pääsy');



    res.send('Hello protected world!')
})

// JWT TOKEN
app.post('/kirjautuminen', passport.authenticate('basic',{session: false }), (req, res) => {
// luo JWT

const payload = {
    user: {
        id: req.user.id,
        username: req.user.username
    }
};

const secretKey = "8234HD234JD8D2938J923D3423D23E(/#";   // salasanoja ja mmuita turvallisuudenriskejä ei kannata olla koodissa

const options = {
    expiresIn: '1d'
}

const generateJWT = jwt.sign(payload, secretKey, options)

// Lähetä JWT vastauksena
res.json({ jtw: generateJWT})
})

app.get('/kirjauduttu' , passport.authenticate('jwt',{session: false }), (req, res) => {
    console.log('User ID from JWT is ' + req.user.user.id);
res.send("OK, for user " + req.user.user.id);
})




app.listen(port)