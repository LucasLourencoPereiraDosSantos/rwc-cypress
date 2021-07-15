const el = require("./elements").ELEMENTS;

class Cadastro {
  realizarCadastro() {
    //acessar a tela de login
    cy.visit("register");
  }

  preencherFormulario() {
    //preencher o formulario
    cy.get(el.inputName).type(faker.name.firstName() + faker.name.lastName());
    cy.get(el.inputEmail).type(faker.internet.email());
    cy.get(el.inputPassword).type("12345678");
  }

  submeterFormulario() {
    //submeter o formulario
    cy.get(el.buttonSubmit).click();
  }
}

export default new Cadastro();
