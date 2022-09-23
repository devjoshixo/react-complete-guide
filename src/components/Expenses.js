import ExpenseItem from "./ExpenseItem";
import Card from "./Card";

import "./Expenses.css";

function Expenses(props) {
  let i = 0;
  return (
    <Card className="expenses">
      <ExpenseItem
        title={props.items[i].title}
        amount={props.items[i].amount}
        date={props.items[i++].date}
      />
      <ExpenseItem
        title={props.items[i].title}
        amount={props.items[i].amount}
        date={props.items[i++].date}
      />
      <ExpenseItem
        title={props.items[i].title}
        amount={props.items[i].amount}
        date={props.items[i++].date}
      />
      <ExpenseItem
        title={props.items[i].title}
        amount={props.items[i].amount}
        date={props.items[i++].date}
      />
    </Card>
  );
}

export default Expenses;
