const express = require('express') //Importa o express//comando usado para importar uma biblioteca no NodeJs//Express disponibiliza pra gente métodoso/funções para usarmos métodos HTTP

const app = express() // comando usado para definir uma instancia do express (Espaço definido para utilização do express)
app.use(express.json()) //Configurar/Colocar esta linha sempre antes de qualquer rota, pois ele vai rodar esta linha antes de qualquer coisa

//Get
app.get('/projects',(request,response) => { 
    
    // const query = request.query  //Variavel responsavel por receber a consulta do método
    const {title , owner, page} = request.query  //para funcionar é necessário que seja o mesmo nome que a busca no postman

    // console.log(query)
     console.log(title,owner,page)  //Log onde mostra os query paramns // Esses parametros tem que estar na documentação, pois caso ele consuma sua API é necessário ter uma, para configurar corretmente


    return response.json([  //Quando realizado uma consulta será mostrado na tela pelo método response
        'Projeto 1',
        'Projeto 2'
    ]) 
})     

//Post
app.post('/projects',(request,response) => { 

    const {name,owner} = request.body //Recebe as informações do front end e mostra no backend

    console.log(name,owner)


    return response.json([  //Quando realizado uma consulta será mostrado na tela pelo método response
        'Projeto 1',
        'Projeto 2',
        'Projeto 3'
    ]) 
})     

//Put
app.put('/projects/:id',(request,response) => {   //Id é necessário no método put, pois ele precisa entender onde atualizar a informação
    
    // const paramns = request.params  // Recebe os parametros de rota
    const id = request.params  // Recebe os parametros de rota
    const body = request.body
     console.log(id,body)

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
//Basico com node, criando um servidor HTTP com express

