import {useState} from  "react";



const Home = () => {
    const [age, setage] = useState(11);
   

    return ( 
        <div>
            <div>
                <div><h1>Lorem ipsum dolor sit amet </h1></div>
                <h1>My name is  </h1>
                <h1>My age is {age}!</h1>
                </div>
             <button
               type="button"  
               onClick={() => setage(16)}
             >Blue</button>
         

         <form action="">
            <div>
            <label htmlFor="" id="type">age </label><br />
            <input type="text"id="formGet" required/>
            </div>

            <div>
            <input type="text"id="formGet" required/>
            <label htmlFor="" id="type"> </label>$ git config --global user.name "John Doe"

            </div>

            <input type="text"id="formGet" required/>
            <label htmlFor="" id="type"> </label>
           
           
        
         </form>











        </div>
            
     );


     


}
 
export default Home;