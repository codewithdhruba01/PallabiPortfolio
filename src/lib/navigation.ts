export function navigateTo(view: string) {
  const path = view === "home" ? "/" : `/${view}`;
  if (window.location.pathname !== path) {
    window.history.pushState(null, "", path);
    window.dispatchEvent(new PopStateEvent("popstate"));
  }
}
