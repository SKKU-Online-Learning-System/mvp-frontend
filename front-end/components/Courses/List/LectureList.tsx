import styled from 'styled-components';
import LectureCard from './LectureCard';
import { useRouter } from 'next/router';
import { useCourseListFetch } from 'query/hooks/CourseList';

type RouterQueryString = {
	keyword: string;
	category2sId: string;
	difficulty: string;
};

const LectureList = () => {
	const router = useRouter();
	const { keyword, category2sId, difficulty } =
		router.query as RouterQueryString;
	const { data: courseList, isLoading } = useCourseListFetch({
		keyword,
		category2sId,
		difficulty,
	});

	if (isLoading) return <div>로딩중입니다...</div>;

	return (
		<Wrapper>
			{!!courseList?.length ? (
				courseList?.map((course, index) => (
					<LectureCard course={course} key={index} />
				))
			) : (
				<div>검색 결과가 없습니다!!!</div>
			)}
		</Wrapper>
	);
};
const Wrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	row-gap: 1rem;
`;

export default LectureList;
