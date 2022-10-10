// Service worker 설정.
import { setupWorker } from 'msw';
import { requestHandlers } from './handlers';

export const worker = setupWorker(...requestHandlers);
