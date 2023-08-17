import React, { ReactElement, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { AxiosResponse } from 'axios';

import { userLoginAuthState, userState } from 'constants/commonState';
import { fetchLogInCallback } from 'apis/LogIn/logInApi';
import { commonActions } from 'store/feature/common/commonSlice';

const LogInCallback = (): void | ReactElement => {
	const router = useRouter();

	const dispatch = useDispatch();

	useEffect(() => {
		if (router.isReady) {
			const token = router.query['token'] as string;

			fetchLogInCallback(token)
				.then((res: AxiosResponse) => {
					if (res.status === 200) {
						dispatch(commonActions.setIsLoggined(userLoginAuthState.LOGGINED));
						dispatch(commonActions.setUserType(userState.USER));
						router.replace('/');
					} else {
						router.replace('/auth/callbackError', '/');
					}
				})
				.catch((err: Error) => console.log(err));
		} else {
			return;
		}
	}, [dispatch, router]);

	return (
		<div>
			<h3>redirecting to server...</h3>
		</div>
	);
};

export default LogInCallback;
