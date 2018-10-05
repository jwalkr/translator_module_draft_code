import {Request, Response} from "express";

//import userdata = require('../db.json'); 

export class Translator { 
    
    public routes(app): void {        
        app.route('/getxml')
        .get((req: Request, res: Response) => {            
            res.status(200).send("Data");
        })  
        
        app.route('/getdata/:id')
        .get((req:Request, res: Response) => {
           let id = req.params.id;
           res.status(200).send("Im an ID");
        })
    }

  

 

}