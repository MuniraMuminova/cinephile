<template>
  <div class="footer">
    <div class="footer__info">
      <div class="footer__info-icon">
        <a href="#">
         <fa :icon="['fab', 'telegram-plane']" class="more__icon"/>
       </a>
       <a href="#">
         <fa :icon="['fab', 'vk']" class="more__icon"/>
       </a>
    
       <a href="#">
         <fa :icon="['fab', 'facebook']" class="more__icon"/>
       </a>

       <a href="#">
         <fa :icon="['fab', 'instagram']" class="more__icon"/>
       </a>
    
       <a href="#">
         <fa :icon="['fab', 'tiktok']" class="more__icon"/>
       </a>
       <a href="#">
         <fa :icon="['fab', 'youtube']" class="more__icon"/>
       </a>
       <a href="#">
         <fa :icon="['fab', 'twitter']" class="more__icon"/>
       </a>
       <a href="#">
         <fa :icon="['fab', 'invision']" class="more__icon"/>
       </a>
      </div>
      <div class="footer__info-text">
        <span>
          © 2022 CINEPHILE. Может содержать информацию, не предназначенную для
          несовершеннолетних
      </span>
        <span>Данные получены с сайта themoviedb.org</span>
      </div>
      <div class="footer__info-logo">
        <h1>PROWEB</h1>
        <p>курсы современных профессий</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.more__icon{
  color:rgba(255, 255, 255, 0.6);
}
.footer {
  padding: 30px 0 80px 0;
  height: 400px;
  background: #1f1f1f;
  height: 100%;
  width: 100%;
 
  &__info {
    &-icon {
      display: flex;
      justify-content: center;
      gap: 15px;
    }
    &-text {
      padding: 50px 0 80px 50px;
      color: #a5a5a5;
      font-size: 20px;
      font-family: "Montserrat";
      font-weight: 300;
      
      & span {
        display: flex;
        gap: 20px;
      }
    }
    &-logo{
        text-align: center;
        color: #a5a5a5;
      font-family: "Montserrat";
     & h1{
        font-weight: 700;
        font-size: 50px;
     }  
     & p{
        font-size: 17px;
     } 
    }
  }
}
</style>