import express from 'express'
import {connect} from './config/database.js'
import cors from 'cors'
import { getAllJobs, postaJob } from './routes/jobRoutes.js';

const app = express();
app.use(express.json())
app.use(cors())
const PORT = process.env.PORT || 3000;

// app.get('/', (req,res)=>{
//     res.send("Get API")
// })
app.get('/', getAllJobs)
app.post('/post', postaJob)

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})