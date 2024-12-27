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

// フェードイン
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
