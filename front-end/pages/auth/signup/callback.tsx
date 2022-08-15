import { fetchSignUpCallback } from 'apis/SignUp/signUpApi';
import { AxiosResponse } from 'axios';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const SignUpCallback = () => {
	const router = useRouter();
	useEffect(() => {
		if (router.isReady) {
			const token = router.query['token'] as string;

			fetchSignUpCallback(token)
				.then((res: AxiosResponse) => {
					if (res.status === 200) {
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

export default SignUpCallback;
