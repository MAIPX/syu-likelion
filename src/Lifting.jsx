import { useState } from 'react';

// 자식 컴포넌트
function Child({ TextChange }) {
  return (
    <div>
      <h1>자식</h1>
      <button onClick={() => TextChange('자식에서 텍스트 변경')}>
        텍스트 바꾸는 버튼
      </button>
    </div>
  );
}

// 부모 컴포넌트
export default function Parent() {
  const [text, setText] = useState('디폴트 텍스트');

  const handleTextChange = (newText) => {
    setText(newText);
  };

  return (
    <div>
      <h1>부모</h1>
      <p>{text}</p>
      <Child TextChange={handleTextChange} />
    </div>
  );
}