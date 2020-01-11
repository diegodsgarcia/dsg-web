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

$app-primary: mat-palette($mat-indigo, 900, 50, A400);
$app-accent:  mat-palette($mat-pink, A200, A100, A400);
$app-warn:    mat-palette($mat-red);

$app-theme: mat-light-theme($app-primary, $app-accent, $app-warn);

@include mat-core();
@include angular-material-theme($app-theme);
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

## Referências

https://stackblitz.com/edit/angular-palette-themehttps://stackblitz.com/edit/angular-palette-theme
