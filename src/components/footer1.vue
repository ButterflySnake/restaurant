<template>
    <div>
        <section class="footer">
          <div class="wrap">
        <div class="left about">
          <h3>關於 六角西餐廳</h3>
          <p>Curabitur lobortis id lorem id bibndum. Ut id consectetur magna. Quisque volutpat augue enim, pulvinar lobortis nibh lacinia at. </p>
        </div>
        <div class="left contact">
          <h3>聯絡方式</h3>
          <ul>
            <li>高雄市中正五路到底</li>
            <li>+886 886 886</li>
            <li>service@hexschool.com</li>
          </ul>
        </div>
        <div class="link">
          <h1>六角西餐廳</h1>
          <p>
            <a href="#" class="facebook"><img src="../../public/images/fb.png"></a>
            <a href="#" class="twitter"><img src="../../public/images/twitter.png"></a>
            <a href="#" class="google"><img src="../../public/images/fb.png"></a>        
          </p>       
        </div>
         <div class="clearfix"></div>
        <p class="h-text-center">
              Copyright © 六角西餐廳 │
              <a href="https://hexschool.github.io/Rwd_sketch_export/" target="blank">設計稿</a>
              │
              <a href="https://chupainotebook.blogspot.com/" target="blank">竹白切版練習</a>
            </p>
        <div class="clearfix"></div>
        </div>
      </section>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style  scoped>
    /*footer start*/
.footer{
    color: #3D1101 ;
    padding: 30px 15px;
    background: #EFE9E7	;
}
.footer .left{
    width: 200px;
    float: left;
    margin-right: 20px;
}
.footer .left h3{
   font-size: 24px;
   padding-bottom: 10px;
}
.footer .contact ul{
   width: 210px;
   list-style: disc inside;
}
.footer .link{
    float: right;
}
.link h1{
    font-size: 42px;
    font-weight: bold;
    margin: 10px 20px;
}
.link p{
    margin-right:20px; 
}
.link a{
    display: block;
    float: right;
    width: 30px;
    height: 30px;
    margin-left: 20px;
}
@media (max-width:767px){   
    .footer .left{
        float: none;
        margin: 20px auto;
    }

}
.h-text-center {
  text-align: center;
  font-size: 12px;
}
.h-text-center a{
      text-decoration: none;
      color: #3d1101;
}
/*footer end*/
</style>