// navbar.js
document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.getElementById("navbar");
  
    // Define all the pages
    const pages = [
      { name: "Home", link: "index.html" },
      { name: "About Us", link: "about.html" },
      { name: "Services", link: "services.html" },
      { name: "Career Counseling", link: "career-counseling.html" },
      { name: "Contact", link: "contact.html" },
    ];
  
    // Build navigation menu
    let navHTML = `<nav>
      <ul class="nav-links">`;
  
    pages.forEach((page) => {
      navHTML += `<li><a href="${page.link}">${page.name}</a></li>`;
    });
  
    navHTML += `
      </ul>
    </nav>`;
  
    navbar.innerHTML = navHTML;
  });
  