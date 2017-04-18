import { Router } from 'express';
import Library from '../model/library';

export default ()=>{
    let api = Router();

    api.get('/pin',function(req,res){
        Library.find({type:'pin'},function(err, library){
            if(err){
                res.send(err);
            }

            let jsonString = library;
            let json = JSON.stringify(jsonString);
            json = JSON.parse(json);

            let message = '';
            for(let i=0; i<4; i++){
                message += json[0]['pin'][i] + '\n';
            }
            res.send(message);

        });

    });

    api.get('/laptop',function(req,res){
        Library.find({type:'laptop'},function(err, library){
            if(err){
                res.send(err);
            }

            let jsonString = library;
            let json = JSON.stringify(jsonString);
            json = JSON.parse(json);

            let message = '';
            for(let i=0; i<4; i++){
                message += json[0]['laptop'][i] + '\n';
            }
            res.send(message);

        });

    });

    api.get('/refworks',function(req,res){
        Library.find({type:'refworks'},function(err, library){
            if(err){
                res.send(err);
            }

            let jsonString = library;
            let json = JSON.stringify(jsonString);
            json = JSON.parse(json);

            let message = '';
            for(let i=0; i<3; i++){
                message += json[0]['refworks'][i] + '\n';
            }
            res.send(message);

        });

    });

    api.get('/printcredit',function(req,res){
        Library.find({type:'printcredit'},function(err, library){
            if(err){
                res.send(err);
            }

            let jsonString = library;
            let json = JSON.stringify(jsonString);
            json = JSON.parse(json);

            let message = '';
            for(let i=0; i<1; i++){
                message += json[0]['printcredit'][i] + '\n';
            }
            res.send(message);

        });

    });

    api.get('/account',function(req,res){
        Library.find({type:'account'},function(err, library){
            if(err){
                res.send(err);
            }

            let jsonString = library;
            let json = JSON.stringify(jsonString);
            json = JSON.parse(json);

            let message = '';
            for(let i=0; i<2; i++){
                message += json[0]['account'][i] + '\n';
            }
            res.send(message);

        });

    });

    api.get('/book',function(req,res){
        Library.find({type:'book'},function(err, library){
            if(err){
                res.send(err);
            }

            let jsonString = library;
            let json = JSON.stringify(jsonString);
            json = JSON.parse(json);

            let message = '';
            for(let i=0; i<2; i++){
                message += json[0]['bookborrow'][i] + '\n';
            }
            res.send(message);

        });

    });

    api.get('/bookfind',function(req,res){
        Library.find({type:'bookfind'},function(err, library){
            if(err){
                res.send(err);
            }

            let jsonString = library;
            let json = JSON.stringify(jsonString);
            json = JSON.parse(json);

            let message = '';
            for(let i=0; i<2; i++){
                message += json[0]['bookfind'][i] + '\n';
            }
            res.send(message);

        });

    });

    api.get('/librarytimes',function(req,res){
        Library.find({type:'times'},function(err, library){
            if(err){
                res.send(err);
            }

            let jsonString = library;
            let json = JSON.stringify(jsonString);
            json = JSON.parse(json);

            let message = '';
            for(let i=0; i<4; i++){
                message += json[0]['librarytimes'][i] + '\n';
            }
            res.send(message);

        });
    });
    return api;
}