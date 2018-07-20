import { $, ElementFinder, element, by } from "protractor";
import { build$ } from "protractor/built/element";

export class Painel {
    public navUser: ElementFinder;
    public contas: ElementFinder;
    public btnPainel: ElementFinder;
    
    

    constructor() {
        this.navUser = element(by.css('#navUser > span > i'))
        this.contas = element(by.css('body > main > div > section.row.panels > div:nth-child(4) > a')) 
        this.btnPainel=  element(by.id('navDashboard'))
    }
}