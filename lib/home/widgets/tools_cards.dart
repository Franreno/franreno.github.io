import 'package:flutter/material.dart';

class SkillsWidgetCard extends StatelessWidget {
  const SkillsWidgetCard({
    super.key,
    required this.imageUrl,
    required this.title,
  });

  final String imageUrl;
  final String title;

  @override
  Widget build(BuildContext context) {
    return Container(
      constraints: const BoxConstraints(minWidth: 50, maxHeight: 25),
      child: Card(
        color: Theme.of(context).colorScheme.onSecondary,
        shape: RoundedRectangleBorder(
          side: BorderSide(
            width: 0.5,
            color: Theme.of(context).colorScheme.inversePrimary,
          ),
          borderRadius: BorderRadius.circular(5),
        ),
        child: Container(
          padding: const EdgeInsets.fromLTRB(5, 3, 5, 3),
          child: Row(
            mainAxisAlignment: MainAxisAlignment.spaceEvenly,
            children: [
              Image(
                width: 15,
                height: 15,
                image: NetworkImage(imageUrl),
              ),
              const SizedBox(width: 5),
              Text(title,
                  style:
                      const TextStyle(fontSize: 12, fontFamily: "RobotoMono"))
            ],
          ),
        ),
      ),
    );
  }
}
