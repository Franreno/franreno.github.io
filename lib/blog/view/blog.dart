import 'package:flutter/material.dart';

class BlogWidget extends StatelessWidget {
  const BlogWidget({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      color: Colors.amber,
      width: MediaQuery.of(context).size.width,
      height: MediaQuery.of(context).size.height,
    );
  }
}
