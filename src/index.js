const express = require('express') //Importa o express//comando usado para importar uma biblioteca no NodeJs//Express disponibiliza pra gente métodoso/funções para usarmos métodos HTTP
const { v4: uuidv4 } = require('uuid');  //Importando dentro do código a biblioteca UUID
const app = express() // comando usado para definir uma instancia do express (Espaço definido para utilização do express)


app.use(express.json()) //Configurar/Colocar esta linha sempre antes de qualquer rota, pois ele vai rodar esta linha antes de qualquer coisa
// import uuid from 'uuid';


const id = uuidv4() //Função que gera o código de identificação unica



const projects = [] //Será o repositorio de todas as rotas do projeto


// MidleWare //Logs
function LogRoutes(request,response,next){ //Next é um callback
    // console.log(request)
    const {method, url} = request //Pego tudo que está na request e desmembro em duas variaveis
    const route = `[${method.toUpperCase()}] ${url}` //Craze que em JavaScript, concatenamos código com string
    console.log(route)
    return next()
}

//Get / Funcionando 

app.use(LogRoutes) //Atraves do método Use que chamamos os MidleWare //Executa em todas as rotas, porque primeiro ele roda esse comando depois chama a rota
// app.get('/projects',LogRoutes,(request,response) => {  //Rodar somente pra uma rota especifica 


app.get('/projects',(request,response) => { 
    
    return response.json(projects)  //Lista todos os projetos dentro do array
})     

//Post /Funcionando
app.post('/projects',(request,response) => { 

    const {name,owner} = request.body //Recebe as informações do front end e mostra no backend
    const project = {
        id: id,
        name,
        owner
    }
    projects.push(project)

    if(!name || !owner){ //Responsavel por verificar se não foi passado nada sem valor // (name == null  || owner == null)
        return response.status(400).json({ error: 'Name and Owner are required'})
    } 

    return response.status(201).json(project)
})     

//Put // Funcionando
app.put('/projects/:id',(request,response) => {   //Id é necessário no método put, pois ele precisa entender onde atualizar a informação
    
    // const paramns = request.params  // Recebe os parametros de rota
    const {id} = request.params  // Recebe os parametros de rota
    const {name,owner} = request.body
    
    const projectsIndex = projects.findIndex(p => p.id == id) //Método de arrow function para buscar dentro da variavel p o id, e comparar o id da variavel com o id informado no código
    
    if(projectsIndex < 0 ){
        return response.status(404).json({ error: 'Project not found'})
    }
    // if(!name && !owner){ //Responsavel por verificar se não foi passado nada sem valor // (name == null  && owner == null)
    //     return response.status(400).json({ error: 'Name and Owner are required'})
    // } 
    if(!name || !owner){ //Responsavel por verificar se não foi passado nada sem valor // (name == null  && owner == null)
        return response.status(400).json({ error: 'Name and Owner are required'})
    } 

    const project = {
        id,
        name,
        owner
    }
 
    projects[projectsIndex] = project  //Pega a posição definida pelo projectsIndex e adiciona o objeto novo project
    return response.status(201).json(project)

})     

//Delete
app.delete('/projects/:id',(request,response) => {   //Id é necessário no método put, pois ele precisa entender onde atualizar a informação
    
    const {id} = request.params  // Recebe os parametros de rota
    // const {name,owner} = request.body
    
    const projectsIndex = projects.findIndex(p => p.id == id) //Método de arrow function para buscar dentro da variavel p o id, e comparar o id da variavel com o id informado no código
    
    if(projectsIndex < 0 ){
        return response.status(404).json({ error: 'Project not found'})
    } //Tratativa caso não seja encontrado nada

    if(!id){
        return response.status(404).json({erro:'id are required'})
    }

    projects.splice(projectsIndex,1)

    return response.status(204).send() //Esta sendo enviado como resposta do request o status 204 No content, ou seja, deu certo, mas não tem nada pra retornar 
}) 





//http://localhost:3000/  
//recomendado usar portas acima de 1024, pois portas de 0 a 1023 já são portas reservadas para serviços mais conhecidos

//OBS JavaScript não critica caso você não use ;, tanto faz pra ele 
const port = 3000 //Definição da porta usada para gerar a aplicação

app.listen(port,() => {
    console.log('Server started on port:',port,' ','http://localhost:'+port+'/projects')
})
//Basico com node, criando um servidor HTTP com express

