import Expenses from './components/Expenses'

function App() {
  const expenses =  [
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
    }
  ];
  
  return ( 
    <div className = "App" >
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
