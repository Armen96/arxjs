import {Action} from './action-interface';

export abstract class PayloadAction<T> implements Action {
  type: string;

  public constructor(public payload: T) {}
}
