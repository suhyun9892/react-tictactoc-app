import React, { Component } from "react";
import "./ExpenseForm.css";
import { MdSend } from "react-icons/md";

export class ExpenseForm extends Component {
  // ExpenseForm이라는 클래스형 컴포넌트를 정의합니다. 이 컴포넌트는 Component를 상속받습니다.
  render() {
    // 클래스형 컴포넌트에서 UI를 정의하는 메서드입니다. render 메서드는 JSX를 반환합니다.
    return (
      <form>
        <div className="form-center">
          <div className="form-group">
            <label htmlFor="charge">지출 항목</label>
            {/* HTML의 <label> 요소는 폼 요소와 관련된 텍스트를 제공하는 데 사용됩니다. <label> 요소를 사용하면 폼 요소의 접근성을 높일 수 있습니다. 특히 화면 읽기 프로그램을 사용하는 사용자에게 폼 요소의 목적을 더 명확하게 설명할 수 있습니다. */}
            <input
              type="text"
              className="form-control"
              id="charge"
              name="charge"
              placeholder="예) 렌트비"
            ></input>
            {/* for 속성을 사용하여 연결하기: for 속성은 연결된 폼 요소의 id 속성과 일치해야 합니다. htmlFor는 html의 for 속성과 같은 역할*/}
          </div>
          <div className="form-group">
            <label htmlFor="amount"> 비용</label>
            <input
              type="number"
              className="form-control"
              id="amount"
              name="amount"
              placeholder="예) 100"
            ></input>
          </div>
        </div>
        <button type="submit" className="btn">
          제출
          <MdSend className="btn-icon" />
        </button>
      </form>
    );
  }
}

export default ExpenseForm;
