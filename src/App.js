import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const useMousePosition = () => {
    const [mousePosition, setMousePosition] = useState({x: null, y: null});

    const updateMousePosition = ev => {
      setMousePosition({ x: ev.clientX, y: ev.clientY});
    };

    useEffect(() => {
      window.addEventListener("mousemove", updateMousePosition);

      return () => window.removeEventListener("mousemove", updateMousePosition);
    }, []);

    return mousePosition;
  };

  const {x,y} = useMousePosition();

  let vw = window.innerWidth;
  let vh = window.innerHeight;

  let style = {
    position: `fixed`,
    top: y,
    left: x,
    display: `block`,
    backgroundColor: `aqua`,
    width: `200px`,
    height: `200px`,
    borderRadius: `50%`,
    transform: `translate(-50%, -50%)`,
    cursor: `none`,
    transition: `background-color 2s ease, background 2s ease`,
  }



  if (x > (vw/2)) {
    style = {
      position: `fixed`,
      top: y,
      left: x,
      display: `block`,
      backgroundColor: `crimson`,
      width: `200px`,
      height: `200px`,
      borderRadius: `50%`,
      transform: `translate(-50%, -50%)`,
      cursor: `none`,
      transition: `background-color 2s ease`,
    }
  }

  if (y > (vh/2)) {
    if ((x > (vw/2)) && (y > (vh/2))) {
      style = {
        position: `fixed`,
        zIndex: `0`,
        top: y,
        left: x,
        display: `block`,
        backgroundColor: `Fuchsia`,
        width: `200px`,
        height: `200px`,
        borderRadius: `50%`,
        transform: `translate(-50%, -50%)`,
        cursor: `none`,
        transition: `background-color 2s ease`,
      }
    } else {
    style = {
      position: `fixed`,
      top: y,
      left: x,
      display: `block`,
      backgroundColor: `DarkKhaki`,
      width: `200px`,
      height: `200px`,
      borderRadius: `50%`,
      transform: `translate(-50%, -50%)`,
      cursor: `none`,
      transition: `background-color 2s ease`,
      }
    }
  }




  return (
    <div className="App">
      <div style={style}></div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Here's how to track mouse position in react:<br />
          <span class="small">I definitely just failed an interview because I didn't know how to do this lol.... never again</span>
        </p>
        <code>
          const useMousePosition = () =&gt; &#123; <span class="comment">// this is a modular component that you can 'export default function useMousePosition' on</span><br />
            const [mousePosition, setMousePosition] = useState(&#123;x: null, y: null&#125;); <span class="comment">// declare mousePosition and state hook editing</span><br />
            <br />
            const updateMousePosition = ev =&gt; &#123; <br />
              setMousePosition(&#123; x: ev.clientX, y: ev.clientY&#125;); <span class="comment">// uses State Hook to update mousePosition object </span><br />
            &#125; <br />
            <br />
            useEffect(() =&gt; &#123;<span class="comment">// code executes on component mounting, return executes on component unmounting</span><br />
               window.addEventListener("mousemove", updateMousePosition); <span class="comment">//place an event listener on the window that triggers our fancy component</span>
               <br />
                return () =&gt; window.removeEventListener("mousemove", updateMousePosition); <span class="comment">// code executes on component unmounting</span><br />
                &#125;, []); <span class="comment">// Callback an empty array idk why it just works.skyrim</span><br />
                <br />
            return mousePosition; <span class="comment">// et voila, enjoy your fancy new co-ordinates.</span><br />
          &#125;;<br />
        </code>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <a
          className="App-link"
          href="https://mackbowes.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Provided to the public by Mackenzie Bowes
        </a>
      </header>
    </div>
  );
}

export default App;
