function ___$insertStyle(css) {
  if (!css) {
    return;
  }
  if (typeof window === 'undefined') {
    return;
  }

  var style = document.createElement('style');

  style.setAttribute('type', 'text/css');
  style.innerHTML = css;
  document.head.appendChild(style);
  return css;
}

import React, { useState, useEffect, useRef, memo, useCallback, Fragment } from 'react';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

/** @deprecated */
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

___$insertStyle(".colorpicker {\n  background-color: #fff;\n  min-width: 186px;\n  z-index: 1;\n}\n.colorpicker * {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n.colorpicker .colorpicker-form {\n  display: flex;\n}\n.colorpicker .colorpicker-form .colorpicker-hex {\n  padding-right: 16px;\n}\n.colorpicker .colorpicker-form .colorpicker-alpha {\n  flex-basis: 82px;\n}\n.colorpicker .color-picker-panel-wrap-has-alpha {\n  display: flex;\n  height: 36px;\n}\n.colorpicker-static {\n  position: absolute;\n  top: 5px;\n  left: 0;\n}\n.colorpicker .color-picker-panel {\n  min-width: 218px;\n  background-color: #fff;\n  box-sizing: border-box;\n  outline: none;\n  z-index: 9;\n  padding-bottom: 20px;\n  border-radius: 4px;\n  -moz-user-select: none;\n  -khtml-user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.colorpicker .color-picker-panel-ribbon {\n  position: relative;\n  height: 100%;\n  width: 100%;\n  border-radius: 4px;\n  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMSAxIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj48bGluZWFyR3JhZGllbnQgaWQ9Imxlc3NoYXQtZ2VuZXJhdGVkIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNmZjAwMDAiIHN0b3Atb3BhY2l0eT0iMSIvPjxzdG9wIG9mZnNldD0iMTAlIiBzdG9wLWNvbG9yPSIjZmY5OTAwIiBzdG9wLW9wYWNpdHk9IjEiLz48c3RvcCBvZmZzZXQ9IjIwJSIgc3RvcC1jb2xvcj0iI2NkZmYwMCIgc3RvcC1vcGFjaXR5PSIxIi8+PHN0b3Agb2Zmc2V0PSIzMCUiIHN0b3AtY29sb3I9IiMzNWZmMDAiIHN0b3Atb3BhY2l0eT0iMSIvPjxzdG9wIG9mZnNldD0iNDAlIiBzdG9wLWNvbG9yPSIjMDBmZjY2IiBzdG9wLW9wYWNpdHk9IjEiLz48c3RvcCBvZmZzZXQ9IjUwJSIgc3RvcC1jb2xvcj0iIzAwZmZmZCIgc3RvcC1vcGFjaXR5PSIxIi8+PHN0b3Agb2Zmc2V0PSI2MCUiIHN0b3AtY29sb3I9IiMwMDY2ZmYiIHN0b3Atb3BhY2l0eT0iMSIvPjxzdG9wIG9mZnNldD0iNzAlIiBzdG9wLWNvbG9yPSIjMzIwMGZmIiBzdG9wLW9wYWNpdHk9IjEiLz48c3RvcCBvZmZzZXQ9IjgwJSIgc3RvcC1jb2xvcj0iI2NkMDBmZiIgc3RvcC1vcGFjaXR5PSIxIi8+PHN0b3Agb2Zmc2V0PSI5MCUiIHN0b3AtY29sb3I9IiNmZjAwOTkiIHN0b3Atb3BhY2l0eT0iMSIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iI2ZmMDAwMCIgc3RvcC1vcGFjaXR5PSIxIi8+PC9saW5lYXJHcmFkaWVudD48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSJ1cmwoI2xlc3NoYXQtZ2VuZXJhdGVkKSIgLz48L3N2Zz4=);\n  background-image: -webkit-linear-gradient(left, #ff0000 0%, #ff9900 10%, #cdff00 20%, #35ff00 30%, #00ff66 40%, #00fffd 50%, #0066ff 60%, #3200ff 70%, #cd00ff 80%, #ff0099 90%, #ff0000 100%);\n  background-image: -moz-linear-gradient(left, #ff0000 0%, #ff9900 10%, #cdff00 20%, #35ff00 30%, #00ff66 40%, #00fffd 50%, #0066ff 60%, #3200ff 70%, #cd00ff 80%, #ff0099 90%, #ff0000 100%);\n  background-image: -o-linear-gradient(left, #ff0000 0%, #ff9900 10%, #cdff00 20%, #35ff00 30%, #00ff66 40%, #00fffd 50%, #0066ff 60%, #3200ff 70%, #cd00ff 80%, #ff0099 90%, #ff0000 100%);\n  background-image: linear-gradient(to right, #ff0000 0%, #ff9900 10%, #cdff00 20%, #35ff00 30%, #00ff66 40%, #00fffd 50%, #0066ff 60%, #3200ff 70%, #cd00ff 80%, #ff0099 90%, #ff0000 100%);\n}\n.colorpicker .color-picker-panel-ribbon-bg {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  border-radius: 4px;\n  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMSAxIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj48bGluZWFyR3JhZGllbnQgaWQ9Imxlc3NoYXQtZ2VuZXJhdGVkIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNmZjAwMDAiIHN0b3Atb3BhY2l0eT0iMSIvPjxzdG9wIG9mZnNldD0iMTAlIiBzdG9wLWNvbG9yPSIjZmY5OTAwIiBzdG9wLW9wYWNpdHk9IjEiLz48c3RvcCBvZmZzZXQ9IjIwJSIgc3RvcC1jb2xvcj0iI2NkZmYwMCIgc3RvcC1vcGFjaXR5PSIxIi8+PHN0b3Agb2Zmc2V0PSIzMCUiIHN0b3AtY29sb3I9IiMzNWZmMDAiIHN0b3Atb3BhY2l0eT0iMSIvPjxzdG9wIG9mZnNldD0iNDAlIiBzdG9wLWNvbG9yPSIjMDBmZjY2IiBzdG9wLW9wYWNpdHk9IjEiLz48c3RvcCBvZmZzZXQ9IjUwJSIgc3RvcC1jb2xvcj0iIzAwZmZmZCIgc3RvcC1vcGFjaXR5PSIxIi8+PHN0b3Agb2Zmc2V0PSI2MCUiIHN0b3AtY29sb3I9IiMwMDY2ZmYiIHN0b3Atb3BhY2l0eT0iMSIvPjxzdG9wIG9mZnNldD0iNzAlIiBzdG9wLWNvbG9yPSIjMzIwMGZmIiBzdG9wLW9wYWNpdHk9IjEiLz48c3RvcCBvZmZzZXQ9IjgwJSIgc3RvcC1jb2xvcj0iI2NkMDBmZiIgc3RvcC1vcGFjaXR5PSIxIi8+PHN0b3Agb2Zmc2V0PSI5MCUiIHN0b3AtY29sb3I9IiNmZjAwOTkiIHN0b3Atb3BhY2l0eT0iMSIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iI2ZmMDAwMCIgc3RvcC1vcGFjaXR5PSIxIi8+PC9saW5lYXJHcmFkaWVudD48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSJ1cmwoI2xlc3NoYXQtZ2VuZXJhdGVkKSIgLz48L3N2Zz4=);\n  background-image: -webkit-linear-gradient(left, #ff0000 0%, #ff9900 10%, #cdff00 20%, #35ff00 30%, #00ff66 40%, #00fffd 50%, #0066ff 60%, #3200ff 70%, #cd00ff 80%, #ff0099 90%, #ff0000 100%);\n  background-image: -moz-linear-gradient(left, #ff0000 0%, #ff9900 10%, #cdff00 20%, #35ff00 30%, #00ff66 40%, #00fffd 50%, #0066ff 60%, #3200ff 70%, #cd00ff 80%, #ff0099 90%, #ff0000 100%);\n  background-image: -o-linear-gradient(left, #ff0000 0%, #ff9900 10%, #cdff00 20%, #35ff00 30%, #00ff66 40%, #00fffd 50%, #0066ff 60%, #3200ff 70%, #cd00ff 80%, #ff0099 90%, #ff0000 100%);\n  background-image: linear-gradient(to right, #ff0000 0%, #ff9900 10%, #cdff00 20%, #35ff00 30%, #00ff66 40%, #00fffd 50%, #0066ff 60%, #3200ff 70%, #cd00ff 80%, #ff0099 90%, #ff0000 100%);\n}\n.colorpicker .color-picker-panel-ribbon-handler {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  cursor: grab;\n}\n.colorpicker .color-picker-panel-ribbon span {\n  position: absolute;\n  top: -3px;\n  display: block;\n  height: 14px;\n  width: 14px;\n  padding: 1px 0;\n  border-radius: 50%;\n  margin-left: -7px;\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.24);\n  border: solid 2px #fff;\n  cursor: grab;\n}\n.colorpicker .color-picker-panel-alpha {\n  position: relative;\n  height: 100%;\n  width: 100%;\n  border-radius: 4px;\n  background: linear-gradient(to right, transparent, black), url('data:image/svg+xml;utf8, <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 2 2\"><path fill=\"white\" d=\"M1,0H2V1H1V0ZM0,1H1V2H0V1Z\"/><path fill=\"gray\" d=\"M0,0H1V1H0V0ZM1,1H2V2H1V1Z\"/></svg>');\n  background-size: 100%, 6px;\n  background-repeat: repeat;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.colorpicker .color-picker-panel-alpha-bg {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  border-radius: 4px;\n}\n.colorpicker .color-picker-panel-alpha-handler {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  cursor: grab;\n}\n.colorpicker .color-picker-panel-alpha span {\n  position: absolute;\n  top: -3px;\n  height: 14px;\n  width: 14px;\n  padding: 1px 0;\n  margin-left: -7px;\n  border-radius: 50%;\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.24);\n  border: solid 2px #fff;\n  cursor: grab;\n}\n.colorpicker .color-picker-panel-open {\n  display: block;\n}\n.colorpicker .color-picker-panel-close {\n  display: none;\n}\n.colorpicker .color-picker-panel-inner {\n  position: relative;\n}\n.colorpicker .color-picker-panel-preview {\n  height: 30px;\n  width: 30px;\n  overflow: hidden;\n  border-radius: 2px;\n  background-image: url(\"data:image/png;base64,R0lGODdhCgAKAPAAAOXl5f///ywAAAAACgAKAEACEIQdqXt9GxyETrI279OIgwIAOw==\");\n}\n.colorpicker .color-picker-panel-preview span,\n.colorpicker .color-picker-panel-preview input[type=color] {\n  position: absolute;\n  display: block;\n  height: 100%;\n  width: 30px;\n  border-radius: 2px;\n}\n.colorpicker .color-picker-panel-preview span {\n  box-shadow: 0 0 2px #808080 inset;\n}\n.colorpicker .color-picker-panel-preview input[type=color] {\n  opacity: 0;\n}\n.colorpicker .color-picker-panel-wrap {\n  width: 100%;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.colorpicker .color-picker-panel-wrap-preview {\n  position: absolute;\n  right: 8px;\n  display: none;\n}\n.colorpicker .color-picker-panel-wrap-ribbon {\n  height: 8px;\n}\n.colorpicker .color-picker-panel-wrap-alpha {\n  height: 8px;\n}\n.colorpicker .color-picker-panel-wrap-ribbon {\n  height: 8px;\n}\n.colorpicker .color-picker-panel-board {\n  position: relative;\n  margin-bottom: 16px;\n  font-size: 0;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.colorpicker .color-picker-panel-board-hsv {\n  width: 100%;\n  height: 120px;\n  position: relative;\n  z-index: 1;\n  border-radius: 6px;\n}\n.colorpicker .color-picker-panel-board-value {\n  border-radius: 6px;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  z-index: 2;\n  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMSAxIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj48bGluZWFyR3JhZGllbnQgaWQ9Imxlc3NoYXQtZ2VuZXJhdGVkIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjAlIiB5MT0iMCUiIHgyPSIwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9InJnYigwLDAsMCkiIHN0b3Atb3BhY2l0eT0iMCIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzAwMDAwMCIgc3RvcC1vcGFjaXR5PSIxIi8+PC9saW5lYXJHcmFkaWVudD48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSJ1cmwoI2xlc3NoYXQtZ2VuZXJhdGVkKSIgLz48L3N2Zz4=);\n  background-image: -webkit-linear-gradient(top, transparent 0%, #000000 100%);\n  background-image: -moz-linear-gradient(top, transparent 0%, #000000 100%);\n  background-image: -o-linear-gradient(top, transparent 0%, #000000 100%);\n  background-image: linear-gradient(to bottom, transparent 0%, #000000 100%);\n}\n.colorpicker .color-picker-panel-board-saturation {\n  border-radius: 6px;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  z-index: 1;\n  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMSAxIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj48bGluZWFyR3JhZGllbnQgaWQ9Imxlc3NoYXQtZ2VuZXJhdGVkIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNmZmZmZmYiIHN0b3Atb3BhY2l0eT0iMSIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0icmdiKDAsMCwwKSIgc3RvcC1vcGFjaXR5PSIwIi8+PC9saW5lYXJHcmFkaWVudD48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSJ1cmwoI2xlc3NoYXQtZ2VuZXJhdGVkKSIgLz48L3N2Zz4=);\n  background-image: -webkit-linear-gradient(left, #fff 0%, transparent 100%);\n  background-image: -moz-linear-gradient(left, #fff 0%, transparent 100%);\n  background-image: -o-linear-gradient(left, #fff 0%, transparent 100%);\n  background-image: linear-gradient(to right, #fff 0%, transparent 100%);\n}\n.colorpicker .color-picker-panel-board-handler {\n  cursor: grab;\n  cursor: -webkit-grab;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 3;\n}\n.colorpicker .color-picker-panel-board span {\n  position: absolute;\n  border-radius: 10px;\n  width: 14px;\n  height: 14px;\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.24);\n  border: solid 2px #fff;\n  left: -999px;\n  top: -999px;\n  z-index: 2;\n}\n.colorpicker .color-picker-panel-params {\n  font-size: 12px;\n}\n.colorpicker .color-picker-panel-params-input {\n  overflow: hidden;\n  padding: 2px 8px;\n}\n.colorpicker .color-picker-panel-params-hex {\n  width: 52px;\n}\n.colorpicker .color-picker-panel-params-lable {\n  padding: 2px 8px;\n  height: 22px;\n  line-height: 18px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.colorpicker .color-picker-panel-params-lable-hex {\n  width: 52px;\n}\n.colorpicker .color-picker-panel-params-lable-number, .colorpicker .color-picker-panel-params-lable-alpha {\n  margin-left: 5px;\n  width: 44px;\n  text-transform: uppercase;\n}\n.colorpicker .color-picker-panel-params-lable-number:hover {\n  border-radius: 2px;\n  background-color: #eee;\n  box-shadow: 0 0 0 1px #ccc inset;\n  cursor: grab;\n}\n.colorpicker .color-picker-panel-params-lable label {\n  float: left;\n  text-align: center;\n}\n.colorpicker .color-picker-panel-params-has-alpha input[type=number] {\n  width: 32px;\n}\n.colorpicker .color-picker-panel-params input {\n  -webkit-user-select: text;\n  -moz-user-select: text;\n  -ms-user-select: text;\n  user-select: text;\n  text-align: center;\n  padding: 1px;\n  margin: 0;\n  float: left;\n  border-radius: 2px;\n  border: 1px solid #cacaca;\n  font-family: \"Helvetica Neue\", Helvetica, sans-serif;\n}\n.colorpicker .color-picker-trigger {\n  border: 1px solid #999;\n  display: inline-block;\n  padding: 2px;\n  border-radius: 2px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  width: 20px;\n  height: 20px;\n  cursor: grab;\n  box-shadow: 0 0 0 2px #fff inset;\n}\n.colorpicker .color-picker-trigger-open {\n  box-shadow: 0px 0px 3px #999;\n}\n\n.color-picker-panel-params-has-alpha .color-picker-panel-params-lable-number,\n.color-picker-panel-params-has-alpha .color-picker-panel-params-lable-alpha {\n  width: 32px;\n}\n\n.color-picker {\n  position: absolute;\n  left: -9999px;\n  top: -9999px;\n  z-index: 1000;\n}\n.color-picker-wrap {\n  display: inline-block;\n}\n.color-picker-slide-up-enter {\n  animation-duration: 0.3s;\n  animation-fill-mode: both;\n  transform-origin: 0 0;\n  display: block !important;\n  opacity: 0;\n  animation-timing-function: cubic-bezier(0.08, 0.82, 0.17, 1);\n  animation-play-state: paused;\n}\n.color-picker-slide-up-appear {\n  animation-duration: 0.3s;\n  animation-fill-mode: both;\n  transform-origin: 0 0;\n  display: block !important;\n  opacity: 0;\n  animation-timing-function: cubic-bezier(0.08, 0.82, 0.17, 1);\n  animation-play-state: paused;\n}\n.color-picker-slide-up-leave {\n  animation-duration: 0.3s;\n  animation-fill-mode: both;\n  transform-origin: 0 0;\n  display: block !important;\n  opacity: 1;\n  animation-timing-function: cubic-bezier(0.6, 0.04, 0.98, 0.34);\n  animation-play-state: paused;\n}\n\n.color-picker-slide-up-enter.color-picker-slide-up-enter-active.color-picker-placement-bottomLeft,\n.color-picker-slide-up-enter.color-picker-slide-up-enter-active.color-picker-placement-bottomRight,\n.color-picker-slide-up-appear.color-picker-slide-up-appear-active.color-picker-placement-bottomLeft,\n.color-picker-slide-up-appear.color-picker-slide-up-appear-active.color-picker-placement-bottomRight {\n  animation-name: rcColorPickerSlideUpIn;\n  animation-play-state: running;\n}\n\n.color-picker-slide-up-enter.color-picker-slide-up-enter-active.color-picker-placement-topLeft,\n.color-picker-slide-up-enter.color-picker-slide-up-enter-active.color-picker-placement-topRight,\n.color-picker-slide-up-appear.color-picker-slide-up-appear-active.color-picker-placement-topLeft,\n.color-picker-slide-up-appear.color-picker-slide-up-appear-active.color-picker-placement-topRight {\n  animation-name: rcColorPickerSlideDownIn;\n  animation-play-state: running;\n}\n\n.color-picker-slide-up-leave.color-picker-slide-up-leave-active.color-picker-placement-bottomLeft,\n.color-picker-slide-up-leave.color-picker-slide-up-leave-active.color-picker-placement-bottomRight {\n  animation-name: rcColorPickerSlideUpOut;\n  animation-play-state: running;\n}\n\n.color-picker-slide-up-leave.color-picker-slide-up-leave-active.color-picker-placement-topLeft,\n.color-picker-slide-up-leave.color-picker-slide-up-leave-active.color-picker-placement-topRight {\n  animation-name: rcColorPickerSlideDownOut;\n  animation-play-state: running;\n}\n\n.gradient-interaction {\n  flex-direction: column;\n  display: flex;\n  z-index: 1;\n}\n.gradient-interaction .gradient-result {\n  height: 74px;\n  width: 100%;\n  position: relative;\n  border-radius: 6px;\n  margin-top: 18px;\n  flex-grow: 1;\n  font-size: 16px;\n}\n.gradient-interaction .gradient-result:hover .gradient-angle {\n  opacity: 1;\n}\n.gradient-interaction .gradient-result .gradient-mode {\n  height: 32px;\n  width: 32px;\n  position: relative;\n  top: 20px;\n  left: 16px;\n  border: 2px solid white;\n  border-radius: 0.15em;\n  cursor: pointer;\n  opacity: 0.25;\n  transition: all 0.3s;\n}\n.gradient-interaction .gradient-result .gradient-mode::before {\n  position: absolute;\n  content: \"\";\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  transition: all 0.3s;\n}\n.gradient-interaction .gradient-result .gradient-mode:hover {\n  opacity: 1;\n}\n.gradient-interaction .gradient-result .gradient-mode[data-mode=linear]::before {\n  height: 2px;\n  width: 70%;\n  background: white;\n  transform: rotate(45deg);\n  border-radius: 50em;\n}\n.gradient-interaction .gradient-result .gradient-mode[data-mode=radial]::before {\n  height: 50%;\n  width: 50%;\n  border-radius: 100%;\n  border: 2px solid white;\n  background-color: white;\n}\n.gradient-interaction .gradient-result .gradient-mode[data-mode=radial]::before + .gradient-angle {\n  opacity: 0;\n}\n.gradient-interaction .gradient-result .gradient-mode[data-mode=radial] + .gradient-angle {\n  opacity: 0;\n}\n.gradient-interaction .gradient-result .gradient-angle {\n  height: 0.35em;\n  width: 0.35em;\n  background: white;\n  border-radius: 100%;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  transition: all 0.3s;\n  position: absolute;\n  margin: auto;\n  opacity: 0.25;\n}\n.gradient-interaction .gradient-result .gradient-angle > div {\n  height: 2px;\n  width: 2em;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 50%;\n  position: absolute;\n  background: white;\n  border-radius: 1em;\n  margin: auto 0;\n  transform-origin: left;\n}\n.gradient-interaction .gradient-result .gradient-pos {\n  height: 5em;\n  width: 5em;\n  display: grid;\n  display: -ms-grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-template-rows: 1fr 1fr 1fr;\n  -ms-grid-columns: 1fr 1fr 1fr;\n  -ms-grid-rows: 1fr 1fr 1fr;\n  opacity: 1;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  transition: all 0.3s;\n  position: absolute;\n  margin: auto;\n}\n.gradient-interaction .gradient-result .gradient-pos > div {\n  height: 15px;\n  width: 15px;\n  border: 2px solid transparent;\n  position: relative;\n  margin: auto;\n  transition: all 0.3s;\n}\n.gradient-interaction .gradient-result .gradient-pos > div:not(.gradient-active) {\n  cursor: pointer;\n}\n.gradient-interaction .gradient-result .gradient-pos > div::before {\n  position: absolute;\n  content: \"\";\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  height: 5px;\n  width: 5px;\n  border-radius: 100%;\n  background: white;\n  transition: all 0.3s;\n  opacity: 0.25;\n  margin: auto;\n}\n.gradient-interaction .gradient-result .gradient-pos > div:hover::before {\n  opacity: 1;\n}\n.gradient-interaction .gradient-result .gradient-pos > div.gradient-active {\n  border-color: white;\n  border-radius: 100%;\n}\n.gradient-interaction .gradient-result .gradient-pos > div.gradient-active::before {\n  opacity: 1;\n}\n.gradient-interaction .gradient-stops {\n  margin-top: 18px;\n}\n.gradient-interaction .gradient-stops .gradient-stop-preview {\n  height: 8px;\n  width: 100%;\n  border-radius: 6px;\n  position: relative;\n  overflow: hidden;\n  cursor: pointer;\n}\n.gradient-interaction .gradient-stops .gradient-stop-preview::before {\n  position: absolute;\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: url('data:image/svg+xml;utf8, <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 2 2\"><path fill=\"white\" d=\"M1,0H2V1H1V0ZM0,1H1V2H0V1Z\"/><path fill=\"gray\" d=\"M0,0H1V1H0V0ZM1,1H2V2H1V1Z\"/></svg>');\n  background-size: 8px;\n  border-radius: 4px;\n  z-index: -1;\n}\n.gradient-interaction .gradient-stops .gradient-stop-marker {\n  position: relative;\n  z-index: 1;\n}\n.gradient-interaction .gradient-stops .gradient-stop-marker .gradient-marker {\n  height: 14px;\n  width: 14px;\n  position: absolute;\n  background: currentColor;\n  margin: -11px 0 0 -7px;\n  border-radius: 100%;\n  border: 2px solid white;\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.24);\n  transition: opacity 0.15s;\n  cursor: grab;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.gradient-interaction .gradient-stops .gradient-stop-marker .gradient-marker::before {\n  position: absolute;\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: url('data:image/svg+xml;utf8, <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 2 2\"><path fill=\"white\" d=\"M1,0H2V1H1V0ZM0,1H1V2H0V1Z\"/><path fill=\"gray\" d=\"M0,0H1V1H0V0ZM1,1H2V2H1V1Z\"/></svg>');\n  background-size: 4px;\n  border-radius: 100%;\n  z-index: -1;\n}\n.gradient-interaction .gradient-stops .gradient-stop-marker .gradient-marker.hide {\n  opacity: 0;\n}\n.gradient-interaction .gradient-stops .gradient-stop-marker .gradient-marker.active {\n  border-width: 3px;\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.6);\n}\n\n.default-color-panel {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, 30px);\n  grid-gap: 6px;\n  justify-content: space-between;\n  margin: 14px -16px 0px -16px;\n  padding: 2px 16px 0px 16px;\n  overflow: auto;\n  max-height: 105px;\n}\n.default-color-panel .default-color-panel_item {\n  height: 30px;\n  width: 30px;\n  cursor: pointer;\n  position: relative;\n  outline: none;\n  border-radius: 4px;\n}\n.default-color-panel .default-color-panel_item.default-color-panel_item-active {\n  user-select: none;\n}\n.default-color-panel .default-color-panel_item.default-color-panel_item-active .item_qub {\n  position: absolute;\n  inset: 35%;\n  background: white;\n  border-radius: 50%;\n  opacity: 1;\n  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.38);\n}\n\n@keyframes rcColorPickerSlideUpIn {\n  0% {\n    opacity: 0;\n    transform-origin: 0% 0%;\n    transform: scaleY(0);\n  }\n  100% {\n    opacity: 1;\n    transform-origin: 0% 0%;\n    transform: scaleY(1);\n  }\n}\n@keyframes rcColorPickerSlideUpOut {\n  0% {\n    opacity: 1;\n    transform-origin: 0% 0%;\n    transform: scaleY(1);\n  }\n  100% {\n    opacity: 0;\n    transform-origin: 0% 0%;\n    transform: scaleY(0);\n  }\n}\n@keyframes rcColorPickerSlideDownIn {\n  0% {\n    opacity: 0;\n    transform-origin: 100% 100%;\n    transform: scaleY(0);\n  }\n  100% {\n    opacity: 1;\n    transform-origin: 100% 100%;\n    transform: scaleY(1);\n  }\n}\n@keyframes rcColorPickerSlideDownOut {\n  0% {\n    opacity: 1;\n    transform-origin: 100% 100%;\n    transform: scaleY(1);\n  }\n  100% {\n    opacity: 0;\n    transform-origin: 100% 100%;\n    transform: scaleY(0);\n  }\n}");

function createCommonjsModule(fn) {
  var module = { exports: {} };
	return fn(module, module.exports), module.exports;
}

var tinycolor = createCommonjsModule(function (module) {
// TinyColor v1.4.2
// https://github.com/bgrins/TinyColor
// Brian Grinstead, MIT License

(function(Math) {

var trimLeft = /^\s+/,
    trimRight = /\s+$/,
    tinyCounter = 0,
    mathRound = Math.round,
    mathMin = Math.min,
    mathMax = Math.max,
    mathRandom = Math.random;

function tinycolor (color, opts) {

    color = (color) ? color : '';
    opts = opts || { };

    // If input is already a tinycolor, return itself
    if (color instanceof tinycolor) {
       return color;
    }
    // If we are called as a function, call using new instead
    if (!(this instanceof tinycolor)) {
        return new tinycolor(color, opts);
    }

    var rgb = inputToRGB(color);
    this._originalInput = color,
    this._r = rgb.r,
    this._g = rgb.g,
    this._b = rgb.b,
    this._a = rgb.a,
    this._roundA = mathRound(100*this._a) / 100,
    this._format = opts.format || rgb.format;
    this._gradientType = opts.gradientType;

    // Don't let the range of [0,255] come back in [0,1].
    // Potentially lose a little bit of precision here, but will fix issues where
    // .5 gets interpreted as half of the total, instead of half of 1
    // If it was supposed to be 128, this was already taken care of by `inputToRgb`
    if (this._r < 1) { this._r = mathRound(this._r); }
    if (this._g < 1) { this._g = mathRound(this._g); }
    if (this._b < 1) { this._b = mathRound(this._b); }

    this._ok = rgb.ok;
    this._tc_id = tinyCounter++;
}

tinycolor.prototype = {
    isDark: function() {
        return this.getBrightness() < 128;
    },
    isLight: function() {
        return !this.isDark();
    },
    isValid: function() {
        return this._ok;
    },
    getOriginalInput: function() {
      return this._originalInput;
    },
    getFormat: function() {
        return this._format;
    },
    getAlpha: function() {
        return this._a;
    },
    getBrightness: function() {
        //http://www.w3.org/TR/AERT#color-contrast
        var rgb = this.toRgb();
        return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
    },
    getLuminance: function() {
        //http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
        var rgb = this.toRgb();
        var RsRGB, GsRGB, BsRGB, R, G, B;
        RsRGB = rgb.r/255;
        GsRGB = rgb.g/255;
        BsRGB = rgb.b/255;

        if (RsRGB <= 0.03928) {R = RsRGB / 12.92;} else {R = Math.pow(((RsRGB + 0.055) / 1.055), 2.4);}
        if (GsRGB <= 0.03928) {G = GsRGB / 12.92;} else {G = Math.pow(((GsRGB + 0.055) / 1.055), 2.4);}
        if (BsRGB <= 0.03928) {B = BsRGB / 12.92;} else {B = Math.pow(((BsRGB + 0.055) / 1.055), 2.4);}
        return (0.2126 * R) + (0.7152 * G) + (0.0722 * B);
    },
    setAlpha: function(value) {
        this._a = boundAlpha(value);
        this._roundA = mathRound(100*this._a) / 100;
        return this;
    },
    toHsv: function() {
        var hsv = rgbToHsv(this._r, this._g, this._b);
        return { h: hsv.h * 360, s: hsv.s, v: hsv.v, a: this._a };
    },
    toHsvString: function() {
        var hsv = rgbToHsv(this._r, this._g, this._b);
        var h = mathRound(hsv.h * 360), s = mathRound(hsv.s * 100), v = mathRound(hsv.v * 100);
        return (this._a == 1) ?
          "hsv("  + h + ", " + s + "%, " + v + "%)" :
          "hsva(" + h + ", " + s + "%, " + v + "%, "+ this._roundA + ")";
    },
    toHsl: function() {
        var hsl = rgbToHsl(this._r, this._g, this._b);
        return { h: hsl.h * 360, s: hsl.s, l: hsl.l, a: this._a };
    },
    toHslString: function() {
        var hsl = rgbToHsl(this._r, this._g, this._b);
        var h = mathRound(hsl.h * 360), s = mathRound(hsl.s * 100), l = mathRound(hsl.l * 100);
        return (this._a == 1) ?
          "hsl("  + h + ", " + s + "%, " + l + "%)" :
          "hsla(" + h + ", " + s + "%, " + l + "%, "+ this._roundA + ")";
    },
    toHex: function(allow3Char) {
        return rgbToHex(this._r, this._g, this._b, allow3Char);
    },
    toHexString: function(allow3Char) {
        return '#' + this.toHex(allow3Char);
    },
    toHex8: function(allow4Char) {
        return rgbaToHex(this._r, this._g, this._b, this._a, allow4Char);
    },
    toHex8String: function(allow4Char) {
        return '#' + this.toHex8(allow4Char);
    },
    toRgb: function() {
        return { r: mathRound(this._r), g: mathRound(this._g), b: mathRound(this._b), a: this._a };
    },
    toRgbString: function() {
        return (this._a == 1) ?
          "rgb("  + mathRound(this._r) + ", " + mathRound(this._g) + ", " + mathRound(this._b) + ")" :
          "rgba(" + mathRound(this._r) + ", " + mathRound(this._g) + ", " + mathRound(this._b) + ", " + this._roundA + ")";
    },
    toPercentageRgb: function() {
        return { r: mathRound(bound01(this._r, 255) * 100) + "%", g: mathRound(bound01(this._g, 255) * 100) + "%", b: mathRound(bound01(this._b, 255) * 100) + "%", a: this._a };
    },
    toPercentageRgbString: function() {
        return (this._a == 1) ?
          "rgb("  + mathRound(bound01(this._r, 255) * 100) + "%, " + mathRound(bound01(this._g, 255) * 100) + "%, " + mathRound(bound01(this._b, 255) * 100) + "%)" :
          "rgba(" + mathRound(bound01(this._r, 255) * 100) + "%, " + mathRound(bound01(this._g, 255) * 100) + "%, " + mathRound(bound01(this._b, 255) * 100) + "%, " + this._roundA + ")";
    },
    toName: function() {
        if (this._a === 0) {
            return "transparent";
        }

        if (this._a < 1) {
            return false;
        }

        return hexNames[rgbToHex(this._r, this._g, this._b, true)] || false;
    },
    toFilter: function(secondColor) {
        var hex8String = '#' + rgbaToArgbHex(this._r, this._g, this._b, this._a);
        var secondHex8String = hex8String;
        var gradientType = this._gradientType ? "GradientType = 1, " : "";

        if (secondColor) {
            var s = tinycolor(secondColor);
            secondHex8String = '#' + rgbaToArgbHex(s._r, s._g, s._b, s._a);
        }

        return "progid:DXImageTransform.Microsoft.gradient("+gradientType+"startColorstr="+hex8String+",endColorstr="+secondHex8String+")";
    },
    toString: function(format) {
        var formatSet = !!format;
        format = format || this._format;

        var formattedString = false;
        var hasAlpha = this._a < 1 && this._a >= 0;
        var needsAlphaFormat = !formatSet && hasAlpha && (format === "hex" || format === "hex6" || format === "hex3" || format === "hex4" || format === "hex8" || format === "name");

        if (needsAlphaFormat) {
            // Special case for "transparent", all other non-alpha formats
            // will return rgba when there is transparency.
            if (format === "name" && this._a === 0) {
                return this.toName();
            }
            return this.toRgbString();
        }
        if (format === "rgb") {
            formattedString = this.toRgbString();
        }
        if (format === "prgb") {
            formattedString = this.toPercentageRgbString();
        }
        if (format === "hex" || format === "hex6") {
            formattedString = this.toHexString();
        }
        if (format === "hex3") {
            formattedString = this.toHexString(true);
        }
        if (format === "hex4") {
            formattedString = this.toHex8String(true);
        }
        if (format === "hex8") {
            formattedString = this.toHex8String();
        }
        if (format === "name") {
            formattedString = this.toName();
        }
        if (format === "hsl") {
            formattedString = this.toHslString();
        }
        if (format === "hsv") {
            formattedString = this.toHsvString();
        }

        return formattedString || this.toHexString();
    },
    clone: function() {
        return tinycolor(this.toString());
    },

    _applyModification: function(fn, args) {
        var color = fn.apply(null, [this].concat([].slice.call(args)));
        this._r = color._r;
        this._g = color._g;
        this._b = color._b;
        this.setAlpha(color._a);
        return this;
    },
    lighten: function() {
        return this._applyModification(lighten, arguments);
    },
    brighten: function() {
        return this._applyModification(brighten, arguments);
    },
    darken: function() {
        return this._applyModification(darken, arguments);
    },
    desaturate: function() {
        return this._applyModification(desaturate, arguments);
    },
    saturate: function() {
        return this._applyModification(saturate, arguments);
    },
    greyscale: function() {
        return this._applyModification(greyscale, arguments);
    },
    spin: function() {
        return this._applyModification(spin, arguments);
    },

    _applyCombination: function(fn, args) {
        return fn.apply(null, [this].concat([].slice.call(args)));
    },
    analogous: function() {
        return this._applyCombination(analogous, arguments);
    },
    complement: function() {
        return this._applyCombination(complement, arguments);
    },
    monochromatic: function() {
        return this._applyCombination(monochromatic, arguments);
    },
    splitcomplement: function() {
        return this._applyCombination(splitcomplement, arguments);
    },
    triad: function() {
        return this._applyCombination(triad, arguments);
    },
    tetrad: function() {
        return this._applyCombination(tetrad, arguments);
    }
};

// If input is an object, force 1 into "1.0" to handle ratios properly
// String input requires "1.0" as input, so 1 will be treated as 1
tinycolor.fromRatio = function(color, opts) {
    if (typeof color == "object") {
        var newColor = {};
        for (var i in color) {
            if (color.hasOwnProperty(i)) {
                if (i === "a") {
                    newColor[i] = color[i];
                }
                else {
                    newColor[i] = convertToPercentage(color[i]);
                }
            }
        }
        color = newColor;
    }

    return tinycolor(color, opts);
};

// Given a string or object, convert that input to RGB
// Possible string inputs:
//
//     "red"
//     "#f00" or "f00"
//     "#ff0000" or "ff0000"
//     "#ff000000" or "ff000000"
//     "rgb 255 0 0" or "rgb (255, 0, 0)"
//     "rgb 1.0 0 0" or "rgb (1, 0, 0)"
//     "rgba (255, 0, 0, 1)" or "rgba 255, 0, 0, 1"
//     "rgba (1.0, 0, 0, 1)" or "rgba 1.0, 0, 0, 1"
//     "hsl(0, 100%, 50%)" or "hsl 0 100% 50%"
//     "hsla(0, 100%, 50%, 1)" or "hsla 0 100% 50%, 1"
//     "hsv(0, 100%, 100%)" or "hsv 0 100% 100%"
//
function inputToRGB(color) {

    var rgb = { r: 0, g: 0, b: 0 };
    var a = 1;
    var s = null;
    var v = null;
    var l = null;
    var ok = false;
    var format = false;

    if (typeof color == "string") {
        color = stringInputToObject(color);
    }

    if (typeof color == "object") {
        if (isValidCSSUnit(color.r) && isValidCSSUnit(color.g) && isValidCSSUnit(color.b)) {
            rgb = rgbToRgb(color.r, color.g, color.b);
            ok = true;
            format = String(color.r).substr(-1) === "%" ? "prgb" : "rgb";
        }
        else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.v)) {
            s = convertToPercentage(color.s);
            v = convertToPercentage(color.v);
            rgb = hsvToRgb(color.h, s, v);
            ok = true;
            format = "hsv";
        }
        else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.l)) {
            s = convertToPercentage(color.s);
            l = convertToPercentage(color.l);
            rgb = hslToRgb(color.h, s, l);
            ok = true;
            format = "hsl";
        }

        if (color.hasOwnProperty("a")) {
            a = color.a;
        }
    }

    a = boundAlpha(a);

    return {
        ok: ok,
        format: color.format || format,
        r: mathMin(255, mathMax(rgb.r, 0)),
        g: mathMin(255, mathMax(rgb.g, 0)),
        b: mathMin(255, mathMax(rgb.b, 0)),
        a: a
    };
}


// Conversion Functions
// --------------------

// `rgbToHsl`, `rgbToHsv`, `hslToRgb`, `hsvToRgb` modified from:
// <http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript>

// `rgbToRgb`
// Handle bounds / percentage checking to conform to CSS color spec
// <http://www.w3.org/TR/css3-color/>
// *Assumes:* r, g, b in [0, 255] or [0, 1]
// *Returns:* { r, g, b } in [0, 255]
function rgbToRgb(r, g, b){
    return {
        r: bound01(r, 255) * 255,
        g: bound01(g, 255) * 255,
        b: bound01(b, 255) * 255
    };
}

// `rgbToHsl`
// Converts an RGB color value to HSL.
// *Assumes:* r, g, and b are contained in [0, 255] or [0, 1]
// *Returns:* { h, s, l } in [0,1]
function rgbToHsl(r, g, b) {

    r = bound01(r, 255);
    g = bound01(g, 255);
    b = bound01(b, 255);

    var max = mathMax(r, g, b), min = mathMin(r, g, b);
    var h, s, l = (max + min) / 2;

    if(max == min) {
        h = s = 0; // achromatic
    }
    else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch(max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }

        h /= 6;
    }

    return { h: h, s: s, l: l };
}

// `hslToRgb`
// Converts an HSL color value to RGB.
// *Assumes:* h is contained in [0, 1] or [0, 360] and s and l are contained [0, 1] or [0, 100]
// *Returns:* { r, g, b } in the set [0, 255]
function hslToRgb(h, s, l) {
    var r, g, b;

    h = bound01(h, 360);
    s = bound01(s, 100);
    l = bound01(l, 100);

    function hue2rgb(p, q, t) {
        if(t < 0) t += 1;
        if(t > 1) t -= 1;
        if(t < 1/6) return p + (q - p) * 6 * t;
        if(t < 1/2) return q;
        if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
        return p;
    }

    if(s === 0) {
        r = g = b = l; // achromatic
    }
    else {
        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;
        r = hue2rgb(p, q, h + 1/3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1/3);
    }

    return { r: r * 255, g: g * 255, b: b * 255 };
}

// `rgbToHsv`
// Converts an RGB color value to HSV
// *Assumes:* r, g, and b are contained in the set [0, 255] or [0, 1]
// *Returns:* { h, s, v } in [0,1]
function rgbToHsv(r, g, b) {

    r = bound01(r, 255);
    g = bound01(g, 255);
    b = bound01(b, 255);

    var max = mathMax(r, g, b), min = mathMin(r, g, b);
    var h, s, v = max;

    var d = max - min;
    s = max === 0 ? 0 : d / max;

    if(max == min) {
        h = 0; // achromatic
    }
    else {
        switch(max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }
    return { h: h, s: s, v: v };
}

// `hsvToRgb`
// Converts an HSV color value to RGB.
// *Assumes:* h is contained in [0, 1] or [0, 360] and s and v are contained in [0, 1] or [0, 100]
// *Returns:* { r, g, b } in the set [0, 255]
 function hsvToRgb(h, s, v) {

    h = bound01(h, 360) * 6;
    s = bound01(s, 100);
    v = bound01(v, 100);

    var i = Math.floor(h),
        f = h - i,
        p = v * (1 - s),
        q = v * (1 - f * s),
        t = v * (1 - (1 - f) * s),
        mod = i % 6,
        r = [v, q, p, p, t, v][mod],
        g = [t, v, v, q, p, p][mod],
        b = [p, p, t, v, v, q][mod];

    return { r: r * 255, g: g * 255, b: b * 255 };
}

// `rgbToHex`
// Converts an RGB color to hex
// Assumes r, g, and b are contained in the set [0, 255]
// Returns a 3 or 6 character hex
function rgbToHex(r, g, b, allow3Char) {

    var hex = [
        pad2(mathRound(r).toString(16)),
        pad2(mathRound(g).toString(16)),
        pad2(mathRound(b).toString(16))
    ];

    // Return a 3 character hex if possible
    if (allow3Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1)) {
        return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
    }

    return hex.join("");
}

// `rgbaToHex`
// Converts an RGBA color plus alpha transparency to hex
// Assumes r, g, b are contained in the set [0, 255] and
// a in [0, 1]. Returns a 4 or 8 character rgba hex
function rgbaToHex(r, g, b, a, allow4Char) {

    var hex = [
        pad2(mathRound(r).toString(16)),
        pad2(mathRound(g).toString(16)),
        pad2(mathRound(b).toString(16)),
        pad2(convertDecimalToHex(a))
    ];

    // Return a 4 character hex if possible
    if (allow4Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1) && hex[3].charAt(0) == hex[3].charAt(1)) {
        return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0) + hex[3].charAt(0);
    }

    return hex.join("");
}

// `rgbaToArgbHex`
// Converts an RGBA color to an ARGB Hex8 string
// Rarely used, but required for "toFilter()"
function rgbaToArgbHex(r, g, b, a) {

    var hex = [
        pad2(convertDecimalToHex(a)),
        pad2(mathRound(r).toString(16)),
        pad2(mathRound(g).toString(16)),
        pad2(mathRound(b).toString(16))
    ];

    return hex.join("");
}

// `equals`
// Can be called with any tinycolor input
tinycolor.equals = function (color1, color2) {
    if (!color1 || !color2) { return false; }
    return tinycolor(color1).toRgbString() == tinycolor(color2).toRgbString();
};

tinycolor.random = function() {
    return tinycolor.fromRatio({
        r: mathRandom(),
        g: mathRandom(),
        b: mathRandom()
    });
};


// Modification Functions
// ----------------------
// Thanks to less.js for some of the basics here
// <https://github.com/cloudhead/less.js/blob/master/lib/less/functions.js>

function desaturate(color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var hsl = tinycolor(color).toHsl();
    hsl.s -= amount / 100;
    hsl.s = clamp01(hsl.s);
    return tinycolor(hsl);
}

function saturate(color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var hsl = tinycolor(color).toHsl();
    hsl.s += amount / 100;
    hsl.s = clamp01(hsl.s);
    return tinycolor(hsl);
}

function greyscale(color) {
    return tinycolor(color).desaturate(100);
}

function lighten (color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var hsl = tinycolor(color).toHsl();
    hsl.l += amount / 100;
    hsl.l = clamp01(hsl.l);
    return tinycolor(hsl);
}

function brighten(color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var rgb = tinycolor(color).toRgb();
    rgb.r = mathMax(0, mathMin(255, rgb.r - mathRound(255 * - (amount / 100))));
    rgb.g = mathMax(0, mathMin(255, rgb.g - mathRound(255 * - (amount / 100))));
    rgb.b = mathMax(0, mathMin(255, rgb.b - mathRound(255 * - (amount / 100))));
    return tinycolor(rgb);
}

function darken (color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var hsl = tinycolor(color).toHsl();
    hsl.l -= amount / 100;
    hsl.l = clamp01(hsl.l);
    return tinycolor(hsl);
}

// Spin takes a positive or negative amount within [-360, 360] indicating the change of hue.
// Values outside of this range will be wrapped into this range.
function spin(color, amount) {
    var hsl = tinycolor(color).toHsl();
    var hue = (hsl.h + amount) % 360;
    hsl.h = hue < 0 ? 360 + hue : hue;
    return tinycolor(hsl);
}

// Combination Functions
// ---------------------
// Thanks to jQuery xColor for some of the ideas behind these
// <https://github.com/infusion/jQuery-xcolor/blob/master/jquery.xcolor.js>

function complement(color) {
    var hsl = tinycolor(color).toHsl();
    hsl.h = (hsl.h + 180) % 360;
    return tinycolor(hsl);
}

function triad(color) {
    var hsl = tinycolor(color).toHsl();
    var h = hsl.h;
    return [
        tinycolor(color),
        tinycolor({ h: (h + 120) % 360, s: hsl.s, l: hsl.l }),
        tinycolor({ h: (h + 240) % 360, s: hsl.s, l: hsl.l })
    ];
}

function tetrad(color) {
    var hsl = tinycolor(color).toHsl();
    var h = hsl.h;
    return [
        tinycolor(color),
        tinycolor({ h: (h + 90) % 360, s: hsl.s, l: hsl.l }),
        tinycolor({ h: (h + 180) % 360, s: hsl.s, l: hsl.l }),
        tinycolor({ h: (h + 270) % 360, s: hsl.s, l: hsl.l })
    ];
}

function splitcomplement(color) {
    var hsl = tinycolor(color).toHsl();
    var h = hsl.h;
    return [
        tinycolor(color),
        tinycolor({ h: (h + 72) % 360, s: hsl.s, l: hsl.l}),
        tinycolor({ h: (h + 216) % 360, s: hsl.s, l: hsl.l})
    ];
}

function analogous(color, results, slices) {
    results = results || 6;
    slices = slices || 30;

    var hsl = tinycolor(color).toHsl();
    var part = 360 / slices;
    var ret = [tinycolor(color)];

    for (hsl.h = ((hsl.h - (part * results >> 1)) + 720) % 360; --results; ) {
        hsl.h = (hsl.h + part) % 360;
        ret.push(tinycolor(hsl));
    }
    return ret;
}

function monochromatic(color, results) {
    results = results || 6;
    var hsv = tinycolor(color).toHsv();
    var h = hsv.h, s = hsv.s, v = hsv.v;
    var ret = [];
    var modification = 1 / results;

    while (results--) {
        ret.push(tinycolor({ h: h, s: s, v: v}));
        v = (v + modification) % 1;
    }

    return ret;
}

// Utility Functions
// ---------------------

tinycolor.mix = function(color1, color2, amount) {
    amount = (amount === 0) ? 0 : (amount || 50);

    var rgb1 = tinycolor(color1).toRgb();
    var rgb2 = tinycolor(color2).toRgb();

    var p = amount / 100;

    var rgba = {
        r: ((rgb2.r - rgb1.r) * p) + rgb1.r,
        g: ((rgb2.g - rgb1.g) * p) + rgb1.g,
        b: ((rgb2.b - rgb1.b) * p) + rgb1.b,
        a: ((rgb2.a - rgb1.a) * p) + rgb1.a
    };

    return tinycolor(rgba);
};


// Readability Functions
// ---------------------
// <http://www.w3.org/TR/2008/REC-WCAG20-20081211/#contrast-ratiodef (WCAG Version 2)

// `contrast`
// Analyze the 2 colors and returns the color contrast defined by (WCAG Version 2)
tinycolor.readability = function(color1, color2) {
    var c1 = tinycolor(color1);
    var c2 = tinycolor(color2);
    return (Math.max(c1.getLuminance(),c2.getLuminance())+0.05) / (Math.min(c1.getLuminance(),c2.getLuminance())+0.05);
};

// `isReadable`
// Ensure that foreground and background color combinations meet WCAG2 guidelines.
// The third argument is an optional Object.
//      the 'level' property states 'AA' or 'AAA' - if missing or invalid, it defaults to 'AA';
//      the 'size' property states 'large' or 'small' - if missing or invalid, it defaults to 'small'.
// If the entire object is absent, isReadable defaults to {level:"AA",size:"small"}.

// *Example*
//    tinycolor.isReadable("#000", "#111") => false
//    tinycolor.isReadable("#000", "#111",{level:"AA",size:"large"}) => false
tinycolor.isReadable = function(color1, color2, wcag2) {
    var readability = tinycolor.readability(color1, color2);
    var wcag2Parms, out;

    out = false;

    wcag2Parms = validateWCAG2Parms(wcag2);
    switch (wcag2Parms.level + wcag2Parms.size) {
        case "AAsmall":
        case "AAAlarge":
            out = readability >= 4.5;
            break;
        case "AAlarge":
            out = readability >= 3;
            break;
        case "AAAsmall":
            out = readability >= 7;
            break;
    }
    return out;

};

// `mostReadable`
// Given a base color and a list of possible foreground or background
// colors for that base, returns the most readable color.
// Optionally returns Black or White if the most readable color is unreadable.
// *Example*
//    tinycolor.mostReadable(tinycolor.mostReadable("#123", ["#124", "#125"],{includeFallbackColors:false}).toHexString(); // "#112255"
//    tinycolor.mostReadable(tinycolor.mostReadable("#123", ["#124", "#125"],{includeFallbackColors:true}).toHexString();  // "#ffffff"
//    tinycolor.mostReadable("#a8015a", ["#faf3f3"],{includeFallbackColors:true,level:"AAA",size:"large"}).toHexString(); // "#faf3f3"
//    tinycolor.mostReadable("#a8015a", ["#faf3f3"],{includeFallbackColors:true,level:"AAA",size:"small"}).toHexString(); // "#ffffff"
tinycolor.mostReadable = function(baseColor, colorList, args) {
    var bestColor = null;
    var bestScore = 0;
    var readability;
    var includeFallbackColors, level, size ;
    args = args || {};
    includeFallbackColors = args.includeFallbackColors ;
    level = args.level;
    size = args.size;

    for (var i= 0; i < colorList.length ; i++) {
        readability = tinycolor.readability(baseColor, colorList[i]);
        if (readability > bestScore) {
            bestScore = readability;
            bestColor = tinycolor(colorList[i]);
        }
    }

    if (tinycolor.isReadable(baseColor, bestColor, {"level":level,"size":size}) || !includeFallbackColors) {
        return bestColor;
    }
    else {
        args.includeFallbackColors=false;
        return tinycolor.mostReadable(baseColor,["#fff", "#000"],args);
    }
};


// Big List of Colors
// ------------------
// <http://www.w3.org/TR/css3-color/#svg-color>
var names = tinycolor.names = {
    aliceblue: "f0f8ff",
    antiquewhite: "faebd7",
    aqua: "0ff",
    aquamarine: "7fffd4",
    azure: "f0ffff",
    beige: "f5f5dc",
    bisque: "ffe4c4",
    black: "000",
    blanchedalmond: "ffebcd",
    blue: "00f",
    blueviolet: "8a2be2",
    brown: "a52a2a",
    burlywood: "deb887",
    burntsienna: "ea7e5d",
    cadetblue: "5f9ea0",
    chartreuse: "7fff00",
    chocolate: "d2691e",
    coral: "ff7f50",
    cornflowerblue: "6495ed",
    cornsilk: "fff8dc",
    crimson: "dc143c",
    cyan: "0ff",
    darkblue: "00008b",
    darkcyan: "008b8b",
    darkgoldenrod: "b8860b",
    darkgray: "a9a9a9",
    darkgreen: "006400",
    darkgrey: "a9a9a9",
    darkkhaki: "bdb76b",
    darkmagenta: "8b008b",
    darkolivegreen: "556b2f",
    darkorange: "ff8c00",
    darkorchid: "9932cc",
    darkred: "8b0000",
    darksalmon: "e9967a",
    darkseagreen: "8fbc8f",
    darkslateblue: "483d8b",
    darkslategray: "2f4f4f",
    darkslategrey: "2f4f4f",
    darkturquoise: "00ced1",
    darkviolet: "9400d3",
    deeppink: "ff1493",
    deepskyblue: "00bfff",
    dimgray: "696969",
    dimgrey: "696969",
    dodgerblue: "1e90ff",
    firebrick: "b22222",
    floralwhite: "fffaf0",
    forestgreen: "228b22",
    fuchsia: "f0f",
    gainsboro: "dcdcdc",
    ghostwhite: "f8f8ff",
    gold: "ffd700",
    goldenrod: "daa520",
    gray: "808080",
    green: "008000",
    greenyellow: "adff2f",
    grey: "808080",
    honeydew: "f0fff0",
    hotpink: "ff69b4",
    indianred: "cd5c5c",
    indigo: "4b0082",
    ivory: "fffff0",
    khaki: "f0e68c",
    lavender: "e6e6fa",
    lavenderblush: "fff0f5",
    lawngreen: "7cfc00",
    lemonchiffon: "fffacd",
    lightblue: "add8e6",
    lightcoral: "f08080",
    lightcyan: "e0ffff",
    lightgoldenrodyellow: "fafad2",
    lightgray: "d3d3d3",
    lightgreen: "90ee90",
    lightgrey: "d3d3d3",
    lightpink: "ffb6c1",
    lightsalmon: "ffa07a",
    lightseagreen: "20b2aa",
    lightskyblue: "87cefa",
    lightslategray: "789",
    lightslategrey: "789",
    lightsteelblue: "b0c4de",
    lightyellow: "ffffe0",
    lime: "0f0",
    limegreen: "32cd32",
    linen: "faf0e6",
    magenta: "f0f",
    maroon: "800000",
    mediumaquamarine: "66cdaa",
    mediumblue: "0000cd",
    mediumorchid: "ba55d3",
    mediumpurple: "9370db",
    mediumseagreen: "3cb371",
    mediumslateblue: "7b68ee",
    mediumspringgreen: "00fa9a",
    mediumturquoise: "48d1cc",
    mediumvioletred: "c71585",
    midnightblue: "191970",
    mintcream: "f5fffa",
    mistyrose: "ffe4e1",
    moccasin: "ffe4b5",
    navajowhite: "ffdead",
    navy: "000080",
    oldlace: "fdf5e6",
    olive: "808000",
    olivedrab: "6b8e23",
    orange: "ffa500",
    orangered: "ff4500",
    orchid: "da70d6",
    palegoldenrod: "eee8aa",
    palegreen: "98fb98",
    paleturquoise: "afeeee",
    palevioletred: "db7093",
    papayawhip: "ffefd5",
    peachpuff: "ffdab9",
    peru: "cd853f",
    pink: "ffc0cb",
    plum: "dda0dd",
    powderblue: "b0e0e6",
    purple: "800080",
    rebeccapurple: "663399",
    red: "f00",
    rosybrown: "bc8f8f",
    royalblue: "4169e1",
    saddlebrown: "8b4513",
    salmon: "fa8072",
    sandybrown: "f4a460",
    seagreen: "2e8b57",
    seashell: "fff5ee",
    sienna: "a0522d",
    silver: "c0c0c0",
    skyblue: "87ceeb",
    slateblue: "6a5acd",
    slategray: "708090",
    slategrey: "708090",
    snow: "fffafa",
    springgreen: "00ff7f",
    steelblue: "4682b4",
    tan: "d2b48c",
    teal: "008080",
    thistle: "d8bfd8",
    tomato: "ff6347",
    turquoise: "40e0d0",
    violet: "ee82ee",
    wheat: "f5deb3",
    white: "fff",
    whitesmoke: "f5f5f5",
    yellow: "ff0",
    yellowgreen: "9acd32"
};

// Make it easy to access colors via `hexNames[hex]`
var hexNames = tinycolor.hexNames = flip(names);


// Utilities
// ---------

// `{ 'name1': 'val1' }` becomes `{ 'val1': 'name1' }`
function flip(o) {
    var flipped = { };
    for (var i in o) {
        if (o.hasOwnProperty(i)) {
            flipped[o[i]] = i;
        }
    }
    return flipped;
}

// Return a valid alpha value [0,1] with all invalid values being set to 1
function boundAlpha(a) {
    a = parseFloat(a);

    if (isNaN(a) || a < 0 || a > 1) {
        a = 1;
    }

    return a;
}

// Take input from [0, n] and return it as [0, 1]
function bound01(n, max) {
    if (isOnePointZero(n)) { n = "100%"; }

    var processPercent = isPercentage(n);
    n = mathMin(max, mathMax(0, parseFloat(n)));

    // Automatically convert percentage into number
    if (processPercent) {
        n = parseInt(n * max, 10) / 100;
    }

    // Handle floating point rounding errors
    if ((Math.abs(n - max) < 0.000001)) {
        return 1;
    }

    // Convert into [0, 1] range if it isn't already
    return (n % max) / parseFloat(max);
}

// Force a number between 0 and 1
function clamp01(val) {
    return mathMin(1, mathMax(0, val));
}

// Parse a base-16 hex value into a base-10 integer
function parseIntFromHex(val) {
    return parseInt(val, 16);
}

// Need to handle 1.0 as 100%, since once it is a number, there is no difference between it and 1
// <http://stackoverflow.com/questions/7422072/javascript-how-to-detect-number-as-a-decimal-including-1-0>
function isOnePointZero(n) {
    return typeof n == "string" && n.indexOf('.') != -1 && parseFloat(n) === 1;
}

// Check to see if string passed in is a percentage
function isPercentage(n) {
    return typeof n === "string" && n.indexOf('%') != -1;
}

// Force a hex value to have 2 characters
function pad2(c) {
    return c.length == 1 ? '0' + c : '' + c;
}

// Replace a decimal with it's percentage value
function convertToPercentage(n) {
    if (n <= 1) {
        n = (n * 100) + "%";
    }

    return n;
}

// Converts a decimal to a hex value
function convertDecimalToHex(d) {
    return Math.round(parseFloat(d) * 255).toString(16);
}
// Converts a hex value to a decimal
function convertHexToDecimal(h) {
    return (parseIntFromHex(h) / 255);
}

var matchers = (function() {

    // <http://www.w3.org/TR/css3-values/#integers>
    var CSS_INTEGER = "[-\\+]?\\d+%?";

    // <http://www.w3.org/TR/css3-values/#number-value>
    var CSS_NUMBER = "[-\\+]?\\d*\\.\\d+%?";

    // Allow positive/negative integer/number.  Don't capture the either/or, just the entire outcome.
    var CSS_UNIT = "(?:" + CSS_NUMBER + ")|(?:" + CSS_INTEGER + ")";

    // Actual matching.
    // Parentheses and commas are optional, but not required.
    // Whitespace can take the place of commas or opening paren
    var PERMISSIVE_MATCH3 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
    var PERMISSIVE_MATCH4 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";

    return {
        CSS_UNIT: new RegExp(CSS_UNIT),
        rgb: new RegExp("rgb" + PERMISSIVE_MATCH3),
        rgba: new RegExp("rgba" + PERMISSIVE_MATCH4),
        hsl: new RegExp("hsl" + PERMISSIVE_MATCH3),
        hsla: new RegExp("hsla" + PERMISSIVE_MATCH4),
        hsv: new RegExp("hsv" + PERMISSIVE_MATCH3),
        hsva: new RegExp("hsva" + PERMISSIVE_MATCH4),
        hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
        hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
    };
})();

// `isValidCSSUnit`
// Take in a single string / number and check to see if it looks like a CSS unit
// (see `matchers` above for definition).
function isValidCSSUnit(color) {
    return !!matchers.CSS_UNIT.exec(color);
}

// `stringInputToObject`
// Permissive string parsing.  Take in a number of formats, and output an object
// based on detected format.  Returns `{ r, g, b }` or `{ h, s, l }` or `{ h, s, v}`
function stringInputToObject(color) {

    color = color.replace(trimLeft,'').replace(trimRight, '').toLowerCase();
    var named = false;
    if (names[color]) {
        color = names[color];
        named = true;
    }
    else if (color == 'transparent') {
        return { r: 0, g: 0, b: 0, a: 0, format: "name" };
    }

    // Try to match string input using regular expressions.
    // Keep most of the number bounding out of this function - don't worry about [0,1] or [0,100] or [0,360]
    // Just return an object and let the conversion functions handle that.
    // This way the result will be the same whether the tinycolor is initialized with string or object.
    var match;
    if ((match = matchers.rgb.exec(color))) {
        return { r: match[1], g: match[2], b: match[3] };
    }
    if ((match = matchers.rgba.exec(color))) {
        return { r: match[1], g: match[2], b: match[3], a: match[4] };
    }
    if ((match = matchers.hsl.exec(color))) {
        return { h: match[1], s: match[2], l: match[3] };
    }
    if ((match = matchers.hsla.exec(color))) {
        return { h: match[1], s: match[2], l: match[3], a: match[4] };
    }
    if ((match = matchers.hsv.exec(color))) {
        return { h: match[1], s: match[2], v: match[3] };
    }
    if ((match = matchers.hsva.exec(color))) {
        return { h: match[1], s: match[2], v: match[3], a: match[4] };
    }
    if ((match = matchers.hex8.exec(color))) {
        return {
            r: parseIntFromHex(match[1]),
            g: parseIntFromHex(match[2]),
            b: parseIntFromHex(match[3]),
            a: convertHexToDecimal(match[4]),
            format: named ? "name" : "hex8"
        };
    }
    if ((match = matchers.hex6.exec(color))) {
        return {
            r: parseIntFromHex(match[1]),
            g: parseIntFromHex(match[2]),
            b: parseIntFromHex(match[3]),
            format: named ? "name" : "hex"
        };
    }
    if ((match = matchers.hex4.exec(color))) {
        return {
            r: parseIntFromHex(match[1] + '' + match[1]),
            g: parseIntFromHex(match[2] + '' + match[2]),
            b: parseIntFromHex(match[3] + '' + match[3]),
            a: convertHexToDecimal(match[4] + '' + match[4]),
            format: named ? "name" : "hex8"
        };
    }
    if ((match = matchers.hex3.exec(color))) {
        return {
            r: parseIntFromHex(match[1] + '' + match[1]),
            g: parseIntFromHex(match[2] + '' + match[2]),
            b: parseIntFromHex(match[3] + '' + match[3]),
            format: named ? "name" : "hex"
        };
    }

    return false;
}

function validateWCAG2Parms(parms) {
    // return valid WCAG2 parms for isReadable.
    // If input parms are invalid, return {"level":"AA", "size":"small"}
    var level, size;
    parms = parms || {"level":"AA", "size":"small"};
    level = (parms.level || "AA").toUpperCase();
    size = (parms.size || "small").toLowerCase();
    if (level !== "AA" && level !== "AAA") {
        level = "AA";
    }
    if (size !== "small" && size !== "large") {
        size = "small";
    }
    return {"level":level, "size":size};
}

// Node: Export function
if ( module.exports) {
    module.exports = tinycolor;
}
// AMD/requirejs: Define the module
else {
    window.tinycolor = tinycolor;
}

})(Math);
});

var getHexAlpha = (function (value) {
    var defaultObject = {
        hex: '#ffffff',
        alpha: 100
    };
    var tinyColor = tinycolor(value);
    if (value) {
        if (tinyColor.isValid() &&
            !value.trim().startsWith('radial-gradient') &&
            !value.trim().startsWith('linear-gradient')) {
            defaultObject.hex = tinyColor.toHexString();
            defaultObject.alpha = Math.round(tinyColor.getAlpha() * 100);
        }
        else {
            return defaultObject;
        }
    }
    return defaultObject;
});

var useDebounce = (function (value, delay) {
    var _a = __read(useState(value), 2), debouncedValue = _a[0], setDebouncedValue = _a[1];
    useEffect(function () {
        var handler = setTimeout(function () {
            setDebouncedValue(value);
        }, delay);
        return function () {
            clearTimeout(handler);
        };
    }, [value, delay]);
    return debouncedValue;
});

var LINEAR_POS = [
    { angle: '0', name: 'to top' },
    { angle: '45', name: 'to top right' },
    { angle: '45', name: 'to right top' },
    { angle: '90', name: 'to right' },
    { angle: '135', name: 'to right bottom' },
    { angle: '135', name: 'to bottom right' },
    { angle: '180', name: 'to bottom' },
    { angle: '225', name: 'to left bottom' },
    { angle: '225', name: 'to bottom left' },
    { angle: '270', name: 'to left' },
    { angle: '315', name: 'to top left' },
    { angle: '315', name: 'to left top' }
];
var parseGradient = (function (str) {
    var _a, _b;
    var tinyColor = tinycolor(str);
    var defaultStops = {
        stops: [
            ['rgba(0, 0, 0, 1)', 0, 0],
            ['rgba(183, 80, 174, 0.92)', 1, 1]
        ],
        gradient: "linear-gradient(180deg, rgba(6, 6, 6, 1) 0.0%, rgba(183, 80, 174, 0.92) 100.0%)",
        modifier: 180,
        type: 'linear'
    };
    if (str === 'transparent') {
        return defaultStops;
    }
    if (tinyColor.isValid() &&
        !str.trim().startsWith('radial-gradient') &&
        !str.trim().startsWith('linear-gradient')) {
        var rgbaStr = tinyColor.toRgbString();
        if (rgbaStr) {
            defaultStops.stops = [
                ['rgba(0, 0, 0, 1)', 0, 0],
                [rgbaStr, 1, 1]
            ];
            defaultStops.gradient = "linear-gradient(180deg, rgba(6, 6, 6, 1) 0.0%, " + rgbaStr + " 100.0%)";
        }
        return defaultStops;
    }
    else {
        str = str.replace(';', '').replace('background-image:', '');
        var gradient = validGradient(str);
        var stops = [];
        var angle_1 = '';
        if (gradient === 'Failed to find gradient' ||
            gradient === 'Not correct position') {
            console.warn('Incorrect gradient value');
            return defaultStops;
        }
        if (typeof gradient !== 'string') {
            stops = gradient.stops;
            angle_1 = gradient.angle ? gradient.angle : gradient.line;
        }
        var _c = __read(str.match(/^(\w+)-gradient\((.*)\)$/i) || [], 3), type = _c[1], content = _c[2];
        if (!type || !content) {
            console.warn('Incorrect gradient value');
            return defaultStops;
        }
        var findF = (_a = LINEAR_POS.find(function (item) { return item.name === angle_1; })) === null || _a === void 0 ? void 0 : _a.angle;
        var helperAngle = type === 'linear' ? '180' : 'circle at center';
        var modifier = findF || angle_1 || helperAngle;
        return {
            gradient: type + "-gradient(" + (typeof gradient !== 'string' ? gradient.original : str) + ")",
            type: type,
            modifier: modifier.match(/\d+/) !== null
                ? Number((_b = modifier.match(/\d+/)) === null || _b === void 0 ? void 0 : _b.join(''))
                : modifier,
            stops: stops.map(function (stop, index) {
                var formatStop = ["" + stop.color, index];
                if (stop.position || stop.position === 0) {
                    formatStop.splice(1, 0, stop.position);
                }
                return formatStop;
            })
        };
    }
});

var checkFormat = (function (color, format, showAlpha, stateColorAlpha) {
    var tinyColor = tinycolor(color);
    var value;
    var alphaValue = stateColorAlpha || tinyColor.getAlpha() * 100;
    switch (format) {
        case 'rgb':
            value = tinyColor.toRgbString();
            break;
        case 'hsl':
            value = tinyColor.toHslString();
            break;
        case 'hex':
            if (showAlpha && alphaValue !== 100) {
                value = tinyColor.toHex8String();
            }
            else {
                value = tinyColor.toHexString();
            }
            break;
        default:
            value = '';
            break;
    }
    return value;
});

var getGradient = (function (type, stops, modifier, format, showAlpha) {
    if (format === void 0) { format = 'rgb'; }
    var str = '';
    switch (type) {
        case 'linear':
            if (typeof modifier === 'number') {
                str = "linear-gradient(" + modifier + "deg, " + stops.map(function (color) {
                    return checkFormat(color[0], format, showAlpha) + " " + Math.round(color[1] * 100).toFixed(2) + "%";
                }) + ")";
            }
            if (typeof modifier === 'string') {
                str = "linear-gradient(" + modifier + ", " + stops.map(function (color) {
                    return checkFormat(color[0], format, showAlpha) + " " + Math.round(color[1] * 100).toFixed(2) + "%";
                }) + ")";
            }
            break;
        case 'radial':
            str = "radial-gradient(" + modifier + ", " + stops.map(function (color) {
                return checkFormat(color[0], format, showAlpha) + " " + Math.round(color[1] * 100).toFixed(2) + "%";
            }) + ")";
            break;
    }
    return str;
});

var rgbaToArray = (function (color) {
    if (!color)
        return;
    if (color.toLowerCase() === 'transparent')
        return [0, 0, 0, 0];
    if (color[0] === '#') {
        if (color.length < 7) {
            color =
                '#' +
                    color[1] +
                    color[1] +
                    color[2] +
                    color[2] +
                    color[3] +
                    color[3] +
                    (color.length > 4 ? color[4] + color[4] : '');
        }
        return [
            parseInt(color.substr(1, 2), 16),
            parseInt(color.substr(3, 2), 16),
            parseInt(color.substr(5, 2), 16),
            color.length > 7 ? parseInt(color.substr(7, 2), 16) / 255 : 1
        ];
    }
    if (color.indexOf('rgb') === 0) {
        color += ',1';
        // eslint-disable-next-line
        return color.match(/[\.\d]+/g).map(function (a) {
            return +a;
        });
    }
});

var rgbaToHex = (function (params) {
    if (!Array.isArray(params))
        return '';
    if (params.length < 3 || params.length > 4)
        return '';
    var parts = params.map(function (e) {
        var r = (+e).toString(16);
        r.length === 1 && (r = '0' + r);
        return r;
    }, []);
    return !~parts.indexOf('NaN') ? '#' + parts.join('') : '';
});

var isValidRgba = (function (rgba) {
    return !!rgbaToHex(rgba);
});

var combineRegExp = function (regexpList, flags) {
    return new RegExp(regexpList.reduce(function (result, item) {
        return result + (typeof item === 'string' ? item : item.source);
    }, ''), flags);
};
var generateRegExp = function () {
    var searchFlags = 'gi';
    var rAngle = /(?:[+-]?\d*\.?\d+)(?:deg|grad|rad|turn)/;
    var rSideCornerCapture = /to\s+((?:(?:left|right)(?:\s+(?:top|bottom))?))/;
    var rRadial = /circle at\s+((?:(?:left|right|center|top|bottom)(?:\s+(?:left|right|center|top|bottom))?))/;
    var rComma = /\s*,\s*/;
    var rColorHex = /\#(?:[a-f0-9]{6,8}|[a-f0-9]{3})/;
    var rDigits3 = /\(\s*(?:\d{1,3}%?\s*,\s*){2}%?\d{1,3}%?\s*\)/;
    var rDigits4 = /\(\s*(?:\d{1,3}%?\s*,\s*){2}%?\d{1,3}%?\s*,\s*\d*\.?\d+\)/;
    var rValue = /(?:[+-]?\d*\.?\d+)(?:%|[a-z]+)?/;
    var rKeyword = /[_a-z-][_a-z0-9-]*/;
    var rColor = combineRegExp([
        '(?:',
        rColorHex,
        '|',
        '(?:rgb|hsl)',
        rDigits3,
        '|',
        '(?:rgba|hsla)',
        rDigits4,
        '|',
        rKeyword,
        ')'
    ], '');
    var rColorStop = combineRegExp([rColor, '(?:\\s+', rValue, '(?:\\s+', rValue, ')?)?'], '');
    var rColorStopList = combineRegExp(['(?:', rColorStop, rComma, ')*', rColorStop], '');
    var rLineCapture = combineRegExp(['(?:(', rAngle, ')|', rSideCornerCapture, '|', rRadial, ')'], '');
    var rGradientSearch = combineRegExp(['(?:(', rLineCapture, ')', rComma, ')?(', rColorStopList, ')'], searchFlags);
    var rColorStopSearch = combineRegExp([
        '\\s*(',
        rColor,
        ')',
        '(?:\\s+',
        '(',
        rValue,
        '))?',
        '(?:',
        rComma,
        '\\s*)?'
    ], searchFlags);
    return {
        gradientSearch: rGradientSearch,
        colorStopSearch: rColorStopSearch
    };
};
var parseGradient$1 = function (regExpLib, input) {
    var result = {
        stops: [],
        angle: '',
        line: '',
        original: ''
    };
    var matchGradient, matchColorStop, stopResult;
    regExpLib.gradientSearch.lastIndex = 0;
    matchGradient = regExpLib.gradientSearch.exec(input);
    if (matchGradient !== null) {
        result = __assign(__assign({}, result), { original: matchGradient[0] });
        if (matchGradient[1]) {
            result.line = matchGradient[1];
        }
        if (matchGradient[2]) {
            result.angle = matchGradient[2];
        }
        if (matchGradient[3]) {
            result.sideCorner = matchGradient[3];
        }
        regExpLib.colorStopSearch.lastIndex = 0;
        matchColorStop = regExpLib.colorStopSearch.exec(matchGradient[5]);
        while (matchColorStop !== null) {
            var tinyColor = tinycolor(matchColorStop[1]);
            stopResult = {
                color: tinyColor.toRgbString()
            };
            if (matchColorStop[2]) {
                stopResult.position = Number((parseInt(matchColorStop[2], 10) / 100).toFixed(2));
            }
            result.stops.push(stopResult);
            matchColorStop = regExpLib.colorStopSearch.exec(matchGradient[5]);
        }
    }
    return result;
};
var validGradient = (function (input) {
    var regExpLib = generateRegExp();
    var result;
    var rGradientEnclosedInBrackets = /.*gradient\s*\(((?:\([^\)]*\)|[^\)\(]*)*)\)/;
    var match = rGradientEnclosedInBrackets.exec(input);
    if (match !== null) {
        result = parseGradient$1(regExpLib, match[1]);
        if (result.original.trim() !== match[1].trim()) {
            result.parseWarning = true;
        }
        if (result.stops.every(function (item) { return item.hasOwnProperty('position'); }) === false) {
            result = 'Not correct position';
        }
    }
    else {
        result = 'Failed to find gradient';
    }
    return result;
});

var Color = /** @class */ (function () {
    function Color(input) {
        var _this = this;
        this.initRgb = function () {
            var _a = _this.color.toRgb(), r = _a.r, g = _a.g, b = _a.b;
            _this.redValue = r;
            _this.greenValue = g;
            _this.blueValue = b;
        };
        this.initHsb = function () {
            var _a = _this.color.toHsv(), h = _a.h, s = _a.s, v = _a.v;
            _this.hueValue = h;
            _this.saturationValue = s;
            _this.brightnessValue = v;
        };
        this.toHexString = function () {
            return _this.color.toHexString();
        };
        this.toRgbString = function () {
            return _this.color.toRgbString();
        };
        this.toHsv = function () {
            return _this.color.toHsv();
        };
        this.color = tinycolor(input);
        this.initRgb();
        this.initHsb();
        var initAlpha = this.color.toRgb().a;
        this.alphaValue = Math.min(1, initAlpha) * 100;
        this.hueValue = this.color.toHsv().h;
        this.saturationValue = this.color.toHsv().s;
        this.brightnessValue = this.color.toHsv().v;
        this.redValue = this.color.toRgb().r;
        this.greenValue = this.color.toRgb().g;
        this.blueValue = this.color.toRgb().b;
        this.lightnessValue = 0;
    }
    Color.isValidHex = function (hex) {
        return tinycolor(hex).isValid();
    };
    Object.defineProperty(Color.prototype, "hex", {
        get: function () {
            return this.color.toHex();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color.prototype, "hue", {
        get: function () {
            return this.hueValue;
        },
        set: function (value) {
            this.color = tinycolor({
                h: value,
                s: this.saturation,
                v: this.brightness
            });
            this.initRgb();
            this.hueValue = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color.prototype, "saturation", {
        get: function () {
            return this.saturationValue;
        },
        set: function (value) {
            this.color = tinycolor({
                h: this.hue,
                s: value,
                v: this.brightness
            });
            this.initRgb();
            this.saturationValue = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color.prototype, "lightness", {
        get: function () {
            return this.lightnessValue;
        },
        set: function (value) {
            this.color = tinycolor({
                h: this.hue,
                s: this.saturation,
                l: value
            });
            this.initRgb();
            this.lightnessValue = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color.prototype, "brightness", {
        get: function () {
            return this.brightnessValue;
        },
        set: function (value) {
            this.color = tinycolor({
                h: this.hue,
                s: this.saturation,
                v: value
            });
            this.initRgb();
            this.brightnessValue = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color.prototype, "red", {
        get: function () {
            return this.redValue;
        },
        // red
        set: function (value) {
            var rgb = this.color.toRgb();
            this.color = tinycolor(__assign(__assign({}, rgb), { r: value }));
            this.initHsb();
            this.redValue = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color.prototype, "green", {
        get: function () {
            return this.greenValue;
        },
        // green
        set: function (value) {
            var rgb = this.color.toRgb();
            this.color = tinycolor(__assign(__assign({}, rgb), { g: value }));
            this.initHsb();
            this.greenValue = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color.prototype, "blue", {
        get: function () {
            return this.blueValue;
        },
        // blue
        set: function (value) {
            var rgb = this.color.toRgb();
            this.color = tinycolor(__assign(__assign({}, rgb), { b: value }));
            this.initHsb();
            this.blueValue = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color.prototype, "alpha", {
        get: function () {
            return this.color.getAlpha() * 100;
        },
        // alpha
        set: function (value) {
            this.color.setAlpha(value / 100);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color.prototype, "RGB", {
        get: function () {
            return [this.red, this.green, this.blue];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color.prototype, "HSB", {
        get: function () {
            return [this.hue, this.saturation, this.brightness];
        },
        enumerable: false,
        configurable: true
    });
    return Color;
}());

var WIDTH = 200;
var HEIGHT = 150;
var Board = function (_a) {
    var rootPrefixCls = _a.rootPrefixCls, color = _a.color, colorBoardHeight = _a.colorBoardHeight, onChange = _a.onChange, setChange = _a.setChange;
    var node = useRef();
    var removeListeners = function () {
        setChange(false);
        window.removeEventListener('mousemove', onBoardDrag);
        window.removeEventListener('mouseup', onBoardDragEnd);
    };
    var removeTouchListeners = function () {
        setChange(false);
        window.removeEventListener('touchmove', onBoardTouchMove);
        window.removeEventListener('touchend', onBoardTouchEnd);
    };
    useEffect(function () {
        return function () {
            removeListeners();
            removeTouchListeners();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    var onBoardMouseDown = function (e) {
        e.preventDefault();
        var buttons = e.buttons;
        if (buttons !== 1)
            return;
        removeListeners();
        var x = e.clientX;
        var y = e.clientY;
        pointMoveTo({ x: x, y: y });
        window.addEventListener('mousemove', onBoardDrag);
        window.addEventListener('mouseup', onBoardDragEnd);
    };
    var onBoardTouchStart = function (e) {
        if (e.cancelable) {
            e.preventDefault();
        }
        if (e.touches.length !== 1) {
            return;
        }
        removeTouchListeners();
        var x = e.targetTouches[0].clientX;
        var y = e.targetTouches[0].clientY;
        pointMoveTo({ x: x, y: y });
        window.addEventListener('touchmove', onBoardTouchMove, { passive: false });
        window.addEventListener('touchend', onBoardTouchEnd, { passive: false });
    };
    var onBoardTouchMove = function (e) {
        if (e.cancelable) {
            e.preventDefault();
        }
        var x = e.targetTouches[0].clientX;
        var y = e.targetTouches[0].clientY;
        pointMoveTo({
            x: x,
            y: y
        });
    };
    var onBoardTouchEnd = function () {
        removeTouchListeners();
    };
    var onBoardDrag = function (e) {
        e.preventDefault();
        var x = e.clientX;
        var y = e.clientY;
        pointMoveTo({
            x: x,
            y: y
        });
    };
    var onBoardDragEnd = function (e) {
        e.preventDefault();
        var x = e.clientX;
        var y = e.clientY;
        pointMoveTo({
            x: x,
            y: y
        });
        removeListeners();
    };
    var getPrefixCls = function () {
        return rootPrefixCls + "-board";
    };
    var pointMoveTo = function (pos) {
        var rect = node && node.current.getBoundingClientRect();
        var left = pos.x - rect.left;
        var top = pos.y - rect.top;
        var rWidth = rect.width || WIDTH;
        var rHeight = rect.height || HEIGHT;
        left = Math.max(0, left);
        left = Math.min(left, rWidth);
        top = Math.max(0, top);
        top = Math.min(top, rHeight);
        color.saturation = left / rWidth;
        color.brightness = 1 - top / rHeight;
        onChange(color);
    };
    var prefixCls = getPrefixCls();
    var hueHsv = {
        h: color.hue,
        s: 1,
        v: 1
    };
    var hueColor = new Color(hueHsv).toHexString();
    var xRel = color.saturation * 100;
    var yRel = (1 - color.brightness) * 100;
    return (React.createElement("div", { className: prefixCls, ref: node },
        React.createElement("div", { className: prefixCls + "-hsv", style: {
                backgroundColor: hueColor,
                height: colorBoardHeight + "px",
                minHeight: colorBoardHeight + "px"
            } },
            React.createElement("div", { className: prefixCls + "-value" }),
            React.createElement("div", { className: prefixCls + "-saturation" })),
        React.createElement("span", { style: {
                left: "calc(" + xRel + "% - 7px)",
                top: "calc(" + yRel + "% - 7px)",
                backgroundColor: color.toHexString()
            } }),
        React.createElement("div", { className: prefixCls + "-handler", onMouseDown: onBoardMouseDown, onTouchStart: onBoardTouchStart })));
};

var Ribbon = function (_a) {
    var rootPrefixCls = _a.rootPrefixCls, color = _a.color, onChange = _a.onChange, setChange = _a.setChange;
    var node = useRef();
    var removeListeners = function () {
        window.removeEventListener('mousemove', onDrag);
        window.removeEventListener('mouseup', onDragEnd);
    };
    var removeTouchListeners = function () {
        setChange(false);
        window.removeEventListener('touchmove', onTouchMove);
        window.removeEventListener('touchend', onTouchEnd);
    };
    useEffect(function () {
        return function () {
            removeListeners();
            removeTouchListeners();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    var onMouseDown = function (e) {
        e.preventDefault();
        var x = e.clientX;
        var y = e.clientY;
        pointMoveTo({
            x: x,
            y: y
        });
        window.addEventListener('mousemove', onDrag);
        window.addEventListener('mouseup', onDragEnd);
    };
    var onDrag = function (e) {
        var x = e.clientX;
        var y = e.clientY;
        pointMoveTo({
            x: x,
            y: y
        });
    };
    var onDragEnd = function (e) {
        var x = e.clientX;
        var y = e.clientY;
        pointMoveTo({
            x: x,
            y: y
        });
        setChange(false);
        removeListeners();
    };
    var onTouchStart = function (e) {
        if (e.cancelable) {
            e.preventDefault();
        }
        if (e.touches.length !== 1) {
            return;
        }
        removeTouchListeners();
        var x = e.targetTouches[0].clientX;
        var y = e.targetTouches[0].clientY;
        pointMoveTo({ x: x, y: y });
        window.addEventListener('touchmove', onTouchMove, { passive: false });
        window.addEventListener('touchend', onTouchEnd, { passive: false });
    };
    var onTouchMove = function (e) {
        if (e.cancelable) {
            e.preventDefault();
        }
        var x = e.targetTouches[0].clientX;
        var y = e.targetTouches[0].clientY;
        pointMoveTo({
            x: x,
            y: y
        });
    };
    var onTouchEnd = function () {
        removeTouchListeners();
    };
    var getPrefixCls = function () {
        return rootPrefixCls + "-ribbon";
    };
    var pointMoveTo = function (coords) {
        var rect = node && node.current.getBoundingClientRect();
        var width = rect.width;
        var left = coords.x - rect.left;
        left = Math.max(0, left);
        left = Math.min(left, width);
        var huePercent = left / width;
        var hue = huePercent * 360;
        color.hue = hue;
        onChange(color);
    };
    var hueHsv = {
        h: color.hue,
        s: 1,
        v: 1
    };
    var hueColor = new Color(hueHsv).toHexString();
    var prefixCls = getPrefixCls();
    var hue = color.hue;
    var per = (hue / 360) * 100;
    return (React.createElement("div", { className: prefixCls, ref: node, onMouseDown: onMouseDown, onTouchStart: onTouchStart },
        React.createElement("div", { className: 'color-picker-panel-ribbon-bg' }),
        React.createElement("span", { style: { left: per + "%", backgroundColor: hueColor } }),
        React.createElement("div", { className: prefixCls + "-handler" })));
};

var rgbaColor = function (r, g, b, a) {
    return "rgba(" + [r, g, b, a / 100].join(',') + ")";
};
var Alpha = function (_a) {
    var rootPrefixCls = _a.rootPrefixCls, color = _a.color, alpha = _a.alpha, onChange = _a.onChange, setChange = _a.setChange;
    var node = useRef();
    var removeListeners = function () {
        window.removeEventListener('mousemove', onDrag);
        window.removeEventListener('mouseup', onDragEnd);
    };
    var removeTouchListeners = function () {
        setChange(false);
        window.removeEventListener('touchmove', onTouchMove);
        window.removeEventListener('touchend', onTouchEnd);
    };
    useEffect(function () {
        return function () {
            removeListeners();
            removeTouchListeners();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    var onMouseDown = function (e) {
        var x = e.clientX;
        var y = e.clientY;
        pointMoveTo({
            x: x,
            y: y
        });
        window.addEventListener('mousemove', onDrag);
        window.addEventListener('mouseup', onDragEnd);
    };
    var onDrag = function (e) {
        var x = e.clientX;
        var y = e.clientY;
        pointMoveTo({
            x: x,
            y: y
        });
    };
    var onDragEnd = function (event) {
        var x = event.clientX;
        var y = event.clientY;
        pointMoveTo({
            x: x,
            y: y
        });
        setChange(false);
        removeListeners();
    };
    var onTouchStart = function (e) {
        if (e.cancelable) {
            e.preventDefault();
        }
        if (e.touches.length !== 1) {
            return;
        }
        removeTouchListeners();
        var x = e.targetTouches[0].clientX;
        var y = e.targetTouches[0].clientY;
        pointMoveTo({ x: x, y: y });
        window.addEventListener('touchmove', onTouchMove, { passive: false });
        window.addEventListener('touchend', onTouchEnd, { passive: false });
    };
    var onTouchMove = function (e) {
        if (e.cancelable) {
            e.preventDefault();
        }
        var x = e.targetTouches[0].clientX;
        var y = e.targetTouches[0].clientY;
        pointMoveTo({
            x: x,
            y: y
        });
    };
    var onTouchEnd = function () {
        removeTouchListeners();
    };
    var getBackground = function () {
        var red = color.red, green = color.green, blue = color.blue;
        var opacityGradient = "linear-gradient(to right, " + rgbaColor(red, green, blue, 0) + " , " + rgbaColor(red, green, blue, 100) + ")";
        return opacityGradient;
    };
    var getPrefixCls = function () {
        return rootPrefixCls + "-alpha";
    };
    var pointMoveTo = function (coords) {
        var rect = node && node.current.getBoundingClientRect();
        var width = rect.width;
        var left = coords.x - rect.left;
        left = Math.max(0, left);
        left = Math.min(left, width);
        var alpha = Math.round((left / width) * 100);
        onChange(alpha);
    };
    var getPointerBackground = function () {
        var red = color.red, green = color.green, blue = color.blue;
        var alphaVal = (alpha || 1) / 100;
        return "rgba(" + red + ", " + green + ", " + blue + ", " + alphaVal + ")";
    };
    var prefixCls = getPrefixCls();
    return (React.createElement("div", { className: prefixCls, ref: node, onMouseDown: onMouseDown, onTouchStart: onTouchStart },
        React.createElement("div", { className: prefixCls + "-bg", style: { background: getBackground() } }),
        React.createElement("span", { style: {
                left: alpha + "%",
                backgroundColor: getPointerBackground()
            } }),
        React.createElement("div", { className: prefixCls + "-handler" })));
};

var Panel = function (_a) {
    var alpha = _a.alpha, className = _a.className, hex = _a.hex, colorBoardHeight = _a.colorBoardHeight, showAlpha = _a.showAlpha, onChange = _a.onChange;
    var node = useRef();
    var colorConvert = new Color(hex);
    colorConvert.alpha = alpha;
    var _b = __read(useState({
        color: colorConvert,
        alpha: alpha
    }), 2), state = _b[0], setState = _b[1];
    var _c = __read(useState(false), 2), change = _c[0], setChange = _c[1];
    useEffect(function () {
        if (!change) {
            setState({
                color: colorConvert,
                alpha: alpha
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [hex, alpha]);
    var handleAlphaChange = function (alpha) {
        setChange(true);
        var color = state.color;
        color.alpha = alpha;
        setState({
            color: color,
            alpha: alpha
        });
        onChange({
            hex: color.toHexString(),
            alpha: alpha
        });
    };
    var handleChange = function (color) {
        setChange(true);
        var alpha = state.alpha;
        color.alpha = alpha;
        setState(__assign(__assign({}, state), { color: color, alpha: color.alpha }));
        onChange({
            hex: color.toHexString(),
            alpha: color.alpha
        });
    };
    return (React.createElement("div", { ref: node, className: ['color-picker-panel', className].join(' '), tabIndex: 0 },
        React.createElement("div", { className: 'color-picker-panel-inner' },
            React.createElement(Board, { rootPrefixCls: 'color-picker-panel', color: state.color, colorBoardHeight: colorBoardHeight, onChange: handleChange, setChange: setChange }),
            React.createElement("div", { className: "color-picker-panel-wrap" + (showAlpha ? ' color-picker-panel-wrap-has-alpha' : '') },
                React.createElement("div", { className: 'color-picker-panel-wrap-ribbon' },
                    React.createElement(Ribbon, { rootPrefixCls: 'color-picker-panel', color: state.color, onChange: handleChange, setChange: setChange })),
                showAlpha && (React.createElement("div", { className: 'color-picker-panel-wrap-alpha' },
                    React.createElement(Alpha, { rootPrefixCls: 'color-picker-panel', alpha: state.alpha, color: state.color, onChange: handleAlphaChange, setChange: setChange })))))));
};

___$insertStyle(".input_rgba {\n  position: relative;\n}\n.input_rgba .input_rgba-wrap {\n  display: flex;\n}\n.input_rgba .input_rgba-wrap .input_rgba-hex {\n  position: relative;\n  width: 100%;\n  font-size: 0;\n}\n.input_rgba .input_rgba-wrap .input_rgba-hex .input_rgba-hex-label {\n  position: absolute;\n  top: 7px;\n  left: 12px;\n  font-size: 16px;\n  color: #929fb7;\n  font-size: 14px;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.71;\n  letter-spacing: normal;\n}\n.input_rgba .input_rgba-wrap .input_rgba-hex input {\n  padding-left: 26px;\n}\n.input_rgba .input_rgba-wrap .input_rgba-alpha {\n  margin-left: 16px;\n  position: relative;\n  flex-grow: 0;\n  flex-shrink: 0;\n  flex-basis: 71px;\n  font-size: 0;\n}\n.input_rgba .input_rgba-wrap .input_rgba-alpha .input_rgba-alpha-label {\n  position: absolute;\n  top: 16%;\n  color: #929fb7;\n  right: 12px;\n  font-size: 16px;\n}\n.input_rgba .input_rgba-wrap input {\n  box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  outline: none;\n  border: none;\n  box-shadow: none;\n  width: 100%;\n  height: 40px;\n  border-radius: 4px;\n  background-color: #fff;\n  font-size: 16px;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 24px;\n  letter-spacing: normal;\n  color: #312e55;\n  margin-bottom: 8px;\n  padding-left: 12px;\n  padding-right: 12px;\n  padding-top: 0;\n  padding-bottom: 0;\n  transition: all 0.15s ease;\n  box-shadow: 0px 0px 0px 2px #bbbfc5;\n}\n.input_rgba .input_rgba-wrap input:hover {\n  background-color: #d4e5ff;\n  box-shadow: none;\n}\n.input_rgba .input_rgba-wrap input:focus {\n  box-shadow: 0px 0px 0px 2px #6dbafd;\n  background-color: #e5f3ff;\n}\n.input_rgba .input_rgba-wrap .input_rgba-label {\n  width: 100%;\n  text-transform: uppercase;\n  font-size: 12px;\n  font-weight: bold;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.67;\n  letter-spacing: 0.5px;\n  text-align: center;\n  color: #929fb7;\n}");

var getAlphaValue = function (value) {
    value.replace(/%/i, '');
    if (value[0] === '0' && value.length > 1) {
        return value.substr(1);
    }
    else if (Number(value) >= 100) {
        return 100;
    }
    else if (!isNaN(Number(value))) {
        return value || 0;
    }
    return parseInt(value);
};
var onlyDigits = function (string) {
    return string ? string.substr(0, 3).replace(/[^\d]/g, '') : '';
};
var onlyLatins = function (string) {
    if (string && string.substring(0, 1) === '#')
        string = string.substring(1);
    return string ? string.substr(0, 6).replace(/[^a-zA-Z0-9\s-]/gi, '') : '';
};
var handlePressEnter = function (e, fn) {
    if (e.key === 'Enter') {
        fn();
    }
};
var inputsData = function (props) {
    var inputHex = {
        wrapClass: 'input_rgba-hex',
        labelSymbol: true,
        idInput: "rgba-hex" + Math.random() * 10000,
        valueInput: props.hexValue,
        labelText: 'Hex',
        labelArea: 'hex',
        labelClass: 'input_rgba-label',
        onChangeInput: function (e) {
            return props.onChangeHex(onlyLatins(e.target.value));
        },
        name: 'hex'
    };
    var inputAlpha = {
        wrapClass: 'input_rgba-alpha',
        labelSymbol: false,
        idInput: "rgba-alpha" + Math.random() * 10000,
        valueInput: props.alphaValue,
        labelText: 'Alpha',
        labelArea: 'alpha',
        labelClass: 'input_rgba-label',
        onChangeInput: function (e) {
            return props.onChangeAlpha(onlyDigits(e.target.value));
        },
        name: 'alpha'
    };
    if (props.showAlpha === false) {
        return [inputHex];
    }
    return [inputHex, inputAlpha];
};

var InputRgba = function (_a) {
    var hex = _a.hex, alpha = _a.alpha, _b = _a.format, format = _b === void 0 ? 'rgb' : _b, _c = _a.showAlpha, showAlpha = _c === void 0 ? true : _c, onChange = _a.onChange, onSubmitChange = _a.onSubmitChange;
    var _d = __read(useState({
        alpha: alpha,
        hex: hex
    }), 2), color = _d[0], setColor = _d[1];
    var onChangeAlpha = function (alpha) {
        var validAlpha = getAlphaValue(alpha);
        setColor(__assign(__assign({}, color), { alpha: Number(validAlpha) }));
    };
    var onChangeHex = function (hex) {
        setColor(__assign(__assign({}, color), { hex: hex }));
    };
    var onHandleSubmit = function () {
        var rgba = tinycolor(color.hex[0] === '#' ? color.hex : '#' + color.hex);
        rgba.setAlpha(Number(color.alpha) / 100);
        if (rgba && (color.alpha !== alpha || color.hex !== hex)) {
            onChange({
                hex: color.hex[0] === '#' ? color.hex : '#' + color.hex,
                alpha: Number(color.alpha)
            });
            if (onSubmitChange) {
                onSubmitChange(checkFormat(rgba.toRgbString(), format, showAlpha, color.alpha));
            }
        }
        else {
            setColor({
                hex: hex,
                alpha: alpha
            });
            onChange({
                hex: hex,
                alpha: alpha
            });
        }
    };
    useEffect(function () {
        setColor({
            hex: hex,
            alpha: alpha
        });
    }, [hex, alpha]);
    var inputsProps = {
        alphaValue: color.alpha,
        hexValue: color.hex.replace(/#/i, ''),
        onChangeAlpha: onChangeAlpha,
        onChangeHex: onChangeHex,
        showAlpha: showAlpha
    };
    return (React.createElement("div", { className: 'input_rgba' },
        React.createElement("div", { className: 'input_rgba-wrap' }, inputsData(inputsProps).map(function (item, index) {
            var wrapClass = item.wrapClass, labelSymbol = item.labelSymbol, idInput = item.idInput, valueInput = item.valueInput, labelText = item.labelText, labelArea = item.labelArea, labelClass = item.labelClass, onChangeInput = item.onChangeInput, name = item.name;
            return (React.createElement("div", { className: wrapClass, key: index },
                labelSymbol && (React.createElement("label", { htmlFor: 'rgba-hex', className: 'input_rgba-hex-label' }, "#")),
                name === 'alpha' && (React.createElement("label", { htmlFor: idInput, className: 'input_rgba-alpha-label' }, "%")),
                React.createElement("input", { type: 'text', id: idInput, value: valueInput, "aria-label": labelArea, onChange: function (e) { return onChangeInput(e); }, onBlur: onHandleSubmit, onKeyPress: function (e) { return handlePressEnter(e, onHandleSubmit); } }),
                React.createElement("div", { className: labelClass }, labelText)));
        }))));
};

var Markers = function (_a) {
    var color = _a.color, setColor = _a.setColor, activeColor = _a.activeColor, setActiveColor = _a.setActiveColor, setInit = _a.setInit, _b = _a.format, format = _b === void 0 ? 'rgb' : _b, _c = _a.showAlpha, showAlpha = _c === void 0 ? true : _c;
    var node = useRef();
    var _d = __read(useState(false), 2), needDeleteActive = _d[0], setNeedDeleteActive = _d[1];
    var _e = __read(useState(false), 2), hideStop = _e[0], setHideStop = _e[1];
    var stops = color.stops, type = color.type, modifier = color.modifier;
    var onAddColorStop = function (e) {
        setInit(false);
        e.stopPropagation();
        var target = e.target;
        if (target.className !== 'gradient-marker') {
            var rect = target.getBoundingClientRect();
            var clickPos = e.clientX - rect.left;
            var loc_1 = Number(((100 / rect.width) * clickPos).toFixed(0)) / 100;
            var rgba = tinycolor(activeColor.hex);
            rgba.setAlpha(activeColor.alpha / 100);
            var newStops = __spread(color.stops, [
                [rgba.toRgbString(), loc_1, color.stops.length]
            ]).sort(function (a, b) { return a[1] - b[1]; })
                .map(function (item, index) {
                item[2] = index;
                return item;
            });
            setColor(__assign(__assign({}, color), { gradient: "" + getGradient(type, newStops, modifier, format, showAlpha), stops: newStops }));
            setActiveColor(__assign(__assign({}, activeColor), { loc: loc_1, index: newStops.find(function (item) { return item[1] === loc_1; })[2] }));
        }
    };
    var removeListeners = function () {
        window.removeEventListener('mousemove', onDrag);
        window.removeEventListener('mouseup', onDragEnd);
    };
    var removeTouchListeners = function () {
        window.removeEventListener('touchmove', onTouchMove);
        window.removeEventListener('touchend', onTouchEnd);
    };
    var onMouseDown = function (e, color) {
        e.preventDefault();
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
        if (e.detail === 2) {
            return;
        }
        setInit(false);
        if (e.button !== 0)
            return;
        var newColor = tinycolor(color[0]);
        setActiveColor({
            hex: '#' + newColor.toHex(),
            alpha: newColor.getAlpha() * 100,
            loc: color[1],
            index: color[2]
        });
        var x = e.clientX;
        var y = e.clientY;
        pointMoveTo({
            x: x,
            y: y
        });
        window.addEventListener('mousemove', onDrag);
        window.addEventListener('mouseup', onDragEnd);
    };
    var onDrag = function (e) {
        var _a;
        var x = e.clientX;
        var y = e.clientY;
        var rect = (_a = node === null || node === void 0 ? void 0 : node.current) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect();
        var rootDistance = y - rect.y;
        if (rootDistance > 80 && stops.length > 2) {
            setHideStop(true);
            return;
        }
        else {
            setHideStop(false);
        }
        pointMoveTo({
            x: x,
            y: y
        });
    };
    var onDragEnd = function (e) {
        var _a;
        var x = e.clientX;
        var y = e.clientY;
        var rect = (_a = node === null || node === void 0 ? void 0 : node.current) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect();
        var rootDistance = y - rect.y;
        if (rootDistance > 80 && stops.length > 2) {
            setNeedDeleteActive(true);
        }
        pointMoveTo({
            x: x,
            y: y
        });
        removeListeners();
    };
    var onTouchStart = function (e, color) {
        setInit(false);
        if (e.cancelable) {
            e.preventDefault();
        }
        if (e.touches.length !== 1) {
            return;
        }
        removeTouchListeners();
        var newColor = tinycolor(color[0]);
        setActiveColor({
            hex: '#' + newColor.toHex(),
            alpha: newColor.getAlpha() * 100,
            loc: color[1],
            index: color[2]
        });
        var x = e.targetTouches[0].clientX;
        var y = e.targetTouches[0].clientY;
        pointMoveTo({ x: x, y: y });
        window.addEventListener('touchmove', onTouchMove, { passive: false });
        window.addEventListener('touchend', onTouchEnd, { passive: false });
    };
    var onTouchMove = function (e) {
        var _a;
        if (e.cancelable) {
            e.preventDefault();
        }
        var x = e.targetTouches[0].clientX;
        var y = e.targetTouches[0].clientY;
        var rect = (_a = node === null || node === void 0 ? void 0 : node.current) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect();
        var rootDistance = y - rect.y;
        if (rootDistance > 80 && stops.length > 2) {
            setHideStop(true);
            return;
        }
        else {
            setHideStop(false);
        }
        pointMoveTo({
            x: x,
            y: y
        });
    };
    var onTouchEnd = function () {
        removeTouchListeners();
    };
    var pointMoveTo = function (coords) {
        var rect = node && node.current.getBoundingClientRect();
        var width = rect.width;
        var pos = coords.x - rect.left;
        pos = Math.max(0, pos);
        pos = Math.min(pos, width);
        var location = Number(((100 / rect.width) * pos).toFixed(0)) / 100;
        setActiveColor(function (prev) { return (__assign(__assign({}, prev), { loc: location })); });
    };
    var deleteColorStop = function () {
        if (stops.length <= 2)
            return;
        var newStops = stops
            .filter(function (stop) { return stop[2] !== activeColor.index; })
            .map(function (stop, index) {
            stop[2] = index;
            return stop;
        });
        var lastStop = rgbaToArray(newStops[newStops.length - 1][0]);
        var lastStopLoc = newStops[newStops.length - 1][1];
        var activeStop = rgbaToHex([lastStop[0], lastStop[1], lastStop[2]]);
        var activeIdx = newStops[newStops.length - 1][2];
        setNeedDeleteActive(false);
        setHideStop(false);
        setActiveColor({
            hex: activeStop,
            alpha: Number(Math.round(lastStop[3] * 100)),
            loc: lastStopLoc,
            index: activeIdx
        });
        return setColor(__assign(__assign({}, color), { gradient: "" + getGradient(type, newStops, modifier, format, showAlpha), stops: newStops }));
    };
    useEffect(function () {
        if (needDeleteActive) {
            return deleteColorStop();
        }
        var newStops = stops.map(function (item) {
            if (activeColor.index === item[2]) {
                return [item[0], activeColor.loc, item[2]];
            }
            return item;
        });
        setColor(__assign(__assign({}, color), { gradient: "" + getGradient(type, newStops, modifier, format, showAlpha), stops: newStops }));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activeColor.loc, needDeleteActive]);
    useEffect(function () {
        return function () {
            removeListeners();
            removeTouchListeners();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (React.createElement("div", { className: 'gradient-stops', onClick: function (e) { return onAddColorStop(e); }, ref: node },
        React.createElement("div", { className: 'gradient-stop-preview', style: {
                background: "linear-gradient(to right, " + stops
                    .map(function (color) {
                    return color[0] + " " + color[1] * 100 + "%";
                })
                    .join(', ') + ")"
            } }),
        React.createElement("div", { className: 'gradient-stop-marker' }, stops.map(function (color) {
            var position = color[1] * 100;
            var rgba = color[0];
            return (React.createElement("div", { key: rgba + position + Math.random() * 100, className: "gradient-marker" + (hideStop && activeColor.index === color[2] ? ' hide' : '') + (!hideStop && activeColor.index === color[2] ? ' active' : ''), style: {
                    left: Math.abs(Math.min(position, 100)) + '%',
                    color: rgba
                }, onTouchStart: function (e) { return onTouchStart(e, color); }, onMouseDown: function (e) { return onMouseDown(e, color); }, onClick: function (e) { return e.stopPropagation(); }, onDoubleClick: deleteColorStop }));
        }))));
};

var getIndexActiveTag = function (value) {
    var tab = 'solid';
    var validValue = tinycolor(value).isValid();
    if (value) {
        if (value === 'transparent') {
            tab = 'solid';
            return tab;
        }
        if (validValue &&
            !value.trim().startsWith('radial-gradient') &&
            !value.trim().startsWith('linear-gradient')) {
            tab = 'solid';
            return tab;
        }
        var rgba = rgbaToArray(value);
        if (rgba) {
            if (isValidRgba([rgba[0], rgba[1], rgba[2]])) {
                tab = 'solid';
                return tab;
            }
        }
        else {
            tab = 'gradient';
            return tab;
        }
    }
    return tab;
};
var checkValidColorsArray = function (arr, type, limit) {
    if (!arr.length || !Array.isArray(arr)) {
        return [];
    }
    var uniqueArr = __spread(new Set(arr));
    switch (type) {
        case 'solid':
            return uniqueArr.filter(function (color, index) {
                var tinyColor = tinycolor(color);
                if (tinyColor.isValid() &&
                    !color.trim().startsWith('radial-gradient') &&
                    !color.trim().startsWith('linear-gradient')) {
                    return true;
                }
                if (index >= limit) {
                    return false;
                }
                return false;
            });
        case 'grad':
            return uniqueArr.filter(function (color, index) {
                var validColor = validGradient(color);
                if (validColor === 'Failed to find gradient') {
                    return false;
                }
                if (validColor === 'Not correct position') {
                    console.warn('Incorrect gradient default value. You need to indicate the location for the colors. We ignore this gradient value');
                    return false;
                }
                if (index >= limit) {
                    return false;
                }
                return true;
            });
        default:
            return [];
    }
};
var arraysEqual = function (a, b) {
    if (a instanceof Array && b instanceof Array) {
        if (a.length !== b.length)
            return false;
        for (var i = 0; i < a.length; i++)
            if (!arraysEqual(a[i], b[i]))
                return false;
        return true;
    }
    else {
        return a === b;
    }
};
var shallowEqual = function (object1, object2) {
    var e_1, _a;
    var keys1 = Object.keys(object1);
    var keys2 = Object.keys(object2);
    if (keys1.length !== keys2.length) {
        return false;
    }
    try {
        for (var keys1_1 = __values(keys1), keys1_1_1 = keys1_1.next(); !keys1_1_1.done; keys1_1_1 = keys1_1.next()) {
            var key = keys1_1_1.value;
            if (object1[key] !== object2[key]) {
                return false;
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (keys1_1_1 && !keys1_1_1.done && (_a = keys1_1.return)) _a.call(keys1_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return true;
};

var RADIALS_POS = [
    { pos: 'tl', css: 'circle at left top', active: false },
    { pos: 'tm', css: 'circle at center top', active: false },
    { pos: 'tr', css: 'circle at right top', active: false },
    { pos: 'l', css: 'circle at left', active: false },
    { pos: 'm', css: 'circle at center', active: true },
    { pos: 'r', css: 'circle at right', active: false },
    { pos: 'bl', css: 'circle at left bottom', active: false },
    { pos: 'bm', css: 'circle at center bottom', active: false },
    { pos: 'br', css: 'circle at right bottom', active: false }
];
var GradientPanel = function (_a) {
    var color = _a.color, setColor = _a.setColor, activeColor = _a.activeColor, setActiveColor = _a.setActiveColor, setInit = _a.setInit, _b = _a.format, format = _b === void 0 ? 'rgb' : _b, _c = _a.showAlpha, showAlpha = _c === void 0 ? true : _c, _d = _a.showGradientResult, showGradientResult = _d === void 0 ? true : _d, _e = _a.showGradientStops, showGradientStops = _e === void 0 ? true : _e, _f = _a.showGradientMode, showGradientMode = _f === void 0 ? true : _f, _g = _a.showGradientAngle, showGradientAngle = _g === void 0 ? true : _g, _h = _a.showGradientPosition, showGradientPosition = _h === void 0 ? true : _h;
    var angleNode = useRef();
    var stops = color.stops, gradient = color.gradient, type = color.type, modifier = color.modifier;
    var _j = __read(useState(RADIALS_POS), 2), radialsPosition = _j[0], setRadialPosition = _j[1];
    var onClickMode = function () {
        setInit(false);
        switch (type) {
            case 'linear': {
                var activePos = radialsPosition.find(function (item) { return item.active; });
                setColor(__assign(__assign({}, color), { modifier: (activePos === null || activePos === void 0 ? void 0 : activePos.css) || modifier, gradient: "" + getGradient('radial', stops, (activePos === null || activePos === void 0 ? void 0 : activePos.css) || modifier, format, showAlpha), type: 'radial' }));
                break;
            }
            case 'radial': {
                setColor(__assign(__assign({}, color), { gradient: "" + getGradient('linear', stops, 180, format, showAlpha), type: 'linear' }));
                break;
            }
        }
    };
    var setActiveRadialPosition = function (e) {
        setInit(false);
        var target = e.target;
        var pos = target.getAttribute('data-pos');
        var newRadialsPosition = radialsPosition.map(function (item) {
            if (item.pos === pos) {
                return __assign(__assign({}, item), { active: true });
            }
            return __assign(__assign({}, item), { active: false });
        });
        setRadialPosition(newRadialsPosition);
        var activePos = newRadialsPosition.find(function (item) { return item.active; });
        setColor(__assign(__assign({}, color), { modifier: (activePos === null || activePos === void 0 ? void 0 : activePos.css) || modifier, gradient: "" + getGradient('radial', stops, (activePos === null || activePos === void 0 ? void 0 : activePos.css) || modifier, format, showAlpha) }));
    };
    var removeListeners = function () {
        window.removeEventListener('mousemove', onDrag);
        window.removeEventListener('mouseup', onDragEnd);
    };
    var removeTouchListeners = function () {
        window.removeEventListener('touchmove', onTouchMove);
        window.removeEventListener('touchend', onTouchEnd);
    };
    var onMouseDown = function (e) {
        e.preventDefault();
        setInit(false);
        if (e.button !== 0)
            return;
        var x = e.clientX;
        var y = e.clientY;
        var shiftKey = e.shiftKey;
        var ctrlKey = e.ctrlKey * 2;
        if (e.target.className !== 'gradient-mode' && type === 'linear') {
            pointMoveTo({
                x: x,
                y: y,
                shiftKey: shiftKey,
                ctrlKey: ctrlKey
            });
            window.addEventListener('mousemove', onDrag);
            window.addEventListener('mouseup', onDragEnd);
        }
    };
    var onDrag = function (e) {
        var x = e.clientX;
        var y = e.clientY;
        var shiftKey = e.shiftKey;
        var ctrlKey = e.ctrlKey * 2;
        pointMoveTo({
            x: x,
            y: y,
            shiftKey: shiftKey,
            ctrlKey: ctrlKey
        });
    };
    var onDragEnd = function (e) {
        var x = e.clientX;
        var y = e.clientY;
        var shiftKey = e.shiftKey;
        var ctrlKey = e.ctrlKey * 2;
        pointMoveTo({
            x: x,
            y: y,
            shiftKey: shiftKey,
            ctrlKey: ctrlKey
        });
        removeListeners();
    };
    var onTouchStart = function (e) {
        setInit(false);
        if (e.cancelable) {
            e.preventDefault();
        }
        if (e.touches.length !== 1) {
            return;
        }
        removeTouchListeners();
        var x = e.targetTouches[0].clientX;
        var y = e.targetTouches[0].clientY;
        var shiftKey = false;
        var ctrlKey = 0;
        pointMoveTo({ x: x, y: y, shiftKey: shiftKey, ctrlKey: ctrlKey });
        window.addEventListener('touchmove', onTouchMove, { passive: false });
        window.addEventListener('touchend', onTouchEnd, { passive: false });
    };
    var onTouchMove = function (e) {
        if (e.cancelable) {
            e.preventDefault();
        }
        var x = e.targetTouches[0].clientX;
        var y = e.targetTouches[0].clientY;
        var shiftKey = false;
        var ctrlKey = 0;
        pointMoveTo({
            x: x,
            y: y,
            shiftKey: shiftKey,
            ctrlKey: ctrlKey
        });
    };
    var onTouchEnd = function () {
        removeTouchListeners();
    };
    var pointMoveTo = function (coords) {
        var rect = angleNode && angleNode.current.getBoundingClientRect();
        var boxcx = rect.left + rect.width / 2;
        var boxcy = rect.top + rect.height / 2;
        var radians = Math.atan2(coords.x - boxcx, coords.y - boxcy) - Math.PI;
        var degrees = Math.abs((radians * 180) / Math.PI);
        var div = [1, 2, 4][Number(coords.shiftKey || coords.ctrlKey)];
        var newAngle = degrees - (degrees % (45 / div));
        setColor(__assign(__assign({}, color), { gradient: "" + getGradient(type, stops, newAngle, format, showAlpha), modifier: newAngle }));
    };
    useEffect(function () {
        return function () {
            removeListeners();
            removeTouchListeners();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    useEffect(function () {
        if (type === 'radial') {
            var activePos = radialsPosition.find(function (item) { return item.css === modifier; });
            setColor(__assign(__assign({}, color), { modifier: (activePos === null || activePos === void 0 ? void 0 : activePos.css) || modifier, gradient: "" + getGradient('radial', stops, (activePos === null || activePos === void 0 ? void 0 : activePos.css) || modifier, format, showAlpha) }));
            setRadialPosition(RADIALS_POS.map(function (item) {
                if (item.css === modifier) {
                    return __assign(__assign({}, item), { active: true });
                }
                return __assign(__assign({}, item), { active: false });
            }));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [modifier]);
    return (React.createElement("div", { className: 'gradient-interaction' },
        showGradientResult && (React.createElement("div", { className: 'gradient-result', onMouseDown: showGradientAngle ? onMouseDown : undefined, onTouchStart: showGradientAngle ? onTouchStart : undefined, style: { background: gradient } },
            showGradientMode && (React.createElement("div", { "data-mode": type, className: 'gradient-mode', onClick: function () { return onClickMode(); } })),
            showGradientAngle && (React.createElement("div", { className: 'gradient-angle', ref: angleNode, style: { visibility: type === 'linear' ? 'visible' : 'hidden' } },
                React.createElement("div", { style: {
                        transform: "rotate(" + (typeof modifier === 'number'
                            ? modifier - 90 + 'deg'
                            : modifier) + ")"
                    } }))),
            showGradientPosition && (React.createElement("div", { className: 'gradient-pos', style: {
                    opacity: type === 'radial' ? '1' : '0',
                    visibility: type === 'radial' ? 'visible' : 'hidden'
                } }, radialsPosition.map(function (item) {
                return (React.createElement("div", { key: item.pos, "data-pos": item.pos, className: item.active ? 'gradient-active' : '', onClick: function (e) { return setActiveRadialPosition(e); } }));
            }))))),
        showGradientStops && (React.createElement(Markers, { color: color, setColor: setColor, activeColor: activeColor, setActiveColor: setActiveColor, setInit: setInit, format: format, showAlpha: showAlpha }))));
};
var arePropsEqual = function (prevProps, nextProps) {
    if (arraysEqual(prevProps.color.stops, nextProps.color.stops) &&
        prevProps.color.modifier === nextProps.color.modifier &&
        prevProps.color.type === nextProps.color.type &&
        shallowEqual(prevProps.activeColor, nextProps.activeColor)) {
        return true;
    }
    return false;
};
var GradientPanel$1 = memo(GradientPanel, arePropsEqual);

var DefaultColorPanel = function (_a) {
    var _b = _a.defaultColors, defaultColors = _b === void 0 ? [] : _b, setColor = _a.setColor, setActiveColor = _a.setActiveColor, setInit = _a.setInit, colorType = _a.colorType, _c = _a.limit, limit = _c === void 0 ? 100 : _c;
    var _d = __read(useState(-1), 2), active = _d[0], setActive = _d[1];
    var _e = __read(useState([]), 2), formatedDefColors = _e[0], setFormatedDefColors = _e[1];
    useEffect(function () {
        if (colorType === 'gradient') {
            setFormatedDefColors(checkValidColorsArray(defaultColors, 'grad', limit).map(function (item) {
                return parseGradient(item);
            }));
        }
        else {
            setFormatedDefColors(checkValidColorsArray(defaultColors, 'solid', limit));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    var onChooseColor = function (item, index) {
        if (index === active) {
            return;
        }
        if (colorType === 'gradient' && typeof item !== 'string') {
            var stops = item.stops;
            var lastStop = rgbaToArray(stops[stops.length - 1][0]);
            var lastStopLoc = stops[stops.length - 1][1];
            var activeStop = rgbaToHex([lastStop[0], lastStop[1], lastStop[2]]);
            var activeIdx = stops[stops.length - 1][2];
            setInit(false);
            setColor(item);
            setActiveColor &&
                setActiveColor({
                    hex: activeStop,
                    alpha: Number(Math.round(lastStop[3] * 100)),
                    loc: lastStopLoc,
                    index: activeIdx
                });
            setActive(index);
        }
        else if (colorType !== 'gradient' && typeof item === 'string') {
            setInit(false);
            setColor(getHexAlpha(item));
            setActive(index);
        }
    };
    if (!Array.isArray(defaultColors) || !defaultColors.length) {
        return null;
    }
    return (React.createElement("div", { className: 'default-color-panel' }, formatedDefColors.map(function (item, index) {
        switch (colorType) {
            case 'gradient':
                if (typeof item !== 'string') {
                    var gradient = item.gradient;
                    return (React.createElement("div", { onClick: function () { return onChooseColor(item, index); }, key: item.gradient + index, className: "default-color-panel_item" + (active === index ? ' default-color-panel_item-active' : ''), style: {
                            background: gradient
                        } },
                        React.createElement("div", { className: 'item_qub' })));
                }
                else {
                    return null;
                }
            case 'solid':
                if (typeof item === 'string') {
                    return (React.createElement("div", { onClick: function () { return onChooseColor(item, index); }, key: item + index, className: "default-color-panel_item" + (active === index ? ' default-color-panel_item-active' : ''), style: {
                            background: item,
                            boxShadow: active === index ? item + " 0px 0px 4px" : 'none'
                        } },
                        React.createElement("div", { className: 'item_qub' })));
                }
                else {
                    return null;
                }
            default:
                return null;
        }
    })));
};

var Gradient = function (_a) {
    var _b = _a.value, value = _b === void 0 ? '#ffffff' : _b, _c = _a.onChange, onChange = _c === void 0 ? function () { return ({}); } : _c, _d = _a.format, format = _d === void 0 ? 'rgb' : _d, _e = _a.debounceMS, debounceMS = _e === void 0 ? 300 : _e, _f = _a.debounce, debounce = _f === void 0 ? true : _f, _g = _a.showAlpha, showAlpha = _g === void 0 ? true : _g, _h = _a.showInputs, showInputs = _h === void 0 ? true : _h, _j = _a.showGradientResult, showGradientResult = _j === void 0 ? true : _j, _k = _a.showGradientStops, showGradientStops = _k === void 0 ? true : _k, _l = _a.showGradientMode, showGradientMode = _l === void 0 ? true : _l, _m = _a.showGradientAngle, showGradientAngle = _m === void 0 ? true : _m, _o = _a.showGradientPosition, showGradientPosition = _o === void 0 ? true : _o, _p = _a.colorBoardHeight, colorBoardHeight = _p === void 0 ? 120 : _p, defaultColors = _a.defaultColors, defaultColorsLimit = _a.defaultColorsLimit;
    var parsedColors = useCallback(function () {
        return parseGradient(value);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);
    var initColor = parsedColors();
    var stops = initColor.stops;
    var lastStop = rgbaToArray(stops[stops.length - 1][0]);
    var lastStopLoc = stops[stops.length - 1][1];
    var activeStop = rgbaToHex([lastStop[0], lastStop[1], lastStop[2]]);
    var activeIdx = stops[stops.length - 1][2];
    var _q = __read(useState(true), 2), init = _q[0], setInit = _q[1];
    var _r = __read(useState({
        hex: activeStop,
        alpha: Number(Math.round(lastStop[3] * 100)),
        loc: lastStopLoc,
        index: activeIdx
    }), 2), activeColor = _r[0], setActiveColor = _r[1];
    var _s = __read(useState(initColor), 2), color = _s[0], setColor = _s[1];
    var debounceColor = useDebounce(color, debounceMS);
    useEffect(function () {
        if (debounce && debounceColor && init === false) {
            if (debounceColor.gradient === initColor.gradient) {
                return;
            }
            onChange && onChange(debounceColor.gradient);
        }
        else if (init === false) {
            if (debounceColor.gradient === initColor.gradient) {
                return;
            }
            onChange && onChange(debounceColor.gradient);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [debounceColor]);
    // Issue https://github.com/undind/react-gcolor-picker/issues/6
    useEffect(function () {
        setColor(initColor);
        var findActive = initColor.stops.find(function (stop) { return stop[2] === activeColor.index; });
        // Update active color
        if (findActive) {
            var tinycolor_1 = tinycolor(String(findActive[0]));
            if ('#' + tinycolor_1.toHex() !== activeColor.hex) {
                setActiveColor(__assign(__assign({}, activeColor), { hex: '#' + tinycolor_1.toHex(), alpha: tinycolor_1.getAlpha() * 100 }));
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);
    var onChangeActiveColor = useCallback(function (value) {
        setInit(false);
        setActiveColor(__assign(__assign({}, activeColor), { hex: value.hex, alpha: Number(Math.round(value.alpha)) }));
        var stops = color.stops, type = color.type, modifier = color.modifier;
        var rgba = tinycolor(value.hex);
        rgba.setAlpha(value.alpha / 100);
        var newStops = stops.map(function (item) {
            if (item[1] === activeColor.loc) {
                return [rgba.toRgbString(), item[1], item[2]];
            }
            return item;
        });
        setColor(__assign(__assign({}, color), { gradient: "" + getGradient(type, newStops, modifier, format, showAlpha), stops: newStops }));
    }, 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [activeColor, color]);
    var onSubmitChange = function (rgba) {
        var rgbaArr = rgbaToArray(rgba);
        var hex = rgbaToHex([rgbaArr[0], rgbaArr[1], rgbaArr[2]]);
        onChangeActiveColor({ hex: hex, alpha: rgbaArr[3] * 100 });
    };
    return (React.createElement("div", { className: 'colorpicker' },
        React.createElement(Panel, { hex: activeColor.hex, alpha: activeColor.alpha, showAlpha: showAlpha, onChange: onChangeActiveColor, colorBoardHeight: colorBoardHeight }),
        showInputs && (React.createElement(InputRgba, { hex: activeColor.hex, alpha: activeColor.alpha, showAlpha: showAlpha, onChange: function (value) {
                return setActiveColor(function (prev) { return (__assign(__assign({}, prev), { hex: value.hex, alpha: value.alpha })); });
            }, onSubmitChange: onSubmitChange })),
        React.createElement(GradientPanel$1, { color: color, setColor: setColor, activeColor: activeColor, setActiveColor: setActiveColor, setInit: setInit, format: format, showAlpha: showAlpha, showGradientResult: showGradientResult, showGradientStops: showGradientStops, showGradientMode: showGradientMode, showGradientAngle: showGradientAngle, showGradientPosition: showGradientPosition }),
        React.createElement(DefaultColorPanel, { defaultColors: defaultColors, setColor: setColor, setActiveColor: setActiveColor, setInit: setInit, limit: defaultColorsLimit, colorType: 'gradient' })));
};

var ColorPickerSolid = function (_a) {
    var _b = _a.value, value = _b === void 0 ? '#ffffff' : _b, _c = _a.onChange, onChange = _c === void 0 ? function () { return ({}); } : _c, _d = _a.format, format = _d === void 0 ? 'rgb' : _d, _e = _a.debounceMS, debounceMS = _e === void 0 ? 300 : _e, _f = _a.debounce, debounce = _f === void 0 ? true : _f, _g = _a.showAlpha, showAlpha = _g === void 0 ? true : _g, _h = _a.showInputs, showInputs = _h === void 0 ? true : _h, _j = _a.colorBoardHeight, colorBoardHeight = _j === void 0 ? 120 : _j, defaultColors = _a.defaultColors, defaultColorsLimit = _a.defaultColorsLimit;
    var node = useRef(null);
    var _k = __read(useState(true), 2), init = _k[0], setInit = _k[1];
    var _l = __read(useState(getHexAlpha(value)), 2), color = _l[0], setColor = _l[1];
    var debounceColor = useDebounce(color, debounceMS);
    useEffect(function () {
        if (debounce && debounceColor && init === false) {
            if (value === 'transparent' && color.alpha === 0) {
                color.alpha = 100;
            }
            var rgba = tinycolor(color.hex);
            rgba.setAlpha(color.alpha / 100);
            if (tinycolor(rgba).toRgbString() === tinycolor(value).toRgbString()) {
                return;
            }
            onChange(checkFormat(rgba.toRgbString(), format, showAlpha, debounceColor.alpha));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [debounceColor]);
    // Issue https://github.com/undind/react-gcolor-picker/issues/6
    useEffect(function () {
        setColor(getHexAlpha(value));
    }, [value]);
    var onCompleteChange = function (value) {
        setInit(false);
        setColor({
            hex: value.hex,
            alpha: Math.round(value.alpha)
        });
    };
    return (React.createElement("div", { ref: node, className: 'colorpicker' },
        React.createElement(Panel, { hex: color.hex, alpha: color.alpha, colorBoardHeight: colorBoardHeight, showAlpha: showAlpha, onChange: onCompleteChange }),
        showInputs && (React.createElement(InputRgba, { hex: color.hex, alpha: color.alpha, format: format, showAlpha: showAlpha, onChange: setColor, onSubmitChange: onChange })),
        React.createElement(DefaultColorPanel, { defaultColors: defaultColors, setColor: setColor, setInit: setInit, colorType: 'solid', limit: defaultColorsLimit })));
};

___$insertStyle(".popup_tabs {\n  position: relative;\n  background-color: #ffffff;\n  box-shadow: 0 8px 24px 0 rgba(0, 0, 0, 0.12);\n  border-radius: 6px;\n  min-width: 267px;\n}\n.popup_tabs-header {\n  width: 100%;\n  height: 49px;\n  box-shadow: inset 0 2px 6px 0 rgba(0, 0, 0, 0.04);\n  background-color: #f6f7f9;\n  display: flex;\n  border-radius: 6px;\n  border-bottom-right-radius: 0px;\n  border-bottom-left-radius: 0px;\n  overflow: hidden;\n}\n.popup_tabs-header .popup_tabs-header-label {\n  width: 100%;\n  height: 49px;\n  font-size: 14px;\n  font-weight: bold;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 24px;\n  letter-spacing: 0.5px;\n  text-align: center;\n  color: #929fb7;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  text-transform: uppercase;\n}\n.popup_tabs-header .popup_tabs-header-label-active {\n  background-color: #ffffff;\n  cursor: default;\n  color: #312e55;\n}\n.popup_tabs-body {\n  padding: 16px;\n}");

var PopupTabs = function (_a) {
    var children = _a.children, activeTab = _a.activeTab, popupWidth = _a.popupWidth;
    var childrenContact = React.Children.map(children, function (child) {
        return React.cloneElement(child, {
            activeTab: activeTab
        });
    });
    return (React.createElement("div", { className: 'popup_tabs', style: { width: popupWidth + "px" } }, childrenContact));
};
var PopupTabsHeaderLabel = function (_a) {
    var children = _a.children, activeTab = _a.activeTab, tabName = _a.tabName, onClick = _a.onClick;
    return (React.createElement("div", { className: "popup_tabs-header-label" + (activeTab === tabName ? ' popup_tabs-header-label-active' : ''), onClick: onClick }, children));
};
var PopupTabsHeader = function (_a) {
    var children = _a.children, activeTab = _a.activeTab;
    var childrenContact = React.Children.map(children, function (child) {
        return React.cloneElement(child, {
            activeTab: activeTab
        });
    });
    return React.createElement("div", { className: 'popup_tabs-header' }, childrenContact);
};
var PopupTabsBody = function (_a) {
    var children = _a.children, activeTab = _a.activeTab;
    var childrenContact = React.Children.map(children, function (child) {
        return React.cloneElement(child, {
            activeTab: activeTab
        });
    });
    return React.createElement("div", { className: 'popup_tabs-body' }, childrenContact);
};
var PopupTabsBodyItem = function (_a) {
    var children = _a.children, activeTab = _a.activeTab, tabName = _a.tabName;
    if (activeTab === tabName) {
        return React.createElement("div", { className: 'popup_tabs-body-item' }, children);
    }
    return null;
};

var DEFAULT_COLORS = [
    '#FF6900',
    '#FCB900',
    '#7BDCB5',
    '#00D084',
    '#8ED1FC',
    '#0693E3',
    '#ABB8C3',
    '#607d8b',
    '#EB144C',
    '#F78DA7',
    '#ba68c8',
    '#9900EF',
    'linear-gradient(0deg, rgb(255, 177, 153) 0%, rgb(255, 8, 68) 100%)',
    'linear-gradient(270deg, rgb(251, 171, 126) 8.00%, rgb(247, 206, 104) 92.00%)',
    'linear-gradient(315deg, rgb(150, 230, 161) 8.00%, rgb(212, 252, 121) 92.00%)',
    'linear-gradient(to left, rgb(249, 240, 71) 0%, rgb(15, 216, 80) 100%)',
    'linear-gradient(315deg, rgb(194, 233, 251) 8.00%, rgb(161, 196, 253) 92.00%)',
    'linear-gradient(0deg, rgb(0, 198, 251) 0%, rgb(0, 91, 234) 100%)',
    'linear-gradient(0deg, rgb(167, 166, 203) 0%, rgb(137, 137, 186) 51.00%, rgb(137, 137, 186) 100%)',
    'linear-gradient(0deg, rgb(80, 82, 133) 0%, rgb(88, 94, 146) 15.0%, rgb(101, 104, 159) 28.00%, rgb(116, 116, 176) 43.00%, rgb(126, 126, 187) 57.00%, rgb(131, 137, 199) 71.00%, rgb(151, 149, 212) 82.00%, rgb(162, 161, 220) 92.00%, rgb(181, 174, 228) 100%)',
    'linear-gradient(270deg, rgb(255, 126, 179) 0%, rgb(255, 117, 140) 100%)',
    'linear-gradient(90deg, rgb(120, 115, 245) 0%, rgb(236, 119, 171) 100%)',
    'linear-gradient(45deg, #2e266f 0.00%, #9664dd38 100.00%)',
    'radial-gradient(circle at center, yellow 0%, #009966 50%, purple 100%)'
];
var ColorPicker = function (_a) {
    var _b = _a.value, value = _b === void 0 ? '#ffffff' : _b, _c = _a.format, format = _c === void 0 ? 'rgb' : _c, _d = _a.gradient, gradient = _d === void 0 ? false : _d, _e = _a.solid, solid = _e === void 0 ? true : _e, _f = _a.debounceMS, debounceMS = _f === void 0 ? 300 : _f, _g = _a.debounce, debounce = _g === void 0 ? true : _g, _h = _a.showAlpha, showAlpha = _h === void 0 ? true : _h, _j = _a.showInputs, showInputs = _j === void 0 ? true : _j, _k = _a.showGradientResult, showGradientResult = _k === void 0 ? true : _k, _l = _a.showGradientStops, showGradientStops = _l === void 0 ? true : _l, _m = _a.showGradientMode, showGradientMode = _m === void 0 ? true : _m, _o = _a.showGradientAngle, showGradientAngle = _o === void 0 ? true : _o, _p = _a.showGradientPosition, showGradientPosition = _p === void 0 ? true : _p, _q = _a.popupWidth, popupWidth = _q === void 0 ? 267 : _q, _r = _a.colorBoardHeight, colorBoardHeight = _r === void 0 ? 120 : _r, _s = _a.defaultColors, defaultColors = _s === void 0 ? DEFAULT_COLORS : _s, _t = _a.defaultColorsLimit, defaultColorsLimit = _t === void 0 ? 100 : _t, defaultActiveTab = _a.defaultActiveTab, onChangeTabs = _a.onChangeTabs, _u = _a.onChange, onChange = _u === void 0 ? function () { return ({}); } : _u;
    var _v = __read(useState(defaultActiveTab || getIndexActiveTag(value)), 2), activeTab = _v[0], setActiveTab = _v[1];
    var onChangeSolid = function (value) {
        onChange(value);
    };
    var onChangeGradient = function (value) {
        onChange(value);
    };
    var onChangeTab = function (tab) {
        setActiveTab(tab);
        if (typeof onChangeTabs === 'function' && !!onChangeTabs) {
            onChangeTabs(tab);
        }
    };
    if (solid && gradient) {
        return (React.createElement(PopupTabs, { activeTab: activeTab, popupWidth: popupWidth },
            React.createElement(PopupTabsHeader, null,
                React.createElement(PopupTabsHeaderLabel, { tabName: 'solid', onClick: function () { return onChangeTab('solid'); } }, "Solid"),
                React.createElement(PopupTabsHeaderLabel, { tabName: 'gradient', onClick: function () { return onChangeTab('gradient'); } }, "Gradient")),
            React.createElement(PopupTabsBody, null,
                React.createElement(PopupTabsBodyItem, { tabName: 'solid' },
                    React.createElement(ColorPickerSolid, { onChange: onChangeSolid, value: value, format: format, defaultColors: defaultColors, defaultColorsLimit: defaultColorsLimit, debounceMS: debounceMS, debounce: debounce, showAlpha: showAlpha, showInputs: showInputs, colorBoardHeight: colorBoardHeight })),
                React.createElement(PopupTabsBodyItem, { tabName: 'gradient' },
                    React.createElement(Gradient, { onChange: onChangeGradient, value: value, format: format, defaultColors: defaultColors, defaultColorsLimit: defaultColorsLimit, debounceMS: debounceMS, debounce: debounce, showAlpha: showAlpha, showInputs: showInputs, showGradientResult: showGradientResult, showGradientStops: showGradientStops, showGradientMode: showGradientMode, showGradientAngle: showGradientAngle, showGradientPosition: showGradientPosition, colorBoardHeight: colorBoardHeight })))));
    }
    return (React.createElement(React.Fragment, null, solid || gradient ? (React.createElement(PopupTabs, { popupWidth: popupWidth },
        React.createElement(PopupTabsBody, null,
            solid ? (React.createElement(ColorPickerSolid, { onChange: onChangeSolid, value: value, format: format, defaultColors: defaultColors, debounceMS: debounceMS, debounce: debounce, showAlpha: showAlpha, showInputs: showInputs, colorBoardHeight: colorBoardHeight })) : (React.createElement(Fragment, null)),
            gradient ? (React.createElement(Gradient, { onChange: onChangeGradient, value: value, format: format, defaultColors: defaultColors, debounceMS: debounceMS, debounce: debounce, showAlpha: showAlpha, showInputs: showInputs, showGradientResult: showGradientResult, showGradientStops: showGradientStops, showGradientMode: showGradientMode, showGradientAngle: showGradientAngle, showGradientPosition: showGradientPosition, colorBoardHeight: colorBoardHeight })) : (React.createElement(Fragment, null))))) : null));
};

export default ColorPicker;
//# sourceMappingURL=index.es.js.map
