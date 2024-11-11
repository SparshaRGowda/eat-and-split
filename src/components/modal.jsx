import { useState } from "react";

/* eslint-disable react/prop-types */
export default function Modal({ user, updateBalance }) {
  const [bill, setBill] = useState({
    billValue: "",
    yourExpense: "",
    friendExpense: "",
    who: ["You", user.name],
  });

  const [who, setWho] = useState("");

  function handleBill(inputValue, e) {
    setBill((prev) => ({
      ...prev,
      [inputValue]: e,
    }));
  }

  function handleSplitting(who) {
    let bal = user.balance;
    if (who === "You") {
      bal += Number(bill.friendExpense);
    } else if (who === user.name) {
      bal += -Number(bill.yourExpense);
    } else bal = 0;
    updateBalance(bal, user);
    setBill({
      billValue: "",
      yourExpense: "",
      friendExpense: "",
      who: ["You", user.name],
    });
    setWho("");
  }

  return (
    <div className="w-[400px] h-[300px] bg-lime-200 m-5">
      <h2 className="text-xl m-10">Split bill with {user.name}</h2>
      <p className="m-5">
        Bill value
        <input
          type="string"
          value={bill.billValue}
          onChange={(e) => handleBill("billValue", e.target.value)}
        />
      </p>
      <p className="m-5">
        Your expense
        <input
          type="string"
          value={bill.yourExpense}
          onChange={(e) => handleBill("yourExpense", e.target.value)}
        />
      </p>
      <p className="m-5">
        {`${user.name}'s expense`}
        <input
          type="string"
          value={bill.friendExpense}
          onChange={(e) => handleBill("friendExpense", e.target.value)}
        />
      </p>
      <p className="m-5">
        Who is paying the bill
        <select
          type="string"
          value={who}
          onChange={(e) => setWho(e.target.value)}
        >
          <option>select</option>
          {bill.who.map((item, index) => (
            <option key={index}>{item}</option>
          ))}
        </select>
      </p>
      <button onClick={() => handleSplitting(who)}>Split bill </button>
    </div>
  );
}
