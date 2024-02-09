const express = require('express');
const { testConnection } = require('./db/conn');
const { authenticateJWT } = require('./middlewares/authMiddleware');
const userRoutes = require('./routes/userRoutes');


const app = express();

const PORT = 8080;


testConnection();
app.use(express.json());

app.get('/health', (req, res) => {
    res.send('OK');
});

app.use('/users', userRoutes.modules);

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
})

