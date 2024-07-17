import React, { Component } from "react";
import "./ExpenseList.css";
import ExpenseItem from "./ExpenseItem";
import { MdDelete } from "react-icons/md"; // react-icons 라이브러리에서 MdDelete 아이콘을 가져옵니다.

export class ExpenseList extends Component {
  render() {
    return (
      <React.Fragment>
        {/* 여러 요소를 그룹화할 때 사용합니다. 불필요한 DOM 노드를 추가하지 않고 자식 요소들을 감쌀 수 있습니다. <div> 대신 사용될 수 있습니다. */}
        <ul className="list">
          {/* expense Item */}
          <ExpenseItem />
        </ul>
        <button className="btn">
          목록지우기
          <MdDelete className="btn-icon" />
          {/* MdDelete 아이콘을 버튼 내부에 추가합니다.  */}
        </button>
      </React.Fragment>
    );
  }
}

export default ExpenseList;
