import './App.css';
import{useState} from 'react'
import './compone/profile.css';
import Profile from './compone/profile'
function App() {
  //khai báo state
const[ten,setTen]=useState('lý văn hợp')
const[sodt,setSDT]=useState('023342435545')
const[email,setEmail]=useState('lyhop2004@gmail.com')
const[diachi,setdiachi]=useState('331 tran phu')
const[ngayThang,setNgayThang]=useState('02/01/2004')
const[gioitinh,setgioitinh]=useState('nam')

//tạo sự kiện 
const ChangeValue=(e)=>{
  console.log(123);
}
const changeten = (event) => {
  setTen(event.target.value);
};
const changesodt = (event) => {
  setSDT(event.target.value);
};
const changeEmail = (event) => {
  setEmail(event.target.value);
};
const changediachi = (event) => {
  setdiachi(event.target.value);
};
const changeNgayThang = (event) => {
  setNgayThang(event.target.value);
};

const changegioitinh = (event) => {
  setgioitinh(event.target.value);
};
  return (
    // <div>
      
    // <Profile/>

    // </div>
    <div className="App">
      {/* <h2>hello văn hợp</h2>
      <div className="hinhanh">
      <img  src="https://hoanghamobile.com/tin-tuc/wp-content/uploads/2023/07/hinh-dep.jpg"></img>
      

      </div> */}
      
     <Profile ten={ten} sodt={sodt} email={email} diachi={diachi} ngayThang={ngayThang} gioitinh={gioitinh}/>
     <h1>Tạo form điền thông tin</h1>
    <form>
        <p>Họ và tên:</p>
        <input type="text" name="full_name" onChange={changeten}></input>
        <p>Số điện thoại:</p>
        <input type="text" name="sodt"onChange={changesodt} ></input>
        <p>Email:</p>
        <input type="email" name="email"onChange={changeEmail}></input>
        <p>Địa chỉ:</p>
        <input type="text" name="diachi"onChange={changediachi}></input>
        
       
        <p>Ngày tháng năm sinh:</p>
        <input type="date" name="dob"onChange={changeNgayThang}></input>
        <p>Gioi tinh:</p>
        <input type="text" name="gioitinh"onChange={changegioitinh}></input>
       
        {/* <input onClick={ChangeValue} type="submit" value="Submit">lưu</input> */}
    </form>
    </div>
   
    
    
    
  );
}

export default App;
