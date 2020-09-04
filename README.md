# My first NPM package

## Intenção

A intenção da criação deste repositório foi aprender mais sobre os seguintes tópicos:

- Processos de CI com github actions
- Publicação de pacotes no NPM
- Rotinas de desenvolvimento com git e GitHub.

## Por que estes 3 tópicos?

Para a entrega de um software, seja ele um package, API pública ou app mobile, todas estas 3 etapas (desenvolvimento, preparação e publicação) precisam funcionar e se comunicar, pois se complementam e possuem uma relação de dependência.

Por serem complementares, é necessário entender como cada uma funciona, seus propósitos, e como se relacionam.

### Desenvolvimento

Etapa de construção do software, tem o objetivo de adicionar novas funcionalidades, corrigir bugs, entre outras coisas.

### Preparação (Staging area)

Área de revisão do trabalho que foi executado na etapa de desenvolvimento, tem o objetivo de preparar o software para uma nova versão a partir de validações e, ou testes.

### Publicação (Release)

Etapa de lançamento de uma nova versão que foi resultado das validações feitas na área de preparação, tem como objetivo disponibilizar nos canais principais uma nova versão, informar suas mudanças e atualizar a documentação.

## Implementação na prática

Para atender a estas etapas podem ser utilizadas muitas abordagens diferentes, ao escolher uma delas é necessário analisar o momento e as necessidades do projeto, tendo assim uma melhor solução para a situação.

Neste caso, irei utilizar o GitHub Actions para criação de processos de CI (Continuous Integration), NPM como canal de publicação do package e o git para facilitar na rotina de desenvolvimento.

### Desenvolvimento com git e GitHub

Utilizando o git é possível controlar todo o fluxo de trabalho do projeto, para este caso, foi utilizada branches para separar cada etapa (desenvolvimento, preparação e publicação), criando uma divisão clara da responsabilidade de cada uma.

### Publicação no NPM

O NPM participa como um canal de distribuição do projeto, suas versões são incrementadas a partir de pushs na branch com a versão mais estável

### GitHub Actions

As Actions são responsáveis por executar passos quando ocorrem eventos nas branches configuradas previamente com o git.
Para este caso de estudo, foram utilizadas as seguintes eventos:

- Pull requests

   Branches: todas as branches fixas (desenvolvimento, preparação, publicação)  

   Executa passos que ajudam na identificação de bugs e possíveis problemas quando a modificação for adicionada ao próximo estágio.  
   Exemplos: (testes automatizados, build, verificação de padronizações ...)

- Push

   Branchs: preparação, publicação  

   Incrementa o número da versão correspondente ao estágio que irá ser enviado.  

- Release

   Publica no NPM a partir da branch de versão mais estável.  

## Algumas Observações

Através dessa automatização, é possível ter uma menor interação com os processos, permitindo mais padronização, produtividade e segurança no lançamento de uma nova versão.

Como foi mencionado, a implementação de um fluxo de desenvolvimento deve atender as características de cada projeto, podendo ele ser mais simples ou complexo que a situação abordada aqui.

### Links de referência

- [Documentação do git](https://git-scm.com/docs)
- [Documentação do NPM](https://docs.npmjs.com/cli-documentation/)
- [Criação e publicação de packages no NPM](https://docs.npmjs.com/creating-and-publishing-scoped-public-packages)
- [GitHub Actions](https://docs.github.com/pt/actions)
- [Publicar pacotes do Node com GitHub Actions](https://docs.github.com/pt/actions/language-and-framework-guides/publishing-nodejs-packages)
