/*
 * Copyright 2019 David Addison
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

export type Type<T> = T[];

export interface ActionTypes {
  [key: string]: string;
}

export interface Action<T> {
  type: string;
  element: T;
}

interface constraint {
  id: string | number;
}

export function rtArrayFactory<T extends constraint>(prefix: string, initial: Type<T> = []) {
  const actionTypes: ActionTypes = {
    create: `${prefix}/CREATE_ELEMENT`,
    update: `${prefix}/UPDATE_ELEMENT`,
    delete: `${prefix}/DELETE_ELEMENT`
  };

  function actionCreator(type: string) {
    return function (element: T): Action<T> {
      return { type, element };
    };
  }

  return {
    actionTypes,
    create: actionCreator(actionTypes.create),
    update: actionCreator(actionTypes.update),
    delete: actionCreator(actionTypes.delete),

    reducer: function (state: Type<T> = initial, action: Action<T>): Type<T> {
      switch (action.type) {
        case actionTypes.create:
          return [...state, action.element];

        case actionTypes.update:
          return state.map(e => (e.id === action.element.id ? action.element : e));

        case actionTypes.delete:
          return state.filter(e => e.id !== action.element.id);

        default:
          return state;
      }
    }
  };
}
