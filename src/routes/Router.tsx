import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Login from '../components/login/Login';
import MyPage from '../components/mypage/MyPage';
import AllUser from '../components/alluser/AllUser';
import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue } from "recoil";
import { userState } from "../recoil/Atom";

const App = () => {
  const [logged, setLogged] = useRecoilState(userState)

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/mypage" element={<MyPage/>} />
          <Route path="/alluser" element={<AllUser/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
