import React from 'react';
import { $CombinedState } from 'redux';
import {useState} from 'react';
import styled from 'styled-components';
import { setLectures, setClickedId } from 'feature/lecture/lectureSlice';
import { fetchSearchedData } from '../../shared/apis/lectureApi';
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
	const str1 = "", str2 = "";
	const showLecture = async(e:any) => {
		e.preventDefault();
		
		try {
			let result = await fetchSearchedData(str1, str2, id);
			dispatch(setLectures(result.data));
			console.log(lectures)
			//no such thing as .records in this api
			console.log(result.data)
		} catch (e: any) {
			console.error(e);
		}
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
	padding: 0.8rem;
	background: #fafafa;
	font-weight: 400;
	color: #595959;
	&:hover {
		background: grey;
	}
`;

export default CardItem;
