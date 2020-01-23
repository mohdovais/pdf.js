/* Copyright 2012 Mozilla Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/* eslint-disable no-unused-vars */

"use strict";

import { isFetchSupported, isValidFetchUrl } from "./display/display_utils.js";
import { PDFNetworkStream } from "./display/network.js";
import { PDFFetchStream } from "./display/fetch_stream.js";
import { setPDFNetworkStreamFactory } from "./display/api.js";

setPDFNetworkStreamFactory(params => {
  if (isFetchSupported() && isValidFetchUrl(params.url)) {
    return new PDFFetchStream(params);
  }
  return new PDFNetworkStream(params);
});

export {
  build,
  version,
  getDocument,
  LoopbackPort,
  PDFDataRangeTransport,
  PDFWorker,
} from "./display/api.js";

export { renderTextLayer } from "./display/text_layer.js";

export { AnnotationLayer } from "./display/annotation_layer.js";

export {
  createPromiseCapability,
  PasswordResponses,
  InvalidPDFException,
  MissingPDFException,
  NativeImageDecoding,
  CMapCompressionType,
  UnexpectedResponseException,
  OPS,
  VerbosityLevel,
  UNSUPPORTED_FEATURES,
  createValidAbsoluteUrl,
  createObjectURL,
  removeNullCharacters,
  shadow,
  Util,
} from "./shared/util.js";

export { SVGGraphics } from "./display/svg.js";

export {
  RenderingCancelledException,
  getFilenameFromUrl,
  LinkTarget,
  addLinkAttributes,
  loadScript,
  PDFDateString,
} from "./display/display_utils.js";

export { GlobalWorkerOptions } from "./display/worker_options.js";

export { apiCompatibilityParams } from "./display/api_compatibility.js";
