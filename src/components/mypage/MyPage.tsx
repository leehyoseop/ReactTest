import { Component, useEffect, useState } from "react";
import React from "react";
import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue } from "recoil";
import { userState } from "../../recoil/Atom";
// class Mypage extends Component {

//   state = {
//     logged: false,
//     onLogin: this.onLogin,
//     onLogout: this.onLogout,
//   };

//   onLogin() {
//     this.setState({
//       logged: true,
//     })
//   };

//   onLogout() {
//     this.setState({
//       logged: false
//     })
//   };

//   //useEffect와 비슷? componentDidUpdate는 언제?
//   componentDidMount = () => {
//     const id = window.sessionStorage.getItem('id');
//     //console.log('logged',this.state.logged)
//     if(id) {
//       this.onLogin();
//     }
//     else {
//       this.onLogout();
//     }
//   };

//   resetSession() {
//     window.sessionStorage.clear();
//   };

//   render(){
//     return(
//       <div style={{
//         display: 'flex', justifyContent:'center', alignItems:'',
//         width: '100%', height: '100vh'
//       }}>
//         <div>
//           <h2>마이 페이지</h2>
//           <hr/>
//           {
//             this.state.logged
//             ? <b>로그인 상태</b>
//             : <b>로그아웃 상태</b>
//           }
//           <hr/>&nbsp;&nbsp;&nbsp;
//           <button type='button' onClick={this.resetSession}>Session clear</button>
//         </div>
//       </div>
//     )
//   }
// }

const Mypage = () => {
  // const [checklog, setChecklog] = useState({
  //   logged: false,
  // })
  const [logged, setLogged] = useRecoilState(userState)
  //const check = useRecoilValue(userState);

  const resetSession = () => {
    localStorage.clear();
  };

  useEffect(()=> {
    //token값으로 체크
    const userToken = localStorage.getItem('user_token');
    //console.log('logged',this.state.logged)
    if(userToken) {
      setLogged(!logged)
    }
    else {
      setLogged(logged)
    }
  //아래 주석 공부하기.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return(
    <div style={{
      display: 'flex', justifyContent:'center', alignItems:'',
      width: '100%', height: '100vh'
    }}>
      <div>
        <h2>마이 페이지</h2>
        <hr/>
        {
          logged
          ? <b>로그인 상태</b>
          : <b>로그아웃 상태</b>
        }
        <hr/>&nbsp;&nbsp;&nbsp;
        <button type='button' onClick={resetSession}>localStorage clear</button>
      </div>
    </div>
  )
}
export default Mypage;
