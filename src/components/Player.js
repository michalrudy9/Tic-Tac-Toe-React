import { useState } from "react";

function Player({ initialName, symbol }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  function handleEditClick() {
    setIsEditing((editing) => !editing);
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  const editablePlayername = !isEditing ? (
    <span className="player-name">{playerName}</span>
  ) : (
    <input type="text" value={playerName} onChange={handleChange} required />
  );

  const btnCaption = !isEditing ? "Edit" : "Save";

  return (
    <li>
      <span className="player">
        {editablePlayername}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{btnCaption}</button>
    </li>
  );
}

export default Player;