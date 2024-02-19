---
sidebar_position: 11
---

# Scaffold

A organização visual e a estruturação das telas são aspectos fundamentais qualquer aplicativo Flutter. O widget `Scaffold` cumpre esta função. Ele fornece uma estrutura básica e que abrange toda a tela, oferecendo elementos comuns, como:

**AppBar:** É a barra de navegação superior. Contém o título do aplicativo ou da tela, botões ou uma barra de pesquisa.

**Body:** Esta é a área principal da tela, onde o conteúdo é exibido. Você pode definir qualquer widget como o principal elemento visual da sua tela (listas, imagens, campos de texto, botões, etc).

**FloatingActionButton:** Este é um botão flutuante que se destaca sobre outros widgets, geralmente localizado no canto inferior direito da tela. É usado para ações principais, como adicionar um novo item ou iniciar uma nova atividade. Possui um design diferenciado e é fácil de ser identificado pelos usuários.

**BottomNavigationBar:** Uma barra de navegação inferior que permite a rápida troca entre diferentes telas. Utilizado quando se tem entre 3 até 5 opcoes diferentes de navegacao, por exemplo: Feed, Perfil, Mensagens, Configuracoes.

Conforme você avançar no aprendizado, descobrirá que o Scaffold é apenas a ponta do iceberg. Mas sem dúvida, é um widget indispensável.

import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';

<ThemedImage
  alt="Scaffold"
  sources={{
    light: useBaseUrl('/img/scaffold-light.svg'),
    dark: useBaseUrl('/img/scaffold-dark.svg'),
  }}
/>;

#### Este vídeo aborda o `Scaffold` em detalhes:

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/qIg_kor8apo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>
