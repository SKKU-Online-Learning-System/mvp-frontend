import Link from 'next/link';
import { useRouter } from 'next/router';

const QuestionTableRow = ({ question }: any) => {
	const {
		id,
		author: { email: author },
		contents,
		createdAt,
		answers,
	} = question;

	const router = useRouter();

	const handleClick = (questionId: number) => {
		router.push(`/questions/${questionId}`);
	};

	return (
		<tr>
			<td>{id}</td>
			<td>{author}</td>
			<div onClick={(e: React.MouseEvent<HTMLElement>) => handleClick(id)}>
				<td>
					{/* <Link href={`/questions/${id}`}> */}
					{contents}
					{/* </Link> */}
				</td>
			</div>
			<td>{createdAt}</td>
			<td>{answers.length}</td>
		</tr>
	);
};

export default QuestionTableRow;
