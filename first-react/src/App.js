import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div>
    <PersonCard
      firstName = {"Nandor"}
      lastName = {"The Relentless"}
      age = {760}
      hairColor = {"Brown"}
    />
    <PersonCard
      firstName = {"Laszlo"}
      lastName = {"Cravensworth"}
      age = {310}
      hairColor = {"Brown"}
    />
    <PersonCard
      firstName = {"Nadja"}
      lastName = {"Cof Antipaxos"}
      age = {500}
      hairColor = {"Black"}
    />
    <PersonCard
      firstName = {"Collin"}
      lastName = {"Robinson"}
      age = {101}
      hairColor = {"Bald"}
    />
    </div>
  );
}

export default App;
