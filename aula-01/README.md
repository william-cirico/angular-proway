# Angular - Aula 01

# Conteúdo que será abordado:

1. Introdução ao Angular
2. Instalação e configuração do ambiente de desenvolvimento
3. Criação de um projeto em Angular
4. Componentes no Angular
5. Data binding
6. Diretivas no Angular
7. Serviços e injeção de dependências no Angular

## 1. Introdução ao Angular

O angular é um framework construído em TypeScript que é utilizado para construir aplicações front-end chamadas de single-page aplications (SPA).

************SPA:************ É um tipo de aplicação web que carrega uma única página HTML e dinamicamente atualiza o conteúdo dessa página, em vez de carregar páginas inteiras em cada requisição do usuário.

Existem vários elementos chave na arquitetura do Angular, incluindo:

1. **Componentes:** Componentes são a unidade básica de uma aplicação Angular. Eles são responsáveis pela exibição e interação do usuário com a aplicação.
2. **Templates:** Os templates são usados para definir a aparência de um componente. Eles contêm HTML, CSS e às vezes código JavaScript que é usado para renderizar o componente na página.
3. **Diretivas:** As diretivas são instruções para o Angular modificar o comportamento de um elemento do DOM. Elas podem ser atributos, elementos ou até mesmo comentários em um template.
4. **Serviços:** Serviços são usados para fornecer funcionalidades que podem ser compartilhadas por vários componentes em uma aplicação. Eles são tipicamente usados para recuperar e manipular dados, bem como para fornecer acesso a APIs externas.
5. **Injeção de dependência:** O Angular usa um sistema de injeção de dependência para gerenciar as dependências entre os diferentes componentes e serviços de uma aplicação.
6. **Módulos:** Os módulos são usados para agrupar componentes, serviços e outras funcionalidades relacionadas em uma unidade lógica. Eles podem ser usados para organizar e separar diferentes partes de uma aplicação em módulos distintos.
7. **Router:** O router é responsável pela navegação entre as diferentes páginas e componentes de uma aplicação Angular.

![https://v2.angular.io/resources/images/devguide/architecture/overview2.png](https://v2.angular.io/resources/images/devguide/architecture/overview2.png)

Esses elementos são alguns dos principais elementos da arquitetura do Angular, e são usados para criar aplicativos robustos e escaláveis com o framework.

Link para a documentação: [https://angular.io/docs](https://angular.io/docs)

## 2. Instalação e configuração do ambiente de desenvolvimento

As ferramentas necessárias para construir aplicações utilizando angular são:

Visual Studio Code: [https://code.visualstudio.com/Download](https://code.visualstudio.com/Download)

Node: [https://nodejs.org/en/download](https://nodejs.org/en/download)

Angular DevTools: [https://chrome.google.com/webstore/detail/angular-developer-tools/ienfalfjdbdpebioblfackkekamfmbnh](https://chrome.google.com/webstore/detail/angular-developer-tools/ienfalfjdbdpebioblfackkekamfmbnh)

Extensão para o Visual Studio Code: [https://marketplace.visualstudio.com/items?itemName=Angular.ng-template](https://marketplace.visualstudio.com/items?itemName=Angular.ng-template)

Angular CLI:

```powershell
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
npm install -g @angular/cli
```

Mais informações a respeito da configuração do ambiente local de desenvolvimento podem ser encontradas no site: [https://angular.io/guide/setup-local](https://angular.io/guide/setup-local)

## 3. Criando um projeto em Angular

Para criar um novo projeto Angular, basta executar o seguinte comando no terminal:

```powershell
ng new nome-do-projeto
```

O comando acima irá criar uma nova pasta com o nome **`nome-do-projeto`**
 contendo a estrutura básica de um projeto Angular.

## 4. Componentes no Angular

Componentes no Angular são uma das principais construções para a criação de interfaces de usuário reutilizáveis e modulares. Eles são responsáveis por gerenciar a lógica de apresentação de uma parte da interface do usuário, encapsulando HTML, CSS e JavaScript em uma única unidade.

Para criar um novo componente no Angular, basta executar o seguinte comando no terminal:

```powershell
ng generate component nome-do-componente
```

**Interação entre componentes:**

O componente pai pode passar dados para o componente filho usando o **`@Input`**e o componente filho pode enviar dados para o componente pai usando o **`@Output`.**

**********************Exercícios:**********************

1) Crie um componente que exiba o nome de uma pessoa em uma tag **`<h1>`**. O nome deve ser passado como input para o componente.

2) Crie um componente que exiba uma imagem de perfil de usuário em um elemento **`<img>`**. O caminho da imagem deve ser passado como input para o componente.

3) Crie um componente que exiba uma lista de tarefas em uma tag **`<ul>`**. Cada item da lista deve ser passado como input para o componente.

## 5. Data Binding

Data binding é uma das características mais importantes do Angular. Com ela, podemos criar ligações entre a interface do usuário e o código TypeScript.

Existem quatro tipos de data binding em Angular:

**1. Interpolação (Interpolation):** O data binding de interpolação permite que você exiba valores de propriedades de componentes em um template. Ele é definido usando a sintaxe de chaves duplas "{{ }}". Por exemplo:

```tsx
<p>Olá {{ nome }}!</p>
```

**2. Property binding:** O data binding de property binding permite que você defina valores de propriedades de elementos HTML com valores de propriedades de componentes. Ele é definido usando a sintaxe de colchetes "[ ]". Por exemplo:

```tsx
<img [src]="imagemUrl">
```

**3. Event binding:** O data binding de event binding permite que você execute uma ação em resposta a um evento do usuário em um elemento HTML, como um clique ou uma entrada de teclado. Ele é definido usando a sintaxe de parênteses "( )". Por exemplo:

```tsx
<button (click)="salvar()">Salvar</button>
```

**4. Two-way binding:** O data binding de two-way binding permite que você sincronize um valor entre um componente e um elemento HTML em tempo real. Ele é definido usando a sintaxe de colchetes e parênteses combinados "[()]", também conhecido como [( )]. Por exemplo:

```tsx
<input [(ngModel)]="nome">
```

**********************Exercícios:**********************

1) Crie um componente que exiba uma mensagem de boas-vindas com o nome do usuário que pode ser digitado em um input. O nome do usuário deve ser exibido em tempo real conforme o usuário digita no input.

2) Crie um componente de lista de tarefas que receba uma lista de tarefas como entrada e exiba cada tarefa em um elemento li. Cada tarefa deve ter uma caixa de seleção que permita marcar ou desmarcar a tarefa como concluída. A lista de tarefas deve ser exibida usando o data binding.

3) Crie um componente que permita ao usuário digitar o nome e a idade de uma pessoa e exiba-os em um parágrafo abaixo do formulário. O componente deve usar o data binding para exibir as informações. 

## 6. Diretivas

As diretivas são uma forma de adicionar comportamentos a elementos HTML. No Angular, existem dois tipos de diretivas: as diretivas de atributo e as diretivas estruturais. 

**Diretiva estrutural:** Manipulam o layout do DOM adicionando ou removendo elementos.

```tsx
<div *ngIf="mostrar">Este é um elemento que será mostrado ou escondido.</div>
```

**********************************Diretiva de atributo:********************************** alteram o comportamento ou a aparência de um elemento HTML.

```tsx
@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'yellow';
  }
}
```

**********************Exercícios:**********************

1) Crie um componente que exiba uma lista de itens. Cada item deve ter um botão "Adicionar ao carrinho". Ao clicar no botão, o item deve ser adicionado a um carrinho (pode ser uma simples lista de itens) e o texto do botão deve mudar para "Remover do carrinho". Ao clicar novamente no botão, o item deve ser removido do carrinho e o texto do botão deve voltar a ser "Adicionar ao carrinho". Utilize a diretiva *ngIf para exibir ou não o botão de adicionar/remover.

2. Crie um componente que exiba uma lista de tarefas. Cada tarefa deve ter um checkbox que indica se a tarefa está concluída ou não. Ao clicar no checkbox, o estado da tarefa deve mudar e o texto da tarefa deve mudar de cor para indicar que foi concluída (verde) ou não concluída (vermelho). Utilize a diretiva [ngClass] para mudar a classe CSS da tarefa dependendo do seu estado.

3. Crie um componente que exiba uma lista de usuários. Cada usuário deve ter um botão "Editar". Ao clicar no botão, o nome do usuário deve ser substituído por um input de texto que permita editar o nome do usuário. Ao clicar novamente no botão "Editar", o input deve ser substituído pelo nome atualizado do usuário. Utilize a diretiva *ngIf para exibir ou não o input de edição.

## 7. Serviços e injeção de dependências no Angular

******************Serviços:****************** Os serviços são objetos que fornecem funcionalidades que podem ser usadas em vários componentes. Por exemplo, um serviço pode fornecer funcionalidades de autenticação ou fornecer dados de um servidor. Os serviços são criados usando a classe **`@Injectable`**do Angular. Essa classe é decorada com a anotação **`@Injectable`**para indicar que ela pode ser injetada em outros componentes.

******Injeção de dependência:****** A injeção de dependência é um padrão de design que permite que um objeto seja criado e gerenciado por outro objeto. No Angular, a injeção de dependência é usada para fornecer serviços para os componentes. A injeção de dependência é gerenciada pelo injetor de dependência do Angular.

******************Exercícios:******************

1. Crie um serviço que retorne uma lista de produtos. Os produtos devem ter nome, preço e descrição. Crie um componente que utilize o serviço para exibir a lista de produtos em uma tabela HTML.

2. Crie um serviço que retorne uma lista de usuários. Os usuários devem ter nome, email e cidade. Crie um componente que utilize o serviço para exibir a lista de usuários em uma tabela HTML. Adicione um filtro de pesquisa que permita buscar usuários pelo nome ou pela cidade.

3. Crie um serviço que permita adicionar e remover itens de um carrinho de compras. O serviço deve ter métodos para adicionar um item ao carrinho, remover um item do carrinho e obter a lista de itens no carrinho. Crie um componente que utilize o serviço para exibir os itens no carrinho e permitir ao usuário adicionar ou remover itens. Utilize a diretiva *ngIf para exibir ou não o botão de remover.

## Tarefa:

Quiz da aula: [https://forms.gle/AKE94XtxQn62eXQY6](https://forms.gle/AKE94XtxQn62eXQY6)

1) Crie uma diretiva no Angular que mude a cor do texto de um elemento para azul quando o mouse passar sobre ele.

2) Crie um serviço no Angular que armazene um array de nomes e retorne a quantidade total de nomes na lista.

3) Crie uma diretiva no Angular que permita o usuário arrastar e soltar elementos na tela, utilizando a API de arrastar e soltar do HTML5.

4) Crie um serviço no Angular que utilize a API do LocalStorage para armazenar e recuperar dados de um formulário preenchido pelo usuário.

5) Crie um componente chamado **`ListaDeTarefas`** que exiba uma lista de tarefas.

O componente deve ter as seguintes funcionalidades:

- Adicionar uma nova tarefa à lista.
- Editar uma tarefa
- Remover uma tarefa da lista.
- Marcar uma tarefa como concluída.
- Exibir a quantidade total de tarefas.
- Exibir a quantidade de tarefas concluídas.
- Exibir a quantidade de tarefas pendentes.
