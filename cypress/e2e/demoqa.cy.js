import { PracticeFormPage } from "../pageObjects/PracticeFormPage";

describe("Demoqa", ()=> {
    context("Final Task Scenarios", ()=> {
        beforeEach(() => {
            PracticeFormPage.visit();
        });

        it("Fill Out the Form - Positive Test scenario", ()=> {

            const path = "cypress/files/";

            //User Info
            const name = "John";
            const lastname = "Doe";
            const email = "example@email.com";
            const number = "1234567891";
            const subjects = "Economics";
            const gender = "Male";
            const hobbies = "Music";
            const pictureName = "picture.png";
            const stateCityText = "NCR Delhi";
            

            //Date info
            const day = "28";
            const month = "February";
            const year = "1930";
            const dateText = day + " " + month + "," + year;

            PracticeFormPage.firstnameField.type(name);
            PracticeFormPage.lastnameField.type(lastname);
            PracticeFormPage.emailField.type(email);
            PracticeFormPage.maleRadioButton.click({force: true});
            PracticeFormPage.numberField.type(number);
            PracticeFormPage.calendarWidget.click();
            PracticeFormPage.monthContainer.select(month);
            PracticeFormPage.yearContainer.select(year);
            PracticeFormPage.dayContainer.contains(day).click();
            PracticeFormPage.subjectsField.type(subjects);
            PracticeFormPage.subjectsAutocomplete.contains(subjects).click();
            PracticeFormPage.musicRadioButton.click({force: true});
            PracticeFormPage.chooseFileButton.selectFile(path + pictureName);
            PracticeFormPage.stateDropdownMenu.click();
            PracticeFormPage.nrcOption.click();
            PracticeFormPage.cityDropdownMenu.click();
            PracticeFormPage.delhiOption.click();
            PracticeFormPage.submitButton.click();

            checkTableRow("Student Name", name + " " + lastname);
            checkTableRow("Student Email", email);
            checkTableRow("Gender", gender);
            checkTableRow("Mobile", number);
            checkTableRow("Date of Birth", dateText);
            checkTableRow("Subjects", subjects);
            checkTableRow("Hobbies", hobbies);
            checkTableRow("Picture", pictureName);
            checkTableRow("State and City", stateCityText);

        });
    });
});

function checkTableRow(labelText, expectedText) {
    PracticeFormPage.tableBody.contains("td", labelText)
        .parent("tr")
        .within(()=> {
            cy.get("td").eq(1).should("contain.text", expectedText);
        });
}