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
  padding-top: 16.8rem;
}

.date {
  font-size: 6.7rem;
  line-height: 9.4rem;
}

.happily {
  font-size: 8.7rem;
  line-height: 9.7rem;
}

.introduction-img {
  width: 100%;
  margin: 8.6rem 0 12.3rem;
  object-fit: contain;
}

.title {
  font-size: 9.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 400;
}

.title span {
  margin-top: 3.1rem;
  font-size: 5.5rem;

}

.location {
  margin-top: 6.6rem;
  font-size: 4.7rem;
  line-height: 6.1rem;
  color: rgba(0, 0, 0, 0.4);
  text-align: center;
}
</style>
