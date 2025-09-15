export default function setInitialColorMode() {
  return `(function() {
    try {
      const key = 'app-theme';
      const raw = localStorage.getItem(key);
      if (raw) {
        const parsed = JSON.parse(raw);
        const mode = parsed?.state?.mode;
        if (mode === 'dark') document.documentElement.classList.add('dark');
        else document.documentElement.classList.remove('dark');
      } else {
        // respect system preference if no stored value
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (prefersDark) document.documentElement.classList.add('dark');
      }
    } catch (e) {
      // ignore errors
    }
  })();`;
}
