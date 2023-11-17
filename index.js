import express from 'express'
import {connect} from './config/database.js'
import { getAllJobs, postaJob } from './routes/jobRoutes.js';

const app = express();
app.use(express.json())
const PORT = process.env.PORT || 3000;

// app.get('/', (req,res)=>{
//     res.send("Get API")
// })
app.get('/', getAllJobs)
app.post('/post', postaJob)

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})