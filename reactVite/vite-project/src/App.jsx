import './App.css';
import ImageManipulation from './components/ImageManipulation';
// import UpdateDetails from './components/UpdateDetails';

function App() {
  return (
    <>
      <div style={{border:"2px solid black", width:"600px",height:"500px", margin:"20px", padding:"20px" , backgroundColor:"pink"}}>
        <ImageManipulation />
      </div>
    </>
  );
}

export default App;
