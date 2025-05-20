<template>
  
	<div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>

      <!-- 내 정보 메뉴 -->
      <MyInfoMenu />
      <!-- // 내 정보 메뉴 -->

      <div class="content-item">
        <div class="content-inner">
          <div class="cont-head">
            <h3 class="cont-title">데이터</h3>
          </div>
          <ul class="chart-list">
            <li v-for="(item, index) in mockupDatas1">
              <p class="bar-title">{{ item.title }} <strong class="max">{{ item.data0 }}</strong></p>
              <div class="bar-progress">
                <span class="progress data" :class="{'unlimited': item.data0 == '무제한'}" :style="{width: `${item.percent}%`}"></span>
              </div>
              <div class="bar-value">
                <span class="use">{{ item.data1 }}</span>
                <span class="remain">{{item.data2 }}</span>
              </div>
            </li>
          </ul>

          <ul class="text-list bull">
            <li>기본 제공 데이터를 다 쓰면 최대 1Mbps 속도로 무제한 데이터가 제공됩니다.</li>
          </ul>
        </div>
      </div>
      <div class="content-item">
        <div class="content-inner">
          <div class="cont-head">
            <h3 class="cont-title">음성</h3>
          </div>
          <ul class="chart-list">
            <li v-for="(item, index) in mockupDatas2">
              <p class="bar-title">{{ item.title }} <strong class="max">{{ item.data0 }}</strong></p>
              <div class="bar-progress">
                <span class="progress voice" :class="{'unlimited': item.data0 == '무제한'}" :style="{width: `${item.percent}%`}"></span>
              </div>
              <div class="bar-value">
                <span class="use">{{ item.data1 }}</span>
                <span class="remain">{{item.data2 }}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="content-item">
        <div class="content-inner">
          <div class="cont-head">
            <h3 class="cont-title">문자 메세지</h3>
          </div>
          <ul class="chart-list">
            <li v-for="(item, index) in mockupDatas3">
              <p class="bar-title">{{ item.title }} <strong class="max">{{ item.data0 }}</strong></p>
              <div class="bar-progress">
                <span class="progress message" :class="{'unlimited': item.data0 == '무제한'}" :style="{width: `${item.percent}%`}"></span>
              </div>
              <div class="bar-value">
                <span class="use">{{ item.data1 }}</span>
                <span class="remain">{{item.data2 }}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>


      <!-- 이동 링크 목록 -->
      <ShortcutMenu :links="linksArray"/>
      <!--// 이동 링크 목록 -->

      <BottomFixMenu :btnText="'다음으로'" :disabled="true"/>

    </div> <!-- // content -->
	</div> <!-- // container -->

</template>

<script setup>
  import MyInfoMenu from "@/components/v2/common/MyInfoMenu";
  import ShortcutMenu from "@/components/v2/common/ShortcutMenu";
  import BottomFixMenu from "@/components/v2/common/BottomFixMenu";

  const emit = defineEmits(['setLayout']);
  const layout = reactive({ header: 'sub', footer: 'none', title: '', floatMenu: 'none', });
    
  const mockupDatas1 = [
    {title:'월 기본 제공 데이터', data0: '1GB', data1: '899MB 사용', data2: '125MB 남음', percent: 10 },
    {title:'데이터 프리덤', data0: '무제한', data1: '10GB 사용', data2: '150GB 남음', percent: 100 },
    {title:'친구 추천 데이터', data0: '1GB', data1: '4GB 사용', data2: '5GB 남음', percent: 40 }
  ];
  const mockupDatas2 = [
    {title:'집/이동전화', data0: '무제한', data1: '70분 21초', data2: '기본제공', percent: 100 },
    {title:'영상/부가통화', data0: '110분', data1: '11분 사용', data2: '29분 남음', percent: 20 },
  ];
  const mockupDatas3 = [
    {title:'문자', data0: '110건', data1: '2건 사용', data2: '기본제공', percent: 20 },
    {title:'문자', data0: '무제한', data1: '2건 사용', data2: '기본제공', percent: 100 },
  ];

  const linksArray = [
    {title:'최근 3개월 사용량 보기', link:'/'},
    {title:'실시간 요금 보기', link:'/'},
    {title:'청구 요금 확인하기', link:'/'},
  ]

  onMounted(() => {
    emit('setLayout', layout);
  });

</script>