import express from "express";
import cors from "cors";
import path from 'path';

const app = express();

const whiteListDomains = ['http://localhost:5173', 'http://localhost:8000'];

const corsConfig = {
    origin: function (origin, callBack) {
        if(whiteListDomains.indexOf(origin) !== -1 || !origin){
            return callBack(null, true);
        } else {
            return callBack(new Error('CORS ERROR OCCURED'));
        }
    }
}


app.use(cors(corsConfig));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.resolve('public/')));


export default app;