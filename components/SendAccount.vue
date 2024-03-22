<script setup lang="ts">

import CopyAccount from "~/components/account/CopyAccount.vue";
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
      <p class="thank">결혼을 축하하고 축복해주시는 귀한 마음,<br/>
        감사히 받겠습니다.</p>
      <div class="side">신랑 측 계좌번호</div>
      <p class="copy">텍스트를 눌러서 복사할 수 있어요.</p>
    </div>
    <article class="article"
             data-aos="fade-up"
             data-aos-offset="200"
             data-aos-easing="ease-out-cubic"
             data-aos-duration="1300"
    >
      <CopyAccount who="신랑"
                   account="신한 110 - 000 -000 -000 " />
      <CopyAccount who="아버지"
                   account="신한 110 - 000 -000 -000 " />
      <CopyAccount who="어머니"
                   account="신한 110 - 000 -000 -000 " />
    </article>
  <div class="header"
       data-aos="fade-up"
       data-aos-offset="200"
       data-aos-easing="ease-out-cubic"
       data-aos-duration="1300"
  >
    <div class="side">신부 측 계좌번호</div>
    <p class="copy">텍스트를 눌러서 복사할 수 있어요.</p>
  </div>
  <article class="article"
           data-aos="fade-up"
           data-aos-offset="200"
           data-aos-easing="ease-out-cubic"
           data-aos-duration="1300"
  >
    <CopyAccount who="신부"
                 account="신한 110 - 000 -000 -000 " />
    <CopyAccount who="아버지"
                 account="신한 110 - 000 -000 -000 " />
    <CopyAccount who="어머니"
                 account="신한 110 - 000 -000 -000 " />
  </article>
  </section>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 0 24px;
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
  margin-bottom: 30px;
}
.side {
  font-size: 19px;
  text-align: center;
  padding: 10px 0;
  border: 0.5px solid black;
  width: 100%;
}
.copy {
  margin-top: 21px;
  font-size: 15px;
  line-height: 24px;
  color: rgba(0, 0, 0, 0.62);
  margin-bottom: 6px;
}

.article {
  padding: 18px 20px;
  background-color: #D9D9D9;
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 18px;
  margin-bottom: 2rem;
}

.article:nth-of-type(1) {
  margin-bottom: 40px;
}

.header {
  width: 100%;
}
</style>
