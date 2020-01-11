---
title: Angular Material   Entendendo como funciona sua tematização (Parte II)
description: >-
  No último post vimos sobre o Material Design e Angular Material.Falamos sobre
  como o Angular Material trabalha em sua tematização aplicada no framework.
  Nessa continuação vamos criar nosso próprio componente utilizando a
  tematização de paletas.
slug: posts/angular-material-entendendo-como-funciona-sua-tematizacao-parte-II
date: '2020-01-11 10:28:10'
thumbnail: /assets/images/posts/angular-material.png
locale: pt-br
---
No último post vimos sobre o Material Design e Angular Material.Falamos sobre como o Angular Material trabalha em sua tematização aplicada no framework. Nessa continuação vamos criar nosso próprio componente utilizando a tematização de paletas.

Vamos direto ao que interessa! Vamos criar um componente card a qual irá possuir todas suas definições de cores baseada na paleta do tema. Vamos criar nossas paletas primary, accent, warn e definir seu tema no arquivo global de estilo do projeto **(style.scss)**:

```scss
@import '~@angular/material/theming';

$app-primary: mat-palette($mat-indigo, 900, 50, A400);
$app-accent:  mat-palette($mat-pink, A200, A100, A400);
$app-warn:    mat-palette($mat-red);

$app-theme: mat-light-theme($app-primary, $app-accent, $app-warn);

@include mat-core();
@include angular-material-theme($app-theme);@import '~@angular/material/theming';

* {
  margin: 0;
  padding: 0;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
```

Com nosso tema definido agora podemos criar nosso componente de card:

### card.component.ts

```typescript
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() title;
}
```

### card.component.html

```html
<div class="card">
  <header class="header">
    {{ title }}
  </header>
  <div class="content">
    <ng-content></ng-content>
  </div>
</div><div class="card">
  <header class="header">
    {{ title }}
  </header>
  <div class="content">
    <ng-content></ng-content>
  </div>
</div>
```

### card.component.scss

```scss
.card {
  box-shadow: 1px 1px 10px #DDD;
}

.header {
  background-color: #000;
  color: #fff;
  padding: .5rem 0;
  text-align: center;
  font-size: 1.2rem;
}

.content {
  background-color: #fff;
  padding: .5rem;
}.card {
  box-shadow: 1px 1px 10px #DDD;
}

.header {
  background-color: #000;
  color: #fff;
  padding: .5rem 0;
  text-align: center;
  font-size: 1.2rem;
}

.content {
  background-color: #fff;
  padding: .5rem;
}
```

Vamos agora customizar nosso header do card de acordo com a paleta **primary**, para isso vamos criar um arquivo chamado **theming.scss** na raiz do projeto e adicionar neste arquivo apenas as paletas de cores que definimos no **style.scss**

### theming.scss

```scss
@import '~@angular/material/theming';

$app-primary: mat-palette($mat-indigo, 900, 50, A400);
$app-accent:  mat-palette($mat-pink, A200, A100, A400);
$app-warn:    mat-palette($mat-red);

$app-theme: mat-light-theme($app-primary, $app-accent, $app-warn);@import '~@angular/material/theming';

$app-primary: mat-palette($mat-indigo, 900, 50, A400);
$app-accent:  mat-palette($mat-pink, A200, A100, A400);
$app-warn:    mat-palette($mat-red);

$app-theme: mat-light-theme($app-primary, $app-accent, $app-warn);
```

No **style.scss** iremos apenas importar o **theming.scss**

### style.scss

```scss
@import './theming';

@include mat-core();
@include angular-material-theme($app-theme);
@import './theming';

@include mat-core();
@include angular-material-theme($app-theme);

* {
  margin: 0;
  padding: 0;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
```

Agora vamos importar o arquivo **theming.scss** no arquivo de estilo de nosso card. Com isso podemos utilizar a função `mat-color()` e chamar qualquer paleta de váriavel criada. Vamos adicionar no header do card a cor primária da paleta definida chamando a função `mat-color($app-primary)`:

### card.component.scss

```scss
@import '../../theming';

.card {
  box-shadow: 1px 1px 10px #DDD;
}

.header {
  background-color: mat-color($app-primary);
  color: #fff;
  padding: .5rem 0;
  text-align: center;
  font-size: 1.2rem;
}

.content {
  background-color: #fff;
  padding: .5rem;
}
```

Com arquivo **theming.scss** podemos acessar apenas as paletas principais (primary, accent e warn), porém para a criação de um componente essas paletas não são o suficiente. Como podemos definir as cores de fundo do card ou as bordas? Para isso devemos entender qual variável essas cores são definidas e felizmente graças a magia do open source, você pode ver todas as variáveis de estilo do Angular Material [neste link](https://github.com/angular/components/blob/9db13336393eab8bebbc151043917829fa0bb013/src/material/core/theming/_palette.scsshttps://github.com/angular/components/blob/9db13336393eab8bebbc151043917829fa0bb013/src/material/core/theming/_palette.scss). Com base no código implementado pela framework as variáveis de background e foreground são definidas da seguinte forma:

```scss
$background: (
  status-bar: mat-color($mat-grey, 300),
  app-bar:    mat-color($mat-grey, 100),
  background: mat-color($mat-grey, 50),
  hover:      rgba(black, 0.04),
  card:       white,
  dialog:     white,
  disabled-button: rgba(black, 0.12),
  raised-button: white,
  focused-button: $dark-focused,
  selected-button: mat-color($mat-grey, 300),
  selected-disabled-button: mat-color($mat-grey, 400),
  disabled-button-toggle: mat-color($mat-grey, 200),
  unselected-chip: mat-color($mat-grey, 300),
  disabled-list-option: mat-color($mat-grey, 200),
  tooltip: mat-color($mat-grey, 700),
);

$foreground: (
  base:              black,
  divider:           $dark-dividers,
  dividers:          $dark-dividers,
  disabled:          $dark-disabled-text,
  disabled-button:   rgba(black, 0.26),
  disabled-text:     $dark-disabled-text,
  elevation:         black,
  hint-text:         $dark-disabled-text,
  secondary-text:    $dark-secondary-text,
  icon:              rgba(black, 0.54),
  icons:             rgba(black, 0.54),
  text:              rgba(black, 0.87),
  slider-min:        rgba(black, 0.87),
  slider-off:        rgba(black, 0.26),
  slider-off-active: rgba(black, 0.38),
);
```

Com isto, para utilizarmos essas variáveis basta no estilo do nosso componente criar uma variável pegando o background do tema criado e por fim basta chamar as propriedades desejadas com o método **mat-color()**:

### card.component.scss

```scss
@import '../../theming';
$background: map-get($app-theme, background);
$foreground: map-get($app-theme, foreground);

.card {
  box-shadow: 1px 1px 10px mat-color($foreground, divider);
}

.header {
  background-color: mat-color($app-primary);
  color: mat-color($app-primary, default-contrast);
  padding: .5rem 0;
  text-align: center;
  font-size: 1.2rem;
}

.content {
  background-color: mat-color($background, card);
  padding: .5rem;
  color: mat-color($foreground, text);
}
```

Caso você deseje alterar as cores das variaveis background e foreground, você deve SOBRESCREVER essas váriaveis antes de criar o tema com o nome **mat-light-theme** (para temas claros) ou **mat-dark-theme** (para temas escuros):

### theming.scss

```scss
@import '~@angular/material/theming';

$app-primary: mat-palette($mat-indigo, 900, 50, A400);
$app-accent:  mat-palette($mat-pink, A200, A100, A400);
$app-warn:    mat-palette($mat-red);

$mat-light-theme-background: (
  status-bar: mat-color($mat-grey, 300),
  app-bar:    mat-color($mat-grey, 100),
  background: mat-color($mat-grey, 50),
  hover:      rgba(black, 0.04),
  card:       white,
  dialog:     white,
  disabled-button: rgba(black, 0.12),
  raised-button: white,
  focused-button: $dark-focused,
  selected-button: mat-color($mat-grey, 300),
  selected-disabled-button: mat-color($mat-grey, 400),
  disabled-button-toggle: mat-color($mat-grey, 200),
  unselected-chip: mat-color($mat-grey, 300),
  disabled-list-option: mat-color($mat-grey, 200),
  tooltip: mat-color($mat-grey, 700),
);

$mat-light-theme-foreground: (
  base:              black,
  divider:           $dark-dividers,
  dividers:          $dark-dividers,
  disabled:          $dark-disabled-text,
  disabled-button:   rgba(black, 0.26),
  disabled-text:     $dark-disabled-text,
  elevation:         black,
  hint-text:         $dark-disabled-text,
  secondary-text:    $dark-secondary-text,
  icon:              rgba(black, 0.54),
  icons:             rgba(black, 0.54),
  text:              rgba(black, 0.87),
  slider-min:        rgba(black, 0.87),
  slider-off:        rgba(black, 0.26),
  slider-off-active: rgba(black, 0.38),
);

$app-theme: mat-light-theme($app-primary, $app-accent, $app-warn);
```

## Bônus

Uma ultima curiosidade que podemos melhorar é sobre a importação do arquivo **theming.scss**, pois em todo componente que criar, devemos importar seu caminho relativo, tornando assim um pouco deselegante sua importação. Porém, podemos resolver isso facilmente no angular.json, tornando os arquivos de estilo da raiz do projeto global da seguinte forma:

```json
"stylePreprocessorOptions": {
  "includePaths": [
    "src/"
  ]
}         
```

Com isso podemos importar qualquer arquivo de estilo sem passar seu caminho completo:

```scss
@import 'theming';
```

Por fim todo exemplo deste artigo está disponível online no [stackblitz](https://stackblitz.com/edit/angular-palette-theme).

Então é isso ai galeta! No próximo post iremos falar sobre como trabalhar com as fontes.

Obrigado galera e até mais!!! \o/

## Referências

<https://material.angular.io/guide/theming>

[https://github.com/angular/components/blob/9db13336393eab8bebbc151043917829fa0bb013/src/material/core/theming/_palette.scss](https://github.com/angular/components/blob/9db13336393eab8bebbc151043917829fa0bb013/src/material/core/theming/_palette.scss)
