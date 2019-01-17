/*
 * Copyright 2019 David Addison
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

import { rtGenericFactory } from "./rtGeneric";

export type rtString = string;

export function rtStringFactory(prefix: string, initial: rtString = '') {
  return rtGenericFactory<rtString>(prefix, initial);
}
