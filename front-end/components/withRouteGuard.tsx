import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { userLoginAuthState } from 'constants/commonState';
import { useAppSelector } from 'store/app/hooks';
import { RootState } from 'store/app/store';
// TODO : type 채워넣기.
// NOTE. https://dev.to/shubhamverma/implement-protected-routes-in-nextjs-37ml
const withRouteGuard = (WrappedComponent: any) => {
	// const WrappedComponentDisplayName =
	// 	WrappedComponent.displayName || WrappedComponent.name || 'Component';
	const RouteGuard = (props: JSX.IntrinsicAttributes) => {
		const router = useRouter();
		const [isVerified, setIsVerified] = useState(false);
		const { isLoggined } = useAppSelector((state: RootState) => state.common);

		useEffect(() => {
			const checkUserAuth = () => {
				if (isLoggined === userLoginAuthState.LOGGINED) {
					setIsVerified(true);
				} else if (isLoggined === userLoginAuthState.NOT_LOGGINED) {
					router.replace('/');
				}
			};
			checkUserAuth();
		}, [isLoggined, router]);

		return isVerified ? <WrappedComponent {...props} /> : null;
	};

	// RouteGuard.displayName = `withRouteGuard(${WrappedComponentDisplayName})`;

	return RouteGuard;
};

export default withRouteGuard;
