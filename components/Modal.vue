<script lang="ts">
import Cookie from "js-cookie";
export default {
  name: 'Modal',
  props: {
    init: Boolean,
  },
  data() {
    return {
      hide: true,
      none: true,
    }
  },
  methods: {
    showModal() {
      this.none = false;
      setTimeout(()=>{
        this.hide = false;
      }, 100);
    },
    dontShow() {
      Cookie.set('modal', 'true', {
        expires: 1,
      });
      this.closeModal();
    },
    closeModal() {
      this.hide = true;
      setTimeout(()=>{
        this.none = true;
      }, 400);
    }
  }
}
</script>

<template>
  <div :class="['modal', hide&&'hide', none&&'none']">
    <div class="modal-contents">
      <h6 class="title">
        참석 의사 전달
      </h6>
      <button class="close"
              @click="closeModal" >
        x
      </button>
      <slot></slot>
      <button @click="dontShow"
              v-if="init"
              class="dont" >
        오늘 하루 보지 않기
      </button>
    </div>
  </div>

</template>

<style scoped>
.modal {
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 3;
  transition: 400ms;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal.none {
  display: none;
}

.modal.hide {
  opacity: 0;
}

.modal-contents {
  max-width: 400px;
  width: calc(100% - 40px);
  position: relative;
  background-color: #EBEBEB;
  padding: 40px 10px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: 450ms;
}

.modal.hide .modal-contents {
  transform: translateY(15vh);
}

.title {
  background-color: white;
  width: calc(100% - 36px);
  font-size: 20px;
  text-align: center;
  padding: 10px;
  border: .5px solid black;
  font-weight: 400;
}

.close {
  position: absolute;
  right: 12px;
  top: 10px;
  cursor: pointer;
  font-size: 20px;
  padding: 0;
  width: 24px;
  height: 24px;
  border: none;
  background-color: transparent;
  color: black;
}

.dont {
  font-size: 13px;
  background-color: transparent;
  border: none;
  margin-top: 32px;
  color: black;
  cursor: pointer;
}
</style>
