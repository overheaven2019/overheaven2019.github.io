/* global REDEFINE */

window.addEventListener('DOMContentLoaded', () => {

  REDEFINE.themeInfo = {
    theme: `Redefine v${REDEFINE.theme_config.version}`,
    author: 'EvanNotFound',
    repository: 'https://github.com/EvanNotFound/hexo-theme-redefine'
  }

  REDEFINE.localStorageKey = 'REDEFINE-THEME-STATUS';

  REDEFINE.styleStatus = {
    isExpandPageWidth: false,
    isDark: false,
    fontSizeLevel: 0,
    isOpenPageAside: true
  }

  // print theme base info
  REDEFINE.printThemeInfo = () => {
   
  }

  // set styleStatus to localStorage
  REDEFINE.setStyleStatus = () => {
    localStorage.setItem(REDEFINE.localStorageKey, JSON.stringify(REDEFINE.styleStatus));
  }

  // get styleStatus from localStorage
  REDEFINE.getStyleStatus = () => {
    let temp = localStorage.getItem(REDEFINE.localStorageKey);
    if (temp) {
      temp = JSON.parse(temp);
      for (let key in REDEFINE.styleStatus) {
        REDEFINE.styleStatus[key] = temp[key];
      }
      return temp;
    } else {
      return null;
    }
  }

  REDEFINE.refresh = () => {
    REDEFINE.initUtils();
    REDEFINE.initMenuShrink();
    REDEFINE.initModeToggle();
    REDEFINE.initBackToTop();
    if (REDEFINE.theme_config.style.first_screen.subtitle.enable === true) {
      REDEFINE.initTyped('subtitle');
    }

    if (REDEFINE.theme_config.plugins.mermaid.enable === true) {
      REDEFINE.initMermaid();
    }

    if (REDEFINE.theme_config.local_search.enable === true) {
      REDEFINE.initLocalSearch();
    }

    if (REDEFINE.theme_config.code_block.copy === true) {
      REDEFINE.initCopyCode();
    }

    if (REDEFINE.theme_config.lazyload.enable === true) {
      REDEFINE.initLazyLoad();
    }
  }

  REDEFINE.printThemeInfo();
  REDEFINE.refresh();
});
