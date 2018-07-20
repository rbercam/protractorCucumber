import { $, ElementFinder, element, by } from "protractor";
import { build$ } from "protractor/built/element";

export class LoginAPlicacao {
    public btnEntre: ElementFinder;
    public labelPainel: ElementFinder;
    

    constructor() {
        this.btnEntre = element(by.buttonText('Entre'))
        this.labelPainel = element(by.css('body > main > div > section.timeline > div.timeline-control > div.tml-heading > h2'))
    }
}