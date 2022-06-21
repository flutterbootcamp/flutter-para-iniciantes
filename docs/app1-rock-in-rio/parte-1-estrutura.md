---
sidebar_position: 2
---

# Parte 1 - Estrutura

Criando um MaterialApp;

Escolhendo a paleta de cores `Colors.indigo`

Atribuindo a sua `home` como sendo o widget `HomePage`

Em HomePage, utilizando um Scaffold para aproveitar a sua estrutura

Enquanto não implementamos o `body`, utilizamos o widget `Placeholder`

Criamos uma lista de `Atracao`, que será exibida ao usuário

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/dxKEuLdfmvg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>


```dart
import 'package:flutter/material.dart';

void main() {
    runApp(const RockInRio());
}

class RockInRio extends StatelessWidget {
  const RockInRio({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Rock in Rio',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(primarySwatch: Colors.indigo),
      home: const HomePage(),
    );
  }
}

class HomePage extends StatefulWidget {
  const HomePage({Key? key}) : super(key: key);

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Atrações'),
      ),
      body: const Placeholder(),
    );
  }
}

class Atracao {
  final String nome;
  final int dia;
  final List<String> tags;

  const Atracao(this.nome, this.dia, this.tags);
}

const listaAtracoes = [
  Atracao("Iron Maiden", 2, ["Espetaculo", "Fas", "NovoAlbum"]),
  Atracao("Alok", 3, ["Influente", "Top", "Show"]),
  Atracao("Justin Bieber", 4, ["TopCharts", "Hits", "PríncipeDoPOP"]),
  Atracao("Guns N’ Roses", 8, ["Sucesso", "Espetáculo", "Fas"]),
  Atracao("Capital Inicial", 9, ["2019", "Novo Álbum", "Fas"]),
  Atracao("Green Day", 9, ["Sucesso", "Reconhecimento", "Show"]),
  Atracao("Cold Play", 10, ["NovoAlbum", "Sucesso", "2011"]),
  Atracao("Ivete Sangalo", 10, ["Unica", "Carreiras", "Fas"]),
  Atracao("Racionais", 3, ["Hits", "Prêmios", "Respeito"]),
  Atracao("Gloria Groove", 8, ["Streams", "Representatividade", "Sucesso"]),
  Atracao("Avril Lavigne", 9, ["Estreia", "Sucesso", "Lançamento"]),
  Atracao("Ludmilla", 10, ["Representativade", "Sucesso", "Parcerias"]),
];
```