/// <reference types="cypress" />

import articles from "../support/pages/articless";
import routes from "../support/routes";
import Routes from "../support/routes";

context("Publicação", () => {
  beforeEach(() => {
    routes.init();
    cy.backgroundLogin();
    articles.acessarFormularioDeNovapublicacao();
  });

  it("Criar uma nova publicação", () => {
    // Ação
    articles.preencherFormulario();
    articles.submetePublicacao();

    // Verificação
    articles.verificarSeAPublicacaoFoiCriadaComSucesso();
  });
});
