<template>
<section class="container"
         data-aos="fade-up"
         data-aos-offset="200"
         data-aos-easing="ease-out-cubic"
         data-aos-duration="1300" >
  <h3 class="title">결혼식 오시는 길</h3>
  <div class="location">
    서울시 00구 00로 00<br/>
    <em>어딘가 결혼식장</em>
  </div>
  <div class="map-wrapper">
    <div id="map" class="map"  />
    <div class="map-button"
         @click="openMap" >

    </div>
  </div>

  <WayByMethod v-for="item in items"
               :title="item.title"
               :contents="item.contents"
               :header="item.header"
               />
</section>
</template>

<script>
import WayByMethod from "./location/WayByMethod.vue";
const [lat, lng] = [37.54442330360516, 127.05602731486988];
let clientKey = '';
const items = [
  {title: '지하철',
    header: '0 호선 또는 0 호선 -> 어딘가 하차',
  contents: [
  '0호선 00역 4번 출구 -> 버스 000A, 000B',
  '0호선 00역 4번 출구 -> 버스 000C, 000D, 000E',
  '0호선 00역 1번 출구 -> 버스 000F, 000G']},
  {title: '버스',
  contents: [
      '간선 : 000, 001, 002, 003번',
      '지선 : 0000, 0001, 0002, 0003번',
      '광역 : M0001, M0002, M0003',
      '직행 : G000'
  ]},
  {
    title: '자가용',
    contents: [
        '내비게이션 이용 시 : “어딘가" 입력',
        '000 방향에서 오시는 분은 000 고가도로 밑에서 좌회전',
        '000 주차장 이용 : 2시간 무료 (주차할인기 사용)'
    ]
  },
  {title: '셔틀버스',
  contents: [
      '000역 0번 출구 -> 어딘가 결혼식장 : 14시 20분, 14시 40분',
      '어딘가 결혼식장 -> 000역 0번 출구 : 17시 10분, 17시 30분'
  ]}
]

export default {
  name: "WeddingLocation",
  components: {WayByMethod},
  setup(){
    const config = useRuntimeConfig();
    clientKey = config.public.naverClient;
  },
  mounted() {
    this.loadScript();
  },
  methods: {
    loadScript() { // 네이버 스크립트 로드
      const script =  document.createElement('script');
      script.src = `https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${clientKey}`;
      script.onload = this.handleOnLoad;
      document.head.appendChild(script);
    },
    handleOnLoad() {
      // 지도 설정
      const mapOptions = {
        center: new naver.maps.LatLng(lat, lng),
        zoom: 14,
        minZoom: 14,
        zoomControl: false,
        draggable: false,
      };
      const map = new naver.maps.Map('map', mapOptions);
      const marker = new naver.maps.Marker({
        position: new naver.maps.LatLng(lat, lng),
        map: map
      });
    }
    ,openMap() {
      window.open('https://map.naver.com/p/search/%EC%84%B1%EC%88%98%EC%97%AD?c=15.00,0,0,0,dh',
      '_blank');
    }
  },
  data(){
    return {
      items
    }
  }
}
</script>

<style scoped>
.container {
  padding: 56px 0 72px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title {
  font-size: 24px;
  font-weight: 400;
  margin-bottom: 40px;
}

.location {
  border: 0.5px solid;
  width: calc(100% - 48px);
  padding: 10px 0;
  font-size: 13px;
  text-align: center;
  line-height: 26px;
}

.location em {
  font-size: 20px;
  font-style: normal;
}

.map {
  width: 100%;
  aspect-ratio: calc(5 / 3);
}

.map-wrapper {
  width: 100%;
  position: relative;
  margin-top: 40px;
}

.map-button {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  cursor: pointer;
}
</style>
