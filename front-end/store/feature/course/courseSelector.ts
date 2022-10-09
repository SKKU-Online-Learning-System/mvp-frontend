// NOTE. https://github.com/reduxjs/reselect#api
import { createSelector } from 'reselect';
import { RootState } from 'store/app/store';

export const selectCourseCategory = createSelector(
	(state: RootState) => state.course.courseCategory,
	(courseCategory) => courseCategory,
);
