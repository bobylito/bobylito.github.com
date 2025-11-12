export const SITE = {
  website: "https://bobylito.me/",
  author: "Alexandre Valsamou-Stanislawski",
  profile: "https://bobylito.me/",
  desc: "Personal website of bobylito",
  title: "Bobylito",
  ogImage: "bobylito-og.jpg",
  lightAndDarkMode: false,
  postPerIndex: 5,
  postPerPage: 10,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: false,
  showBackButton: true,
  editPost: {
    url: "https://github.com/bobylito/bobylito.github.com/edit/master/data",
    text: "Suggest Changes",
    appendFilePath: true,
  },
} as const;
