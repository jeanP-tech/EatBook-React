"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.searchBook = void 0;

var _react = _interopRequireDefault(require("react"));

var _Search = _interopRequireDefault(require("./Search"));

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Kakao = _axios.default.create({
  credentials: "include",
  baseURL: "https://dapi.kakao.com",
  headers: {
    Authorization: "KakaoAK 9b97e883418c2945387a81cd7c9953d9"
  }
});

var searchBook = function searchBook(params) {
  return Kakao.get("/v3/search/book", {
    params: params
  });
};

exports.searchBook = searchBook;
var _default = _Search.default;
exports.default = _default;