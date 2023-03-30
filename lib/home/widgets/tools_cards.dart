import 'dart:typed_data';

import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;

class SkillsWidgetCard extends StatelessWidget {
  const SkillsWidgetCard({
    super.key,
    required this.imageUrl,
    required this.title,
  });

  final String imageUrl;
  final String title;

  Future<Uint8List> getImageBytes() async {
    print("getting data");
    http.Response response = await http.get(Uri.parse(imageUrl),
        headers: {'Access-Control-Allow-Origin': '*'});
    print("response $response");
    if (response.statusCode == 200) {
      return response.bodyBytes;
    }

    throw Exception("Failed to get imageUrl $imageUrl");
  }

  @override
  Widget build(BuildContext context) {
    return FutureBuilder<Uint8List>(
      future: getImageBytes(),
      builder: (BuildContext context, AsyncSnapshot<Uint8List> snapshot) {
        if (snapshot.hasData) {
          return Card(
            color: Theme.of(context).colorScheme.onSecondary,
            shape: RoundedRectangleBorder(
              side: BorderSide(
                width: 0.5,
                color: Theme.of(context).colorScheme.inversePrimary,
              ),
              borderRadius: BorderRadius.circular(5),
            ),
            child: Row(
              children: [
                Container(
                  decoration: BoxDecoration(
                    image: DecorationImage(
                      alignment: Alignment.centerLeft,
                      image: MemoryImage(snapshot.data!),
                    ),
                  ),
                ),
                Text(title, style: const TextStyle(fontSize: 12))
              ],
            ),
          );
        }
        return const Center(child: CircularProgressIndicator());
      },
    );
  }
}
