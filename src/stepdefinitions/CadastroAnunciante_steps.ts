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
    await anunciante.campoEmail.sendKeys(faker.internet.email());
    await anunciante.campoNome.sendKeys(faker.name.firstName());
    await anunciante.campoSobrenome.sendKeys(faker.name.lastName());
});


Then('clicar em {string}', async (string) => {
    await anunciante.btnSalvar.click();
});


Then('o sistema emite a mensagem {string}', async (string) => {
    let msg: string = await anunciante.msgSucesso.getText();
    expect(msg).to.eq(string);
    browser.takeScreenshot().then(function (png) {
        scr.writeScreenShot(png, 'images/Sucesso.png');
    });

});