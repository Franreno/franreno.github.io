import 'package:flutter/material.dart';

class BlocBuilderErrorContainer extends StatelessWidget {
  const BlocBuilderErrorContainer({super.key, required this.errorMessage});

  final String errorMessage;

  @override
  Widget build(BuildContext context) {
    return Container(
      width: MediaQuery.of(context).size.width,
      height: MediaQuery.of(context).size.height,
      color: Colors.deepPurpleAccent[50],
      child: Center(
        child: Text(
          errorMessage,
          style: const TextStyle(fontWeight: FontWeight.w600),
        ),
      ),
    );
  }
}
