import Friend from './Friend';

export default function FreindList({ friends, handleSelection, selected }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          friend={friend}
          handleSelection={handleSelection}
          selected={selected}
          key={friend.id}
        />
      ))}
    </ul>
  );
}
