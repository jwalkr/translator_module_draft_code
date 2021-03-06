import {Request, Response} from "express";

//A local database
let ussd = require('../db.json'); 

//A module to convert JSON object to XML file
let js2xmlparser = require("js2xmlparser");

export class Translator { 
    
    public routes(app): void {        
       
      
        app.route('/ussddata')
        .post((req:Request, res: Response) => {

            //convert JSON to XML from the user request
            let xmlDataClientReq  = js2xmlparser.parse("USSD", req.body);

            //convert JSON to XML from the local database
            let xmlDataLocalDatabase = js2xmlparser.parse("USSD", ussd);

            //Print results of the local DB on the console
            console.log(xmlDataLocalDatabase);
            
            //Send requested results to the client
            res.status(200).send(xmlDataClientReq);

            res.end();

        })

        app.route('/getdata')
        .get((req:Request, res: Response) => {

            
            res.status(200).send(ussd);

            res.end();

        })
    }

  

 

}