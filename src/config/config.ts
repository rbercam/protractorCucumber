import * as path from "path";
import { browser, Config } from "protractor";
import { Reporter } from "../support/reporter";
const jsonReports = process.cwd() + "/reports/json";
export const config: Config = {
    
    seleniumAddress: "http://127.0.0.1:2222/wd/hub",

    SELENIUM_PROMISE_MANAGER: false,

    baseUrl: "https://demodirectory.com.br/sitemgr/login.php",

    capabilities: {
        browserName: "chrome",      
    },

    framework: "custom",
    frameworkPath: require.resolve("protractor-cucumber-framework"),

    specs: [
        "../../features/*.feature",
    ],

    onPrepare: () => {
        browser.ignoreSynchronization = true;
        browser.manage().window().maximize();
        Reporter.createDirectory(jsonReports);
    },

    cucumberOpts: {
        compiler: "ts:ts-node/register",
        format: "json:./reports/json/cucumber_report.json",
        require: ["../../build/stepdefinitions/*.js", "../../build/support/*.js"],
        strict: true,
        tags: "@LoginAplicacao or @CadastroAnunciante or @ConsultaAnunciante",
    },
    // Here the magic happens
    plugins: [{
        package: 'protractor-multiple-cucumber-html-reporter-plugin',
        options:{
            jsonDir: `${process.cwd()}/reports`,
            reportPath: `${process.cwd()}/reports/multipleReport`,
            automaticallyGenerateReport: true,
            removeExistingJsonReportFile: true,
            pageFooter: "MOBI Payments",
            metadataKey: "capabilities",
            customData: {
                title: 'Sobre o Projeto',
                data: [
                    {label: 'Projeto', value: 'edirectory'},
                    {label: 'Release', value: '1.2.3'},
                    {label: 'CI', value: 'CI05'},
                    {label: 'QA' , value: 'Rafael Berçam'},
                    {label: 'FrameWork' , value: 'Protractor-TS'}
                ]
            },
            capabilities: {
                browserName: 'chrome',
                chromeOptions: {
                    args: ['disable-infobars']
                },
                // Add this
                metadata: {
                    browser: {
                        name: 'chrome',
                        version: '58'
                    },
                    device: 'MacBook Pro 15',
                    platform: {
                        name: 'OSX',
                        version: '10.12.6'
                    }
                }
            },
            displayDuration: true,
            durationInMS: true,
            openReportInBrowser: true,
            pageTitle: "Relatório BDD",
            reportName: "Relatório Automação de Testes (BDD)"
           
        }
    }],
   
    onComplete: () => {
        Reporter.createHTMLReport();
    },
};