import Home from "./home";
import Navbar from "./navbar";
const App = () => {

  const name = "khaleed";
  const age = 30;
  const activities = [1,3,4];
  const canva =  'https://canva.com';
  const person = {
    name: "lola",
    age: 13,
    occupation: "developer"
  }

  return ( 
    <div className="header">
    {/* <h1>my name is emmm {name}</h1>
    <h1>my name is emmm {age}</h1>
    <h1>{activities}</h1>
    <h1>{person.occupation}</h1>
    <a href={canva}> link to canva</a> */}
    <Navbar/>
    <Home />
    

    </div>
   );
}
 
export default App;
