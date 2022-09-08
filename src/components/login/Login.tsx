import axios from "axios";
import React, { useState, useEffect, Component } from "react";
import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue } from "recoil";
import { userState } from "../../recoil/Atom";
// class Login extends Component {
//   //<클래스형>
//   state = {
//     Id: '',
//     Pw: '',
//   }

//   handleId = (e:React.ChangeEvent<HTMLInputElement>) =>
//     this.setState(preState => ({
//       Id : e.target.value,
//   }));

//   handlePw = (e:React.ChangeEvent<HTMLInputElement>) =>
//     this.setState(preState => ({
//       Pw : e.target.value,
//   }));

//   onClickLogin = () => {
//     //로컬 스토리지 저장
//     //localStorage.setItem('user',JSON.stringify({Id:this.state.Id, Pw:this.state.Pw}));
//     //window.sessionStorage.setItem('user',JSON.stringify({Id:this.state.Id, Pw:this.state.Pw}));
//     //window.sessionStorage.setItem('id',this.state.Id);
//     //window.sessionStorage.setItem('pw',this.state.Pw);
//     axios.post('http://192.168.204.158:3000/api/user/auth',{
//       username: this.state.Id,
//       password: this.state.Pw,
//     })
//     .then((response) => {
//       localStorage.setItem('user_token',response.data);
//       console.log('성공');
//       document.location.href = '/mypage';
//     })
//     .catch(() => {
//       alert('사용자 다시 확인');
//     })
//   }

//   render(){
//     //<함수형> ID,PW 한번에 가능 -> 클래스형에서는 이렇게 따로 밖에 못하나?
//     // const [inputUser, setInputUser] = useState({
//     //   Id: '',
//     //   Pw: '',
//     // });
//     // const {Id, Pw} = this.state;

//     // const handleUser =(e:React.ChangeEvent<HTMLInputElement>) => {
//     //   const {value, name} = e.target;
//     //   setInputUser({
//     //     ...this.inputUser,
//     //     [name] : value
//     //   })
//     // }

//     return (
//       <div style={{
//           display: 'flex', justifyContent:'center', alignItems:'center',
//           width: '100%', height: '100vh'
//       }}>
//         <div>
//           <h2>Login</h2><hr/>
//           <label htmlFor='input_id'>ID : </label>
//           <input type='text' name='Id' value={this.state.Id} onChange={this.handleId} required/>&nbsp;&nbsp;

//           <label htmlFor='input_pw'>PW : </label>
//           <input type='password' name='Pw' value={this.state.Pw} onChange={this.handlePw} />
//           <hr/>
//           <button type='button' onClick={this.onClickLogin}>Login</button>
//           <hr/>
//           <b>Recoil상태 확인</b>
//           Login:
//         </div>
//       </div>
//     )
//   }
// }
// export default Login;

const Login = () => {

  const [inputUser, setInputUser] = useState({
    Id: '',
    Pw: '',
  });

  const {Id, Pw} = inputUser;

  const loginCheck = useRecoilValue(userState);

  const handleUser =(e:React.ChangeEvent<HTMLInputElement>) => {
    const {value, name} = e.target;
    setInputUser({
      ...inputUser,
      [name] : value
    })
  }

  const onClickLogin = () => {
    //로컬 스토리지 저장
    //localStorage.setItem('user',JSON.stringify({Id:this.state.Id, Pw:this.state.Pw}));
    //window.sessionStorage.setItem('user',JSON.stringify({Id:this.state.Id, Pw:this.state.Pw}));
    //window.sessionStorage.setItem('id',this.state.Id);
    //window.sessionStorage.setItem('pw',this.state.Pw);
    axios.post('http://192.168.204.158:3000/api/user/auth',{
      username: inputUser.Id,
      password: inputUser.Pw,
    })
    .then((response) => {
      localStorage.setItem('user_token',response.data);
      console.log('성공');
      if(loginCheck){
        document.location.href = '/mypage';
      } else {
        document.location.href = '/alluser';
      }
    })
    .catch(() => {
      //alert('사용자 다시 확인');
    })
  }

  return (
    <div style={{
        display: 'flex', justifyContent:'center', alignItems:'center',
        width: '100%', height: '100vh'
    }}>
      <div>
        <h2>Login</h2><hr/>
        <label htmlFor='input_id'>ID : </label>
        <input type='text' name='Id' value={Id} onChange={handleUser} required/>&nbsp;&nbsp;

        <label htmlFor='input_pw'>PW : </label>
        <input type='password' name='Pw' value={Pw} onChange={handleUser} />
        <hr/>
        <button type='button' onClick={onClickLogin}>Login</button>
        <hr/>
        <b>Recoil상태 확인 : </b>
        {
          loginCheck
          ? <b>로그인 상태</b>
          : <b>로그아웃 상태</b>
        }
      </div>
    </div>
  )
}
export default Login;
