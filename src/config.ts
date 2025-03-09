export const SITE = {
  website: "https://bobylito.me/",
  author: "Alexandre Valsamou-Stanislawski",
  profile: "https://bobylito.me/",
  desc: "Personal website of bobylito",
  title: "Bobylito",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true,
  editPost: {
    url: "https://github.com/bobylito/bobylito.github.com/edit/master/src/data/blog",
    text: "Suggest Changes",
    appendFilePath: true,
  },
} as const;
