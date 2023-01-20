import { useMutation } from '@tanstack/react-query';
import courseApi from 'apis/Courses/courseApi';

export const useCourseEnrollmentUpdate = () => {
	return useMutation((courseId: number) => courseApi.enrollCourse(courseId));
};
