import React from 'react';
const Answer = ({ answer }: any) => {
	return (
		<>
			<p>{answer?.contents}</p>
			<span>{answer?.author?.email}</span>
			<span>{answer?.createdAt}</span>
			<br />
			<br />
		</>
	);
};

export default Answer;
