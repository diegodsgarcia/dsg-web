---
title: Angular Material - Entendendo como funciona sua tematização
description: >-
  Se você já desenvolve em Angular, com certeza já ouviu falar do framework
  Angular Material. Nesse artigo vamos explorar e descobrir mais como funciona
  os padrões de tematização no SASS e criar nossos próprios componentes
  tematizados!
slug: angular-material-entendendo-como-funciona-sua-tematização
date: '2019-12-09 10:13:13'
thumbnail: /assets/images/posts/material-design-theme.png
locale: br
---
Se você já desenvolve em Angular, com certeza já ouviu falar do framework Angular Material. Nesse artigo vamos explorar e descobrir mais como funciona os padrões de tematização no SASS e criar nossos próprios componentes tematizados!

Um pouco sobre as definições e padrões:

O framework trabalha com conceitos muito bem definidos proposto em todo conceito visual do Material Design. Sua divisão de paleta de cores é definida  por 5 categorias:

* Primary - Cor principal da sua aplicação.
* Accent - Cores de interação e de elementos flutuantes.
* Warn - Cores que emitem estados de erros.
* Backgrounds - Cores dos backgrounds  nos componentes e elementos.
* Foregrounds - Cores de textos, ícones, divisores, etc.

As paletas primary, accent e warn são paleta de cores que possuí váriações de sua cor para a tonalidade mais clara até a mais escura, elas também possuem suas cores de contraste.

As paletas background e foreground possuem cores fixas relacionado a todo seu projeto:

Todas paletas são criadas e geradas por variáveis, funções e mixins no SASS.

Para gerar um tema nos devemos declarar primeiramente as variáveis primary, accent e warn no formato Map com todas as tonalidades de nossas cores.

![Exemplo de paleta](/assets/images/posts/material-design-theme.png "Exemplo de paleta")

O Angular Material usa uma ótima abordagem 

Iniciando no nosso arquivo style.scss, devemos primeiramente chamar o mixin mat-core(), a qual irá todos os estilos principais do Angular Material

Bom o Angular Material trabalha com a definição de suas 3 paletas principais que são o Primary, Accent e Warn, definida por uma variável map com toda sua escala de cores.

Vamos criar um arquivo chamado theming.scss, a qual irá ser responsável por armazenar todas as variáveis e mixen de nosso tema customizado.

As variáveis Primary, Accent e Warn são um Map a qual possui várias tonalidades de cores.

Com as nossas variáveis definidas podemos gerar um tema com os mixen mat-light-theme ou mat-dark-theme. Esse mixin irar gerar as paletas restantes Accent, foregrounds e backgrounds. Após isso basta chamar o nosso mixin que irá criar todas nossas classes de acordo com nossas variáveis de tema gerado, o …………
