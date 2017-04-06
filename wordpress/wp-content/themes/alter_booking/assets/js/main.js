const header = document.querySelector('#header'),
  makeNavSmall = () => {
    header.classList.remove('large');
    header.classList.add('small');
  },
  makeNavBig = () => {
    header.classList.add('large');
    header.classList.remove('small');
  };

window.onscroll = () => {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    makeNavSmall();
  } else {
    makeNavBig();
  }
};

function reziseFooterHeader() {
  const footerHeight = document.querySelector('#footer').clientHeight,
    headerHeight = header.clientHeight,
    footerSpacer = document.querySelector('.footer__spacer'),
    headerSpacer = document.querySelector('.header__spacer');
  footerSpacer.style.height = `${footerHeight}px`;
  headerSpacer.style.height = `${headerHeight}px`;
}

window.onresize = () => {
  reziseFooterHeader();
};
reziseFooterHeader();