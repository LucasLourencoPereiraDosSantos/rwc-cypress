/// <reference types="cypress" />

import cypress from "cypress";
import login from "../support/pages/login";

context("Login", () => {
  it("Realizar login com sucesso", () => {
    login.acessarLogin();
    login.preencherFormulario();
    login.submeterFormulario();

    // cypress.isBrowser()
    //verificação
    // if(browser = 'firefox')
    // faz isso
    // else
    // faz aquilo
  });
});
