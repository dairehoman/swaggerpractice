import { Router } from 'express';
import Library from '../model/library';

export default ()=>{
    let api = Router();

    api.get('/pin',function(req,res){
        Library.find({type:'recovery'},function(err, library){
            if(err){
                res.send(err);
            }

                let jsonString = library;
                let json = JSON.stringify(jsonString);
                json = JSON.parse(json);

            let message = '';
            for(let i =0; i<1; i++){
                message += json[0]['pin'][i] + '\n';
            }
            res.send(message);
        });
    });
    return api;
}