import { browser, by, element } from 'protractor/built';

describe("Person update", () => {
    beforeEach(() => {
        browser.get("/");
    });

    it("should show three person when we first load the app", () => {
        let persons = element.all(by.css(".person-table .person"));

        expect(persons.count()).toBe(3);
    });

    // it("should show the first persons detail page", () => { });

    // it("should update the first persons firstname", () => { });

});