/*
 * Copyright 2019 David Addison
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

export type Type = boolean;

export interface Action {
  type: string;
}

export function rtVisibleFactory(prefix: string, initial: Type = true) {
  const actionTypes = {
    show: `${prefix}/SHOW`,
    hide: `${prefix}/HIDE`,
    toggle: `${prefix}/TOGGLE`
  };

  return {
    actionTypes,
    show(): Action {
      return { type: actionTypes.show };
    },
    hide(): Action {
      return { type: actionTypes.hide };
    },
    toggle(): Action {
      return { type: actionTypes.toggle };
    },
    reducer(state: Type = initial, action: Action): Type {
      switch (action.type) {
        case actionTypes.show:
          return true;

        case actionTypes.hide:
          return false;

        case actionTypes.toggle:
          return !state;

        default:
          return state;
      }
    }
  };
}
