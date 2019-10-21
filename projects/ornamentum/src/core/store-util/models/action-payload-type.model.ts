import { CallableAction } from './callable-action.model';
import { PayloadType } from './payload-type.model';

export type ActionPayloadType<T extends CallableAction> = PayloadType<ReturnType<T>>;
