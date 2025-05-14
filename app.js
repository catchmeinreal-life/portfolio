/**
 * 
*/
import dotenv from 'dotenv';
dotenv.config()
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import express from "express";


const app = express();
app.use(express.json());

// Reconstruct __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
 


//serve static files from "public" directory
app.use(express.static(path.join(__dirname, 'public')));

//set the views directory and the view engine
app.set('views', path.join(__dirname, 'pages'));
app.set('view engine', 'html');

app.get('/', (req,res)=>{
    res.status(200).sendFile(path.join(__dirname,'index.html'));
});

app.get('/contact', (req, res)=>{
    res.status(200).sendFile(path.join(__dirname, 'pages', 'contact.html'));
})

app.get('/about', (req, res)=>{
    res.status(200).sendFile(path.join(__dirname, 'pages', 'about.html'));
});
app.get('/portfolio', (req, res)=>{
    res.status(200).sendFile(path.join(__dirname, 'pages', 'portfolio.html'));
});

const PORT = process.env.PORT || 3000;

//  run the server
app.listen(PORT, () =>{
    console.log(`server is running on port :${PORT}`);
})