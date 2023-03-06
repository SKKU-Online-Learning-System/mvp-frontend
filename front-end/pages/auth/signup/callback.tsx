import React, { ReactElement, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { AxiosResponse } from 'axios';

import { fetchSignUpCallback } from 'apis/SignUp/signUpApi';
import { userLoginAuthState } from 'constants/commonState';
import { commonActions } from 'store/feature/common/commonSlice';

const SignUpCallback = (): ReactElement => {
	const router = useRouter();
	const dispatch = useDispatch();

	useEffect(() => {
		if (router.isReady) {
			const token = router.query['token'] as string;

			fetchSignUpCallback(token)
				.then((res: AxiosResponse) => {
					if (res.status === 200) {
						dispatch(commonActions.setIsLoggined(userLoginAuthState.LOGGINED));
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

export default SignUpCallback;
