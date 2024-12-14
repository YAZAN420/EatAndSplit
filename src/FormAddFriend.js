import { useState } from 'react';
import Button from './Button';

export default function FormAddFriend({ friends, setFriends, setOn }) {
  const [name, setName] = useState('');
  const [img, setImg] = useState('https://i.pravatar.cc/48');
  function addNewFriend(e) {
    e.preventDefault();
    if (!name || !img) return;
    setFriends((el) => [...el, newFriend]);
    setName('');
    setImg('https://i.pravatar.cc/48');
    setOn(0);
  }
  const id = crypto.randomUUID();
  const newFriend = {
    id: id,
    name: name,
    image: `${img}?=${id}`,
    balance: 0,
  };
  return (
    <form className="form-add-friend" onSubmit={addNewFriend}>
      <label>👭Friend Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label>🌆 Image URL</label>
      <input type="text" value={img} onChange={(e) => setImg(e.target.value)} />
      <Button>Add</Button>
    </form>
  );
}
