<template>
  <section>
    <h2>수정리스트 : v0.1 - 8월 12일 최초 작성</h2>
    <div class="guide_cont">
      <table>
        <caption>list</caption>
        <colgroup>
          <col width="10%;">
          <col width="10%;">
          <col width="*">
          <col width="8%;">
          <col width="5%;">
          <col width="5%;">
          <col width="25%;">
          <col width="10%;">
        </colgroup>
        <thead>
          <tr>
            <th scope="col">메뉴명</th>
            <th scope="col">항목</th>
            <th scope="col">이슈사항</th>
            <th scope="col">URL</th>
            <th scope="col">요청일</th>
            <th scope="col">처리일</th>
            <th scope="col">적용 파일</th>
            <th scope="col">비고</th>
          </tr>
        </thead>
        <tbody>
          <tr class="end">
            <td>메인</td>
            <td>메인</td>
            <td>
              <ul>
                <li>notice 팝업 PC에서 next,prev버튼 추가</li>
                <li>배너에서 swiper pc에서 pagination수정</li>
              </ul>
            </td>
            <td class="url">
              <ul>
                <li><NuxtLink :to='`/ma/ALFM-MA01-PG00`' target="_blank">ALFM-MA01-PG00</NuxtLink></li>
              </ul>
            </td>
            <td>2024.01.08</td>
            <td>2024.01.08</td>
            <td>
              <ul>
                <li>SwiperNotice</li>
                <li>SwiperMainBnr</li>
              </ul>
            </td>
            <td class="marker"> 퍼블, 개발 적용 완료</td>
          </tr>
          <tr class="end">
            <td>원칩 지금배송</td>
            <td>지금배송 가능시간 변경</td>
            <td>
              <ul>
                <li>1) 주문가능 시간 : 09:00~22:00 > 11:00~22:00</li>
                <li>2) 팝업 내 가능 시간 변경 : 11:00~22:00</li>
              </ul>
            </td>
            <td class="url">
              <ul>
                <li><NuxtLink :to='`/bu/ALFM-BU01-PG00`' target="_blank">ALFM-BU01-PG00</NuxtLink></li>
                <li><NuxtLink :to='`/bu/ALFM-BU01-PO02`' target="_blank">ALFM-BU01-PO02</NuxtLink></li>
              </ul>
            </td>
            <td>2024.01.18</td>
            <td>2024.01.18</td>
            <td>
              <ul>
                <li>ALFM-BU01-PG00</li>
                <li>frontData.js - BU01PO02 시간변경</li>
              </ul>
            </td>
            <td class="marker"> 퍼블, 개발 적용 완료</td>
          </tr>
          <tr class="end">
            <td>마이페이지, 가입신청</td>
            <td>번호이동 인증 영역 변경 불가하게 수정</td>
            <td>
              <ol>
                <li>1) 안내 문구 변경 : 번호이동 인증을 진행해 주세요.</li>
                <li>2) 통신사 선택 영역 제외 </li>
                <li>3) 전화 번호 입력영역 전화번호 입력된 상태에서 비활성화 </li>
                <li>4) 사전 인증하기 버튼 활성화로 노출, 사전인증 완료 후 버튼 비활성화</li>
              </ol>
            </td>
            <td class="url">
              <ul>
                <li><NuxtLink :to='`/my/ALFM-MY02-PG00`' target="_blank">ALFM-MY02-PG00</NuxtLink></li>
                <li><NuxtLink :to='`/pr/ALFM-PR03-PG11`' target="_blank">ALFM-PR03-PG11</NuxtLink></li>
              </ul>
            </td>
            <td>2024.01.19</td>
            <td>2024.01.19</td>
            <td>
              <ul>
                <li>ALFM-MY02-PG00</li>
                <li>ALFM-PR03-PG11</li>
                <li>AuthSelect</li>
              </ul>
            </td>
            <td class="marker"> 퍼블, 개발 적용 완료</td>
          </tr>
          <tr class="end">
            <td>원칩 지금배송</td>
            <td>지금배송 가능시간 변경</td>
            <td>
              <ul>
                <li>1) 주문가능 시간 : 11:00~22:00 > 10:00~22:00</li>
                <li>2) 팝업 내 가능 시간 변경 : 10:00~22:00</li>
              </ul>
            </td>
            <td class="url">
              <ul>
                <li><NuxtLink :to='`/bu/ALFM-BU01-PG00`' target="_blank">ALFM-BU01-PG00</NuxtLink></li>
                <li><NuxtLink :to='`/bu/ALFM-BU01-PO02`' target="_blank">ALFM-BU01-PO02</NuxtLink></li>
              </ul>
            </td>
            <td>2024.01.25</td>
            <td>2024.01.25</td>
            <td>
              <ul>
                <li>purchse/delivery/index.vue</li>
                <li>ALFM-BU01-PG00</li>
                <li>frontData.js - BU01PO02 시간변경</li>
              </ul>
            </td>
            <td class="marker"> 퍼블, 개발 적용 완료</td>
          </tr>
          <tr class="end">
            <td>메인</td>
            <td>요금제랭킹</td>
            <td>
              <ul>
                <li>데이터 통화 무제한</li>
              </ul>
            </td>
            <td class="url">
              <ul>
                <li><NuxtLink :to='`/ma/ALFM-MA01-PG01`' target="_blank">ALFM-MA01-PG01</NuxtLink></li>
              </ul>
            </td>
            <td>2024.01.30</td>
            <td>2024.01.30</td>
            <td>
              <ul>
                <li>ALFM-MA01-PG01</li>
                <li>24.01.30 수정 주석 처리</li>
              </ul>
            </td>
            <td class="marker"> 퍼블, 개발 적용 완료</td>
          </tr>
          <tr class="end">
            <td>요금제</td>
            <td>요금제 목록</td>
            <td>
              <ul>
                <li>요금제 찾기 배너 html로 코딩 변경</li>
              </ul>
            </td>
            <td class="url">
              <ul>
                <li><NuxtLink :to='`/pr/ALFM-PR01-PG00`' target="_blank">ALFM-PR01-PG00</NuxtLink></li>
              </ul>
            </td>
            <td>2024.01.30</td>
            <td>2024.01.30</td>
            <td>
              <ul>
                <li>ALFM-PR01-PG00</li>
                <li>24.01.30 수정 주석 처리</li>
              </ul>
            </td>
            <td class="marker"> 퍼블, 개발 적용 완료</td>
          </tr>
          <tr class="end">
            <td>요금제</td>
            <td>요금제 목록</td>
            <td>
              <ul>
                <li>팝업 내 [00개 결과 보기] 버튼 영역 로딩 필요 </li>
              </ul>
            </td>
            <td class="url">
              <ul>
                <li><NuxtLink :to='`/pr/ALFM-PR01-PG00`' target="_blank">ALFM-PR01-PG00</NuxtLink></li>
              </ul>
            </td>
            <td>2024.01.30</td>
            <td>2024.01.30</td>
            <td>
              <ul>
                <li>Popup</li>
              </ul>
            </td>
            <td class="marker"> 퍼블, 개발 적용 완료</td>
          </tr>
          <tr class="end">
            <td>마이페이지</td>
            <td>메인</td>
            <td>
              <ul>
                <li>지금배송 배너 변경</li>
              </ul>
            </td>
            <td class="url">
              <ul>
                <li><NuxtLink :to='`/my/ALFM-MY01-PG00`' target="_blank">ALFM-MY01-PG00</NuxtLink></li>
              </ul>
            </td>
            <td>2024.01.30</td>
            <td>2024.01.31</td>
            <td>
              <ul>
                <li>ALFM-MY01-PG00</li>
                <li>24.01.31 수정 주석 처리</li>
              </ul>
            </td>
            <td class="marker"> 퍼블, 개발 적용 완료</td>
          </tr>
          <tr class="end">
            <td>마이페이지</td>
            <td>후기 등록 혜택 배너 관리</td>
            <td>
              <ul>
                <li>'알뜰폰닷컴 요금제 경험을 알려주세요. 이미지 배너로 변경</li>
              </ul>
            </td>
            <td class="url">
              <ul>
                <li><NuxtLink :to='`/my/ALFM-MY07-LT00`' target="_blank">ALFM-MY07-LT00</NuxtLink></li>
              </ul>
            </td>
            <td>2024.01.30</td>
            <td>2024.01.31</td>
            <td>
              <ul>
                <li>ALFM-MY07-LT00</li>
                <li>24.01.31 수정 주석 처리</li>
              </ul>
            </td>
            <td class="marker"> 퍼블, 개발 적용 완료</td>
          </tr>
          <tr class="end">
            <td>메인</td>
            <td>메인</td>
            <td>
              <ul>
                <li>요금제 카드(공통), 파트너사소개 이미지 업데이트</li>
              </ul>
            </td>
            <td class="url">
              <ul>
                <li><NuxtLink :to='`/ma/ALFM-MA01-PG00`' target="_blank">ALFM-MA01-PG00</NuxtLink></li>
              </ul>
            </td>
            <td>2024.01.30</td>
            <td>2024.02.01</td>
            <td>
              <ul>
                <li>ALFM-MA01-PG00 logo_s_****.png 이미지를 logo_****.png로 변경</li>
                <li>Card</li>
                <li>frontData</li>
              </ul>
            </td>
            <td class="marker"> 퍼블, 개발 적용 완료</td>
          </tr>
          <tr class="end">
            <td>고객지원</td>
            <td>내 주변 매장 찾기</td>
            <td>
              <ul>
                <li>MO버전 br 수정 처리</li>
              </ul>
            </td>
            <td class="url">
              <ul>
                <li><NuxtLink :to='`/cs/ALFM-CS02-PG01`' target="_blank">ALFM-CS02-PG01</NuxtLink></li>
              </ul>
            </td>
            <td>2024.02.02</td>
            <td>2024.02.02</td>
            <td>
              <ul>
                <li>ALFM-CS02-PG01</li>
              </ul>
            </td>
            <td class="marker"> 퍼블, 개발 적용 완료</td>
          </tr>
          <tr class="mod">
            <td>공통</td>
            <td>전체 페이지</td>
            <td>
              <ul>
                <li>브랜드명 변경</li>
              </ul>
            </td>
            <td class="url">
              <ul>
                <li><NuxtLink :to='`/ma/ALFM-MA01-PG00`' target="_blank">ALFM-MA01-PG00</NuxtLink></li>
              </ul>
            </td>
            <td>2024.02.01</td>
            <td>2024.02.02</td>
            <td>
              <ol class="order-list">
                <li>* 전체 페이지 → 알파 > 알뜰폰닷컴</li>
                <li>* GNB → 혜택 내 메뉴명 변경 알뜰폰닷컴 활용하기 > 알닷 활용하기</li>
                <li>* 메인<NuxtLink :to='`/ma/ALFM-MA01-PG00`' target="_blank">[ALFM-MA01-PG00]</NuxtLink> → 로고의 경우 U+에서 전달하는 로고 반영 - 현재는 텍스트 가안으로 알뜰폰닷컴 반영 필요</li>
                <li>* 메인<NuxtLink :to='`/ma/ALFM-MA01-PG00`' target="_blank">[ALFM-MA01-PG00]</NuxtLink> → [플래그 변경] 알뜰폰닷컴ONLY > 알닷ONLY 로 변경</li>
                <li>* 메인<NuxtLink :to='`/ma/ALFM-MA01-PG00`' target="_blank">[ALFM-MA01-PG00]</NuxtLink> → 3월 알파 요금제 랭킹 보기 > 3월 요금제 랭킹 보기</li>
                <li>* 요금제 목록<NuxtLink :to='`/pr/ALFM-PR01-PG00`' target="_blank">[ALFM-PR01-PG00]</NuxtLink> → [체크박스 영역 텍스트 변경] 알뜰폰닷컴ONLY > 알닷ONLY 로 변경, [플래그 변경] 알뜰폰닷컴ONLY > 알닷ONLY 로 변경</li>
                <li>* 요금제 상세<NuxtLink :to='`/pr/ALFM-PR01-PG01`' target="_blank">[ALFM-PR01-PG01]</NuxtLink> → [플래그 변경] 알뜰폰닷컴ONLY > 알닷ONLY 로 변경</li>
                <li>* 파트너사 상세<NuxtLink :to='`/ma/ALFM-MA01-PG03`' target="_blank">[ALFM-MA01-PG03]</NuxtLink> → [플래그 변경] 알뜰폰닷컴ONLY > 알닷ONLY 로 변경</li>
              </ol>
            </td>
            <td class="marker"> 퍼블 적용 완료, 개발 미적용</td>
          </tr>
          <tr class="end">
            <td>GNB</td>
            <td>혜택</td>
            <td>
              <ul>
                <li>가족/친구 추천하기 메뉴 추가</li>
              </ul>
            </td>
            <td class="url">
              <ul>
                <li><NuxtLink :to='`/ma/ALFM-MA01-PG00`' target="_blank">ALFM-MA01-PG00</NuxtLink></li>
              </ul>
            </td>
            <td>2024.02.05</td>
            <td>2024.02.05</td>
            <td>
              <ul>
                <li>MainHeader</li>
              </ul>
            </td>
            <td class="marker"> 퍼블, 개발 적용 완료</td>
          </tr>
          <tr class="end">
            <td>공통</td>
            <td>GNB</td>
            <td>
              <ul>
                <li>모바일에서 routing시 GNB 레이어 닫기</li>
              </ul>
            </td>
            <td class="url">
              <ul>
                <li><NuxtLink :to='`/ma/ALFM-MA01-PG00`' target="_blank">ALFM-MA01-PG00</NuxtLink></li>
              </ul>
            </td>
            <td>2024.02.13</td>
            <td>2024.02.13</td>
            <td>
              <ul>
                <li>MainHeader</li>
              </ul>
            </td>
            <td class="marker"> 퍼블, 개발 적용 완료</td>
          </tr>
          <tr class="end">
            <td>요금제</td>
            <td>요금제 찾기</td>
            <td>
              <ul>
                <li>왼쪽 메뉴 fixed처리 - 개발 소스(typescript, composition api) 반영</li>
              </ul>
            </td>
            <td class="url">
              <ul>
                <li><NuxtLink :to='`/pr/ALFM-PR01-PG00`' target="_blank">ALFM-PR01-PG00</NuxtLink></li>
              </ul>
            </td>
            <td>2024.02.13</td>
            <td>2024.02.13</td>
            <td>
              <ul>
                <li>ALFM-PR01-PG00</li>
              </ul>
            </td>
            <td class="marker"> 퍼블, 개발 적용 완료</td>
          </tr>
          <tr class="end">
            <td>혜택</td>
            <td>이벤트</td>
            <td>
              <ul>
                <li>기본 박스 에서 간격 없는 클래스 추가 및 공통 이미지 최대 넓이 제한</li>
              </ul>
            </td>
            <td class="url">
              <ul>
                <li><NuxtLink :to='`/be/ALFM-BE05-PG00`' target="_blank">ALFM-BE05-PG00</NuxtLink></li>
              </ul>
            </td>
            <td>2024.02.14</td>
            <td>2024.02.14</td>
            <td>
              <ul>
                <li>ALFM-BE05-PG00</li>
              </ul>
            </td>
            <td class="marker"> 퍼블, 개발 적용 완료</td>
          </tr>
          <tr class="end">
            <td>로그인</td>
            <td>메인</td>
            <td>
              <ul>
                <li>validation 체크시 에러</li>
              </ul>
            </td>
            <td class="url">
              <ul>
                <li><NuxtLink :to='`/lg/ALFM-LG01-PG00`' target="_blank">ALFM-LG01-PG00</NuxtLink></li>
              </ul>
            </td>
            <td>2024.02.14</td>
            <td>2024.02.14</td>
            <td>
              <ul>
                <li>ALFM-LG01-PG00</li>
              </ul>
            </td>
            <td class="marker"> 퍼블, 개발 적용 완료</td>
          </tr>
          <tr class="end">
            <td>공통</td>
            <td>전체 layout</td>
            <td>
              <ul>
                <li>full페이지 시 composition 오류</li>
                <li>share버튼 ui</li>
              </ul>
            </td>
            <td class="url">
              <ul>
                <li><NuxtLink :to='`/ma/ALFM-MA01-PG00`' target="_blank">ALFM-MA01-PG00</NuxtLink></li>
                <li><NuxtLink :to='`/cm/ALFM-CM11-PG00`' target="_blank">ALFM-CM11-PG00</NuxtLink></li>
              </ul>
            </td>
            <td>2024.02.15</td>
            <td>2024.02.15</td>
            <td>
              <ul>
                <li>MainLayout</li>
              </ul>
            </td>
            <td class="marker"> 퍼블, 개발 적용 완료</td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- table list -->
  </section>
</template>

<style scoped>
  .guide_cont table {
    table-layout: fixed;
  }
  .guide_cont table td {
    word-break: keep-all;
  }
  .order-list li {
    width: 100%;
    overflow: hidden;
    text-indent: -8px;
    padding-left: 8px;
  }
</style>