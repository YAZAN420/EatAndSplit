import Button from './Button';

export default function Friend({ friend, handleSelection, selected }) {
  const isSelected = selected && selected.id === friend.id;
  return (
    <li className={isSelected ? 'selected' : ''}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">
          Your owe {friend.name} {Math.abs(friend.balance)}$
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owe you {Math.abs(friend.balance)}$
        </p>
      )}
      {friend.balance === 0 && <p>Your and {friend.name} are even</p>}
      <Button onclick={() => handleSelection(friend)}>
        {!isSelected ? 'Select' : 'Close'}
      </Button>
    </li>
  );
}
