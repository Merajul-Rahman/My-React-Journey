import './App.css'
import UserGreeting from './ConditionalRendering/UserGreeting.jsx';
import CSSModules  from './CSSModules/CSSModules.jsx'
import Person from './PropsBaiscs/Person.jsx';
function App()
{
  const h2Style = {
    color: "Blue",
    'textAlign': "right",
    'fontSize': "1rem"
  }
  return (
    <>
      <h1>My First Component</h1>
      {/*External CSS*/}
      <h2 className="RandomClass">This is an example of external css from the App.CSS file</h2>
      <h2 style={h2Style}>This is an example of Inline CSS Using a const to store all the styling of this element</h2>
      <CSSModules/>
      
      <Person name="Merajul Rahman Shipon" age = {25} email ="shiponrbm@gmail.com" isStudent = {true}/>
      <Person name="Nusrat Zaman" age = {25} email ="nusrat@gmail.com" isStudent = {true}/>
      <Person name="Sourov" age = "27" email ="sourov@gmail.com" isStudent = {false}/>
      <Person name="Mehedi" age = {30} />
      <div style={{border:"1px solid black", margin:"5px", padding:"5px"}}>
        <h1 style={{ textAlign: "center"}}>Conditional Rendering</h1>
        <UserGreeting username='Shipon' isLoggedIn={true}/>
        <UserGreeting username='Shipon' isLoggedIn={false}/>
        <UserGreeting isLoggedIn={true}/>
      </div>
    </>
);
}
export default App