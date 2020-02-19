# Desafio SEBRAE - MegaHack Shawee

Olá! 
Primeiramente, gostaríamos de agradecer a equipe Shawee e às empresas desafiantes, em especial a SEBRAE, por estarem abrindo mais portas do conhecimento à toda comunidade. Sabemos da importância da realização de eventos como esse, que quebram todo tipo de barreira, geram conexões e interatividades em gente de todo o mundo e alavancam a busca pelo conhecimento e evolução tecnológica.





A respeito da parte técnica (desenvolvimento) do projeto:
- O projeto foi desenvolvido utilizando as seguintes tecnologias:
-- NodeJS no backend.
-- ReactJS para o frontend.
-- MySQL como gerenciador de banco de dados.
-- Sequelize como ORM.


- Para rodar o projeto, é necessário ter instalado o MySQL na máquina e clonar o repositório. Após o repositório clonado, e com o prompt aberto aberto na pasta raiz do projeto, é necessário rodar os seguintes comandos (nessa ordem, e considerando usuários Windows):


* cd backend
* yarn install
* yarn sequelize db:create
* yarn sequelize db:migrate
* yarn sequelize db:seed:all
* yarn dev


* cd ../web
* yarn install
* yarn start


Com isso, a aplicação já estará acessível através da rota local padrão
http://localhost:3000

Os usuários podem ser gerados no formulário de registro para acesso total à aplicação.



Esperamos que tenha ficado bem explicado!

Mais uma vez, agradecemos pelo excelente evento e, principalmente, pelo privilégio de podermos compartilhar nosso conhecimento e aprender muito com as maiores empresas do Brasil.

#ObrigadoSHAWEE #ObrigadoSEBRAE #ObrigadoROCKETSEAT
