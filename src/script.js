/* ================================================
   김지오 홈페이지 — script.js
   ================================================ */

(function () {
  'use strict';

  /* ── Hero 이미지 Ken Burns 효과 ── */
  const heroImg = document.querySelector('.hero__img');
  if (heroImg) {
    if (heroImg.complete) {
      heroImg.classList.add('loaded');
    } else {
      heroImg.addEventListener('load', () => heroImg.classList.add('loaded'));
    }
  }

  /* ── Nav: 스크롤 시 배경 전환 ── */
  const nav = document.getElementById('nav');
  if (nav) {
    const onScroll = () => {
      nav.classList.toggle('scrolled', window.scrollY > 60);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ── Fade-up: Intersection Observer ── */
  const fadeEls = document.querySelectorAll('.fade-up');
  if (fadeEls.length && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    fadeEls.forEach((el) => observer.observe(el));
  } else {
    /* IntersectionObserver 미지원 브라우저: 바로 표시 */
    fadeEls.forEach((el) => el.classList.add('is-visible'));
  }
})();
