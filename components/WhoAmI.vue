<script setup lang="ts">

</script>

<template>
  <section data-aos="fade-up"
           data-aos-offset="400"
           data-aos-easing="ease-out-cubic"
           data-aos-duration="1300">
    <div class="parent">
      <p class="who">
        <span>김외진• 최영자</span>의 차남 <span>은택</span>
      </p>
      <p class="who">
        <span>정해만• 김지영</span>의 장녀 <span>윤영</span>
      </p>
      <CircleDivider/>
    </div>
    <article class="plz">
      하나님을 섬기는 자리에서 만나<br/>
      사랑의 열매를 맺었습니다.<br/>
<br/>
      행복이 넘치는 가정을 꾸리기 위해<br/>
      이제 한 걸음 내딛어보려 합니다.<br/>
<br/>
      오로지 믿음과 사랑만을 약속하는 귀한 날에<br/>
      모두가 즐거운 결혼식이 되도록<br/>
<br/>
      부디 오셔서 저희를 축복해주세요!
    </article>
  </section>
  <BackgroundDivider text="1 Peter 4:8"
                     :is-small="false" />
</template>

<style scoped>
section {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 21rem;
}
.who {
  font-size: 20px;
}

.who:nth-of-type(2) {
  margin-top: 10px;
  margin-bottom: 40px;
}

.who span {
  font-size: 24px;
}

.plz {
  font-size: 19px;
  text-align: center;
  line-height: 1.6;
  margin-top: 40px;
}

.parent {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

</style>
