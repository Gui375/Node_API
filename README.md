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
