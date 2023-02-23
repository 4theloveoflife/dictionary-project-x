import logo from "./logobw.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        <img src={logo} className="App-logo img-fluid"
        alt="logo" />
      </header>
      <main>
        <Dictionary defaultKeyword="hope"  />
      </main>
      <footer
         className="App-footer">
          <small>
           Coded by {""} <a href="https://storied-horse-b21b8c.netlify.app/"
            target="_blank"
          rel="noreferrer">{""}
             Tiffany Walker 
         </a> {""}and is <a href="https://github.com/4theloveoflife/dictionary-project-x"
         target="_blank"
          rel="noreferrer"
        >open-sourced  </a> </small>
      </footer>
    </div>
    </div>
  );
}

