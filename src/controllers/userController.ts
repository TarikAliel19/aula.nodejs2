import { Request, Response } from 'express';

// Colocar as rotas 

export const idade = ((req:Request, res: Response) =>{
    res.render('pages/idade')
})
//POST processa as informações
export const resultado =((req: Request,res: Response) => {
    let idade: number = 0
    let mostrarIdade: boolean = false
    if(req.body.anoNascimento){ // body para deixa as informações colocada não aparente
        let anoAtual: number = new Date().getFullYear() //2024
        let anoNascimento: number = parseInt(req.body.anoNascimento as string)
        idade = anoAtual - anoNascimento
        mostrarIdade = true
    }
    
    res.render('pages/idade',{
        idade,
        mostrarIdade
    })
    
})

export const login =((req:Request, res: Response) =>{
    res.render('pages/login')
})

export const loginconcluido =((req: Request,res: Response) => {

    res.render('pages/login',{
        
    })
    
})