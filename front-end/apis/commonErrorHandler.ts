import { AxiosError } from 'axios';

import { store } from 'store/app/store';
import { commonActions } from 'store/feature/common/commonSlice';
import { HTTP_STATUS_CODE } from 'constants/http';

export const commonErrorHandler = (error: AxiosError): undefined => {
	const statusCode = error.response?.status ?? 0;
	const errorCodes = Object.values(HTTP_STATUS_CODE);

	if (errorCodes.includes(statusCode)) {
		store.dispatch(commonActions.setErrorInfo(statusCode));
	}

	return;
};
