export default class ThemeSwitcher {
  themes = {
    dark: {
      src: "./src/img/themeDark.png",
      alt: "dark theme image",
      storageValue: "dark",
    },
    light: {
      src: "./src/img/themeLight.png",
      alt: "light theme image",
      storageValue: "light",
    },
  };

  storageKey = "theme";

  constructor() {
    this.switchThemeBtn = document.querySelector("[data-theme-switcher]");
    this.themeImg = this.switchThemeBtn.querySelector(".header__theme-img");
    this.setInitialTheme();
    this.bindEvents();
  }

  getCachedTheme() {
    return localStorage.getItem(this.storageKey);
  }

  setThemeToCache(theme) {
    localStorage.setItem(this.storageKey, theme);
  }

  setInitialTheme() {
    const cachedTheme = this.getCachedTheme();
    const isDarkTheme = cachedTheme === this.themes.dark.storageValue;

    document.documentElement.classList.toggle("is-dark-theme", isDarkTheme);

    this.updateButtonImage(isDarkTheme ? this.themes.dark : this.themes.light);
  }

  updateButtonImage(theme) {
    this.themeImg.src = theme.src;
    this.themeImg.alt = theme.alt;
  }

  onClick() {
    const cachedTheme = this.getCachedTheme();
    const isDarkTheme = cachedTheme === this.themes.dark.storageValue;

    const newTheme = isDarkTheme ? this.themes.light : this.themes.dark;

    this.setThemeToCache(newTheme.storageValue);
    document.documentElement.classList.toggle("is-dark-theme", !isDarkTheme);

    this.updateButtonImage(newTheme);
  }

  bindEvents() {
    this.switchThemeBtn.addEventListener("click", () => this.onClick());
  }
}
