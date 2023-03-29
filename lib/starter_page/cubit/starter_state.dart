part of 'starter_cubit.dart';

abstract class StarterState extends Equatable {
  @override
  List<Object?> get props => [];
}

class StarterLoading extends StarterState {}

class StarterHome extends StarterState {}

class StarterProjects extends StarterState {}
