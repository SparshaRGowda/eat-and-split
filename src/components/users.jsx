/* eslint-disable react/prop-types */
import { useState } from "react";
import Avatar from "react-avatar";

export default function Users({
  usersData,
  handleUserSelect,
  handleUserModal,
  user,
}) {
  const [openModal, setOpenModal] = useState(true);

  function handleEachUserModal(userModal) {
    setOpenModal(!openModal);
    handleUserSelect(openModal);
    handleUserModal(userModal);
  }

  return (
    <div>
      {usersData.map((item) => (
        <div key={item.id} className="flex gap-2 mb-5">
          <Avatar name={item.name} round={true} size="30" />

          <div className="flex flex-col">
            <p>{item.name}</p>

            {item.balance <= 0 ? (
              <p>{`you owe ${item.name} ${Math.abs(item.balance)}$`}</p>
            ) : (
              <p>{`you are owed ${item.name} ${Math.abs(item.balance)}$`}</p>
            )}
          </div>
          <button
            className="h-8 text-sm ml-24 disabled:bg-slate-400"
            onClick={() => handleEachUserModal(item)}
          >
            {!openModal && item.id === user.id ? "Close" : "Select"}
          </button>
        </div>
      ))}
    </div>
  );
}
