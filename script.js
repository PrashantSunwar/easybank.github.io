const openNavBtn = document.getElementById('open-nav');
const closeNavBtn = document.getElementById('close-nav');
const navList = document.querySelector('.nav-list');
const header = document.querySelector('.header');
const sectionHero = document.querySelector('.hero');

openNavBtn.addEventListener('click', function () {
  navList.classList.toggle('reset-nav');
  this.classList.toggle('close-nav');
  closeNavBtn.classList.toggle('close-nav');
  header.classList.toggle('shadow');
})

closeNavBtn.addEventListener('click', function () {
  navList.classList.toggle('reset-nav');
  this.classList.toggle('close-nav');
  openNavBtn.classList.toggle('close-nav');
  header.classList.toggle('shadow');
})

const sectionHeroOptions = {
  rootMargin: "-150px 0px 0px 0px",
};

const sectionHeroObserver = new IntersectionObserver(function (entries, sectionHeroObserver) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      header.classList.add('nav-style');
    }
    else {
      header.classList.remove('nav-style');
    }
  })
}, sectionHeroOptions);

sectionHeroObserver.observe(sectionHero);