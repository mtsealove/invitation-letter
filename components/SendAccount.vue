<script setup lang="ts">

import CopyAccount from "~/components/account/CopyAccount.vue";
import AccountAccordion from "~/components/account/AccountAccordion.vue";
</script>
<template>
  <section class="container">
    <div class="header"
         data-aos="fade-up"
         data-aos-offset="200"
         data-aos-easing="ease-out-cubic"
         data-aos-duration="1300"
    >
      <h3 class="title">신랑 & 신부에게<br/>
        마음 전하기</h3>
    </div>
    <article class="phone"
             data-aos="fade-up"
             data-aos-offset="200"
             data-aos-easing="ease-out-cubic"
             data-aos-duration="1300"
    >
      <div class="phone-header">
        <img src="../assets/imgs/ic_phone.png"
             alt="전화"/>
        신랑에게 연락하기
      </div>
      <div class="phone-content">
        <a href="tel:01085909102">010-8590-9102</a> 로 연락해주세요.
      </div>
      <div class="phone-header">
        <img src="../assets/imgs/ic_phone.png"
             alt="전화"/>
        신부에게 연락하기
      </div>
      <div class="phone-content">
        <a href="tel:01084111858">010-8411-1858</a> 로 연락해주세요.
      </div>
    </article>
    <p class="thank"
       data-aos="fade-up"
       data-aos-offset="200"
       data-aos-easing="ease-out-cubic"
       data-aos-duration="1300" >
      결혼을 축하하고 축복해주시는 귀한 마음,<br/>
      감사히 받겠습니다.</p>
    <div>
      <AccountAccordion type="신랑"
                        :id="1"
                        account1="신한 110 - 000 -000 -000"
                        account2="신한 110 - 000 -000 -000"
                        account3="신한 110 - 000 -000 -000" />
      <AccountAccordion type="신부"
                        :id="2"
                        account1="신한 110 - 000 -000 -000"
                        account2="신한 110 - 000 -000 -000"
                        account3="신한 110 - 000 -000 -000" />
    </div>
  </section>
</template>

<style scoped>
.phone-header {
  display: flex;
  align-items: center;
  column-gap: 2px;
  font-size: 22px;
  line-height: 32px;
}
.phone-header img {
  width: 22px;
  height: 22px;
}
.phone-header:nth-of-type(3) {
  margin-top: 24px;
}

.phone-content {
  margin-left: 24px;
  background-color: white;
  font-size: 20px;
  line-height: 32px;
  border: .5px solid black;
  padding: 6px 14px;
  margin-top: 6px;
  text-align: left;
}

.phone-content a {
  color: black;
  text-decoration-thickness: .6px;
  text-underline-offset: 4px;
}
.phone {
  padding: 32px 36px 40px;
  background-color: rgba(0, 0, 0, 0.06);
  width: 100%;
  margin-top: 28px;
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  //padding: 0 24px;
}
.title {
  font-size: 26px;
  line-height: 28px;
  margin: 54px 0 10px;
  font-weight: 400;
}
.thank {
  font-size: 15px;
  line-height: 24px;
  margin: 40px 0 28px;
}
</style>
