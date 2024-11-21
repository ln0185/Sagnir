import NavBar from "./assets/components/Navbar";
import imagePath from "./assets/resources/book dark mode.svg";
import "./index.css";
import "./output.css";
import { StoriesPage } from "./assets/pages/StoriesPage";

function App() {
  let items = ["Home", "Product", "Service"];
  return (
    <>
      <StoriesPage />

      <div>
        <NavBar
          brandName="My Brand"
          imageSrcPath={imagePath}
          navItems={items}
        />
      </div>
    </>
  );
}

export default App;
