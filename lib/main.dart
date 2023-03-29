import 'package:flutter/material.dart';


import 'core/config.dart';
import 'core/themes/dark_theme.dart';
import 'core/themes/light_theme.dart';
import 'home/view/home.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatefulWidget {
  const MyApp({super.key});

  @override
  State<MyApp> createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  @override
  void initState() {
    super.initState();
    currentTheme.addListener(() {
      setState(() {});
    });
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Blog',
      theme: lightTheme(),
      darkTheme: darkTheme(),
      themeMode: currentTheme.currentTheme(),
      home: Scaffold(
        body: const HomeWidget(),
        floatingActionButton: FloatingActionButton(
          onPressed: () => currentTheme.swichTheme(),
          child: const Icon(Icons.brightness_4_sharp),
        ),
      ),
      debugShowCheckedModeBanner: false,
    );
  }
}
