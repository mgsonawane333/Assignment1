
import './App.css';


  
  const Card = (props) => {
    const CardName = 'Mayur';
    console.log(props);
    return (
        <div className= 'card_wrapper'
        >
          Card
          <h4>Name - {props.name}</h4> 
          <h4>Age - {props.age}</h4> 
        </div>
    ); 
  };


  const App = () => {
    return <div>
      <h1/> Here is an example component 
      <Card name='mayur' age ='22'/>
      <Card name='mayur' age ='22'/>
      <Card name='mayur' age ='22'/>
      <Card name='mayur' age ='22'/>

    </div>
  } 

export default App;
