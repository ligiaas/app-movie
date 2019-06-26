### Arquitetura

Projeto está dividido basicamente em 3 diretórios:
  - api: onde está index.js que faz todas as chamadas para API do BD.
  - assets: onde ficam imagens e arquivos de estilo (.css).
  - components: onde ficam os componentes.
  Dessa forma o fonte fica organizado e intuitivo para os desenvolvedores.

### Biblioteca

O projeto foi feito com React conforme pedido. Foram usadas as bibliotecas:
  - Bootstrap v4.3: Para ter melhor performance no responsivo.
  - Slick Carousel: Biblioteca de carrossel pois a sua aplicação é muito simples e funcional para manutenção.
  - Axios: Pois é a mais usada para efetuar requisições no DB.
  - React Router: é a mais simples para rotas de arquivos. Como essa é uma aplicação simples, não requer algo robusto como Redux.

### Melhorias

Se eu pudesse melhoraria o estilo da aplicação como um todo. Colocaria efeitos de transição, no componente que mostra os detalhes do filme selecionado criaria um botão com a função de acrescentar e remover um filme da sua lista. Criaria um outro componente de player para o usuário ver o trailer do filme. Estudaria melhor a API do TMDB para melhorar as chamadas de imagem. Sei que da forma que está feita não é a melhor prática. Pois quanto mais chamadas você faz ao db mais a performance do usuário é impactada.

### Requisitos não entregue

Retirei a chamada `latest`pois o retorno da API estava com erro. Voltava o json de um filme e não a lista de filmes.
Não consegui fazer o loader com a % de carregamento. Não consegui encontrar na documentação do React como enviar valores de componente filho pra pai. Esse foi o meu primeiro projeto com React então algumas coisas ainda são limitadas pra mim, precisaria de mais tempo para ler e entender a documentação e melhores práticas.
