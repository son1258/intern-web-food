import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/css/index.css';
import router from './routes';
import {
  RouterProvider,
} from "react-router-dom";
import { RecoilRoot } from 'recoil';

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RecoilRoot>
    <App />
  </RecoilRoot>
);
