import Navbar from "./components/Navbar";
import { Youtube } from 'iconsax-react';


function App() {
  return (
    <>
      <Navbar />
      <div className="w-full flex flex-col">
        <div className="wrapper">
          <div className="video-player">
            <Youtube size="128" color="red" variant="Bold" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
