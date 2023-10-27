const sidebar = document.querySelector("[data-sidebar]");
const sidebarButton = document.querySelector("[data-sidebar-button]");
const sidebarLink = document.querySelector("[data-sidebar-link]");
const sidebarLinkText = document.querySelector("[data-sidebar-link-text]");

sidebarButton.addEventListener("click", () => {
  sidebar.classList.toggle("open");
});

// sidebarLinkText.addEventListener("click", () => {
//   sidebarLink.classList.toggle("active");
// });
sidebarLinkText.forEach(
  addEventListener("click", () => {
    sidebarLink.classList.toggle("active");
  }),
);
