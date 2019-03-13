/*
 * Copyright 2019 David Addison
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

import {createActionTypes} from "./common/utils"

export type Type<T> = T[];

export interface Action<T> {
  type: string;
  element: T;
}

interface constraint {
  id: string | number;
}

export function rtArrayFactory<T extends constraint>(prefix: string, initial: T[]) {
  const types = ["add", "update", "remove"]
  const actionTypes = createActionTypes(types, prefix, "element")
  const actionCreators = createActionCreators(actionTypes, creator)
  function creator(type: string) {
    return function (element: T): Action<T> {
      return { type, element };
    };
  }

  return {
    actionTypes,
    actionCreators,
    reducer: function (state: Type<T> = initial, action: Action<T>): Type<T> {
      switch (action.type) {
        case actionTypes.add:
          return [...state, action.element];

        case actionTypes.update:
          return state.map(e => (e.id === action.element.id ? action.element : e));

        case actionTypes.remove:
          return state.filter(e => e.id !== action.element.id);

        default:
          return state;
      }
    }
  };
}
