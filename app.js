require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();

const PORT = 3000 || process.env.PORT;

const routers = require('./routes');

const router = express.Router();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use((req, res, next) => {
    console.log(`Method: ${req.method} ${req.path}`);
    next();
})

// router.get('/', (req, res) => {
//     console.log('masuk ke path /')
    
//     res.json({name: 'OK'});
// })

app.use(router);

routers.forEach((route) => app.use(route));

app.listen(PORT, () => console.log(`server is running on port:`, PORT))