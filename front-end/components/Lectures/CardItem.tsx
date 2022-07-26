import React from 'react';
import { $CombinedState } from 'redux';
import {useState} from 'react';
import styled from 'styled-components';
import { setLectures, setClickedId } from 'feature/lecture/lectureSlice';
import { fetchLectureLists } from '../../shared/apis/lectureApi';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { RootState } from 'app/store';

interface SubProps {
	id: number;
	item: string;
	collapse: boolean;
}

const CardItem = ({id, item , collapse}: SubProps) => {

	const dispatch = useAppDispatch();
	const { clickedId, lectures } = useAppSelector(
		(state: RootState) => state.lecture,
	);
	const showLecture = async(e:any) => {
		e.preventDefault();
		dispatch(setClickedId(id));
		fetchLectureLists(clickedId.toString())
				.then((res) => {
					dispatch(setLectures(res.data));
				})
				.catch((err) => console.log(err));
		console.log(clickedId)
	}
	return (
        <div  >
            {collapse && <SubCard onClick={showLecture}>             
                    {item} 
            </SubCard>}
        </div>
	);
};

const SubCard = styled.div`
    border: 0.1px #e4e4e4;
	cursor: pointer;
	padding: 0.8rem 0.8rem 0.8rem 1.5rem;
	background: #fafafa;
	font-weight: 400;
	color: #595959;
	&:hover {
		background: grey;
	}
`;

export default CardItem;
