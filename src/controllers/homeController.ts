import { Request, Response } from 'express';

export const home =((req: Request,res: Response) => {
   
    let idade: number = 16
    let mostrarIdade: boolean = false
    if(idade>= 18){
        mostrarIdade = true
    }


    res.render('pages/home',{
        
        nome:'Tarik',
        sobrenome: 'Aliel',
        aparecerMensagem: true,
        aparecerPessoa:true,
        mostrarIdade,
        idade,
        produtos: [
            {titulo: 'Mesa', preco: 200},
            {titulo: 'shampoo', preco: 15},
            {titulo: 'cadeira', preco: 50}

        ],
        frases:[
            
            
        ]

    })
    
    
})