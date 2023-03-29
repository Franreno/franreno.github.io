import 'package:equatable/equatable.dart';
import 'package:flutter_bloc/flutter_bloc.dart';

part 'starter_state.dart';

class StarterCubit extends Cubit<StarterState> {
  StarterCubit() : super(StarterLoading());

  emitHomeState() => emit(StarterHome());
  emitProjectState() => emit(StarterProjects());
}
