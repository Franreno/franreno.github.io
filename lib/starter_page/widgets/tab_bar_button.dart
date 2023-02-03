import 'package:flutter/material.dart';

class TabBarButton extends StatelessWidget {
  const TabBarButton({
    super.key,
    required this.title,
    required this.icon,
    required this.iconSelected,
    required this.selected,
    required this.onPressed,
    this.middle = false,
  });

  final String title;
  final IconData icon;
  final IconData iconSelected;
  final bool selected;
  final void Function()? onPressed;
  final bool middle;

  @override
  Widget build(BuildContext context) {
    return ElevatedButton(
      onPressed: onPressed,
      onHover: (bool _) {},
      style: tabBarButtonStyle(context),
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        crossAxisAlignment: CrossAxisAlignment.center,
        children: [
          selected ? Icon(iconSelected) : Icon(icon),
          Text(title),
        ],
      ),
    );
  }

  ButtonStyle tabBarButtonStyle(BuildContext context) {
    return ButtonStyle(
      backgroundColor: selected
          ? MaterialStateProperty.all<Color>(
              Theme.of(context).colorScheme.primary.withOpacity(0.05))
          : MaterialStateProperty.all<Color>(Colors.transparent),
      shadowColor: MaterialStateProperty.all<Color>(Colors.transparent),
      surfaceTintColor: MaterialStateProperty.all<Color>(Colors.transparent),
      overlayColor: MaterialStateProperty.all<Color>(Colors.transparent),
      shape: MaterialStateProperty.all<OutlinedBorder>(RoundedRectangleBorder(
        borderRadius: getBorderRadius(),
      )),
    );
  }

  BorderRadius getBorderRadius() => title == "Home"
      ? const BorderRadius.horizontal(
          left: Radius.circular(25), right: Radius.zero)
      : title == "Blog"
          ? const BorderRadius.horizontal(
              left: Radius.zero, right: Radius.circular(25))
          : BorderRadius.zero;
}
