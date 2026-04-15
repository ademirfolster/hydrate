const links = [
  { name: "Home", url: "#" },
  { name: "Shop", url: "#" },
  { name: "About", url: "#" },
  { name: "Contact", url: "#" },
];

const ulHeader = document.querySelector("#menu-links");

ulHeader.innerHTML = links
  .map(
    (link) => `
  <li><a href="${link.url}">${link.name}</a></li>
`,
  )
  .join("");
