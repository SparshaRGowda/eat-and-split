/* eslint-disable react/prop-types */
import { useState } from "react";

export default function AddNewFriend({ handleAddFriend, handleUsersData }) {
  const [isAddFriend, setIsAddFriend] = useState(false);

  const [friendsData, setfriendsData] = useState({
    name: "",
    balance: "",
  });

  function setNewName(e) {
    setfriendsData((prev) => ({
      ...prev,
      name: e.target.value,
    }));
  }
  function setNewBalance(e) {
    setfriendsData((prev) => ({
      ...prev,
      balance: Number(e.target.value) || "",
    }));
  }

  function addNewFriend() {
    const newData = {
      id: Date.now(),
      name: friendsData.name,
      balance: friendsData.balance,
    };

    handleUsersData(newData);
    setfriendsData({
      name: "",
      balance: 0,
    });
    setIsAddFriend(false);
    handleAddFriend(isAddFriend);
  }

  return (
    <div>
      <label>Name</label>
      <input
        type="text"
        value={friendsData.name}
        onChange={setNewName}
        className="bg-slate-300"
      />
      <label>Balance</label>
      <input
        type="string"
        className="bg-slate-300"
        value={friendsData.balance}
        onChange={setNewBalance}
      />
      <button className="h-8 text-sm" onClick={addNewFriend}>
        Add
      </button>
    </div>
  );
}
