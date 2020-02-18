'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('courses', [{
                "name": "Internacionalização de Startups",
                "link": "https://www.sebrae.com.br/sites/PortalSebrae/cursosonline/internacionalizacao-de-startups,e92f4ac1a947d610VgnVCM1000004c00210aRCRD",
                "description": "",
                "thumb": "https://www.sebrae.com.br/Sebrae/Portal Sebrae/EAD2/Thumb EAD2/Internacionalização de Startups.png",
                "category_id": 5,
                "created_at": new Date(),
                "updated_at": new Date()
            },
            {
                "name": "Como criar um modelo de negócio de impacto socioambiental",
                "link": "https://www.sebrae.com.br/sites/PortalSebrae/cursosonline/como-criar-um-modelo-de-negocio-de-impacto-socioambiental,9017707cb6d6c610VgnVCM1000004c00210aRCRD",
                "description": "",
                "thumb": "https://www.sebrae.com.br/Sebrae/Portal Sebrae/EAD2/Thumb EAD2/Como criar um modelo de negócio de impacto socioambiental.png",
                "category_id": 5,
                "created_at": new Date(),
                "updated_at": new Date()
            },
            {
                "name": "Como Expandir seu Negócio",
                "link": "https://www.sebrae.com.br/sites/PortalSebrae/cursosonline/como-expandir-seu-negocio,6468b71da3b00710VgnVCM1000004c00210aRCRD",
                "description": "",
                "thumb": "https://www.sebrae.com.br/Sebrae/Portal Sebrae/Imagens SebraeNA/[Planejamento] Curso-Como Expandir seu Negócio-Thumb-464x387.png",
                "category_id": 4,
                "created_at": new Date(),
                "updated_at": new Date()
            },
            {
                "name": "Como Vender pela Internet",
                "link": "https://www.sebrae.com.br/sites/PortalSebrae/cursosonline/como-vender-pela-internet,d7e0b8a6a28bb610VgnVCM1000004c00210aRCRD",
                "description": "",
                "thumb": "https://www.sebrae.com.br/Sebrae/Portal Sebrae/Imagens SebraeNA/EADComo vender pela internet.png",
                "category_id": 5,
                "created_at": new Date(),
                "updated_at": new Date()
            },
            {
                "name": "Como Planejar o seu Negócio",
                "link": "https://www.sebrae.com.br/sites/PortalSebrae/cursosonline/como-planejar-o-seu-negocio,9501b8a6a28bb610VgnVCM1000004c00210aRCRD",
                "description": "",
                "thumb": "https://www.sebrae.com.br/Sebrae/Portal Sebrae/Banner/Thumb - Como planejar o meu negócio.png",
                "category_id": 1,
                "created_at": new Date(),
                "updated_at": new Date()
            },
            {
                "name": "Expansão - a estratégia de crescimento certa para seu negócio",
                "link": "https://www.sebrae.com.br/sites/PortalSebrae/cursosonline/expansao-a-estrategia-de-crescimento-certa-para-seu-negocio,2401b8a6a28bb610VgnVCM1000004c00210aRCRD",
                "description": "",
                "thumb": "https://www.sebrae.com.br/Sebrae/Portal Sebrae/Imagens SebraeNA/06-Expansão - a estratégia de crescimento certa para seu negócio.png",
                "category_id": 1,
                "created_at": new Date(),
                "updated_at": new Date()
            },
            {
                "name": "Liderança: Como Desenvolver Times de Alta Performance",
                "link": "https://www.sebrae.com.br/sites/PortalSebrae/cursosonline/lideranca-como-desenvolver-times-de-alta-performance,f990b8a6a28bb610VgnVCM1000004c00210aRCRD",
                "description": "",
                "thumb": "https://www.sebrae.com.br/Sebrae/Portal Sebrae/Imagens SebraeNA/08-Liderança como desenvolver times de alta performance.png",
                "category_id": 1,
                "created_at": new Date(),
                "updated_at": new Date()
            },
            {
                "name": "Planejamento Estratégico para Empreendedores",
                "link": "https://www.sebrae.com.br/sites/PortalSebrae/cursosonline/planejamento-estrategico-para-empreendedores,5580b8a6a28bb610VgnVCM1000004c00210aRCRD",
                "description": "",
                "thumb": "https://www.sebrae.com.br/Sebrae/Portal Sebrae/Imagens SebraeNA/09- Planejamento Estratégico para Empreendedores.png",
                "category_id": 3,
                "created_at": new Date(),
                "updated_at": new Date()
            },
            {
                "name": "Acesso a Capital para Startups",
                "link": "https://www.sebrae.com.br/sites/PortalSebrae/cursosonline/acesso-a-capital-para-startups,80b566e1bbbff610VgnVCM1000004c00210aRCRD",
                "description": "",
                "thumb": "https://www.sebrae.com.br/Sebrae/Portal Sebrae/Imagens SebraeNA/[Inovação] Curso-Acesso a Capital para Startups -Thumb-464x387.png",
                "category_id": 1,
                "created_at": new Date(),
                "updated_at": new Date()
            },
            {
                "name": "Estratégia Financeira para o Crescimento",
                "link": "https://www.sebrae.com.br/sites/PortalSebrae/cursosonline/estrategia-financeira-para-o-crescimento,7bd0b8a6a28bb610VgnVCM1000004c00210aRCRD",
                "description": "",
                "thumb": "https://www.sebrae.com.br/Sebrae/Portal Sebrae/Imagens SebraeNA/Estratégia financeira para o crescimento.png",
                "category_id": 6,
                "created_at": new Date(),
                "updated_at": new Date()
            },
            {
                "name": "Modelagem Financeira para Startups",
                "link": "https://www.sebrae.com.br/sites/PortalSebrae/cursosonline/modelagem-financeira-para-startups,88cdb71da3b00710VgnVCM1000004c00210aRCRD",
                "description": "",
                "thumb": "https://www.sebrae.com.br/Sebrae/Portal Sebrae/Imagens SebraeNA/[Inovação] Curso-Modelagem Financeira para Startups-Thumb-464x387 .png",
                "category_id": 6,
                "created_at": new Date(),
                "updated_at": new Date()
            },
            {
                "name": "Marketing Digital para o Empreendedor",
                "link": "https://www.sebrae.com.br/sites/PortalSebrae/cursosonline/marketing-digital-para-o-empreendedor,f870b8a6a28bb610VgnVCM1000004c00210aRCRD",
                "description": "",
                "thumb": "https://www.sebrae.com.br/Sebrae/Portal Sebrae/Imagens SebraeNA/EADMarketing digital para o empreendedor_.png",
                "category_id": 5,
                "created_at": new Date(),
                "updated_at": new Date()
            },
            {
                "name": "Gestão Financeira",
                "link": "https://www.sebrae.com.br/sites/PortalSebrae/cursosonline/gestao-financeira,7370b8a6a28bb610VgnVCM1000004c00210aRCRD",
                "description": "",
                "thumb": "https://www.sebrae.com.br/Sebrae/Portal Sebrae/Imagens SebraeNA/Gestão financeira.png",
                "category_id": 2,
                "created_at": new Date(),
                "updated_at": new Date()
            },
            {
                "name": "Aprender a Empreender",
                "link": "https://www.sebrae.com.br/sites/PortalSebrae/cursosonline/aprender-a-empreender,b070b8a6a28bb610VgnVCM1000004c00210aRCRD",
                "description": "",
                "thumb": "https://www.sebrae.com.br/Sebrae/Portal Sebrae/Imagens SebraeNA/empreendedorismo - Aprender a empreender.png",
                "category_id": 4,
                "created_at": new Date(),
                "updated_at": new Date()
            },
            {
                "name": "Boas Práticas nos Serviços de Alimentação",
                "link": "https://www.sebrae.com.br/sites/PortalSebrae/cursosonline/bpsa-boas-praticas-nos-servicos-de-alimentacao,d470b8a6a28bb610VgnVCM1000004c00210aRCRD",
                "description": "",
                "thumb": "https://www.sebrae.com.br/Sebrae/Portal Sebrae/Imagens SebraeNA/Boas práticas nos serviços de alimentação.png",
                "category_id": 7,
                "created_at": new Date(),
                "updated_at": new Date()
            },
            {
                "name": "Atendimento ao cliente",
                "link": "https://www.sebrae.com.br/sites/PortalSebrae/cursosonline/atendimento-ao-cliente,fe80b8a6a28bb610VgnVCM1000004c00210aRCRD",
                "description": "",
                "thumb": "https://www.sebrae.com.br/Sebrae/Portal Sebrae/Imagens SebraeNA/EADAtendimento ao cliente.png",
                "category_id": 5,
                "created_at": new Date(),
                "updated_at": new Date()
            },
            {
                "name": "Gestão de Pessoas",
                "link": "https://www.sebrae.com.br/sites/PortalSebrae/cursosonline/gestao-de-pessoas,eda0b8a6a28bb610VgnVCM1000004c00210aRCRD",
                "description": "",
                "thumb": "https://www.sebrae.com.br/Sebrae/Portal Sebrae/Imagens SebraeNA/07-Gestao de Pessoas.png",
                "category_id": 3,
                "created_at": new Date(),
                "updated_at": new Date()
            },
            {
                "name": "Como Vender pela Internet",
                "link": "https://www.sebrae.com.br/sites/PortalSebrae/cursosonline/como-vender-pela-internet,d7e0b8a6a28bb610VgnVCM1000004c00210aRCRD",
                "description": "",
                "thumb": "https://www.sebrae.com.br/Sebrae/Portal Sebrae/Imagens SebraeNA/EADComo vender pela internet.png",
                "category_id": 5,
                "created_at": new Date(),
                "updated_at": new Date()
            },
            {
                "name": "Liderança: Como Desenvolver Times de Alta Performance",
                "link": "https://www.sebrae.com.br/sites/PortalSebrae/cursosonline/lideranca-como-desenvolver-times-de-alta-performance,f990b8a6a28bb610VgnVCM1000004c00210aRCRD",
                "description": "",
                "thumb": "https://www.sebrae.com.br/Sebrae/Portal Sebrae/Imagens SebraeNA/08-Liderança como desenvolver times de alta performance.png",
                "category_id": 3,
                "created_at": new Date(),
                "updated_at": new Date()
            },
            {
                "name": "Como Planejar o seu Negócio",
                "link": "https://www.sebrae.com.br/sites/PortalSebrae/cursosonline/como-planejar-o-seu-negocio,9501b8a6a28bb610VgnVCM1000004c00210aRCRD",
                "description": "",
                "thumb": "https://www.sebrae.com.br/Sebrae/Portal Sebrae/Banner/Thumb - Como planejar o meu negócio.png",
                "category_id": 1,
                "created_at": new Date(),
                "updated_at": new Date()
            },
            {
                "name": "Iniciando um Pequeno Grande Negócio",
                "link": "https://www.sebrae.com.br/sites/PortalSebrae/cursosonline/iniciando-um-pequeno-grande-negocio,5f60b8a6a28bb610VgnVCM1000004c00210aRCRD",
                "description": "",
                "thumb": "https://www.sebrae.com.br/Sebrae/Portal Sebrae/Imagens SebraeNA/empreendedorismo - Iniciando um pequeno grande negócio.png",
                "category_id": 4,
                "created_at": new Date(),
                "updated_at": new Date()
            },
            {
                "name": "Estratégia Financeira para o Crescimento",
                "link": "https://www.sebrae.com.br/sites/PortalSebrae/cursosonline/estrategia-financeira-para-o-crescimento,7bd0b8a6a28bb610VgnVCM1000004c00210aRCRD",
                "description": "",
                "thumb": "https://www.sebrae.com.br/Sebrae/Portal Sebrae/Imagens SebraeNA/Estratégia financeira para o crescimento.png",
                "category_id": 2,
                "created_at": new Date(),
                "updated_at": new Date()
            },
            {
                "name": "Planejamento Estratégico para Empreendedores",
                "link": "https://www.sebrae.com.br/sites/PortalSebrae/cursosonline/planejamento-estrategico-para-empreendedores,5580b8a6a28bb610VgnVCM1000004c00210aRCRD",
                "description": "",
                "thumb": "https://www.sebrae.com.br/Sebrae/Portal Sebrae/Imagens SebraeNA/09- Planejamento Estratégico para Empreendedores.png",
                "category_id": 1,
                "created_at": new Date(),
                "updated_at": new Date()
            },
            {
                "name": "Políticas Públicas de Incentivo aos Pequenos Negócios",
                "link": "https://www.sebrae.com.br/sites/PortalSebrae/cursosonline/politicas-publicas-de-incentivo-aos-pequenos-negocios,bbc0b8a6a28bb610VgnVCM1000004c00210aRCRD",
                "description": "",
                "thumb": "https://www.sebrae.com.br/Sebrae/Portal%20Sebrae/Imagens%20SebraeNA/Leis%20-%20Pol%C3%ADticas%20p%C3%BAblicas%20de%20incentivo%20aos%20pequenos%20neg%C3%B3cios.png",
                "category_id": 8,
                "created_at": new Date(),
                "updated_at": new Date()
            },
            {
                "name": "Políticas Públicas de Incentivo aos Pequenos Negócios",
                "link": "https://www.sebrae.com.br/sites/PortalSebrae/cursosonline/politicas-publicas-de-incentivo-aos-pequenos-negocios,bbc0b8a6a28bb610VgnVCM1000004c00210aRCRD",
                "description": "",
                "thumb": "https://www.sebrae.com.br/Sebrae/Portal%20Sebrae/Imagens%20SebraeNA/Leis%20-%20Pol%C3%ADticas%20p%C3%BAblicas%20de%20incentivo%20aos%20pequenos%20neg%C3%B3cios.png",
                "category_id": 8,
                "created_at": new Date(),
                "updated_at": new Date()
            },
        ]);
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('courses', null, {});
    }
};