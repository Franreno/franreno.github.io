import 'package:flutter/material.dart';

class HomeWidget extends StatelessWidget {
  const HomeWidget({super.key});

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: MediaQuery.of(context).size.width,
      height: MediaQuery.of(context).size.height,
      child: const Row(
        mainAxisAlignment: MainAxisAlignment.center,
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Expanded(flex: 1, child: PersonalProfileWidget()),
          Expanded(flex: 3, child: PersonalProfileDataWidget()),
        ],
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
          const Column(
            mainAxisAlignment: MainAxisAlignment.start,
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text("Francisco Reis Nogueira",
                  style: TextStyle(fontSize: 28, fontFamily: "RobotoMono")),
              // * Additional data
              SizedBox(height: 5),
              Text(
                "Studying Computer Engineer @ USP",
                style: TextStyle(fontSize: 12, fontFamily: "RobotoMono"),
                textAlign: TextAlign.left,
              ),
            ],
          ),
          AnimatedPositioned(
            top: 50.0,
            duration: const Duration(seconds: 2),
            curve: Curves.fastOutSlowIn,
            child: Container(
              width: MediaQuery.of(context).size.height * 0.1,
              height: MediaQuery.of(context).size.height * 0.1,
              decoration: const BoxDecoration(
                image: DecorationImage(
                  image: AssetImage('assets/images/nyan.gif'),
                ),
              )ed,
            ),
          ),
        ],
      ),
    );
  }
}
