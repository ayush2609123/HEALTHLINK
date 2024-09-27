const express = require('express');
const user_route = require('./routes/user_routes.js')
const connectDB = require('./config/connection.js'); 


const app = express();
app.use(express.json())


connectDB();

app.use('/api',user_route)

app.get('/', (req, res) => {
  res.send('Welcome to the API');
});



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
