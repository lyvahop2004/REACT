import './App.css';
import{useState} from 'react'
import './compone/profile.css';
import Profile from './compone/profile'
function App() {
  //khai báo state
  const [ten,setTen]= useState('lý văn hợp')
  return (
    // <div className="App">
    //   <h2>hello văn hợp</h2>
    //   <div className="hinhanh">
    //   <img  src="https://hoanghamobile.com/tin-tuc/wp-content/uploads/2023/07/hinh-dep.jpg"></img>
      

    //   </div>
    //   <h1>họ và tên:{ten}</h1>
    //  <Profile/>
    // </div>
    <Profile/>
  );
}

export default App;
