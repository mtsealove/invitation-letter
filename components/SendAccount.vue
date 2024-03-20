<script setup lang="ts">

import CopyAccount from "~/components/account/CopyAccount.vue";
</script>
<template>
  <section class="container">
    <h3 class="title">신랑 & 신부에게<br/>
      마음 전하기</h3>
    <p class="thank">결혼을 축하하고 축복해주시는 귀한 마음,<br/>
      감사히 받겠습니다.</p>
    <div class="side">신랑 측 계좌번호</div>
    <p class="copy">텍스트를 눌러서 복사할 수 있어요.</p>
    <article class="article">
      <CopyAccount who="신랑"
                   account="신한 110 - 000 -000 -000 " />
      <CopyAccount who="아버지"
                   account="신한 110 - 000 -000 -000 " />
      <CopyAccount who="어머니"
                   account="신한 110 - 000 -000 -000 " />
    </article>
  <div class="side">신부 측 계좌번호</div>
  <p class="copy">텍스트를 눌러서 복사할 수 있어요.</p>
  <article class="article">
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
  padding: 0 7.6rem;
}
.title {
  font-size: 8rem;
  line-height: 9.1rem;
  margin: 17.6rem 0 3.2rem;
  font-weight: 400;
}
.thank {
  font-size: 4.8rem;
  line-height: 7.7rem;
  margin-bottom: 9.7rem;
}
.side {
  font-size: 6rem;
  text-align: center;
  padding: 3rem 0;
  border: 0.5px solid black;
  width: 100%;
}
.copy {
  margin-top: 6.9rem;
  font-size: 4.8rem;
  line-height: 7.7rem;
  color: rgba(0, 0, 0, 0.62);
  margin-bottom: 1.7rem;
}

.article {
  padding: 5.8rem 6rem;
  background-color: #D9D9D9;
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 6rem;
  margin-bottom: 2rem;
}

.article:nth-of-type(1) {
  margin-bottom: 11.8rem;
}
</style>
