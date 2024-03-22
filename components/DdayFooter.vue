<script lang="ts">
import dayjs from "dayjs";
import axios from "axios";
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
  },
  methods: {
    add() {
      if(!this.name) {
        window.alert('이름을 입력해주세요.');
        return;
      }
      if(!this.message) {
        window.alert('메세지를 입력해주세요.');
        return;
      }
      if(this.engage===-1) {
        window.alert('참석 여부를 선택해주세요.');
        return;
      }
      axios.post('/api/engage', {
        name: this.name,
        message: this.message,
        engage: this.engage,
      }).then((res)=>{
        console.log(res);
        window.alert('메세지를 남겼습니다.');
      }).catch(()=>{
        window.alert('오류가 발생하였습니다.');
      })
    }
  }
}
</script>

<template>
  <BackgroundDivider text="“ 무엇보다도 뜨겁게 서로 사랑할지니<br>사랑은 허다한 죄를 덮느니라 ”"
                     :is-small="true" />
  <section class="container"
           data-aos="fade-up"
           data-aos-offset="200"
           data-aos-easing="ease-out-cubic"
           data-aos-duration="1300"
  >
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
    <button class="button"
            @click="add" >
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
  padding: 0 24px;
}
.dday {
  margin: 52px 0 10px;
  font-size: 25px;
  line-height: 28px;
  font-weight: 400;
  text-align: center;
}

.message {
  font-size: 14px;
  line-height: 24px;
  margin-bottom: 40px;
}

.input {
  font-size: 20px;
  width: 100%;
  border: 0.5px solid black;
  line-height: 1;
  padding: 8px 16px;
  box-sizing: border-box;
  margin-bottom: 20px;
  border-radius: 0;
  background-color: white;
  color: black;

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  min-height: 42px;
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
  font-size: 18px;
  background: black;
  color: white;
  padding: 12px 0;
  border: none;
  width: 100%;
  margin-top: 1.5rem;
}

.footer {
  background-color: rgba(0, 0, 0, 0.06);
  padding: 32px 0 40px;
  margin-top: 80px
}

.footer p {
  font-size: 15px;
  text-align: center;
}

.footer p:nth-last-of-type(1) {
  margin-top: 6px;
}
</style>
