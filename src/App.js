import { Component } from "react";
import "./App.css";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
class App extends Component {
  render() {
    return (
      <main className="main-container">
        <h1>예산 계산기</h1>

        <div
          style={{ width: "100%", backgroundColor: "white", padding: "1rem" }}
        >
          {/* expense form */}
          <ExpenseForm /> {/* 컴포넌트는 대문자로 작성해야 함 */}
        </div>
        <div
          style={{ width: "100%", backgroundColor: "white", padding: "1rem" }}
        >
          {/* expense list */}
          <ExpenseList />
        </div>

        <div
          style={{ display: "flex", justifyContent: "end", marginTop: "1rem" }}
        >
          <p style={{ fontSize: "2rem" }}>
            총지출:
            <span>원</span>
          </p>
        </div>
      </main>
    );
  }
}

export default App;
