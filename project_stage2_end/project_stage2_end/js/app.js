
//Aplicativo de lista de tarefas, permite o usuario adicionar tarefa, deletar, editar e marcar as tarefas realizadas

// Metodos usados nessa app 
// * getElemntByID
// * getElementByTagName
// * ParentNode.children
// * Element.querySelector()
// * GlobalEventHandlers.onclick
// * GlobalEventHandlers.onchange


var tarefaInput = document.getElementById("nova-tarefa"); //nova tarefa
var adicionarBotao = document.getElementsByTagName("button")[0]; //botao adicionar
var tarefaIncompletaUL = document.getElementById("tarefas-incompletas"); //tarefas - incompletas
var tarefaCompletaUL= document.getElementById("tarefas-completas"); //tarefas -completas


var criarNovoItem = function(string){

  var itemLista = document.createElement("li"); 
  //Quando clicar no botao adicionar
  //Cada elemento será anexado a lista
  
  //input (checkbox)
  var checkbox = document.createElement("input");// checkbox
    //label
  var label = document.createElement("label");  
    //input (text)
  var editInput = document.createElement("input");//text  
    //button.edit

  var editButton = document.createElement("button");  
    //button.delete

  var deleteButton = document.createElement("button");  

  return itemLista;

}


//Adicionar Item da Lista

var addTarefa = function() {
  console.log("Adicionar Tarefa...");
//Criar um novo item  na lista de tarefas #nova-tarefa 
var itemLista = criarNovoItem(tarefaInput.value); 

   
}

//Editar Tarefa
var editTarefa= function() {
  console.log("Editar tarefa...");
  var itemLista = this.parentNode;  
  
  var editInput = itemLista.querySelector("input[type=text");
  var label = itemLista.querySelector("label");
  //var label = listItem.querySelector("label");
  //Quando clicar no botāo
    //Na classe .editMode
      //Mudanca da classe .editMode
      //label text torna-se input text
    
}

//Deletar Tarefa
var deletarTarefa = function() {
  console.log("Deleta Tarefa...");
var itemLista = this.parentNode;  
  //quando clicar no botao
    //remover item da tag ul
var ul = itemLista.parentNode;    
}

//Marcar uma tarefa Completa
var tarefaCompleta = function() {
  console.log("tarefa Completa...");
  //Quando clicar no checkbox
    //Adicionar item da lista de tarefa para #tarefas-completas
}

//Marcar tarefas incompletas
var tarefaIncompleta = function() {
  console.log("Tarefa incompleta...");
  //Quando checkbox nao tiver marcado
    //Adicionar item da lista de tarefa para #tarefas-incompletas
}

var ligarTarefas = function(itemListaTarefa, checkboxEventHandler){
	//selecione item 
	//ligar o item da lista com o botao editarTarefa
	// ligar o item da lista com o botao deletar
	//ligar checkboxEventHandler com o checkbox
	
}

//Set the click handler to the addTask function
addButton.onclick = addTarefa;

//ciclo de tarefas incompletas do item da lista
	//para cada item da lista
	
	
//ciclo de tarefas completas do item da lista
	//para cada item da lista
	//selecione item 
	//ligar o item da lista com o botao editarTarefa
	// ligar o item da lista com o botao deletar
	//ligar tarefa completa com o checkbox








