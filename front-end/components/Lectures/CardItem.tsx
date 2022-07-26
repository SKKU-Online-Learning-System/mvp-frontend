import React from 'react';
import { $CombinedState } from 'redux';
import {useState} from 'react';
import styled from 'styled-components';

interface SubProps {
	item: string;
	collapse: boolean;
}

const CardItem = ({item , collapse}: SubProps) => {

	return (
        <div  >
            {collapse && <SubCard>             
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
