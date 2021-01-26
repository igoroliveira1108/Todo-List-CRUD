/* Melhorias: 

Salvar dados no local storage.

*/

// Seletores Globais

let input = document.getElementById('tarefa');
let btnAdd = document.querySelector(".btnadd");
let lista = document.querySelector(".lista-tarefas");
let yesRes = document.querySelector('.resyes')
let noRes = document.querySelector('.resno')

// Eventos

btnAdd.addEventListener('click', adicionarTarefa);


// Funções 
function adicionarTarefa(event){

      // Não deixar o formulário submeter
      event.preventDefault(event);
    
        // Fazer verificação input vazio
            if (input.value === ''){
                // jQuery
                    $(noRes).fadeIn().text('Você deve digitar algo.')
                    setTimeout(() => {
                        $(noRes).hide();
                    }, 2000);
                    return false;
            } else {
                //jQuery
                    $(yesRes).fadeIn().text("Adicionado com sucesso") 
                    setTimeout(() => {
                        $(yesRes).hide();
                    }, 2000);
                    adicionarTarefa;
            }



        // Criar Div
        let divTarefa = document.createElement("div");
        divTarefa.classList.add("tarefa");
    
        // Criar LI
        let novaTarefa = document.createElement("div");
        novaTarefa.innerText = input.value;
        novaTarefa.classList.add("nova-tarefa");
        divTarefa.appendChild(novaTarefa);
    
        // Criar botão remover
        let botaoRemover = document.createElement('button');
        botaoRemover.innerHTML = 'Remover';
        botaoRemover.classList.add("btn-remover");
        divTarefa.appendChild(botaoRemover);
    
         // Criar botão edit
         let botaoEditar = document.createElement('button');
         botaoEditar.innerHTML = 'Editar';
         botaoEditar.classList.add("btn-editar");
         divTarefa.appendChild(botaoEditar);
    
        // Colocar divTarefa dentro da lista
    
        lista.appendChild(divTarefa);
    
        // Limpar input após adicionar
    
        input.value = "";
       
        botaoRemover.addEventListener('click', removerTarefa);
        function removerTarefa(){
            divTarefa.remove();
            $(noRes).fadeIn().text('Removido com sucesso.')
            setTimeout(() => {
                $(noRes).hide()
            }, 2000);
        }
    
    
        // Fazer função de editar e finalizar 
        botaoEditar.addEventListener('click', editarTarefa);
        function editarTarefa(){
                const fimEdicao = document.createElement('button');
                fimEdicao.classList.add('btn-fimEdicao');
                fimEdicao.innerHTML = 'Finalizar' 
                divTarefa.appendChild(fimEdicao);
                novaTarefa.contentEditable = true;
                novaTarefa.focus();
                $(botaoEditar).hide();
            
                // Função Fim Edição
                fimEdicao.addEventListener('click', endEdit);
                function endEdit(){
    
                    if(novaTarefa.innerHTML === ''){
                        $(noRes).fadeIn().text("Não pode deixar o campo vazio.");
                        setTimeout(() => {
                            $(noRes).hide();
                        }, 2000);
                    } else {
                        $(yesRes).fadeIn().text("Editado com sucesso.");
                        setTimeout(() => {
                            $(yesRes).hide();
                        }, 2000);
                        novaTarefa.contentEditable = false;
                        fimEdicao.remove();
                        $(botaoEditar).show();
                    }
                    
                }
        }           
    }   

        





