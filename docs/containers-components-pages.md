COMPONENT: responsável só por exibição de informações na tela. Não tem regras de negócio e, 99% das vezes, não tem gerenciamento de estado. Aqui devem ficar as regras de CSS e estilos.

Um componente por ter 1 ou mais components e containers.

CONTAINER: responsável por lógica de negócio, regras, e estado. Pode ou não estar conectado a outros containers e bibliotecas, como o Redux e o i18n para internacionalização, por exemplo.

Um Container pode ter 1 ou mais componentes e outros containers.

PAGE: São componentes "dumb - burros" como os Components. E apenas determinam quais Containers ou Components devem ser iniciados em uma página.

