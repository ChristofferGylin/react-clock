import Clock from "./Clock";
import "./App.css";

function App() {
  console.log('Render app')
  return (
    <Clock city='Local Time' timeZone={undefined} />
  )

}

export default App;
