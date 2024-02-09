const express = require('express');
const { testConnection } = require('./db/conn');
const { authenticateJWT } = require('./middlewares/authMiddleware');

const app = express();

const PORT = 8080;


testConnection();
app.use(express.json());

app.get('/health', (req, res) => {
    res.send('OK');
});

//register user
app.post('/register', (req, res) => {
    
})

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
})

