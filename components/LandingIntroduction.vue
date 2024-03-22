<template>
  <section class="container">
    <span class="date">2024. 06. 08</span>
    <p class="happily">Happily Ever After!</p>
    <img src="/introduction.png"
         alt=''
         class="introduction-img" />
    <h1 class="title">
      김은택 & 정윤영
      <span>결혼식에 초대합니다</span>
    </h1>
    <p class="location">
      2024년 6월 8일 토요일 오후 1시<br/>
      연세대학교 동문회관 3층 그랜드볼룸
    </p>
  </section>
</template>

<script>
export default {
  name: "LandingIntroduction"
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 52px;
}

.date {
  font-size: 21px;
  line-height: 28px;
}

.happily {
  font-size: 28px;
  line-height: 31px;
}

.introduction-img {
  width: 100%;
  margin: 28px 0 40px;
  object-fit: contain;
}

.title {
  font-size: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 400;
}

.title span {
  margin-top: 8px;
  font-size: 18px;
}

.location {
  margin-top: 20px;
  font-size: 15px;
  line-height: 20px;
  color: rgba(0, 0, 0, 0.4);
  text-align: center;
}
</style>
