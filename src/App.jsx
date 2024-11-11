import { useState } from "react";
import data from "./data";
import Users from "./components/users";
import AddNewFriend from "./components/addNewFriend";
import Modal from "./components/modal";

function App() {
  const [usersData, setUsersData] = useState(data);
  const [addFriend, setAddFriend] = useState(false);
  const [selectedUser, setSelectedUser] = useState({
    id: "",
    name: "",
    balance: "",
  });
  const [userSelect, setUserSelect] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [bal, setBal] = useState(0);

  function handleAddFriend(add) {
    setAddFriend(add);
  }

  function handleUsersData(newData) {
    setUsersData((prev) => [...prev, newData]);
  }

  function handleUserSelect(select) {
    setUserSelect(select);
  }

  function handleUserModal(user) {
    setSelectedUser(user);
  }

  function updateBalance(bal, user) {
    setBal(bal);
    usersData.map((item) =>
      item.id === user.id ? [(item.balance = bal)] : item
    );
  }

  return (
    <>
      <Users
        usersData={usersData}
        handleUserSelect={handleUserSelect}
        handleUserModal={handleUserModal}
        user={selectedUser}
      />

      <button onClick={() => setAddFriend(true)} className="h-8 text-sm">
        Add friend
      </button>
      {addFriend ? (
        <AddNewFriend
          handleAddFriend={handleAddFriend}
          handleUsersData={handleUsersData}
        />
      ) : null}
      {userSelect ? (
        <Modal user={selectedUser} updateBalance={updateBalance} />
      ) : null}
    </>
  );
}

export default App;
