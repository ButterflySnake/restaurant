<template>
    <div>
       <section class="header">
           <div class="wrap">
          <div class="topbar">
            <h1 class="logo"><a href="#">六角西餐廳</a></h1>
            <a class="openlist" href="#">
                <div class="underline line1"></div>
                <div class="underline line2"></div>
                <div class="underline line3"></div>
            </a>
            <ul class="toplist">
              <li><a href="#charactor"><router-link to="/">首页</router-link></a></li>
              <li><a href="#chef"><router-link to="/cart">订购</router-link></a></li>
              <li><a href=""><router-link to="/login">登录</router-link></a></li>
              <li><a href="" @click="loginOut"><router-link to="/login">注销</router-link></a></li>
                
              <div class="clearfix"></div>
            </ul>
            <div class="clearfix"></div>
          </div>
          </div>
          <div class="banner">
            <div class="bannerInfo">
                <p class="infoTitle">咬一口就無發忘懷的漢堡</p>
                <p class="infoContent">七夕絕對無法錯過的好滋味</p>
                <p class="infoContent">六角大漢堡</p>
            </div>
          </div> 
       </section>

    


    </div>
</template>

<script>
    export default {
        methods:{
            loginOut(){
                // 注销后 清除session信息 ，并返回登录页
                window.sessionStorage.removeItem('data');
                this.common.startHacking(this, 'success', '注销成功！');
                this.$router.push('/index'); 
                }
        }
    }
</script>

<style scoped>
    
/*header start*/
.header .topbar{
    background: #000;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 999
}

.topbar .toplist{
    float: right;
    transition: all 1s;
}

.toplist li{
    float: left;
}
.toplist li a{
    box-sizing: border-box;
    display: block;
    text-align: center;
    color: #fff;
    text-decoration: none;
    width: 100px;
    padding:15px;
    background: #000;
    border-bottom: 2px solid rgba(0,0,0,0.75);
    transition: all 0.3s;
}
.toplist li a:hover{
    background: #757575;
    border-color: #fff;
}
.topbar .logo{
    float: left;
}
.topbar .logo a{
    display: block;
    width: 150px;
    height: 30px;
    padding:20px 0px 0px 20px;
    background: url('../../public/images/logo_w@svg.svg') no-repeat center;
    text-indent: 101%;
    overflow: hidden;
    white-space: nowrap;
}
/*隱藏的漢堡選單*/
.topbar .openlist,.openlist{
    display: none;
    float: right;
    width: 40px;
    height: 40px;
    margin-right: 10px;
}
.openlist .underline{
    width: 80%;
    border: 1px solid #03A9F4;
    margin: 10px 0;
    transition: all 0.8s;
}
.header .banner{
    display: flex;
    align-items: center;
    justify-content: center;
    background: url('../../public/images/header_desktop.png') no-repeat center;
    height: 420px;
    background-color: #ccc;
}
.banner .bannerInfo{
    color: #fff;
    text-align: center;
    padding: 20px;
    background: rgba(0,0,0,0.35);
}
.bannerInfo .infoTitle{
    font-size: 28px;
    margin: 20px;
}
.bannerInfo .infoContent{
    line-height: 1.5em;
}
@media (max-width:768px){
    .topbar .toplist{
        margin: 0 auto;
    }
    .topbar .toplist,.topbar .logo{
        float: none;
    }
    .topbar .toplist li{
        width: 20%;
    }
}
@media (max-width:767px){
    .wrap{
        width: 100%;
    }
    .header .banner{
        background: url('../../public/images/Bitmap.png') no-repeat;
    }
    /*隱藏 toplist*/
    .topbar .toplist{
        height: 0;
        overflow: hidden;
        position: absolute;
        top:50px;
        left:0;
        right: 0;
    }
    .topbar .toplist li{
       float: none;
       width: 100%;
    }
    .toplist li a{
        width: 100%;
        text-align: center;
        font-size: 20px;
        border-color: #F5F5F5;
    }
    .topbar .logo{
        float: left;
    }
    /*顯示漢堡清單*/
    .topbar .openlist{
        display: block;
    }
    /*漢堡清單的特效*/
    .open .openlist .line1{
        transform: translate(9.5px,9px) rotate(420deg);
    }
    .open .openlist .line2{
        transform: translate(-7px,-3px) rotate(-420deg);
    }
    .open .openlist .line3{
        transform: translate(1px,-0.5px) rotate(360deg);
    }
    /*開啟toplist*/
    .open .topbar .toplist{
        height: auto;
    }
}
/*header end*/



</style>