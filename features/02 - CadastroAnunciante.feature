#language: pt
@CadastroAnunciante

Funcionalidade: Cadastrar um novo anunciante no sistema

Cenário: Cadastrar um novo anunciante
    Dado o Painel inicial
    Quando clicar na opção "Anunciantes"
    Então o sistema redireciona para a tela de Contas
    E quando clicar para adicionar um novo anunciante
    Então o sistema abre a tela "Adicionar novo Anunciante"
    E quando eu preencher os campos do cadastro
    E clicar em "Salvar"
    Então o sistema emite a mensagem "Conta adicionada com sucesso!"