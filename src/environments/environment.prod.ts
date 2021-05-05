declare var window: {[key: string]: {[key: string]: any}};
export const environment = {
  production: true,
  pageHeader: window["env"]["pageHeader"] || "DevWovles Services",
  pageHeaderIcon: window["env"]["pageHeaderIcon"] || "/assets/logo/favicon/android-chrome-512x512.png",
  dataSource: window["env"]["dataSource"] || "/assets/data/links.json",
  debug: window["env"]["debug"] || false
};