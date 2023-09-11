import { SideBar } from "./components/SideBar";
import { Main } from "./components/Main";
import { Activity } from "./components/Activity";



function App() {
  return (
    <div className="App">
      <div className=" flex justify-center w-full items-center bg-[#0a0325] h-full ">
        <div className="flex justify-between w-[100%] px-5 py-4">
        
<SideBar/>
<Main/>
<Activity/>


        </div>

      </div>
     
    </div>
  );
}

export default App;
