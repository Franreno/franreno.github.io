import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';

import 'core/config.dart';
import 'core/themes/dark_theme.dart';
import 'core/themes/light_theme.dart';
import 'starter_page/cubit/starter_cubit.dart';
import 'starter_page/view/starter_page.dart';

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
      home: BlocProvider(
        create: (context) => StarterCubit()..emitHomeState(),
        child: const StarterPage(),
      ),
      debugShowCheckedModeBanner: false,
    );
  }
}
