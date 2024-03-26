<template>
  <div class="container">
    <LandingIntroduction/>
    <VibleMent/>
    <WhoAmI :show-modal="showComeModal"/>
    <PhotoGallery/>
<!--    <PersonContact/>-->
    <WeddingLocation/>
    <CircleDivider/>
    <SendAccount/>
    <DdayFooter/>
  </div>
  <Modal ref="modal"
         :init="!showForm">
    <div class="modal-wrapper"
         v-if="!showForm">
      <p class="modal-content-1">결혼식에 참석해주시는<br/>
        모든 분들을 귀하게 모실 수 있도록<br/>
        참석 의사를 말씀해주세요.</p>
      <CircleDivider/>
      <p class="modal-content-2">
        신랑 김은택 & 신부 정윤영<br/>
        2024년 6월 8일 토요일 오후 1시<br/>
        연세대학교 동문회관 3층 그랜드볼룸
      </p>
      <button class="modal-btn"
              @click="showForm = true;">
        참석 의사 전달하기
      </button>
    </div>
    <div class="modal-wrapper"
         v-if="showForm">
      <SendForm :close-modal="closeModal"/>
    </div>
  </Modal>
  <Modal ref="modalRef"
         :dont-show="false">
    <SendForm :close-modal="closeModal"/>
  </Modal>
</template>

<script setup lang="ts">
useSeoMeta({
  title:"김은택 & 정윤영 결혼식에 초대합니다",
  ogTitle: '김은택 & 정윤영 결혼식에 초대합니다',
  description:"김은택 & 정윤영 결혼식에 초대합니다",
  ogDescription: '김은택 & 정윤영 결혼식에 초대합니다',
  ogUrl: 'https://invitation-letter-green.vercel.app',
  ogSiteName: '김은택 & 정윤영 결혼식에 초대합니다',
  ogType: 'website',
  ogImage: 'https://invitation-letter-green.vercel.app/introduction.png',
  formatDetection: 'telephone=no',
  viewport: 'initial-scale=1.0; maximum-scale=1.0; minimum-scale=1.0; user-scalable=no;'
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
import Cookie from 'js-cookie';

export default {
  name: "index",
  mounted() {
    this.loadScript();
    /*
    let lastOffset = 0;
    let timer: any = null;
    let animated = false;
    window.addEventListener('scroll', ()=>{
      if(timer) {
        return;
      }
      const vible = document.querySelector<HTMLDivElement>('#vible');
      const whoAmI = document.querySelector<HTMLDivElement>('#who-am-i');

      if(!animated) {
        if(vible && window.scrollY<vible.offsetTop && window.scrollY>lastOffset) {
          window.scrollTo({top: vible.offsetTop, behavior:'smooth'});
          animated = true;
        } else if(whoAmI&& window.scrollY<whoAmI.offsetTop && window.scrollY>lastOffset) {
          window.scrollTo({top: whoAmI.offsetTop, behavior:'smooth'});
          animated = true;
        }
      }
      lastOffset = window.scrollY;
      timer = setTimeout(()=>{
        timer = null;
        animated = false;
      }, 400);
    });

     */

    if(!Cookie.get('modal')) {
      this.$refs.modal.showModal();
    }
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
    showComeModal() {
      this.$refs.modalRef.showModal();
    },
    closeModal() {
      this.$refs.modalRef.closeModal();
      this.$refs.modal.closeModal();
    }
  },
  data() {
    return {
      showForm: false,
    }
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

.modal-content-1 {
  font-size: 13px;
  line-height: 22px;
  text-align: center;
  margin-top: 18px;
  margin-bottom: 22px;
}

.modal-content-2 {
  font-size: 16px;
  line-height: 26px;
  text-align: center;
  margin-top: 26px;
  margin-bottom: 20px;
}

.modal-btn {
  background-color: rgba(0, 0, 0, 0.58);
  color: white;
  border: none;
  width: calc(100% - 16px);
  font-size: 18px;
  padding: 12px 0;
  cursor: pointer;
}

.modal-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

</style>
