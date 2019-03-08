/*
 * Copyright 2019 David Addison
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

export interface Action<T> {
  type: string
  value?: T
}

export interface ActionTypes {
  [key: string]: string
}

export type ActionCreator<T> = (value?: T) => Action<T>

export interface ActionCreators<T> {
  set: ActionCreator<T>
  [key: string]: ActionCreator<T>
}

export interface Factory<T> {
  actionTypes: ActionTypes,
  actionCreators: ActionCreators<T>
  reducer(state: T, action: Action<T>): T,
}
