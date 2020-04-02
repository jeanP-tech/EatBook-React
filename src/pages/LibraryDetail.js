import React from 'react';
import Header from '../components/Header';
import GoBack from '../components/GoBack';
import LibraryDetailInfo from '../components/LibraryDetailInfo';
import LibraryBookReview from '../components/LibraryBookReview';

const LibraryDetail = () => {
  return (
      <div>
          <Header />
          <GoBack />
          <LibraryDetailInfo />
          <LibraryBookReview />
      </div>
  );
}

export default LibraryDetail;
