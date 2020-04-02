import React from 'react';
import Header from '../components/Header';
import LibraryDetailInfo from '../components/LibraryDetailInfo';
import LibraryBookReview from '../components/LibraryBookReview';

const LibraryDetail = () => {
  return (
      <div>
          <Header />
          <LibraryDetailInfo />
          <LibraryBookReview />
      </div>
  );
}

export default LibraryDetail;
