Teste 2

Aula 1
<!-- const express = require('express') //Importa o express//comando usado para importar uma biblioteca no NodeJs//Express disponibiliza pra gente métodoso/funções para usarmos métodos HTTP

const app = express() // comando usado para definir uma instancia do express (Espaço definido para utilização do express)

app.get('/projects',(request,response) => {  //Ou Function(request,response){}
    // return response.send('Olá mundo') //envio de algo mais simples usamos o send
    return response.json({
        message:'Olá Mundo!!'
    }) // envio de uma estrutura de dados como resposta (Estrutura mais complexa que o send )
})     // Método Get é necessário 2 parametros| 1º parametro: Nome da rota

//http://localhost:3000/  
//recomendado usar portas acima de 1024, pois portas de 0 a 1023 já são portas reservadas para serviços mais conhecidos

//OBS JavaScript não critica caso você não use ;, tanto faz pra ele 
const port = 3000 //Definição da porta usada para gerar a aplicação

app.listen(port,() => {
    console.log('Server started on port:',port)
})
//Basico com node, criando um servidor HTTP com express -->

Aula 2
<!-- const express = require('express') //Importa o express//comando usado para importar uma biblioteca no NodeJs//Express disponibiliza pra gente métodoso/funções para usarmos métodos HTTP

const app = express() // comando usado para definir uma instancia do express (Espaço definido para utilização do express)


//Get
app.get('/projects',(request,response) => { 
    
    const query = request.query  //Variavel responsavel por receber a consulta do método

    return response.json([  //Quando realizado uma consulta será mostrado na tela pelo método response
        'Projeto 1',
        'Projeto 2'
    ]) 
})     

//Post
app.post('/projects',(request,response) => { 
    
    return response.json([  //Quando realizado uma consulta será mostrado na tela pelo método response
        'Projeto 1',
        'Projeto 2',
        'Projeto 3'
    ]) 
})     

//Put
app.put('/projects/:id',(request,response) => {   //Id é necessário no método put, pois ele precisa entender onde atualizar a informação
    
    return response.json([  //Quando realizado uma consulta será mostrado na tela pelo método response
        'Projeto 4',
        'Projeto 2',
        'Projeto 3'
    ]) 
})     

//Delete
app.delete('/projects/:id',(request,response) => {   //Id é necessário no método put, pois ele precisa entender onde atualizar a informação
    
    return response.json([  //Quando realizado uma consulta será mostrado na tela pelo método response
        'Projeto 2',
        'Projeto 3'
    ]) 
}) 





//http://localhost:3000/  
//recomendado usar portas acima de 1024, pois portas de 0 a 1023 já são portas reservadas para serviços mais conhecidos

//OBS JavaScript não critica caso você não use ;, tanto faz pra ele 
const port = 3000 //Definição da porta usada para gerar a aplicação

app.listen(port,() => {
    console.log('Server started on port:',port,' ','http://localhost:'+port+'/projects')
})
//Basico com node, criando um servidor HTTP com express -->

Aula 3
<!-- 
//Get
app.get('/projects',(request,response) => { 
    
    // const query = request.query  //Variavel responsavel por receber a consulta do método
    const {title , owner, page} = request.query  //para funcionar é necessário que seja o mesmo nome que a busca no postman

    // console.log(query)
     console.log(title,owner,page)  


    return response.json([  //Quando realizado uma consulta será mostrado na tela pelo método response
        'Projeto 1',
        'Projeto 2'
    ]) 
})      -->


Aula 4

<!-- app.put('/projects/:id/:name',(request,response) => {   //Id é necessário no método put, pois ele precisa entender onde atualizar a informação
    
    // const paramns = request.params  // Recebe os parametros de rota
    const {id,name} = request.params  // Recebe os parametros de rota

     console.log(id,name)

    return response.json([  //Quando realizado uma consulta será mostrado na tela pelo método response
        'Projeto 4',
        'Projeto 2',
        'Projeto 3'
    ]) 
})      -->

Aula 5 
<!-- app.use(express.json()) //Configurar/Colocar esta linha sempre antes de qualquer rota, pois ele vai rodar esta linha antes de qualquer coisa
    const {name,owner} = request.body //Recebe as informações do front end e mostra no backend
 -->


Aula 6

<!-- const { v4: uuidv4 } = require('uuid');  //Importando dentro do código a biblioteca UUID
const id = uuidv4() //Função que gera o código de identificação unica 
return response.status(204).send() //Esta sendo enviado como resposta do request o status 204 No content, ou seja, deu certo, mas não tem nada pra retornar   -->


Aula 7

<!-- 
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
})  -->

Aula 8
<!-- // MidleWare //Logs
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
 -->

 Aula 9
 
