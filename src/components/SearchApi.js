import React from 'react';
import Search from './Search';
import axios from "axios";

const Kakao = axios.create({
  credentials: "include",
  baseURL: "https://dapi.kakao.com",
  headers: {
    Authorization: "KakaoAK 9b97e883418c2945387a81cd7c9953d9"
  }
});

export const searchBook = params => {
  return Kakao.get("/v3/search/book", { params });
};

export default Search;
