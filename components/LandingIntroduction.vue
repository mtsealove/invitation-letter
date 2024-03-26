<template>
  <section class="container"
           @click="scrollDown" >
    <p :class="['happily', txtLoad&&'on-load']">
      Happily<br/>
      Ever After!</p>
    <article :class="['contents', imgLoad&&'on-load']">
      <swiper
          :slidePerView="1"
          :spaceBetween="30"
          :navigation="true"
          :autoplay="{
            delay: 2000,
            disableOnInteraction: false,
        }"
          :pagination="{
          clickable: true,
          }"
          :loop="true"
          :modules="modules"
          class="swiper">
        <swiper-slide v-for="img in imgs"
                      :key="img" >
          <img :src="img"
               alt=''
               class="introduction-img" />
        </swiper-slide>
      </swiper>
      <p class="date">2024.06.08</p>
      <h1 class="title">
        김은택 & 정윤영
        <span>결혼식에 초대합니다</span>
      </h1>
      <p class="location">
        2024년 6월 8일 토요일 오후 1시<br/>
        연세대학교 동문회관 3층 그랜드볼룸
      </p>
    </article>

  </section>
</template>

<script lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';
// import SmoothScroll from 'smooth-scroll';

export default {
  name: "LandingIntroduction",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [EffectFade, Navigation, Pagination, Autoplay]
    }
  },
  mounted() {
    const timeout1 = setTimeout(()=>{
      this.txtLoad = true;
    }, 200);
    const timeout2 = setTimeout(()=>{
      this.imgLoad = true;
    }, 650);
    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
    }
  },
  methods: {
    scrollDown() {
      const next = document.querySelector<HTMLDivElement>('#vible');
      window.scrollTo({top: next!.offsetTop, behavior: 'smooth'});
    }
  },
  data() {
    return {
      imgs: ['/introduction/img2.png', '/introduction/img1.png'],
      txtLoad: false,
      imgLoad: false,
    }
  }
}
</script>

<style scoped>

.swiper {
  width: 100%;
  aspect-ratio: calc(393 / 437);
  margin: 28px 0 40px;
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 54px;
}

.date {
  font-size: 21px;
  line-height: 30px;
  margin-bottom: 8px;
}

.happily {
  font-size: 30px;
  line-height: 32px;
  text-align: center;
  transition: 550ms ease-in-out;
  opacity: 0;
  transform: translateY(20%);
}

.introduction-img {
  width: 100%;
  object-fit: cover;
  height: 100%;
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

.contents {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: 550ms ease-out;
  opacity: 0;
  transform: translateY(30px);
}

.on-load {
  opacity: 1;
  transform: none;
}
</style>
