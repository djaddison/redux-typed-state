/*
 * Copyright 2019 David Addison
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

export type Type<T> = T;

export interface ActionTypes {
  [key: string]: string;
}

export interface Action<T> {
  type: string;
  value?: T;
}

export interface Factory<T> {
  actionTypes: ActionTypes,
  set(value: T): Action<T>,
  reducer(state: Type<T>, action: Action<T>): Type<T>,
}

export function rtGenericFactory<T>(prefix: string, initial: Type<T>): Factory<T> {
  const actionTypes: ActionTypes = {
    set: `${prefix}/SET_VALUE`
  };

  return {
    actionTypes,
    set(value: T): Action<T> {
      return { type: actionTypes.set, value };
    },
    reducer(state: Type<T> = initial, action: Action<T>): Type<T> {
      switch (action.type) {
        case actionTypes.set:
          return typeof action.value !== 'undefined' ? action.value : state;

        default:
          return state;
      }
    }
  };
}
