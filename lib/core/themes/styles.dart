import 'package:flutter/material.dart';

class MyTheme with ChangeNotifier {
  static bool _isDark = true;
  ThemeMode currentTheme() => _isDark ? ThemeMode.dark : ThemeMode.light;
  void swichTheme() {
    _isDark = !_isDark;
    notifyListeners();
  }
}
