import express from 'express';
const app = express();
app.use(express.json());


// Import or define dataRoutes
import dataRoutes from './src/routes/data';

app.use('/data', dataRoutes);


const PORT = process.env.PORT || 3005;
app.listen(PORT, () => console.log(`Server running ${PORT}`))

//no puedo usar typescript