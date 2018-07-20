import { $, ElementFinder, element, by } from "protractor";
import { build$ } from "protractor/built/element";

export class Anunciante {
    public btnAdicionar: ElementFinder;
    public campoEmail: ElementFinder;
    public campoNome: ElementFinder;
    public campoSobrenome: ElementFinder;
    public btnSalvar: ElementFinder;
    public menuAnunciante: ElementFinder;
    public labelAdicionar: ElementFinder;
    public msgSucesso: ElementFinder;
    

    constructor() {
        this.btnAdicionar = element(by.css('#view-content-list > div.content-control > div > div.col-md-3.col-sm-12.control-add > div > a'))
        this.campoEmail = element(by.id('username'))
        this.campoNome = element(by.id('first_name'))
        this.campoSobrenome = element(by.id('last_name'))
        this.btnSalvar = element(by.css('body > main > form > section.row.footer-action > div > div > div > button'))
        this.menuAnunciante = element(by.css('#sidebar > div > ul > li.active > a'))
        this.labelAdicionar = element(by.css('body > main > form > section.row.heading > div > div > h1'))
        this.msgSucesso = element(by.css('body > main > form > div > h4'))
    }
}