---
title: Angular Material  - Entendendo como funciona sua tematização (Parte III)
description: >-
  Nos últimos artigos falamos sobre a tematização de paletas no Angular Material
  e criamos nosso próprio componente card baseado na mesma. Vamos finalizar essa
  sequência falando um pouco sobre como funciona a tipografia no framework.
slug: angular-material-entendendo-como-funciona-sua-tematizacao-parte-III
date: '2020-01-13'
thumbnail: ./img/tipografia.png
locale: pt-br
---
Nos últimos artigos falamos sobre a tematização de paletas no Angular Material e criamos nosso próprio componente card baseado na mesma. Vamos finalizar essa sequência falando um pouco sobre como funciona a tipografia no framework.

A tipográfia no framework trabalha baseado nos conceitos do Angular Material, dividindo por **leveis**. Cada level possuí seu `font-size`, `line-height` e `font-weight`. Os leveis são divididos na seguintes categorias:

| Nome         | CSS classe                             | Descrição                                                           |
| ------------ | -------------------------------------- | ------------------------------------------------------------------- |
| display-4    | .mat-display-4                         | Largo, cabeçalho único, geralmente usado no topo da página (header) |
| display-3    | .mat-display-3                         | Largo, cabeçalho único, geralmente usado no topo da página (header) |
| display-2    | .mat-display-2                         | Largo, cabeçalho único, geralmente usado no topo da página (header) |
| display-1    | .mat-display-1                         | Largo, cabeçalho único, geralmente usado no topo da página (header) |
| headline     | .mat-h1, .mat-headline                 | Seção de cabeçalho, corresponde a tag <h1>                          |
| title        | .mat-h2, .mat-title                    | Seção de cabeçalho, corresponde a tag <h2>                          |
| subheading-2 | .mat-h3, .mat-subheading-2             | Seção de cabeçalho, corresponde a tag <h3>                          |
| subheading-1 | .mat-h3, .mat-subheading-1             | Seção de cabeçalho, corresponde a tag <h4>                          |
| body-1       | .mat-body, .mat-body-1                 | Texto base do body                                                  |
| body-2       | .mat-body-strong, .mat-body-2          | Texto base do bolder                                                |
| caption      | .mat-small, .mat-caption               | Pequeno, texto para avisos                                          |
| button       | Sem classe, usado direto no componente | Botões e ancoras                                                    |
| input        | Sem classe, usado direto no componente | Campos input                                                        |

Podemos utilizar qualquer tipo de level na aplicação, desde que respeito sua forma semântica.

Vamos utilizar estas classes no nosso [card component](https://stackblitz.com/edit/angular-palette-theme):

### card.component.html

```html
<div class="card">
  <header class="header">
    <h2 class="mat-h2">{{ title }}</h2>
  </header>
  <div class="content mat-body">
    <ng-content></ng-content>
  </div>
</div>
```

## Customizando tipografia

Por padrão o framework utiliza a fonte Roboto. Mas como podemos trocar a fonte ou seus tamanhos? Podemos criar uma variável de configuração dos leveis da fonte.

```scss
@import '~@angular/material/theming';

$custom-typography: mat-typography-config(
  $font-family: 'Roboto, monospace',
  $headline: mat-typography-level(32px, 48px, 700),
  $body-1: mat-typography-level(16px, 24px, 500)
);
```

Você pode perceber que a variável `$font-family`, apenas é definida o nome da fonte.

Na função `mat-typography-level()` é recebida os 3 parâmetros na seguinte ordem:

* Font-size
* Line-height
* Font-weight

Por fim basta passar como parâmetro na função `mat-core()`, assim todos componentes serão gerado na configuração de tipografia customizada:

```scss
@include mat-core($custom-typography);
```

## Utilizando a tipografia em elementos customizados

Com a tipografia configurada, você pode utilizar ela em qualquer elemento HTML, deixando assim seus componentes padronizado. Para isso no seu arquivo de estilo do componente, basta chamar a função `mat-typography-config()` e armazenar seu retorno em uma variável.

Para chamar o estilo específico de uma tipografia basta você utilizar a função `mat-typography-level-to-styles()`, como no exemplo a baixo:

```scss
@import '../../theming';
$background: map-get($app-theme, background);
$foreground: map-get($app-theme, foreground);

// Cria váriavel de configuração com os valores defaults da tipografia definida
$config: mat-typography-config();

.card {
  box-shadow: 1px 1px 10px mat-color($foreground, divider);
}

.header {
  background-color: mat-color($app-primary);
  color: mat-color($app-primary, default-contrast);
  padding: .5rem 0;
  text-align: center;
  font-size: 1.2rem;

  > * {
    margin: 0;
    // Gera estilos de tipográfia de título
    @include mat-typography-level-to-styles($config, title);
  }
}

.content {
  background-color: mat-color($background, card);
  padding: .5rem;
  color: mat-color($foreground, text);
}
```

## Conclusão
O Angular Material é uma ferramente SUPER completa de estilização e criação, ela fornece todas ferramentas para realizar qualquer tipo de componente baseado já em seu Design System (Material Design). Todo projeto desta série de artigo esta no [StackBlitz](https://stackblitz.com/edit/angular-palette-theme). Muito obrigado por ter acompanhado até aqui, qualquer dúvida ou sugestão, você pode mandar um [PR neste post no GitHub](https://github.com/diegodsgarcia/dsg-web/pulls).

Obrigado e até a próxima!!! \o/

## Referencias

<https://material.angular.io/guide/typography>
