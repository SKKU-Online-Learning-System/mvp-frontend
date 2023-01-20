import { fetchLogInCallback } from 'apis/LogIn/logInApi';
import { AxiosResponse } from 'axios';
import { userLoginAuthState } from 'constants/commonState';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { commonActions } from 'store/feature/common/commonSlice';
import { useDispatch } from 'react-redux';

const LogInCallback = () => {
	const router = useRouter();
	const dispatch = useDispatch();

	useEffect(() => {
		if (router.isReady) {
			const token = router.query['token'] as string;

			fetchLogInCallback(token)
				.then((res: AxiosResponse) => {
					if (res.status === 200) {
						dispatch(commonActions.setIsLoggined(userLoginAuthState.LOGGINED));
						router.replace('/');
					} else {
						router.replace('/auth/callbackError', '/');
					}
				})
				.catch((err: any) => console.log(err));
		} else {
			return;
		}
	}, [router.isReady]);

	return (
		<div>
			<h3>redirecting to server...</h3>
		</div>
	);
};

export default LogInCallback;
