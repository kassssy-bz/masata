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

// メニュー選択時
document.addEventListener("DOMContentLoaded", () => {
  const menuItems = document.querySelectorAll(".menu-item__link");

  menuItems.forEach((item) => {
    item.addEventListener("click", () => {
      // 他のメニュー項目から `active` クラスを削除
      menuItems.forEach((i) => i.classList.remove("selected"));
      // クリックされた項目に `active` クラスを追加
      item.classList.add("selected");
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const applyTextLimit = () => {
    const maxLength = window.innerWidth <= 768 ? 40 : 46; // SPは40文字、それ以外は46文字
    const elements = document.querySelectorAll(".news__title");

    elements.forEach((element) => {
      const originalText =
        element.getAttribute("data-original-text") || element.innerText.trim();
      // オリジナルのテキストを保存（1回目だけ）
      if (!element.hasAttribute("data-original-text")) {
        element.setAttribute("data-original-text", originalText);
      }

      // テキストを制限
      if (originalText.length > maxLength) {
        element.innerText = originalText.substring(0, maxLength) + "...";
      } else {
        element.innerText = originalText; // 制限不要の場合は元のテキスト
      }
    });
  };

  // 初期実行
  applyTextLimit();

  // リサイズ時にも適用
  window.addEventListener("resize", applyTextLimit);
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
