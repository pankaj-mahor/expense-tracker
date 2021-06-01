import ExpenseItem from "./ExpenseItem"
import './ExpenseItem.css'
const Expenses = () => {
        const expenses = [
        {
        title : 'Books',
        amount : 541 ,
        type : 'expt',
        fromacc: 'Dbs 5845',
        date : new Date(2021,3,22)
        },
        {
        title : 'Pens',
        amount : 20 ,
        type : 'expt',
        fromacc: 'Dbs 848',
        date : new Date(2020,3,12)
        },
        {
        title : 'Gity',
        amount : 5010 ,
        type : 'rent',
        fromacc: 'Paytm',
        date : new Date(2021,2,15)
        } ]

    return (
        <div className="lists">
            <ExpenseItem name={expenses[0].title} amount={expenses[0].amount} type={expenses[0].type} date={expenses[0].date}/>
            <ExpenseItem name={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date} type={expenses[0].type}/> 
            <ExpenseItem type={expenses[2].type} name={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date} /> 
        </div>
    );
}
 
export default Expenses;