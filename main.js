// ハンバーガーメニュー

$(function () {
  $(".burger-btn").on("click", function () {
    $(".bar").toggleClass("cross");
    $(".burger__nav").toggleClass("open");
    $(".burger-musk").toggleClass("open");
    $("body").toggleClass("noscroll");
    $(".burger-logo").toggleClass("show");
  });
});

//slicker
// 幅を動的に設定
const setSlickElementsWidth = () => {
  const elements = document.querySelectorAll("#js-slick-slider li");
  for (let i = 0; i < elements.length; i++) {
    const width = elements[i].offsetWidth;
    elements[i].style.width = `${width}px`; // 幅を設定
  }
};

// 文字数に基づいてスピードを設定
const setTextSpeed = (length) => {
  return length * 500; // 長さに応じて速度を設定
};

// slickの設定
const slickFunction = () => {
  $("#js-slick-slider ul")
    .slick({
      infinite: true,
      autoplay: true,
      autoplaySpeed: 0,
      speed: setTextSpeed(4), // 初期の速度設定（例: 4文字分の速度）
      cssEase: "linear",
      swipe: false,
      arrows: false,
      pauseOnFocus: false,
      pauseOnHover: false,
      variableWidth: true, // 文字幅に合わせて可変幅にする
    })
    .on("afterChange", function (event, slick, currentSlide, nextSlide) {
      // スライド後に速度を調整
      switch (currentSlide) {
        case 3:
          $(this).slick("slickSetOption", "speed", setTextSpeed(3)); // 3番目のスライド（文字数に応じたスピード設定）
          break;
        case 5:
          $(this).slick("slickSetOption", "speed", setTextSpeed(5)); // 5番目のスライド（文字数に応じたスピード設定）
          break;
        default:
          $(this).slick("slickSetOption", "speed", setTextSpeed(4)); // その他のスライドはデフォルト速度
          break;
      }
    });
};

window.addEventListener("DOMContentLoaded", () => {
  setSlickElementsWidth();
  slickFunction();
});
// フェードイン

window.addEventListener("load", function () {
  gsap.registerPlugin(ScrollTrigger);

  const fadeInItems = document.querySelectorAll(".animated__fadeIn-1");

  fadeInItems.forEach((item) => {
    ScrollTrigger.create({
      trigger: item,
      start: "top 80%", // 要素が上部から80%の位置で発火
      markers: true,
      onEnter: () => {
        // 要素内に入ったら、js-showクラスをつける
        item.classList.add("js-show");
      },
    });
  });
});

window.addEventListener("load", function () {
  gsap.registerPlugin(ScrollTrigger);

  const fadeInItems = document.querySelectorAll(".animated__fadeIn-2");

  fadeInItems.forEach((item) => {
    ScrollTrigger.create({
      trigger: item,
      start: "top 80%", // 要素が上部から80%の位置で発火
      markers: true,
      onEnter: () => {
        // 要素内に入ったら、js-showクラスをつける
        item.classList.add("js-show");
      },
    });
  });
});
window.addEventListener("load", function () {
  gsap.registerPlugin(ScrollTrigger);

  const fadeInItems = document.querySelectorAll(".animated__fadeIn-3");

  fadeInItems.forEach((item) => {
    ScrollTrigger.create({
      trigger: item,
      start: "top 80%", // 要素が上部から80%の位置で発火
      markers: true,
      onEnter: () => {
        // 要素内に入ったら、js-showクラスをつける
        item.classList.add("js-show");
      },
    });
  });
});
window.addEventListener("load", function () {
  gsap.registerPlugin(ScrollTrigger);

  const fadeInItems = document.querySelectorAll(".animated__fadeIn-4");

  fadeInItems.forEach((item) => {
    ScrollTrigger.create({
      trigger: item,
      start: "top 50%", // 要素が上部から80%の位置で発火
      markers: true,
      onEnter: () => {
        // 要素内に入ったら、js-showクラスをつける
        item.classList.add("js-show");
      },
    });
  });
});
window.addEventListener("load", function () {
  gsap.registerPlugin(ScrollTrigger);

  const fadeInItems = document.querySelectorAll(".animated__fadeIn-5");

  fadeInItems.forEach((item) => {
    ScrollTrigger.create({
      trigger: item,
      start: "top 80%", // 要素が上部から80%の位置で発火
      markers: true,
      onEnter: () => {
        // 要素内に入ったら、js-showクラスをつける
        item.classList.add("js-show");
      },
    });
  });
});
window.addEventListener("load", function () {
  gsap.registerPlugin(ScrollTrigger);

  const fadeInItems = document.querySelectorAll(".animated__fadeIn-6");

  fadeInItems.forEach((item) => {
    ScrollTrigger.create({
      trigger: item,
      start: "top 50%", // 要素が上部から80%の位置で発火
      markers: true,
      onEnter: () => {
        // 要素内に入ったら、js-showクラスをつける
        item.classList.add("js-show");
      },
    });
  });
});
