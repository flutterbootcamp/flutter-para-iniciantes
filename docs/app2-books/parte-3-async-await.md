---
sidebar_position: 3
---

# Parte 3 - Async / Await

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/WQ-Qvzi_uVs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## O que é async / await?

São palavras-chave que permitem que você escreva código assíncrono de forma mais simples e direta.

## Como funciona?

A execução de um método assíncrono é pausada até que o resultado seja retornado. O método assíncrono retorna um Future.

## Como usar?

Marcando um método como assíncrono, você pode usar a palavra-chave `await` para esperar o resultado de um Future.

## Exemplo

```dart
Future<void> operacaoAssincrona() async {
  print('Início do evento assíncrono');
  await Future.delayed(Duration(seconds: 2));
  print('Fim do evento assíncrono');
}
```
