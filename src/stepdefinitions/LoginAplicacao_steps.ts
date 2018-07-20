import { browser, protractor } from "protractor";
import { LoginAPlicacao } from "../pages/LoginAplicacao_page";
import chai = require('chai')
chai.use(require('chai-smoothie'))
const expect = chai.expect;
const should = chai.should();
const assert = chai.assert;

const {Given, When, Then} = require("cucumber")

const login: LoginAPlicacao = new LoginAPlicacao();

Given('o endereço da apĺicação', async () => {
//abstraído pelo config.ts    
});

When('clicar no botão {string}', async (string) => {
    await login.btnEntre.click();
});

Then('o sistema deve apresentar o Painel', async () => {
    let texto:string = await login.labelPainel.getText();
    texto.should.contains('ATIVIDADES DA LINHA DO TEMPO');
    expect(texto).to.contains('ATIVIDADES DA LINHA DO TEMPO')
    assert.exists(texto,'ATIVIDADES DA LINHA DO TEMPO')
});