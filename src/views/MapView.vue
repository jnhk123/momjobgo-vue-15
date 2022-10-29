<template>
  <div class="container">
    <input
      style="border: 1px solid"
      class="right"
      type="text"
      placeholder="검색어를 입력하세요."
      v-model="keyword"
      @keyup.enter="search"
    />
    <button style="margin-left: 8px" @click="search">검색</button>
    <button style="margin-left: 8px" @click="moveCurrentLocation">
      현재 위치로
    </button>
    <div id="map" style="width: inherit; height: 600px"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      map: {},
      infowindow: {},
      markerList: [],
      keyword: "",
    };
  },

  methods: {
    // 지도 관련 카카오 API src import
    initKakao(callback) {
      const script = document.createElement("script");
      script.onload = () => window.kakao.maps.load(callback);
      script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.VUE_APP_KAKAO_JAVA_SCRIPT_KEY}&autoload=false&libraries=services`;
      document.head.appendChild(script);
    },

    // map 객체를 생성합니다.
    initMap() {
      const container = document.getElementById("map");
      const options = {
        center: new window.kakao.maps.LatLng(37.515, 126.983),
        level: 8,
      };
      this.map = new window.kakao.maps.Map(container, options);
    },

    // 모든 마커 삭제
    removeAllMarker() {
      this.markerList.forEach((marker) => {
        marker.setMap(null);
      });
    },

    // 현재 위치로 이동.
    moveCurrentLocation() {
      if (navigator.geolocation) {
        // GPS를 지원하면
        navigator.geolocation.getCurrentPosition(
          (position) => {
            this.map.setCenter(
              new window.kakao.maps.LatLng(
                position.coords.latitude,
                position.coords.longitude
              )
            );
          },
          (error) => {
            if (error.code === 1) alert("위치정보동의를 거부하였습니다.");
          },
          {
            enableHighAccuracy: false,
            maximumAge: 0,
            timeout: Infinity,
          }
        );
      } else {
        alert("GPS를 지원하지 않습니다");
      }
    },

    // 검색
    search() {
      this.removeAllMarker();
      const ps = new window.kakao.maps.services.Places();
      ps.keywordSearch(this.keyword, this.setPlacesSearchCB);
    },

    setPlacesSearchCB(data, status) {
      if (status === window.kakao.maps.services.Status.OK) {
        // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
        // LatLngBounds 객체에 좌표를 추가합니다
        const bounds = new window.kakao.maps.LatLngBounds();
        for (let i = 0; i < data.length; i++) {
          this.displayMarker(data[i]);
          bounds.extend(new window.kakao.maps.LatLng(data[i].y, data[i].x));
        }
        this.map.setBounds(bounds);
      }
    },

    // 마커 표시
    displayMarker(place) {
      // 마커를 생성하고 지도에 표시합니다
      const marker = new window.kakao.maps.Marker({
        map: this.map,
        position: new window.kakao.maps.LatLng(place.y, place.x),
      });
      this.markerList.push(marker);
      // 마커에 클릭이벤트를 등록합니다
      window.kakao.maps.event.addListener(marker, "click", () => {
        this.map.setCenter(new window.kakao.maps.LatLng(place.y, place.x));
        this.map.setLevel(4);
        if (this.infowindow.close) {
          this.infowindow.close();
        }
        // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
        const template = `<div style="padding:5px;">
            <p>${place.road_address_name}</p>
            <p>이름 : <br/><a href="${place.place_url}" target="_blank">${place.place_name}</a></p>
            <p>전화번호 : <br/>${place.phone}</p>
          </div>`;
        this.infowindow = new window.kakao.maps.InfoWindow({
          content: template,
          removable: true,
        });
        this.infowindow.open(this.map, marker);
      });
    },
  },

  mounted() {
    if (typeof window.kakao?.maps === "undefined") {
      this.initKakao(this.initMap);
    } else {
      this.initMap();
    }
  },
};
</script>

<style>
.container {
  width: 1000px;
  padding: 20px 0px 20px 40px;
}

#map {
  margin-top: 30px;
}
</style>
