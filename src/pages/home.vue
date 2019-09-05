<template>
    <div>
        <top-bar></top-bar>
    <section>
        <div class="content">
        <div class="charactor" id="charactor">
            <div class="wrap">
          <div class="char_title">
            <div>
              <p>客人總是在詢問</p>
              <div class="line"><div></div><div></div></div>
              <p>這麼好吃的秘訣是什麼</p>
            </div>         
          </div>
          <ul class="feature">
            <li>
              <img src="../../public/images/feature_1.png">
              <h4>台灣本土蔬菜</h4>
              <p>In hac habitasse platea dictumst. Vivamus adipiscing fermentum quam volutpat aliquam. Integer et elit eget elit facilisis tristique. Nam vel iaculis mauris.</p>
            </li>
            <li>
              <img src="../../public/images/feature_2.png">
              <h4>專業米其林廚師</h4>
              <p>Sed ullamcorper tellus erat, non ultrices sem tincidunt euismod. Fusce rhoncus porttitor velit, eu bibendum nibh aliquet vel. Fusce lorem leo, vehicula at nibh quis, facilisis accumsan turpis.</p>
            </li>
            <li>
              <img src="../../public/images/feature_3.png">
              <h4>對於專業不能退讓</h4>
              <p>Fusce rhoncus porttitor velit, eu bibendum nibh aliquet vel. Fusce lorem leo, vehicula at nibh quis, facilisis accumsan turpis.</p>
            </li>
          </ul>
        </div>
        </div>
        <div class="chef" id="chef">
            <div class="wrap">
          <img src="../../public/images/main_chef_brown.png">
          <div class="chef_description">
            <h3>
              <p class="name">今日主廚：帕金森、梅在帕
              <br>
              <span>Tody Chef: Plum in Shock</span></p>
            </h3>            
            <p>
                Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros
                eget libero posuere vulputate. Etiam elit elit, elementum sed
                varius at, adipiscing vitae est. Sed nec felis pellentesque,
                lacinia dui sed, ultricies sapien.
              </p>
          </div>
          <div class="clearfix"></div>
        </div>
        </div>
       </div>
    </section>

    <section class="comment">
        <div class="wrap">
        <ul>
            <li>
              <p class="avator"><img src="../../public/images/avatar_1.png"><span>高雄一口吃</span></p>
              <p class="comment_description">自從吃了這家餐廳以後，我口水連續流了一個多月都沒停，下次不要再被我遇到，不然我一定連他們桌子都啃下去。</p>
              <p class='job_title'> -- 產品經理</p>
            </li>
            <li>
                <p class="avator"><img src="../../public/images/avatar_2.png"><span>廟口小霸王</span></p>
                <p class="comment_description">自從吃了這家餐廳以後，我口水連續流了一個多月都沒停，下次不要再被我遇到，不然我一定連他們桌子都啃下去。</p>
                <p class='job_title'> -- 金身道士</p>
            </li>
            <li>
                <p class="avator"><img src="../../public/images/avatar_3.png"><span>春天也來了</span></p>
                <p class="comment_description">自從吃了這家餐廳以後，我口水連續流了一個多月都沒停，下次不要再被我遇到，不然我一定連他們桌子都啃下去。</p>
                <p class='job_title'> -- 美麗萬分</p>
            </li>
          </ul>
          </div>
          <div class="clearfix"></div>
    </section>

    <section>
        
        <div class="map" id="map">
            <div class="wrap">
          <div class="map_title">
            <p>我們的位置不太夠坐
            <br>
            要不要先訂位呢？</p>
          </div>
          <div class="map_content">
            <img src="../../public/images/Map.png" class="location">
            <form class="m-reserve-form " action="">
              <label class="m-reserve-form_label" for="name">姓名</label>
              <input type="text" id="name" class="m-reserve-form_input" name="姓名" placeholder="六角講師吃尾牙">
              <label class="m-reserve-form_label" for="phone">電話</label>
              <input type="tel" id="phone" class="m-reserve-form_input" name="phone" placeholder="0912345678">
              <label class="m-reserve-form_label" for="email">信箱</label>
              <input type="email" id="email" class="m-reserve-form_input" name="email" placeholder="test@gmail.com">
              <label class="m-reserve-form_label" for="number">人數</label>
              <input type="number" id="number" class="m-reserve-form_input" name="人數" placeholder="1" min="1" max="50">
              <label class="m-reserve-form_label" for="vet">是否需要素食</label>
              <div class="m-reserve-form_radio">
                <input type="radio" name="vet" value="yes" id="vet-yes"><label for="vet-yes" class="m-reserve-form_radio">是</label>
                <input type="radio" name="vet" value="no" id="vet-no" checked=""><label for="vet-no" class="m-reserve-form_radio">否</label>
              </div>
              <div class="m-reserve-form_buttons">
                <button class="e-btn e-btn_fail">取消</button>
                <button class="e-btn e-btn_success">送出</button>
              </div>
            </form>
                      <div class="clearfix"></div>
                    </div>
           
            
          </div>
        </div>
       
    </section>

    <Footer></Footer>
    </div>
</template>

<script>
import topBar from '../components/topBar'
import Footer from '../components/footer1'
    export default {
       components:{
           topBar,
           Footer
       }
    }
</script>

<style scoped>
    /*index Content*/
.content{
    color: #3D1101;
}
.content .charactor{
    padding: 20px;
    background: #EFE9E7;
}
.charactor .char_title{
    max-width: 500px;
    margin: 0 auto;
    line-height: 1.5em;
    text-align: center;
}
.char_title .line{
    display: flex;
    justify-content: space-between;
}
.char_title .line div{
    width: 120px;
    border-bottom: 1px solid #3D1101;
}
.charactor .feature{
    display: flex;
    flex-wrap: wrap;
}
.feature li{
    max-width: 31.3333%;
    text-align: center;
    margin: 1%;
}
.feature h4{
    font-size: 18px;
    padding: 10px;
}
.feature p{
    text-align: left;
    line-height: 1.3em;
}
@media (max-width:767px){
    /*去除左右兩邊的線條*/
    .char_title .line div{
        display: none;
    }
    /*改成用border裝飾*/
    .charactor .char_title>div{
        border-bottom: 1px solid #000;
        margin-bottom: 10px;
    }
    .feature li{
        max-width: 98%;
    }
    .feature p{
        margin: 0 auto;
        width: 50%;
    }
}
/*index Content chef*/
.content .chef{
    max-width: 100%;
    background: #3D1101;
    text-align: center;
}
.chef img{
    float: left;
    max-width: 100%;
    margin-left: 10%;

}
.chef .chef_description{
    float: left;
    vertical-align: top;
    text-align: left;
    color: #fff;
    max-width: 400px;
    margin-left:30px; 
}

.chef_description h3{
    margin: 80px 0px 10px 0px;
}
.chef_description h3 span{
    font-size: 16px;
}
.chef_description .name{
    font-size: 23px;
    font-weight: 500;
}
.chef_description p{
    line-height: 2em;
    margin: 10px 15px 15px 20px;
}
@media (max-width:850px) and (min-width:767px){
    /*縮小主廚圖片*/
    .chef img{
        width: 373px;
        height: 420px;
    }
}
@media(max-width:767px){
    .chef img{
        float: none;
        width: 373px;
        height: 420px;
    }
    .chef .chef_description{
        float: none;
        margin: 0 auto;
        padding: 10px;
    }

}
/*index Content comment*/
.comment{
    background: #EFE9E7;
    padding: 50px;
}
.comment ul{
    margin: 0 auto;
}
.comment ul li{
    float: left;
    width: 31.3333%;
    margin: 1%;
    line-height: 1.3em;
}
.comment img{
    padding-right: 5px;
    vertical-align:middle;
}
.comment .avator span{
    font-size: 20px;
    padding-left: 5px;
}
.comment .comment_description{
    width: 75%;
    line-height: 2em;
    padding-left: 50px;
}
.comment .job_title{
    padding-top: 10px;
    text-align: right;
}
@media(max-width:767px){
    .comment ul li{
        float: none;
        width: 98%;  
        margin-top: 20px; 
    }
}
/*index Content map*/
.map{
    max-width: 100%;
    background: #FAFAFA 70%;
    padding: 20px;
}
.map .map_title{
    padding: 10px;
    text-align: center;
}
.map_title p{
    line-height: 1.5em;
    font-size: 24px;
}
.map .map_content{
    display: flex;
}
.map_content .map_form{
    width: 45%;
    margin: 20px;
}
.map_content .map_form label{
    text-align: left;
    padding: 10px 0px;
}
.map_content .map_form input{
    width: 100%;
}
.map_content .map_form .question input{
    width: auto;
    position: relative;
    bottom:2px;
    right:2px;
}
.question p{
    padding: 10px 0px;
}
.question .btn{
    margin-right:10px; 
    float: right;
}
.question .cancel{
    background: gray;
}
.question .confirm{
    background: #F56C23;
}
.question .cancel:hover,.question .confirm:hover{
    background: #00E676;
}
@media (max-width:768px){
    /*縮小地圖*/
    .map_content .location{ 
        width: 100%;
    }
}
@media (max-width:767px){
     /*換行*/
     .map .map_content{
        flex-wrap: wrap;
        align-items: baseline;
     }
     .map_content .location,.map_content .map_form{
        margin:0 auto;  
     }
     .map_content .map_form{
        width: 100%;
        padding: 10px;
     }
}
@media(max-width:480px){
    .question label{
        display: inline;
    }
}
@media (max-width:414px){
    .map_content .map_form label{
        display: inline;
    }
}

.m-reserve-form {
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    width: 100%;
    padding-left: 20px;
}
.m-reserve-form_label {
    margin-bottom: 20px;
    font-size: 13px;
}
.m-reserve-form_input{
    border: 1px solid #cccccc;
    border-radius: 0.1875rem;
    background-color: white;
    margin-bottom: 1.0625em;
    padding: 0.3125em 0.875em;
    width: 80%;
    height: 2em;
}
.m-reserve-form_radio{
    position: relative;
    padding-right: 3.75rem;
    cursor: pointer;
}
.m-reserve-form_buttons{
    margin-left:  15em;
}
.e-btn{
    display: inline-block;
    border-radius: 3px;
    background-color: #eee;
    padding: 0.375rem 1rem;
    color: white;
    text-align: center;
    cursor: pointer;
    margin-left: 6px;

}
.e-btn_fail{
    background: #a09e9e;
}
.e-btn_success{
    background: #ff5e45;
}

</style>