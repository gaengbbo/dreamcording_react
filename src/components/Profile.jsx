import Avatar from './Avatar';

export default function Profile (props) {
  return (
    <>
      <div className='profile'>
        <Avatar image={props.image} isNew={props.isNew}/>
        <h1>{props.name}</h1>
        <p>{props.title}</p>
        
      </div>
      
    </>
);
}

/*  props 오브젝트를 통해 전달 받고자 하는 키를 직접 넣으면 일일이 props.을 쓰지 않고도 가능
export default function Profile ({image, name, title}) {
  return (
    <div className='profile'>
      <img 
        className='photo'
        src={image}
        alt='avatar' 
        {isNew && <span className='new'>NEW</span/>}
      <h1>{name}</h1>
      <p>{title}</p>
    </div>
);
}
*/