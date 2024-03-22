<template>
  <div class="container">
    <LandingIntroduction/>
    <VibleMent/>
    <WhoAmI/>
    <PhotoGallery/>
    <PersonContact/>
    <WeddingLocation/>
    <CircleDivider/>
    <SendAccount/>
    <DdayFooter/>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title:"김은택 & 정윤영 결혼식에 초대합니다",
  ogTitle: '김은택 & 정윤영 결혼식에 초대합니다',
  description:"김은택 & 정윤영 결혼식에 초대합니다",
  ogDescription: '김은택 & 정윤영 결혼식에 초대합니다',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
  formatDetection: 'telephone=no'
})
</script>

<script lang="ts">
import LandingIntroduction from "../components/LandingIntroduction.vue";
import VibleMent from "../components/VibleMent.vue";
import WeddingLocation from "../components/WeddingLocation.vue";
import CircleDivider from "../components/CircleDivider.vue";
import PersonContact from "../components/PersonContact.vue";
import SendAccount from "~/components/SendAccount.vue";
import WhoAmI from "~/components/WhoAmI.vue";
import PhotoGallery from "~/components/PhotoGallery.vue";
import DdayFooter from "~/components/DdayFooter.vue";

export default {
  name: "index",
  mounted() {
    this.loadScript();
  },
  components: {
    DdayFooter,
    PhotoGallery,
    WhoAmI, SendAccount, PersonContact, CircleDivider, WeddingLocation, VibleMent, LandingIntroduction},
  methods: {
    handleOnLoad() {
      //@ts-ignore
      AOS.init();
    },
    loadScript() {
      const style = document.createElement('link');
      style.href  = 'https://unpkg.com/aos@2.3.1/dist/aos.css';
      style.rel = 'stylesheet';
      document.head.appendChild(style);
      const script =  document.createElement('script');
      script.src = `https://unpkg.com/aos@2.3.1/dist/aos.js`;
      script.onload = this.handleOnLoad;
      document.head.appendChild(script);
    },
  }
}
</script>

<style scoped>
.container {
  width: 100%;
  max-width: 440px;
  margin: 0 auto;
  background-color: white;
}
</style>
