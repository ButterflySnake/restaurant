<template>
    <div>
        <div class="order_section">
            <ul class="order_list">
              <li v-for="(item,index) in cartinfo" :key='index'>
                <div class="order_pic">
                  <img  :src="item.image">
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
                
              </li> 
            </ul>
            
          </div>
          <button class="order_btn fas fa-shopping-cart" @click="clearCart">清空购物车</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
               cartinfo:[{
                "name": "漂亮的香肠",
                "englishname": "Handsome Sausage",
                "url": ("/images/product_2.png"),
                "price": "800"
                },],
               isEmpty:false
            }
        },
        created (){
            this.getcartinfo()
        },
        methods:{
            getcartinfo() {
                //判断localStorage里是否有购物车数据
                window.console.log(localStorage.cartinfo)
                if(localStorage.cartinfo){
                    //如果有数据，我们去除并赋值给cartinfo
                    window.console.log(111)
                    this.cartinfo = JSON.parse(localStorage.cartinfo)
                }
                //打印出来看看效果
                window.console.log('this.cartinfo:'+ JSON.stringify(this.cartinfo))
                this.isEmpty = this.cartinfo.length>0 ? true : false
             },
             clearCart(){
                 localStorage.removeItem('cartinfo')
                 this.cartinfo=[]
             }   
        }
    }
</script>

<style scoped>
.order_section{
    display: flex;
}
.order_list {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
}
.order_list li{
    position: relative;
    width: 20%;
    height: 200px;
    margin: 0% 0.5%;
    padding: 2% 1%;
    text-align: center;
    box-shadow: 0 0 1px 2px #EEEEEE;
}
.order_list li img {
    height: 150px;
    max-width: 100%;
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
</style>