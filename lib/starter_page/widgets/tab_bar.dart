import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';

import '../cubit/starter_cubit.dart';
import 'tab_bar_button.dart';

class StyledTabBar extends StatelessWidget {
  const StyledTabBar({super.key});

  @override
  Widget build(BuildContext context) {
    double leftRightPadding = MediaQuery.of(context).size.width * 0.05;
    double topBottomPadding = MediaQuery.of(context).size.height * 0.01;
    return SizedBox(
      width: MediaQuery.of(context).size.width,
      height: MediaQuery.of(context).size.height * 0.12,
      child: Padding(
        padding: EdgeInsets.fromLTRB(
          leftRightPadding,
          topBottomPadding,
          leftRightPadding,
          topBottomPadding,
        ),
        child: Container(
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(25),
            color: Theme.of(context).colorScheme.primary.withOpacity(0.1),
          ),
          child: const TabBarRowButtons(),
        ),
      ),
    );
  }
}

class TabBarRowButtons extends StatelessWidget {
  const TabBarRowButtons({super.key});

  @override
  Widget build(BuildContext context) {
    bool home = false, projects = false, blog = false;

    return BlocBuilder<StarterCubit, StarterState>(
      builder: (context, state) {
        if (state is StarterHome) {
          home = true;
          projects = false;
          blog = false;
        } else if (state is StarterProjects) {
          home = false;
          projects = true;
          blog = false;
        } else if (state is StarterBlog) {
          home = false;
          projects = false;
          blog = true;
        }

        return Row(
          children: [
            Expanded(
              flex: 1,
              child: TabBarButton(
                title: "Home",
                icon: Icons.home_outlined,
                iconSelected: Icons.home,
                selected: home,
                onPressed: () => context.read<StarterCubit>().emitHomeState(),
              ),
            ),
            Expanded(
              flex: 1,
              child: TabBarButton(
                title: "Projects",
                icon: Icons.palette_outlined,
                iconSelected: Icons.palette,
                selected: projects,
                onPressed: () =>
                    context.read<StarterCubit>().emitProjectState(),
              ),
            ),
            Expanded(
              flex: 1,
              child: TabBarButton(
                title: "Blog",
                icon: Icons.document_scanner_outlined,
                iconSelected: Icons.document_scanner,
                selected: blog,
                onPressed: () => context.read<StarterCubit>().emitBlogState(),
              ),
            ),
          ],
        );
      },
    );
  }
}
