'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('courses', [
      {
        "name": "Como Planejar o seu Negócio",
        "description": "Conheça os aspectos do planejamento que servem como pontos norteadores para a atividade empreendedora e aprenda a aplicar as etapas para alcançar seus objetivos e metas.",
        "link": "https://meuatendimento.sebrae.com.br/sites/PortalSebrae/cursosonline/como-planejar-o-seu-negocio,9501b8a6a28bb610VgnVCM1000004c00210aRCRD",
        "thumb": "https://meuatendimento.sebrae.com.br/Sebrae/Portal%20Sebrae/Banner/Thumb%20-%20Como%20planejar%20o%20meu%20neg%C3%B3cio.png",
        "category_id": 1,
        "created_at": new Date(),
        "updated_at": new Date(),
      }, 
      {
        "name": "Como Expandir seu Negócio",
        "description": "Conhecer os direitos e deveres do Microempreendedor Individual e da Microempresa, identificando as diferenças entre o MEI e a ME.",
        "link": "https://meuatendimento.sebrae.com.br/sites/PortalSebrae/cursosonline/como-expandir-seu-negocio,6468b71da3b00710VgnVCM1000004c00210aRCRD",
        "thumb": "https://meuatendimento.sebrae.com.br/Sebrae/Portal%20Sebrae/Imagens%20SebraeNA/[Planejamento]%20Curso-Como%20Expandir%20seu%20Nego%CC%81cio-Thumb-464x387.png",
        "category_id": 1,
        "created_at": new Date(),
        "updated_at": new Date(),
      },
      {
        "name": "Estratégia Financeira para o Crescimento",
        "description": "Expandir exige planejamento e estratégia. Veja neste curso como elaborar um plano econômico e como identificar o capital necessário para o crescimento da empresa.",
        "link": "https://meuatendimento.sebrae.com.br/sites/PortalSebrae/cursosonline/estrategia-financeira-para-o-crescimento,7bd0b8a6a28bb610VgnVCM1000004c00210aRCRD",
        "thumb": "https://meuatendimento.sebrae.com.br/Sebrae/Portal%20Sebrae/Imagens%20SebraeNA/Estrat%C3%A9gia%20financeira%20para%20o%20crescimento.png",
        "category_id": 2,
        "created_at": new Date(),
        "updated_at": new Date(),
      },
      {
        "name": "Liderança: Como Desenvolver Times de Alta Performance",
        "description": "Você é líder de si mesmo? E dos outros? Aprenda nesse curso como se tornar um líder e conheça as ferramentas necessárias para desenvolver e engajar sua equipe.",
        "link": "https://meuatendimento.sebrae.com.br/sites/PortalSebrae/cursosonline/lideranca-como-desenvolver-times-de-alta-performance,f990b8a6a28bb610VgnVCM1000004c00210aRCRD",
        "thumb": "https://meuatendimento.sebrae.com.br/Sebrae/Portal%20Sebrae/Imagens%20SebraeNA/08-Lideran%C3%A7a%20como%20desenvolver%20times%20de%20alta%20performance.png",
        "category_id": 3,
        "created_at": new Date(),
        "updated_at": new Date(),
      }
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('courses', null, {});
  }
};
