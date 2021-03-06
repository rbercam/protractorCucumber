import { browser, protractor, ExpectedConditions } from "protractor";
import { Painel } from '../pages/Painel_pages'
import chai = require('chai')
import { Anunciante } from "../pages/Anunciante_pages";
import faker = require('faker');
import { Screeshot } from "../support/attach";
chai.use(require('chai-smoothie'))
const expect = chai.expect;
const should = chai.should();
const assert = chai.assert;

const {Given, When, Then} = require("cucumber")
const painel: Painel = new Painel();
const anunciante: Anunciante = new Anunciante();
const scr = new Screeshot();
let firstName: string;
let lastName: string;
let email: string;

Given('o Painel inicial', async () => {
    let label:string = await painel.btnPainel.getText();
    expect(label).to.eq('Painel');
});


When('clicar na opção {string}', async (string) => {
    await painel.contas.click();
});


Then('o sistema redireciona para a tela de Contas', async () => {
    let label: string = await anunciante.menuAnunciante.getText();
    expect(label).to.equals('Contas de Anunciantes')
});


Then('quando clicar para adicionar um novo anunciante', async () => {
    await anunciante.btnAdicionar.click();
});


Then('o sistema abre a tela {string}', async (string) => {
    let labelAdicionar: string = await anunciante.labelAdicionar.getText();
    expect(labelAdicionar).to.eq(string);

});


Then('quando eu preencher os campos do cadastro', async () => {
     firstName =  faker.name.firstName();
     lastName =  faker.name.lastName();
     email = `${firstName}.${lastName}@email.com`
    await anunciante.campoEmail.sendKeys(email.toLocaleLowerCase());
    await anunciante.campoNome.sendKeys(firstName);
    await anunciante.campoSobrenome.sendKeys(lastName);
});


Then('clicar em {string}', async (string) => {
    await anunciante.btnSalvar.click();
});


Then('o sistema emite a mensagem {string}', async (string) => {
    let msg: string = await anunciante.msgSucesso.getText();
    expect(msg).to.eq(string);
});

Given('a tela de consulta de contas de anunciantes', async () => {
    await anunciante.menuContasAnunciantes.click();

});


When('digitar o nome do anunciante cadastrado', async () => {
    await anunciante.campoPesquisa.sendKeys(firstName)
    await anunciante.campoPesquisa.submit();
});

When('clicar no botão Buscar', async () => {
    await anunciante.btnBuscar.click();
});

Then('o cadastro do anunciante deve ser exibido na listagem', async () => {
       await anunciante.primeiroRegistro.click();
});