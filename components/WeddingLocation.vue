<template>
<section class="container"
         data-aos="fade-up"
         data-aos-offset="200"
         data-aos-easing="ease-out-cubic"
         data-aos-duration="1300" >
  <h3 class="title">결혼식 오시는 길</h3>
  <div class="location">
    서울특별시 서대문구 연세로 50<br/>
    <em>연세대학교 동문회관</em>
  </div>
  <div id="map" class="map"  />
  <WayByMethod v-for="item in items"
               :title="item.title"
               :contents="item.contents"
               />
</section>
</template>

<script>
import WayByMethod from "./location/WayByMethod.vue";
const [lat, lng] = [37.562741, 126.942480];
let clientKey = '';
const items = [
  {title: '지하철',
  contents: ['2호선 이대역 4번 출구 -> 버스 742번, 7017번 -> 이대부중 하차',
  '3호선 독립문역 4번 출구 -> 극동아파트 정류장 버스 470, 601, 750A, 750B, 7737번 -> 이대 후문 하차',
  '3호선 경복궁역 1번 출구 -> 버스 272, 606 -> 이대부중 하차']},
  {title: '버스',
  contents: [
      '간선 : 272, 470, 601, 606, 607, 672, 700, 707, 710, 750A, 750B, 742번',
      '지선 : 6714, 7017, 7024, 7737번 (이대 후문 또는 이대부중 하차)',
      '광역 : M7106, M7111, M7119, M7154 (이대 후문 하차)',
      '직행 : G7111(이대 후문 하차)'
  ]},
  {
    title: '자가용',
    contents: [
        '내비게이션 이용 시 : “연세대학교 동문회관" 입력',
        '연세대학교 정문 방향에서 오시는 분은 금화터널 고가도로 밑에서 유턴',
        '동문회관 주차장 이용 : 2시간 무료 (주차할인기 사용)'
    ]
  },
  {title: '셔틀버스',
  contents: [
      '이대역 3번 출구 -> 동문회관 : 12시 20분, 12시 40분',
      '동문회관 -> 이대역 3번 출구 : 14시 10분, 14시 30분'
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
  margin-top: 40px;
}
</style>
