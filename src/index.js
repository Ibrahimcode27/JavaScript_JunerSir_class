import express from 'express'
import cors from 'cors'
import useroute from './router/user.router.js'
import frontendRoute from './router/frontend.router.js'
import RegisterRoute from './router/register.route.js'
import LoginRoute from './router/Login.route.js'

const app = express()
app.use(
  cors({
    origin: "*",
})
);

app.use(express.json());
app.use("/api/isworking",useroute);
app.use("/api/frontend", frontendRoute);
app.use("/api/task1", RegisterRoute);
app.use("/api/task2", LoginRoute);

const port = 3033
app.listen(port, 
    ()=> {
        console.log(`Server is running on port = ${port}`)
    }
)