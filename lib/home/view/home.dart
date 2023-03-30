import 'package:flutter/material.dart';

import '../../core/image_urls.dart';
import '../widgets/tools_cards.dart';

class HomeWidget extends StatelessWidget {
  const HomeWidget({super.key});

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: MediaQuery.of(context).size.width,
      height: MediaQuery.of(context).size.height,
      child: Row(
        mainAxisAlignment: MainAxisAlignment.center,
        crossAxisAlignment: CrossAxisAlignment.start,
        children: const [
          Expanded(flex: 1, child: PersonalProfileWidget()),
          Expanded(flex: 3, child: PersonalProfileDataWidget()),
        ],
      ),
    );
  }
}

class PersonalProfileWidget extends StatelessWidget {
  const PersonalProfileWidget({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        color: Theme.of(context).colorScheme.background.withOpacity(0.5),
        border: Border(
          right: BorderSide(
            color: Theme.of(context).colorScheme.primary.withOpacity(0.5),
            width: 0.5,
          ),
        ),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.center,
        children: [
          SizedBox(height: MediaQuery.of(context).size.height * 0.12),
          // * Avatar
          Container(
            width: MediaQuery.of(context).size.height * 0.25,
            height: MediaQuery.of(context).size.height * 0.25,
            decoration: BoxDecoration(
              border: Border.all(
                color: Theme.of(context).colorScheme.primary.withOpacity(0.5),
                width: 2,
              ),
              shape: BoxShape.circle,
              image: const DecorationImage(
                image: AssetImage('assets/images/ProfilePicture.png'),
                fit: BoxFit.fill,
              ),
            ),
          ),
          const SizedBox(height: 15),
          // * Name
          Column(
            mainAxisAlignment: MainAxisAlignment.start,
            crossAxisAlignment: CrossAxisAlignment.center,
            children: const [
              Text(
                "Francisco Reis Nogueira",
                style: TextStyle(fontSize: 22, fontFamily: "RobotoMono"),
                textAlign: TextAlign.center,
              ),
              // * Additional data
              SizedBox(height: 5),
              Text(
                "Studying Computer Engineer @ USP",
                style: TextStyle(fontSize: 12, fontFamily: "RobotoMono"),
                textAlign: TextAlign.left,
              ),
            ],
          ),
          const SizedBox(height: 20),
          const Text(
            "Tools and languages",
            style: TextStyle(fontSize: 18, fontFamily: "RobotoMono"),
          ),
          CardsCollection(
            children: [
              SkillsWidgetCard(imageUrl: pythonLogo, title: 'Python'),
              SkillsWidgetCard(imageUrl: flutterLogo, title: 'Flutter'),
              SkillsWidgetCard(imageUrl: typescriptLogo, title: 'Typescript'),
            ],
          ),
          const SizedBox(height: 10),
          CardsCollection(
            children: [
              SkillsWidgetCard(imageUrl: firebaseLogo, title: 'Firebase'),
              SkillsWidgetCard(imageUrl: gitLogo, title: 'Git'),
              SkillsWidgetCard(imageUrl: linuxLogo, title: 'Linux'),
            ],
          ),
          const SizedBox(height: 20),
          const Text(
            "🤝🏻 Connect with me",
            style: TextStyle(fontSize: 18, fontFamily: "RobotoMono"),
          ),
          const SizedBox(height: 10),
          const Text(
            "franreno4<at>gmail<dot>com",
            style: TextStyle(fontSize: 12, fontFamily: "RobotoMono"),
          ),
          Expanded(child: Container()),
          Container(
            height: MediaQuery.of(context).size.height * 0.12,
            decoration: const BoxDecoration(
              image: DecorationImage(
                alignment: Alignment.centerLeft,
                image: AssetImage('assets/images/kirby.gif'),
              ),
            ),
          ),
        ],
      ),
    );
  }
}

class CardsCollection extends StatelessWidget {
  const CardsCollection({
    super.key,
    required this.children,
  });

  final List<SkillsWidgetCard> children;

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: MediaQuery.of(context).size.width,
      height: MediaQuery.of(context).size.height * 0.05,
      child: ListView(
        padding: const EdgeInsets.fromLTRB(20, 0, 0, 0),
        scrollDirection: Axis.horizontal,
        children: children,
      ),
    );
  }
}

class PersonalProfileDataWidget extends StatelessWidget {
  const PersonalProfileDataWidget({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return Container();
  }
}
