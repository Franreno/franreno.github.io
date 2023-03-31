import 'package:flutter/material.dart';

class ProjectContent extends StatelessWidget {
  final String descriptionTitle;
  final String assetImage;
  final String description;
  final String link;

  const ProjectContent({
    super.key,
    required this.descriptionTitle,
    required this.assetImage,
    required this.description,
    required this.link,
  });

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: MediaQuery.of(context).size.width,
      child: Column(
        mainAxisAlignment: MainAxisAlignment.start,
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            descriptionTitle,
            style: const TextStyle(
              fontSize: 26,
              fontFamily: "RobotoMono",
              fontWeight: FontWeight.bold,
            ),
          ),
          const SizedBox(height: 10),
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceAround,
            crossAxisAlignment: CrossAxisAlignment.center,
            children: [
              Image(image: AssetImage(assetImage), width: 250, height: 250),
              const SizedBox(width: 20),
              Column(
                mainAxisAlignment: MainAxisAlignment.start,
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    description,
                    style: const TextStyle(fontSize: 12),
                    textAlign: TextAlign.justify,
                  ),
                  const SizedBox(height: 25),
                  Text(link, style: const TextStyle(fontSize: 12)),
                ],
              ),
            ],
          ),
        ],
      ),
    );
  }
}
