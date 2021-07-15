/// <reference types="cypress" />

import routes from "../../routes";

const faker = require("faker");

const el = require("./elements").ELEMENTS;

class Articles {
  acessarFormularioDeNovapublicacao() {
    cy.get(el.linkNovaPublicacao).click();
  }

  preencherFormulario() {
    // preencher o formulario do artigo
    cy.get(el.inputTitle).type("agilizei Title");
    cy.get(el.inputDescription).type("Cypress");
    cy.get(el.textAreaContent).type(faker.lorem.paragraph());
    cy.get(el.inputTags).type("cypress");
  }

  submetePublicacao() {
    cy.get(el.buttonSubmit).click();
  }

  verificarSeAPublicacaoFoiCriadaComSucesso() {
    // temolate string
    cy.wait(`@${routes.as.postArticles}`).then((postArticlesResponse) => {
      expect(postArticlesResponse.status).to.eq(200);
    });
    cy.wait(`@${routes.as.getArticlesTitle}`).then((postArticlesTitle) => {
      expect(postArticlesTitle.status).to.eq(200);
    });
    cy.wait(`@${routes.as.getArticlesTitleComments}`).then(
      (postArticlesTitleComments) => {
        expect(postArticlesTitleComments.status).to.eq(200);
      }
    );
  }
}

export default new Articles();
