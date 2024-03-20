<script lang="ts">
import dayjs from "dayjs";
let name: string = '';
let message: string = '';
let engage: number = -1;

export default {
  name: 'DdayFooter',
  data() {
    return {
      dday: dayjs('2024-06-08').diff(dayjs(),'day').toString().padStart(2, '0'),
      name,
      message,
      engage
    }
  }
}
</script>

<template>
  <BackgroundDivider text="“ 무엇보다도 뜨겁게 서로 사랑할지니<br>사랑은 허다한 죄를 덮느니라 ”"
                     :is-small="true" />
  <section class="container">
    <h6 class="dday">결혼식까지 앞으로<br/>
      {{dday}} 일.</h6>
    <p class="message">축하메세지와 참석 의사를 남겨주세요!</p>
    <input placeholder="이름" class="input"
           v-model="name" />
    <input placeholder="축하메세지" class="input"
           v-model="message" />
    <select v-model="engage"
            :class="['input', engage===-1&&'placeholder']" >
      <option disabled value="-1">참석 여부</option>
      <option value="1">참석</option>
      <option value="0">불참</option>
    </select>
    <button class="button">
      축하메세지 남기기
    </button>
  </section>
  <footer class="footer">
    <p>copyright by Yunyoung Jeong, 2024</p>
    <p>Thanks to Hash the Deverloper</p>
  </footer>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 7.6rem;
}
.dday {
  margin: 16.3rem 0 3.2rem;
  font-size: 8rem;
  line-height: 9.1rem;
  font-weight: 400;
  text-align: center;
}

.message {
  font-size: 4.4rem;
  line-height: 7.7rem;
  margin-bottom: 13.2rem;
}

.input {
  font-size: 6rem;
  width: 100%;
  border: 0.5px solid black;
  line-height: 1;
  padding: 2.4rem 5rem ;
  box-sizing: border-box;
  margin-bottom: 6rem;

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  min-height: 13.8rem;
}

.input::placeholder {
  color: rgba(0, 0, 0, 0.4);
}

.input:focus {
  outline: none;
}

.placeholder {
  color: rgba(0, 0, 0, 0.4);
}

.button {
  font-size: 6rem;
  background: black;
  color: white;
  padding: 4rem 0;
  border: none;
  width: 100%;
  margin-top: 1.5rem;
}

.footer {
  background-color: rgba(0, 0, 0, 0.06);
  padding: 10.8rem 0 12rem;
  margin-top: 25.3rem;
}

.footer p {
  font-size: 4.9rem;
  text-align: center;
}

.footer p:nth-last-of-type(1) {
  margin-top: 1.5rem;
}
</style>
