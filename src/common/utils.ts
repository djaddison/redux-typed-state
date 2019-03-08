/*
 * Copyright 2019 David Addison
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

 import { Action, ActionCreator, ActionTypes } from "./interfaces";

/*
 * Build a map of strings. Example:
 * const actionTypes = {
 *   create: `todo_create_element`,
 *   update: `todo_update_element`,
 *   delete: `todo_delete_element`
 * };
 */
export function createActionTypes(types: string[], prefix: string, postfix: string): ActionTypes {
  return types.reduce( (obj: ActionTypes, item: string) => {
    return obj[item] = `${prefix}_${item}_${postfix}`
  }, {})
}

function createActionCreators<T>(types: ActionTypes, fn: ActionCreator<T>) {
  return "TODO"
}

export function actionCreator<T>(type: string) {
  return function(value?: T): Action<T> {
    return { type, value };
  };
}
