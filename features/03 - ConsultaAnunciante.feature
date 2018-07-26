#language: pt
@ConsultaAnunciante
Funcionalidade: Consultar anunciante cadastrado

Cenário: Realizar consulta de anunciante cadastrado.
    Dado a tela de consulta de contas de anunciantes
    Quando digitar o nome do anunciante cadastrado
    E clicar no botão Buscar
    Então o cadastro do anunciante deve ser exibido na listagem