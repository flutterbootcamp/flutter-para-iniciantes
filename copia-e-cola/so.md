---
description: Soluções comuns para todo aplicativo
---

# Copia e Cola

**Novo projeto:** 

```dart
flutter create --org com.books --description "A leitura engrandece a alma" books
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



