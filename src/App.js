import { useState } from 'react';
import FormSplitBill from './FormSplitBill';
import FormAddFriend from './FormAddFriend';
import Button from './Button';
import FreindList from './FreindList';

const initialFriends = [
  {
    id: 118836,
    name: 'Clark',
    image: 'https://i.pravatar.cc/48?u=118836',
    balance: -7,
  },
  {
    id: 933372,
    name: 'Sarah',
    image: 'https://i.pravatar.cc/48?u=933372',
    balance: 20,
  },
  {
    id: 499476,
    name: 'Anthony',
    image: 'https://i.pravatar.cc/48?u=499476',
    balance: 0,
  },
];

export default function App() {
  const [on, setOn] = useState(0);
  const [friends, setFriends] = useState(initialFriends);
  const [selected, setSelected] = useState(null);
  function handleSelection(friend) {
    setSelected((selected) =>
      selected && selected.id === friend.id ? null : friend
    );
    setOn(false);
  }
  function handleSplitBill(value) {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selected.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
    setSelected(null);
  }
  return (
    <div className="app">
      <div className="sidebar">
        <FreindList
          friends={friends}
          handleSelection={handleSelection}
          selected={selected}
        />
        {on ? (
          <FormAddFriend
            setFriends={setFriends}
            friends={friends}
            setOn={setOn}
          />
        ) : (
          ''
        )}
        {
          <Button onclick={() => setOn((el) => !el)}>
            {on ? 'Close' : 'Add friend'}
          </Button>
        }
      </div>
      {selected && (
        <FormSplitBill selected={selected} handleSplitBill={handleSplitBill} />
      )}
    </div>
  );
}
