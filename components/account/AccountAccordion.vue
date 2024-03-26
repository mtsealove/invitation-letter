<script lang="ts">

import {defineComponent} from "vue";
import CopyAccount from "~/components/account/CopyAccount.vue";

export default defineComponent({
  components: {CopyAccount},
  props: {
    type: String,
    account1: String,
    account2: String,
    account3: String,
    id: Number
  },
  methods: {
    toggle() {
    this.expand = !this.expand;
      const content = document.querySelector<HTMLDivElement>(`#bank-account-${this.id}`);
      if(content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = `${content.scrollHeight}px`;
      }
    },
    onMouseOver() {
      if(this.expand) {
        this.label = '눌러서 닫기';
      } else {
        this.label = '눌러서 확인하기';
      }
    }
  },
  data() {
    return {
      expand: false,
      label: `${this.type} 측 계좌번호`
    }
  }
})
</script>

<template>
  <div class="header"
       data-aos="fade-up"
       data-aos-offset="200"
       data-aos-easing="ease-out-cubic"
       data-aos-duration="1300">
    <button class="side"
            @click="toggle"
            @mouseenter="onMouseOver"
            @mouseleave="this.label = `${this.type} 측 계좌번호`;" >
      {{label}}
    </button>
  </div>
  <div :id="`bank-account-${id}`"
       class="article-wrapper">
    <p class="copy">텍스트를 눌러서 복사할 수 있어요.</p>
    <article class="article"
             data-aos="fade-up"
             data-aos-offset="200"
             data-aos-easing="ease-out-cubic"
             data-aos-duration="1300" >
      <CopyAccount :who="type"
                   :account="account1" />
      <CopyAccount who="아버지"
                   :account="account2" />
      <CopyAccount who="어머니"
                   :account="account3 " />
    </article>
  </div>

</template>

<style scoped>
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

.article-wrapper {
  transition: max-height 350ms ease-in-out;
  overflow: hidden;
  max-height: 0;
}

.side {
  font-size: 19px;
  text-align: center;
  padding: 10px 0;
  border: 0.5px solid black;
  width: 100%;
  background-color: white;
  cursor: pointer;
  color: black;
}

.side:hover {
  background-color: #D9D9D9;
}

.header {

}

.header:nth-of-type(3) {
  margin-top: 20px;
}
</style>
