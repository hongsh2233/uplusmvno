<template>
  <div class="number-counting">
    <div :id="id" class="number-counting-box"></div>
    <span class="unit">{{ unit }}</span>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  number: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: "slide",
  },
  unit: {
    type: String,
    default: "원",
  },
});

const formattedNumber = ref(formatNumber(props.number));
const animateDuration = ref(500);
const duration = ref(100);
const countHeight = ref(26);
const maxCount = ref(10);

function formatNumber(number) {
  return number.replace(/\B(?=(\d{3})+(?!\d))/g, ",").split("");
}

// 숫자 롤링 애니메이션을 시작하는 함수
function startRollingNumber() {
  const els = document.querySelectorAll(`#${props.id}`);

  els.forEach((el) => {
    // 요소의 inner HTML을 애니메이션 스팬을 포함한 형식화된 숫자로 설정
    el.innerHTML = formattedNumber.value
      .map((digit, index) => {
        // 각 숫자에 고유한 클래스 ID 생성
        const classId =
          digit === "," ? `number-counting-idx-point` : `number-counting-idx-${index}-${digit}`;
        // 타입이 "slide"인 경우 슬라이드 스타일 적용
        const slideStyle =
          props.type === "slide" ? "transition: transform .2s cubic-bezier(.25,.75,.5,1.25)" : "";
        // 숫자의 초기 위치 설정
        const initialPosition = digit === "," ? maxCount.value : digit;
        // 적절한 스타일과 데이터 속성을 가진 숫자 스팬 요소 반환
        return `<span class="number-counting-div ${classId}" data-text="${digit}">
                  <span class="number-counting-list" style="transform: translateY(-${
                    initialPosition * countHeight.value
                  }px); ${slideStyle}">0 1 2 3 4 5 6 7 8 9 ,</span>
                </span>`;
      })
      .join("");

    // 각 숫자를 인덱스에 따라 지연을 두고 애니메이션
    formattedNumber.value.forEach((digit, index) => {
      const classId =
        digit === "," ? `number-counting-idx-point` : `number-counting-idx-${index}-${digit}`;
      // 일정 시간 후 숫자를 애니메이션하기 위해 requestAnimationFrame 사용
      const animateWithDelay = (delay) => {
        if (delay <= 0) {
          animateNumber(`.${classId}`, el);
        } else {
          requestAnimationFrame(() => animateWithDelay(delay - duration.value));
        }
      };
      animateWithDelay(duration.value * index);
    });
  });
}

function animateNumber(classId, element) {
  // 애니메이션할 요소를 선택
  const el = element.querySelector(classId);
  // 숫자 리스트 요소를 선택
  const numList = el.querySelector(".number-counting-list");
  // 목표 숫자를 가져옴
  const targetDigit = el.getAttribute("data-text");

  // 쉼표는 롤링 효과 없이 바로 설정
  if (targetDigit === ",") {
    numList.style.transform = `translateY(-${maxCount.value * countHeight.value}px)`;
    return;
  }

  // 목표 위치를 계산
  const targetPosition = targetDigit;
  let counter = 0;

  // 숫자 애니메이션을 위한 인터벌 설정
  const numInterval = setInterval(() => {
    // 숫자 리스트의 트랜스폼을 업데이트하여 애니메이션 효과를 줌
    numList.style.transform = `translateY(-${counter * countHeight.value}px)`;
    // 카운터가 목표 위치에 도달하면 인터벌을 클리어하고 목표 위치로 설정
    if (counter >= targetPosition) {
      clearInterval(numInterval);
      numList.style.transform = `translateY(-${targetPosition * countHeight.value}px)`;
    }
    counter++;
  }, animateDuration.value / maxCount.value);
}

function onRestart(v) {
  const els = document.querySelectorAll(`#${props.id}`);
  const target = props.id;

  v.forEach((item) => {
    const el = document.querySelector(`#${item}`);
    if (target === item) {
      el.innerHTML = "";
      startRollingNumber();
    } else if (item === "all") {
      els.forEach((ii) => {
        ii.innerHTML = "";
      });
      startRollingNumber();
    }
  });
}

onMounted(() => {
  startRollingNumber();
});

defineExpose({ onRestart });
</script>
