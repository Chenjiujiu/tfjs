/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */

// The '../wasm/inference.js' file was generated by JS closure
// compiler. It was not "module friendly" so we cannot import it directly in
// typescript code. To workaround this issue, we import and re-export it in this
// file to essentially convert it to a valid CommonJS module, which can then be
// imported correctly by typescript code.
const YggdrasilDecisionForests = require('../wasm/inference.js');

exports.tfdfWeb = YggdrasilDecisionForests();
