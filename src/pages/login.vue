<template>
    <div>
       <top-bar></top-bar>
       <div class="login_content">
           <div class="wrap_center">
        <div class="login">
          <div class="login_title">
              <h2>六角西餐廳</h2>
              <p>享受美食好味道</p>
          </div>
          <form class="pure-form pure-form-stacked login_form">
              <fieldset>
                  <p>Login</p>
                  <label for="email">Email</label>
                  <input id="email" type="email" placeholder="Email" v-model="userName">
          
                  <label for="password">Password</label>
                  <input id="password" type="password" placeholder="Password" v-model="passWord">
                  <a href="#">忘記密碼</a>
                  <br>
                  <button type="submit" class="pure-button pure-button-primary cancel">取消</button>
                  <button type="submit" class="pure-button pure-button-primary confirm" @click="login()">登入</button>
              </fieldset>
          </form>
        </div>
        </div>
      </div>
        <Footer></Footer>
    </div>
</template>

<script>
import topBar from '../components/topBar'
import Footer from '../components/footer1'
import axios from 'axios'
    export default {
       components:{
           topBar,
           Footer
       },
       data() {
           return {
                userName:'654253369@qq.com',
                passWord:'root'
           }
       },
       created(){
           this.login()
       },
       methods:{
           login(){
                // const aa = this;
                axios.get('https://www.easy-mock.com/mock/5d66483399693943ec709839/login').then(response=>{
                    var res =response.data.data,
                    len = res.length,
                    userNameArr= [],
                    passWordArr= [],
                    ses= window.sessionStorage; 
                    // 拿到所有的username
                    for(var i=0; i<len; i++){
                    userNameArr.push(res[i].username);
                    passWordArr.push(res[i].password);
                    }
                    // console.log(userNameArr, passWordArr);
                    if(userNameArr.indexOf(this.userName) === -1){
                    alert('账号不存在！');
                    }else{
                    var index = userNameArr.indexOf(this.userName);
                    if(passWordArr[index] === this.passWord){
                    // 把token放在sessionStorage中
                    ses.setItem('data', res[index].token);
                    alert("成功")
                    this.$router.push('/');
                    //验证成功进入首页
                    // this.startHacking ('登录成功！');
                    //跳转到首页
                    // alert("成功")
                    // console.log(this.$router);
                    }else{
                    window.console.log('密码错误！')
                    }
                    }
                }).catch(err=>{
                    window.console.log(err)
                })
                }
       }
    }
</script>

<style  scoped>
    /*login Content*/
.login_content{
    display: flex;
    color: #3D1101;
    background: #EFE9E7;
    justify-content: center;
}
.wrap_center{
    width: 1200px;
    margin: 0 auto;
    color: #3D1101;
    display: flex;
    justify-content: center;
}
.login_content .login{
    width: 40%;
}
.login h2{
  font-size: 32px;
  text-align: center;
  padding: 10px;
}
.login p{
    font-size: 18px;
    text-align: center;
}
.login .login_title{
    padding:40px;
}
.login .login_form{
    border-top: 2px solid #F56C23;
    margin: 20px;
    padding:20px;
    box-shadow: 0 0 2px 1px grey;
}
.login .login_form input{
    width: 100%;
    margin-bottom: 20px;
}
.login .login_form input[type='password']{
    margin-bottom: 0px;
}
.login_form a{
    display: inline-block;
    text-decoration: none;
    margin-top: 5px;
    margin-bottom: 20px; 
}
.login_form p{
    font-size: 24px;
    padding: 20px;
}
.login_form .cancel{
   float: left;
   background: gray;
}
.login_form .confirm{
    float: right;
    background: #F56C23;
}
.login_form .cancel:hover,.login_form .confirm:hover{
    background: #00E676;
}
.wrap .login_footer{
    margin: 0;
}
@media(max-width:768px){
    .login_content .login{
        width: 60%;
    }
}
@media(max-width:767px){
    .login_content .login{
        width:80%;
    }
}
@media(max-width:414px){
    .login_content .login{
        width: 90%;
    }
}
input {
    font-weight: 400;
    border: 1px solid #cccccc;
    background-color: white;
    width: 100%;
    height: 2rem
}
</style>
