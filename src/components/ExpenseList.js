import React from "react";
import "./ExpenseList.css";
import ExpenseItem from "./ExpenseItem";
import { MdDelete } from "react-icons/md"; // react-icons 라이브러리에서 MdDelete 아이콘을 가져옵니다.

const ExpenseList = ({ handleDelete, initialExpenses }) => {
  return (
    <React.Fragment>
      <ul className="list">
        {/* expense Item */}
        {initialExpenses.map((expense) => {
          return (
            <ExpenseItem
              expense={expense}
              key={expense.id}
              handleDelete={handleDelete}
            />
          );
        })}
      </ul>
      <button className="btn">
        목록지우기
        <MdDelete className="btn-icon" />
      </button>
    </React.Fragment>
  );
};

export default ExpenseList;
