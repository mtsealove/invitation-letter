<script lang="ts">
import {createClient} from "@supabase/supabase-js";
import dayjs from "dayjs";
let supabase = undefined;
export default {
  setup(){
    const config = useRuntimeConfig();
    const supbaseUrl = config.public.supabaseUrl;
    const supabaseKey = config.public.supabaseKey;
    supabase = createClient(supbaseUrl, supabaseKey);
  },
  mounted() {
    this.getData();
  },
  data() {
    return {
      data: []
    }
  },
  methods: {
    dayjs,
    async getData() {
      const {data, error} = await supabase.from('memo')
          .select();
      if(error) {
        console.error(error);
      } else {
        this.data = data;
      }
    }
  },
}
</script>

<template>
  <section class="container">
    <h1 class="title">참석 의사 확인</h1>
    <table class="table">
      <thead>
      <tr>
        <th>#</th>
        <th>구분</th>
        <th>성함</th>
        <th>참석인원</th>
        <th>동행인</th>
        <th>식사여부</th>
        <th>작성시각</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(d, idx) of data"
          :key="`item-${idx}`">
        <td>{{idx+1}}</td>
        <td>{{d.friend}}</td>
        <td>{{d.name}}</td>
        <td>{{d.cnt}}명</td>
        <td>{{d.other}}</td>
        <td>{{d.meal}}</td>
        <td>{{dayjs(d.created_at).format('YYYY-MM-DD HH:mm')}}</td>
      </tr>
      </tbody>
    </table>
  </section>
</template>

<style scoped>
.title {
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 24px;
}

.container {
  padding: 28px 20px 20px;
  background-color: white;
  min-height: 100vh;
}

.table {
  font-size: 14px;
  border: 1px solid;
  width: 100%;
  border-collapse: collapse;
}

.table th {
  padding: 8px 0;
  border: 1px solid;
  background-color: rgba(0, 0, 0, 0.1);
}
.table td {
  padding: 8px 12px;
  border: 1px solid;
}
</style>
