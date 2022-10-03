"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const FingerJs = _ref => {
  let {
    children,
    style = {},
    direction = "horizontal",
    motionSensivity = 50,
    onLeft = () => null,
    onRight = () => null,
    onUp = () => null,
    onDown = () => null
  } = _ref;
  const [initialPosition, setInitialPosition] = (0, _react.useState)(0);
  const [finalPosition, setFinalPosition] = (0, _react.useState)(0);

  const onTouchStart = event => {
    event.preventDefault();
    const position = direction === 'horizontal' ? event.touches[0].clientX : event.touches[0].clientY;
    setInitialPosition(position);
  };

  const onTouchMove = event => {
    event.preventDefault();
    const position = direction === 'horizontal' ? event.touches[0].clientX : event.touches[0].clientY;
    setFinalPosition(position);
  };

  const onTouchEnd = event => {
    event.preventDefault();

    if (finalPosition !== 0) {
      if (initialPosition - finalPosition < -motionSensivity) {
        direction === 'horizontal' ? onRight() : onDown();
      } else if (initialPosition - finalPosition > motionSensivity) {
        direction === 'horizontal' ? onLeft() : onUp();
      } else {
        return null;
      }
    }
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    onTouchStart: onTouchStart,
    onTouchMove: onTouchMove,
    onTouchEnd: onTouchEnd,
    style: style
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      touchAction: direction === 'horizontal' ? 'pan-y' : 'pan-x'
    }
  }, children));
};

var _default = FingerJs;
exports.default = _default;