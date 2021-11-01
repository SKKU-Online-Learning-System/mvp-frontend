import React from "react";
import { useDispatch, useSelector } from "react-redux";
import wrapper from "store";
import { RootStateInterface } from "interfaces/RootState";
import { CounterState } from "interfaces";
import {
	counterIncrement,
	counterDecrement,
	counterReset,
} from "actions/actCounter";

const Counter = () => {
	const { count } = useSelector(
		(state: RootStateInterface): CounterState => state.counter,
	);
	const dispatch = useDispatch();
	const handleClick = (num: number) => {
		if (num === 1) {
			dispatch(counterIncrement());
		} else if (num === 0) {
			dispatch(counterDecrement());
		} else if (num === 2) {
			dispatch(counterReset());
		}
	};
	return (
		<div>
			<div>현재값:{count}</div>
			<div>
				<button onClick={() => handleClick(1)}>+</button>
				<button onClick={() => handleClick(0)}>-</button>
				<button onClick={() => handleClick(2)}>reset</button>
			</div>
		</div>
	);
};
export default Counter;