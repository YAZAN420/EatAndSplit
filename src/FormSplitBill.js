import { useState } from 'react';
import Button from './Button';

export default function FormSplitBill({ handleSplitBill, selected }) {
  const [bill, setBill] = useState('');
  const [paidByUser, setPaidByUser] = useState('');
  const paidByFriend = bill ? bill - paidByUser : '';
  const [whoIsPaying, setWhoIsPaying] = useState('user');
  function handleSubmitSplit(e) {
    e.preventDefault();
    if (!bill || !paidByUser) return;
    handleSplitBill(whoIsPaying === 'user' ? paidByFriend : -paidByUser);
  }
  return (
    <form className="form-split-bill" onSubmit={handleSubmitSplit}>
      <h2>Split a bill with {selected.name}</h2>
      <label>💼 Bill value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />
      <label>🕴 Your expense</label>
      <input
        type="text"
        value={paidByUser}
        onChange={(e) =>
          setPaidByUser(
            Number(e.target.value) > bill ? paidByUser : Number(e.target.value)
          )
        }
      />
      <label>👫 {selected.name}'s expense</label>
      <input type="text" disabled value={paidByFriend} />
      <label>🤑 who is paying the bill</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{selected.name}</option>
      </select>
      <Button>Add</Button>
    </form>
  );
}
