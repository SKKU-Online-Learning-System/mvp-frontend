import { setupServer } from 'msw/node';
import { requestHandlers } from './handlers';

export const server = setupServer(...requestHandlers);
