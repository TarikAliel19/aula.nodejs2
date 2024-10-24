import { Request, Response } from 'express';

//COLOCAR A ROTA CONTADO E SOBRE AQUI

export const contato = ((req: Request,res: Response) => {
    console.log("EXECUTOU A PAG DE CONTATOS")
    res.render('pages/contato')
 
})

export const sobre = ((req: Request,res: Response) => {
    res.render('pages/sobre')
})
