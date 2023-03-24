import React, { useReducer, useState } from 'react';
import personReducer from '../src/reducer/person-reducer';


export default function AppMentorsButton () {
  //const [person, setPerson] = useState(initialPerson);
  const [person, dispatch] = useReducer(personReducer, initialPerson);

  const handleUpdate = () => {
    const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
    const current = prompt (`이름을 무엇으로 바꾸고 싶은가요?`);
    dispatch({type: 'updated', prev, current});
  };
  const handleAdd = () => {
    const name = prompt(`추가할 멘토의 이름은 무엇입니까?`);
    const title = prompt(`추가할 멘토의 타이틀은 무엇입니까?`);
    dispatch({type: 'added', name, title});
  }

  const handleDelete = () => {
    const deleMentor = prompt(`삭제할 멘토의 이름은 무엇입니까?`);
    dispatch({type: 'deleted', deleMentor})
  }

  return (
    <div>
      <h1>
        {person.name}는 {person.title}
      </h1>
      <p>
        {person.name}의 멘토는 
      </p>
      <ul>
        {person.mentors.map((mentor, index) => (
          <li key={index}>
            {mentor.name} ({mentor.title})
          </li>
        ))}
      </ul>
      <button onClick={handleUpdate}>멘토 이름 바꾸기</button>
      <button onClick={handleAdd}>멘토 추가하기</button>
      <button onClick={handleDelete}>멘토 삭제하기</button>
      
    </div>

  );

}

const initialPerson = {
  name: '앨리',
  title: '개발자',
  mentors: [
    {
    name: '밥',
    title: '시니어개발자',
    },
    {
    name: '제임스',
    title: '시니어개발자',
    },
  ]
}