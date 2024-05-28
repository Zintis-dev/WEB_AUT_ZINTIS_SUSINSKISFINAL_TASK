import { BasePage } from "./BasePage";

export class PracticeFormPage extends BasePage {
    static get url() {
        return "/automation-practice-form";
    }

    static get firstnameField() {
        return cy.get("[id='firstName']");
    }

    static get lastnameField() {
        return cy.get("[id='lastName']");
    }

    static get emailField() {
        return cy.get("[id='userEmail']");
    }

    static get maleRadioButton() {
        return cy.get("input[value='Male']");
    }

    static get numberField() {
        return cy.get("[id='userNumber']");
    }

    static get calendarWidget() {
        return cy.get("[id='dateOfBirthInput']");
    }

    static get dayContainer() {
        return cy.get(".react-datepicker__day").not(".react-datepicker__day--outside-month");
    }

    static get monthContainer() {
        return cy.get("[class='react-datepicker__month-select']");
    }

    static get yearContainer() {
        return cy.get("[class='react-datepicker__year-select']");
    }

    static get subjectsField() {
        return cy.get("[id='subjectsInput']");
    }

    static get subjectsAutocomplete() {
        return cy.get(".subjects-auto-complete__menu-list");
    }

    static get musicRadioButton() {
        return cy.get("[id='hobbies-checkbox-3']")
    }

    static get chooseFileButton() {
        return cy.get("input[type=file");
    }

    static get stateDropdownMenu() {
        return cy.get("[id='state']");
    }
    
    static get stateContainer() {
        return cy.get("[class=' css-11unzgr']");
    }

    static get nrcOption() {
        return cy.get("[id='react-select-3-option-0']");
    }

    static get cityDropdownMenu() {
        return cy.get("[id='city']");
    }

    static get delhiOption() {
        return cy.get("[id='react-select-4-option-0']");
    }

    static get submitButton() {
        return cy.get("[id='submit']");
    }

    static get tableBody() {
        return cy.get("tbody");
    }

}
