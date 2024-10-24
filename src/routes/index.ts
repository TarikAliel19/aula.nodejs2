import {Router,Request,Response, RequestHandler} from 'express'
import * as HomeController from '../controllers/homeController'
import * as InfoController from '../controllers/infoController'
import * as UserController from '../controllers/userController'

const router = Router()

//FAZER A ROTA HOME, CONTATO E SOBRE
router.get('/',HomeController.home)
router.get('/sobre', InfoController.sobre)
router.get('/contato', InfoController.contato)
router.get('/idade', UserController.idade)
router.post('/idade-resultado', UserController.resultado)
router.get('/login', UserController.login)
router.post('/login-concluido', UserController.loginconcluido)
//quando usamos middleware, colocamos NEXT
const interferir:RequestHandler = (req,res,next) =>{
    let logged = false
    if(logged){
        next()
    }else{
        res.status(404).send("Loggin não permitido")
    }
}

router.get('pages/contato',/*,interferir,*/(req: Request,res: Response) => {
    console.log("EXECUTOU A PAG DE CONTATOS")
    res.render('contato')
 
})

router.get('/nome',(req: Request,res: Response) => {
    /* Iremos fazer uma requisição ao usuário (usando req)
    o "as string" é para ajudar o typescript a especificar o tipo desse dado qu vou receber, 
    e o query significa que é dado que será enviado pela url */
    let nome: string = req.query.nome as string

    res.render('pages/nome',{
        nome
    })
})
router.get('/forms',(req: Request,res: Response) => {
    /* Iremos fazer uma requisição ao usuário (usando req)
    o "as string" é para ajudar o typescript a especificar o tipo desse dado qu vou receber, 
    e o query significa que é dado que será enviado pela url */
    let nome: string = req.query.nome as string
    let idade: number = parseInt(req.query.idade as string)
    let telefone: number = parseInt(req.query.idade as string)
    let endereco: string = req.query.endereco as string
    res.render('pages/forms',{
        nome,
        idade,
        telefone,
        endereco
    })
})



//Get exibe a página

//POST processa as informações


//rota dinâmica
router.get('/noticia/:slug',(req:Request,res:Response)=>{
    let slug: string = req.params.slug
    res.send(`Notícia: ${slug}`)
})
router.get('/voo/:origem-:destino',(req:Request,res:Response)=>{
    let {origem , destino} = req.params
    res.send(`Procurando voos de ${origem} até ${destino}`)
})

export default router
