import 'package:flutter/material.dart';

class BlogWidget extends StatelessWidget {
  const BlogWidget({super.key});

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: MediaQuery.of(context).size.width,
      height: MediaQuery.of(context).size.height,
      child:
          const Center(child: Text("Blog <3", style: TextStyle(fontSize: 24))),
    );
  }
}
