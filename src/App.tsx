import Hello from './Components/Hello.tsx';
import NavBar from './Components/NavBar.tsx';


const App = () => {
  return (
    <div>
  <div>
    <NavBar fontSize="32px" fontSizeLogo="40px" color="white"logoColor="red" logoFont="Arial" backgroundColor='grey'/>
    </div>
    <div className="flex gap-4 items-center justify-center mt-10">
    <div className="border-2 ">
    <Hello name="SpongeBob" age={30} isStudent={true} />
    </div>
    <div className="border-2 ">
      <Hello name ="Patrick" age={29} isStudent ={false} />
    </div>
    <div className="border-2 ">
    <Hello name="Sandy" age={35} isStudent={true} />
    </div>
    <div className="border-2 ">
    <Hello name="Squidward" age={100} isStudent={false} />
    </div>
    </div>
    </div>
  );
};

export default App;