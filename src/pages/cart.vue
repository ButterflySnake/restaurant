<template>
    <div>
       <top-bar></top-bar>
       <div class="wrap">
       <div class="purchase_content">
        <div class="aside">
          <a class="openlist" href="#">
              <div class="underline line1"></div>
              <div class="underline line2"></div>
              <div class="underline line3"></div>
          </a>
          <h3><img src="../../public/images/leaf-solid.svg">線上訂購美食</h3>
          <div class="clearfix"></div>
          <ul class="foodlist">
            <li><a  @click='getall()'>全部 {{foodlist.length}}</a></li>
            <li><a  @click='getonly()'>只愛吃薯條 (18)</a></li>
            <li><a  @click='getfood()'>加熱就可食 (1)</a></li> 
            <li><a  @click='getfail()'>不敗漢堡系列 (4)</a></li>
          </ul>
        </div>
        <div class="section">
          <div class="topbar">
              <input type="search" v-model="inputValue"><i @click="NewItems" class="fas fa-search"></i>
            <ul>
                <router-link to='./shopping'>
              <li><a href="#">結帳去</a></li>
              <li class="car">
                <div class="shop_num">1</div>
              </li>
              </router-link>
            </ul>
          </div>
          <div class="clearfix"></div>
          <div class="order_section">
            <ul class="order_list">
              <li v-for="(item,index) in NewItems" :key='index'>
                <div class="order_pic">
                  <img  :src="item.url">
                  <i class="far fa-heart"></i>
                  <div class="ribbon_box">
                      <div class="ribbon">超值美食</div>
                  </div>
                </div>
                <h3>
                  <p class="order_name">{{item.name}}</p>
                  <p>{{item.englishname}}</p>
                </h3>
                <hr>
                <p class="price">${{item.price}}</p>
                <button class="order_btn fas fa-shopping-cart" @click="addGoodsToCart(index)">加入購物車</button>
              </li> 
            </ul>
          </div>
        </div>
      </div>
       </div>
        <Footer></Footer>
    </div>
</template>

<script>
import axios from 'axios'
import topBar from '../components/topBar'
import Footer from '../components/footer1'
    export default {
       components:{
           topBar,
           Footer
       },
       created(){
           this.getall()
       },
       methods:{
           
           getall(){
               axios({
                   url:'https://www.easy-mock.com/mock/5d66483399693943ec709839/example',
                   method:'get',
               })
               .then(response=>{
                   
                    this.foodlist = response.data.data
                        // window.console.log(this.foodlist)
               })
               
           },
          addGoodsToCart(index){
            //去除购物车内的商品数据
            let cartinfo = localStorage.cartinfo ? JSON.parse(localStorage.cartinfo) : []
            // let isHaveGoods = cartinfo.find(cart=>cart.name == this.name)
            // window.console.log(isHaveGoods)
          
                //没有商品直接添加到数据中
                //重新组成添加到购物车的信息
                let newGoodsInfo={
                    name:this.foodlist[index].name,
                    price:this.foodlist[index].price,
                    image:this.foodlist[index].url,
                }
                
                 cartinfo.push(newGoodsInfo)
                 window.console.log(newGoodsInfo)
                 localStorage.cartinfo=JSON.stringify(cartinfo)
          
           
    }
       },
    computed:{
        NewItems() {

            var _this = this;

            var NewItems = [];

            this.foodlist.map(function(item) {

                if (item.name.search(_this.inputValue) != -1) {

                NewItems.push(item);

                }

         })
    //    _this.foodlist = NewItems;
       return NewItems
         },
    },
       
       data() {
           return {
               inputValue:'',
               newGoodsInfo:[],
               foodlist: []                 
          }
       },
         
    }
    
</script>

<style scoped>
    .purchase_content{
    display: flex;
    justify-content: center;
}
.purchase_content .aside{
    width: 20%;
    margin: 1%;
}
.aside h3{
    font-size: 20px;
    padding: 10px;
}
.aside h3 img{
    width: 30px;
    height: 30px;
    margin-right: 10px;
}
.aside .foodlist li{
    margin-bottom: 10px;
}
.aside .foodlist a{
    display: block;
    text-decoration: none;
    color: #3D1101;
    padding: 10px;
    border-bottom: 1px solid #3D1101;
    transition: all 0.3s;
}
.aside .foodlist a:hover{
    background: #3D1101;
    color: #fff;
}
.purchase_content .section{
    width: 75%;
    margin: 1%;
}
.section .topbar{
    padding:10px;
}
.section .topbar input{
    width: 60%;
    padding: 5px;
}
.section .topbar i{
    color: #fff;
    background: #3D1101;
    margin-left: 1px;
    padding: 7px;
    position: relative;
    top:15px;
    background: url('../../public/images/搜索.svg') no-repeat;
    background-size: 100%;
    display: inline-block;
    width: 30px;
    height: 30px;
    cursor: pointer;
}
.section .topbar ul{
  float: right;
}
.section .topbar ul li{
    float: left;
    border-right:1px solid #3D1101;
    padding: 5px 10px;
}
.section .topbar ul li a{
    color: #3D1101;
    text-decoration: none;
}

.section .topbar .car{
    background: url('../../public/images/shopping-cart-solid.svg') no-repeat;
    width: 30px;
    height: 30px;
    border: #fff;
    margin-left: 10px;
    vertical-align: baseline;
    cursor: pointer;
    padding: 0;
    position: relative;
}
.topbar .car .shop_num{
    font-size: 12px;
    text-align: center;
    color: #fff;
    width: 14px;
    height: 14px;
    padding: 1px;
    border-radius:50px; 
    background: #F56C23;
    position: absolute;
    top:-2px;
    right: -5px;
}
.section .order_section{
    display: flex;
}
.order_list {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
}
.order_list li{
    position: relative;
    width: 30.3333%;
    margin: 2% 0.5%;
    padding: 2% 1%;
    text-align: center;
    box-shadow: 0 0 1px 2px #EEEEEE;
}
@media(max-width:768px){
    /*重直排列*/
    .wrap .purchase_content{
        flex-direction: column;
    }
    /*變更寬度*/
    .purchase_content  .aside,.purchase_content .section{       
        width: 100%;
        margin: 0%;
    }
    .aside .foodlist li{
        text-align: center;
        float: left;
        margin: 10px;
        width: 22%;
    }
    .order_list{
        justify-content: space-around;
    }
    .order_list li{
        width: 46%;
    }
}
@media(max-width:767px){
    .purchase_content .aside{
        position: relative;
    }
    .aside .openlist{
        display: block;
        float: left;
        margin: 10px;
    }
    .order_list li{
        width: 97%;
    }
    .aside h3{
        float: left;
        margin-top: 10px;
    }
    .aside h3 img{
        display: none;
    }
    .aside .foodlist{
        position: absolute;
        top:62px;
        width: 100%;
        z-index: 10;
        height: 0;
        overflow: hidden;
        background: #E0E0E0;
        transition: all 0.5s;
    }
    .aside .foodlist li{
        float: none;
        width: 95%;    
    }
    /*打開foodlist*/
    .open .foodlist{
       height: auto;
    }
    .open .openlist .line1{
        transform: translate(9.5px,9px) rotate(420deg);
    }
    .open .openlist .line2{
        transform: translate(-7px,-3px) rotate(-420deg);
    }
    .open .openlist .line3{
        transform: translate(1px,-0.5px) rotate(360deg);
    }
}
@media(max-width:320px){
    .section .topbar input{
        width: 85%;
    }
    .section .topbar ul{
        margin: 10px;
    }
}
.order_list .order_pic{
    position: relative;
}
.order_pic i{
    font-size: 20px;
    position: absolute;
    top: 0;
    left: 0;
    color: #fff;
    padding: 5px;
}
.order_pic img{
    max-width: 100%;
    height: 150px;
}
/*產品清單右上的緞帶設計*/
.order_pic .ribbon_box{
    position: absolute;
    top:-20px;
    right: -10px;
    width: 100px;
    height: 100px;
    margin: 5px;
    text-align: center;
    overflow: hidden;
}
.order_pic .ribbon{
    position: relative;
    top:20px;
    right:2px;
    width: 120%;
    text-align: center;
    padding: 5px;
    z-index: 9;
    background: #69F0AE;
    transform: rotate(45deg);
}
/*產品欄文字設計*/
.order_list h3{
    padding: 10px;
}
.order_list p{
    font-size: 12px;
}
.order_list .order_name{
    font-size: 20px;
}
.order_list hr{
    width: 80px;
}
.order_list .price{
    font-size: 20px;
    margin: 20px;
}
/*加入購物車按紐*/
.order_list .order_btn{
    color: #F56C23;
    border: 1px solid #F56C23;
    width: 90%;
    margin: 0 auto;
    background: none;
    padding: 10px 5px;
    cursor: pointer;
}
.order_list .order_btn:hover{
    color: #00E676;
    border-color:#00E676; 
}

</style>