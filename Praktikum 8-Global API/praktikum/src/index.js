import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { render } from '@testing-library/react';
import BlogPost from './container/BlogPost/BlogPost';


ReactDOM.render(
  <BlogPost />,
  document.getElementById('content')
);

reportWebVitals();
