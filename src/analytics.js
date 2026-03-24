export const trackPage = (path) => {
  if (window.gtag) {
    window.gtag('config', 'G-2499C2RMCG', { page_path: path });
  }
};

export const trackEvent = (category, action, label) => {
  if (window.gtag) {
    window.gtag('event', action, { event_category: category, event_label: label });
  }
};