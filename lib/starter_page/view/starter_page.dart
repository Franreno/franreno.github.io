// ignore_for_file: prefer_const_constructors

import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:personal_site/blog/view/blog.dart';
import 'package:personal_site/core/config.dart';
import 'package:personal_site/core/widgets/bloc_builder_error_container.dart';
import 'package:personal_site/home/view/home.dart';
import 'package:personal_site/projects/view/projects.dart';

import '../cubit/starter_cubit.dart';
import '../widgets/tab_bar.dart';

class StarterPage extends StatelessWidget {
  const StarterPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Column(
        children: [
          StyledTabBar(),
          Expanded(
            child: SingleChildScrollView(
              child: BlocBuilder<StarterCubit, StarterState>(
                builder: (context, state) {
                  if (state is StarterLoading) {
                    return CircularProgressIndicator();
                  }
                  if (state is StarterHome) {
                    return HomeWidget();
                  } else if (state is StarterProjects) {
                    return ProjectsWidget();
                  } else if (state is StarterBlog) {
                    return BlogWidget();
                  }

                  return BlocBuilderErrorContainer(
                      errorMessage: "Error on Start states");
                },
              ),
            ),
          )
        ],
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () => currentTheme.swichTheme(),
        child: const Icon(Icons.brightness_4_sharp),
      ),
    );
  }
}
