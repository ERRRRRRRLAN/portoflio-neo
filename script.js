// Interaksi kecil: navbar menyusut saat scroll
const nav = document.querySelector('.nav');
const onScroll = () => {
  if (window.scrollY > 40) {
    nav.style.padding = '.8rem 2rem';
    nav.style.boxShadow = '8px 8px 16px var(--shadow-dark), -8px -8px 16px var(--shadow-light)';
  } else {
    nav.style.padding = '1.2rem 2rem';
    nav.style.boxShadow = 'none';
  }
};
window.addEventListener('scroll', onScroll);

// Smooth scroll untuk link dalam halaman
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href');
    if (id.length > 1) {
      e.preventDefault();
      document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
