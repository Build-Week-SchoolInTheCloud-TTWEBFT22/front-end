describe("Cloud App", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000")
    });

    const usernameInput = () => cy.get('input[name="username"]');
    const passwordInput = () => cy.get('input[name="password"]')
    const loginButton = () => cy.get(".login");
    const createButton = () => cy.get(".create");
    const studentInput = () => cy.get('input[value="student"]');
    const volunteerInput = () => cy.get('input[value="volunteer"]');
    const adminInput = () => cy.get('input[value="admin"]');

    it("sanity test", () => {
        expect(1 + 2).to.equal(3);
        expect(2 + 2).not.to.equal(5);
    });

    it("can type in the inputs", () => {
        usernameInput()
          .should("have.value", "")
          .type("SlothMode")
          .should("have.value", "SlothMode");
        passwordInput()
          .should("have.value", "")
          .type("saltypopcorn")
          .should("have.value", "saltypopcorn");
      });

    it("the proper elements are showing on the screeen", () => {
        loginButton().should("exist");
        createButton().should("exist");
      });

    it("login button disabled with both inputs filled out", () => {
        loginButton().should("be.disabled");
        usernameInput().type("USERNAME INPUT");
        loginButton().should("be.disabled");
        usernameInput().clear();
        passwordInput().type("PASSWORD INPUT");
        loginButton().should("be.disabled");
      });

    it("login button works with student", () => {
        loginButton().should("be.disabled");
        usernameInput().type("USERNAME INPUT");
        passwordInput().type("PASSWORD INPUT");
        loginButton().should("not.be.disabled");
        studentInput().check();
        loginButton().should('be.disabled');
      })

      it("login button works with volunteer", () => {
        loginButton().should("be.disabled");
        usernameInput().type("USERNAME INPUT");
        passwordInput().type("PASSWORD INPUT");
        loginButton().should("not.be.disabled");
        volunteerInput().check();
        loginButton().should('be.disabled');
      })

      it("login button works with administrator", () => {
        loginButton().should("be.disabled");
        usernameInput().type("USERNAME INPUT");
        passwordInput().type("PASSWORD INPUT");
        loginButton().should("not.be.disabled");
        adminInput().check();
        loginButton().should('be.disabled');
      })
})