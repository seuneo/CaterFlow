import {login} from '../services/login.js'

export async function loginC(req, res){
    try{
        const{username, password} = req.body;
        const result = await login(username, password);
        res.json({token:result.token,
            role: result.role
        });
    } catch(error){
        res.status(401).json({message: "Invalid credentials"});
    }
}