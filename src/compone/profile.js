
function Profile() {
  return (
    <>
    
    <div className="Profile">
  
      <header>

     
        <div className="img-container" >
            <img className="avatar" src="https://scontent.fbmv1-1.fna.fbcdn.net/v/t39.30808-6/336305174_933078281161080_589548041170849205_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEgVcA3k6vQYNd8gs5pfucAxaVkH6kySynFpWQfqTJLKRW2WQV7JMSRQNwAjTvfJY5eU8Ubt7QqsOkQmX5wIGC9&_nc_ohc=KOHkHfSSlMwAX9iqk91&_nc_ht=scontent.fbmv1-1.fna&oh=00_AfCoBVwTUSRh7AaTXAvlXSuoWDdZb40W0q6alflZcXa3Ww&oe=65ED7936"></img>
        </div>
        <div className="title-container">
            <h1>Lý Văn Hợp</h1>
            <h2>Lập trinh web</h2>
            
        </div>
        </header>
        <div className="container">
           <div className="sider">
            <div className="sider-content">

              <h1 className="tag-fill">THÔNG TIN</h1>
              <div className="tag-content">
                <ul>
                  <li><i class="fa-solid fa-phone"></i>:0332657251</li>
                  <li><i class="fa-regular fa-envelope"></i>:lyhop2004@gmail.comm</li>
                  <li><i class="fa-solid fa-house"></i>:331 trần phú,BMT</li>
                  <li><i class="fa-solid fa-cake-candles"></i>:07/02/2004</li>
                  <li><i class="fa-solid fa-person"></i>:Nam</li>
                </ul>

              </div>
              
            </div>

            
              <h1 className="tag-fill">HỌC VẤN</h1>
              <div className="tag-content" >
                <div className="tag-container">
                  <p>Tiếng anh</p>
                  <div className="progress" style={{ width: '80px', height: '10px', backgroundColor: 'red' }}></div>

                </div>
                <div className="tag-container">
                  <p>Tiếng anh</p>
                  <div className="progress" style={{ width: '80px', height: '10px', backgroundColor: 'red' }}></div>

                </div>
                <div className="tag-container">
                  <p>Tiếng anh</p>
                  <div className="progress" style={{ width: '80px', height: '10px', backgroundColor: 'red' }}></div>

                </div>
              
            </div>
            <div className="sider-content">
            <h1 className="tag-fill">CHỨNG CHỈ</h1>
            <div className="tag-content">
            <p>Bạn thắc mắc không biết Id root ở đâu?
               Bạn để ý trong project mình có 1 thư mục
                là public, bạn mở nó ra thấy 1 file index.html
                 mở nó ra và bạn sẽ thấy 1 div với id root như hình</p>
            </div>
            
            </div>
           </div>

        

        <div className="content">
          <div >
            <h1 className="tag">Gioi thieu</h1>
            <p>NPM sẽ tự động tạo cho ta 1 project tên là my-app và install các module
               và lib cần thiết cho chúng ta.NPM sẽ tự động tạo cho ta 1 project tên là
                my-app và install các module và lib cần thiết cho chúng ta.</p>
          </div>

          <div >
            <h1 className="tag">King nghiệm làm việc</h1>
            <ul>
              <li>
                <div className="tabbar-title">
                  <p>Viết CV</p>
                  <p>02/2004- 02/2024</p>
                </div>
                <h3>Quản lý sản phẩm</h3>
                <p>Vào thư mục src xóa hết các file trong đây,
                   lưu ý không xóa cả thư src mà chỉ xóa các file ở trong đó.</p>
                   <ul>
                    <li>Vào thư mục src xóa hết các file trong đây,</li>
                    <li>Vào thư mục src xóa hết các file trong đây,</li>
                    <li>Vào thư mục src xóa hết các file trong đây,</li>
                    <li>Vào thư mục src xóa hết các file trong đây,</li>
                   </ul>
                
              </li>

            </ul>
          </div>

          <div >
            <h1 className="tag">Các kỹ năng </h1>
            <ul>
              <li>
                <div className="tabbar-title">
                  <p>Viết CV</p>
                  <p>02/2004- 02/2024</p>
                </div>
                <h3>Quản lý sản phẩm</h3>
                <p>Vào thư mục src xóa hết các file trong đây,
                   lưu ý không xóa cả thư src mà chỉ xóa các file ở trong đó.</p>
                   <ul>
                    <li>Vào thư mục src xóa hết các file trong đây,</li>
                    <li>Vào thư mục src xóa hết các file trong đây,</li>
                    <li>Vào thư mục src xóa hết các file trong đây,</li>
                    <li>Vào thư mục src xóa hết các file trong đây,</li>
                   </ul>
                
              </li>

            </ul>
          </div>

        </div>
        </div>
    </div>
    {/* <div className="App">
            <header className="App-header">
                <div className="aa">
                    <img className="hinh1" src="https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-6/336305174_933078281161080_589548041170849205_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEgVcA3k6vQYNd8gs5pfucAxaVkH6kySynFpWQfqTJLKRW2WQV7JMSRQNwAjTvfJY5eU8Ubt7QqsOkQmX5wIGC9&_nc_ohc=KOHkHfSSlMwAX-0S5_v&_nc_ht=scontent.fdad3-1.fna&oh=00_AfD3OB18yyXc50XmEW1CgErmeguAPMNv7D9kF7g1jmz9sQ&oe=65ED7936" alt="Avatar" />

                    <div className="personal-info">
                        <h2>Lý Văn Hợp</h2>
                        <p><strong>Email:</strong> thanhppk02864@fpt.edu.vn</p>
                        <p><strong>Phone:</strong> 033-700-5962</p>
                        <p><strong>Address:</strong> 128 Hà Huy Tập, TP. Buôn Mê Thuột</p>
                    </div>
                    <div className="education">
                        <h3>Học vấn:</h3>
                        <ul>
                            <li>Degree: Chyên nghành thiết kế web</li>
                            <li>Institution: FPT polytecnich</li>
                            <li>Year: 2022-2025</li>
                        </ul>
                    </div>
                    <div className="education">
                    <h3>Skills</h3>
                        <ul>
                            <li>JavaScript (ES6+)</li>
                            <li>React.js</li>
                            <li>HTML5 & CSS3</li>
                            <li>Git</li>
                            <li>RESTful APIs</li>
                            <li>Agile Development</li>
                        </ul>
                    </div>
                    

                </div>


                <div className="thongtin">
                <h3>Mục tiêu nghề nghiệp:</h3>
                    <div className="experience">
                        <ul>
                            <li>Trở thành một Thiết kế Web Chuyên Nghiệp: Phát triển kỹ năng thiết kế web chuyên nghiệp bằng cách học về các nguyên tắc thiết kế, công nghệ web và công cụ thiết kế.</li>
                            <li>Tạo Ra Các Trải Nghiệm Người Dùng Tốt: Học cách thiết kế các trải nghiệm người dùng tốt bằng cách tập trung vào việc làm cho giao diện dễ sử dụng, trực quan và hấp dẫn.</li>
                            <li>Tương Tác với Khách Hàng: Phát triển kỹ năng giao tiếp và tương tác với khách hàng để hiểu và đáp ứng các yêu cầu và mong muốn của họ đối với dự án thiết kế web.</li>
                        </ul>
                    </div>
                    <div className="skills">
                        <h2>Skills</h2>
                        <ul>
                            <li>JavaScript (ES6+)</li>
                            <li>React.js</li>
                            <li>HTML5 & CSS3</li>
                            <li>Git</li>
                            <li>RESTful APIs</li>
                            <li>Agile Development</li>
                        </ul>
                    </div>
                    <div className="skills">
                        <h2>Skills</h2>
                        <ul>
                            <li>JavaScript (ES6+)</li>
                            <li>React.js</li>
                            <li>HTML5 & CSS3</li>
                            <li>Git</li>
                            <li>RESTful APIs</li>
                            <li>Agile Development</li>
                        </ul>
                    </div>
                    <div className="skills">
                        <h2>Skills</h2>
                        <ul>
                            <li>JavaScript (ES6+)</li>
                            <li>React.js</li>
                            <li>HTML5 & CSS3</li>
                            <li>Git</li>
                            <li>RESTful APIs</li>
                            <li>Agile Development</li>
                        </ul>
                    </div>
                    <div className="skills">
                        <h2>Skills</h2>
                        <ul>
                            <li>JavaScript (ES6+)</li>
                            <li>React.js</li>
                            <li>HTML5 & CSS3</li>
                            <li>Git</li>
                            <li>RESTful APIs</li>
                            <li>Agile Development</li>
                        </ul>
                    </div>


                </div>
            </header>

        </div> */}
    </>
  );
}

export default Profile;