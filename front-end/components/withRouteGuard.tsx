import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { RootState } from 'store/app/store';
import { userLoginAuthState } from 'constants/userAuthState';
import { useAppSelector } from 'store/app/hooks';
// TODO : type 채워넣기.
const withRouteGuard = (WrappedComponent: any) => {
	return (props: any) => {
		const router = useRouter();
		const [isVerified, setIsVerified] = useState(false);
		const { isLoggined } = useAppSelector(
			(state: RootState) => state.userAuthState,
		);

		const checkUserAuth = () => {
			console.log(isLoggined);
			if (isLoggined === userLoginAuthState.LOGGINED) {
				setIsVerified(true);
			} else if (isLoggined === userLoginAuthState.NOT_LOGGINED) {
				router.replace('/');
			}
		};

		useEffect(() => {
			checkUserAuth();
		}, [isLoggined]);

		return isVerified ? <WrappedComponent {...props} /> : null;
	};
};

export default withRouteGuard;
