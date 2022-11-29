import logo from "../../assets/images/logo64.png";

function Nav({ currentPage, SetCurrentPage }) {
  const navHandler = (name) => SetCurrentPage(name);

  // Nav Links
  const navLinks = [
    { name: "Portfolio", href: "#portfolio" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
    { name: "Resume", href: "#resume" },
  ];

  return (
    <nav>
      <a
        href={"/"}
        onClick={() => {
          navHandler("Home");
        }}
        className="portfolio-title"
      >
        <img src={logo} alt="" loading="lazy" />
        Elizabeth Dieterich
      </a>

      <ul>
        {navLinks.map((link) => (
          <li key={link.name}>
            <a
              href={link.href}
              onClick={() => {
                navHandler(link.name);
              }}
              className={
                currentPage === link.name ? "navActive" : "navInactive"
              }
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
