---
description: Soluções comuns para todo aplicativo
---

# Copia e Cola

**Novo projeto:**&#x20;

```dart
flutter create --org br.com --description "A leitura engrandece a alma" books
```

**Novo projeto, com o template skeleton:**

```dart
flutter create -t skeleton meu_app
```

**AppBar transparente:**

```dart
AppBar(
  elevation: 0,
  backgroundColor: Colors.transparent,
)
```

**Remover o banner de debug:**

```dart
MaterialApp(
  debugShowCheckedModeBanner: false
)
```

