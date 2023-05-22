import ExpenseItem from "./ExpenseItem.js";
import './Expenses.css';
import Card from "./Card";

function Expenses(props){
    return<Card className="expenses">
      <ExpenseItem
       title={props.items[0].title}
       amount={props.items[0].amount}
       date={props.items[0].date}>
      </ExpenseItem>
      
      

    </Card>
}
export default Expenses;