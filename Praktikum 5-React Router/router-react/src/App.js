import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams
} from "react-router-dom";

export default function AuthExample() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/public">Home</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>
        <hr />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="topics/*" element={<Topics />} >
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function Topics() {
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={"/topics/Sate, Nasi Goreng"}>Kuliner</Link>
        </li>
        <li>
          <Link to={"/topics/Wisata alam, Museum"}>Travelling</Link>
        </li>
        <li>
          <Link to={"/topics/Ibis, JW Marriot"}>Review Hotel</Link>
        </li>
      </ul>

      <Routes>
        <Route path="/" element={<h3>Please select a topic.</h3>} />
        <Route path=":id" element={<Topic />} />
      </Routes>
    </div>
  );
}

function Topic() {
  let { id } = useParams();

  return (
    <div>
      <h3>{id}</h3>
    </div>
  )
}