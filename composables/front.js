const front = {
  device() {
    const elem = document.querySelector("html");
    const userAgent = navigator.userAgent;

    const mobile = /Android|webOS|iPhone|iPad|iPop|BlackBerry|IEmobile|Opera Mini/i;
    const ios = /iPhone|iPad|iPop/i;
    const aos = /Android/i;

    mobile.test(userAgent) ? elem.classList.add("mobile") : elem.classList.add("pc");
    ios.test(userAgent) ? elem.classList.add("ios") : null;
    aos.test(userAgent) ? elem.classList.add("android") : null;

    // ie check
    const msie = /MSIE/i;
    const trident = /Trident/i;

    if (msie.test(userAgent) && trident.test(userAgent)) {
      const ieVer = document.documentMode; // IE 브라우저 버전
      elem.classList.add("ie" + ieVer);
    } else if (!msie.test(userAgent) && trident.test(userAgent)) {
      elem.classList.add("ie11");
    }

    // etc browser check
    const edge = /Edg/i;
    const opr = /OPR/i;
    const opera = /Opera/i;
    const chrome = /Chrome/i;
    const safari = /Safari/i;
    const firefox = /Firefox/i;

    edge.test(userAgent) ? elem.classList.add("edg") : null;
    opr.test(userAgent) || opera.test(userAgent) ? elem.classList.add("opera") : null;
    chrome.test(userAgent) ? elem.classList.add("chrome") : null;
    safari.test(userAgent) ? elem.classList.add("safari") : null;
    firefox.test(userAgent) ? elem.classList.add("firefox") : null;
  },
  /**
   * 디바이스 모바일 체크
   * @returns Boolean, html이 mobile 클래스를 가지고 있으면 true 반환
   */
  isMobile() {
    // const userAgent = navigator.userAgent;
    // const mobile = /Android|webOS|iPhone|iPad|iPop|BlackBerry|IEmobile|Opera Mini/i;

    // return mobile.test(userAgent);

    return document.querySelector("html").classList.contains("mobile");
  },
};

const scroll = {
  noScroll: function () {
    if (document.querySelector("html").style[0] == "--v-scrollTop") return; // 이미 계산되어 있는 경우 제외

    const HTMLScollTop = document.querySelector("html").scrollTop * -1;
    document.documentElement.style.setProperty("--v-scrollTop", `${HTMLScollTop}px`);

    const _body = document.querySelector("body");
    _body.classList.add("noScroll");
  },
  scroll: function (e) {
    setTimeout(() => {
      const popupItem = document.querySelectorAll(".pop_layer.open");
      if (popupItem.length > 0) return;

      let HTMLScrollTop = getComputedStyle(document.querySelector("body")).top;
      HTMLScrollTop = HTMLScrollTop.replace("px", "") * -1;

      const _body = document.querySelector("body");
      const _html = document.querySelector("html");
      _body.classList.remove("noScroll");

      if (!isNaN(HTMLScrollTop)) _html.scrollTo(0, HTMLScrollTop);

      document.documentElement.style = "";
    }, 50);
  },
};

const floatLayer = {
  bottomLayer(check) {
    setTimeout(() => {
      const bottomFloat = document.querySelector(".bottom_float");
      const footer = document.querySelector(".footer");
      let target = footer != null ? footer : document.querySelector(".container");
      target.style.paddingBottom = `${0}px`;
      const paddingB = bottomFloat.querySelector(".inner").offsetHeight;

      if (check) {
        target.style.paddingBottom = `${paddingB}px`;
      }
    }, 10);
  },
};

const htmlUI = {
  tagShoHideHandler(target, showHideTarget) {
    const self = target;
    if (!self) return false;
    const root = self.closest(".tag-contents-wrap");
    const btns = root.querySelectorAll(".tag-header .item");
    const showHideObjects = root.querySelectorAll(showHideTarget);
    const clickedBtn = root.querySelector(".tag-header .item.on");
    const clickedBtnIdx = Array.prototype.indexOf.call(btns, clickedBtn);
    const clickBtnIdx = Array.prototype.indexOf.call(btns, self);
    if (clickedBtnIdx === clickBtnIdx) return;
    clickedBtn.classList.remove("on");
    self.classList.add("on");
    showHideObjects[clickedBtnIdx].classList.remove("on");
    showHideObjects[clickBtnIdx].classList.add("on");
  },
};

export { front, scroll, floatLayer, htmlUI };
