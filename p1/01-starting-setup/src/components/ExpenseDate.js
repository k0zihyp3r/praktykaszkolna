import './ExpenseDate.css';

function ExpenseDate(props){
    const month = props.date.toLocaleString('pl-PL',{month: 'long'});
    const day = props.date.toLocaleString('pl-PL',{day: '2-digit'});
    const year = props.date.getFullYear();
return(
        <div className='expense-date'>
            <div className='expense-date__month'> {month} </div>
            <div className='expense-date__day'> {year} </div>
            <div className='expense-date__year'> {day} </div>
       </div>
);
}
export default ExpenseDate;