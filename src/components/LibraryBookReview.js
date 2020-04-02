import React from 'react';
import '../css/DetailPage.css';

const LibraryBookReview = () => {
  return (
    <>
      <div className="sentences_container">
      <div className="sentences">
        <h2>문장들</h2>
        <ul>
          <li>우리가 다시 만나 점심을 먹을 수 있으면 좋겠습니다.  p.40</li>
          <li>“어머니, 돌아가신 분들에겐 전화를 걸 수 없어요.”  p.129</li>
          <li>대개 사랑이 바래는 것은 소중한 순간들을 잊고 서로를 함부로 대하기 시작하기 때문이므로, 이제 잊히지 않는 기억들로 사랑은 유지되었다.  p.135</li>
          <li>하필이면 사랑이 일목 대상인 일목인처럼. 물거품이 될 각오가 선 인어처럼. “목소리를 드릴게요.”  p.215</li>
        </ul>
      </div>
      </div>
    </>
  );
};

export default LibraryBookReview;
