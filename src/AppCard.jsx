import React from 'react';

export default function AppCard() {
  return (
    <div>
      <Card>
        <p>안녕하세요</p>
      </Card>

      <Card>
        <p>혼자만들어보기</p>
      </Card>
    </div>
  );
}

function Card({children}) {
  return (
    <div 
      style={{
        backgroundColor: 'black',
        borderRadius: '20px',
        color: 'white',
        minHeight: '200px',
        maxWidth: '200px',
        margin: '1rem',
        padding: '1rem',
        textAlign: 'center',
      }}
    >
      {children}
    </div>
  );
}