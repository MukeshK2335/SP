/* ---------- Shared header and footer (single source of truth) ---------- */
const currentPage = (() => {
  const file = window.location.pathname.split("/").pop();
  return !file || file === "" ? "index.html" : file;
})();

const navItems = [
  { key: "index", href: "index.html", label: "Home" },
  { key: "about", href: "about.html", label: "About" },
  { key: "services", href: "services.html", label: "Services" },
  { key: "projects", href: "index.html#projects", label: "Projects" },
  { key: "contact", href: "contact.html", label: "Contact us", cta: true }
];

const renderHeader = () => `
      <div class="container nav-wrap">
        <a class="brand" href="index.html" aria-label="Sandeep Engineering home">
          <img src="logo-sp.jpeg" alt="Sandeep Engineering SP logo">
          <span class="brand-copy">
            <strong>SANDEEP</strong>
            <span>ENGINEERING</span>
          </span>
        </a>
        <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="primary-navigation" aria-label="Open navigation">
          <span></span><span></span>
        </button>
        <nav class="primary-nav" id="primary-navigation" aria-label="Main navigation">
${navItems
  .map((item) => {
    const isCurrent = item.key === currentPage.replace(/\.html$/, "");
    const attrs = [
      item.cta ? 'class="nav-cta"' : "",
      isCurrent ? 'aria-current="page"' : ""
    ].filter(Boolean).join(" ");
    const arrow = item.cta ? ' <span aria-hidden="true">↗</span>' : "";
    return `          <a href="${item.href}"${attrs ? " " + attrs : ""}>${item.label}${arrow}</a>`;
  })
  .join("\n")}
        </nav>
      </div>
`;

const renderFooter = () => `
      <div class="container footer-main">
        <div class="footer-col footer-brand-col">
          <a class="brand footer-brand" href="index.html" aria-label="Sandeep Engineering home">
            <img src="logo-sp.jpeg" alt="">
            <span class="brand-copy"><strong>SANDEEP</strong><span>ENGINEERING</span></span>
          </a>
          <p class="footer-tagline">Stainless steel process equipment fabrication — tanks, vessels, heat exchangers and plant systems, built in Chennai.</p>
          <div class="footer-socials">
            <a class="footer-social" href="mailto:sandeepengineering@gmail.com" aria-label="Email Sandeep Engineering">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>
            </a>
            <a class="footer-social" href="https://wa.me/918248464186" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp Sandeep Engineering">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.52 3.48A11.86 11.86 0 0 0 12.04 0C5.5 0 .2 5.3.2 11.84c0 2.09.55 4.13 1.6 5.94L0 24l6.34-1.66a11.82 11.82 0 0 0 5.7 1.45h.01c6.54 0 11.84-5.3 11.84-11.84 0-3.16-1.23-6.13-3.47-8.47zM12.05 21.6h-.01a9.74 9.74 0 0 1-4.96-1.36l-.36-.21-3.76.98 1-3.66-.23-.38a9.76 9.76 0 0 1-1.5-5.13c0-5.38 4.38-9.76 9.77-9.76 2.61 0 5.06 1.02 6.9 2.86a9.7 9.7 0 0 1 2.86 6.9c0 5.38-4.38 9.76-9.71 9.76zm5.34-7.29c-.29-.15-1.72-.85-1.99-.95-.27-.1-.46-.15-.65.15-.19.29-.75.95-.92 1.14-.17.19-.34.21-.63.07-.29-.15-1.21-.45-2.31-1.42-.85-.76-1.43-1.7-1.59-1.99-.17-.29-.02-.44.13-.58.13-.13.29-.34.44-.51.15-.17.19-.29.29-.49.1-.19.05-.36-.02-.51-.07-.15-.65-1.57-.89-2.15-.23-.56-.47-.48-.65-.49h-.55c-.19 0-.51.07-.77.36-.26.29-.99.97-.99 2.36 0 1.39 1.02 2.74 1.16 2.93.15.19 2.04 3.11 4.94 4.37.69.3 1.22.48 1.64.62.69.22 1.31.19 1.81.12.55-.08 1.72-.7 1.96-1.38.24-.68.24-1.26.17-1.38-.07-.12-.26-.19-.55-.34z"/></svg>
            </a>
            <a class="footer-social" href="tel:+918248464186" aria-label="Call Sandeep Engineering">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            </a>
          </div>
        </div>

        <div class="footer-col">
          <h4 class="footer-heading">Explore</h4>
          <ul class="footer-links">
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">About us</a></li>
            <li><a href="services.html">Services</a></li>
            <li><a href="index.html#projects">Projects</a></li>
            <li><a href="about.html#process">Our process</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4 class="footer-heading">Equipment</h4>
          <ul class="footer-links">
            <li><a href="services.html">Storage tanks</a></li>
            <li><a href="services.html">Process vessels</a></li>
            <li><a href="services.html">Jacketed &amp; agitated tanks</a></li>
            <li><a href="services.html">Heat exchangers</a></li>
            <li><a href="services.html">Columns</a></li>
            <li><a href="services.html">Plant systems</a></li>
          </ul>
        </div>

        <div class="footer-col footer-contact-col">
          <h4 class="footer-heading">Reach us</h4>
          <ul class="footer-contact">
            <li>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              <span>SIDCO Women's Industrial Estate,<br>Thirumullaivoyal, Chennai, Tamil Nadu</span>
            </li>
            <li>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              <a href="tel:+918248464186">+91 82484 64186</a>
            </li>
            <li>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>
              <a href="mailto:sandeepengineering@gmail.com">sandeepengineering@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="container footer-bottom">
        <span>© <span id="year"></span> Sandeep Engineering. All rights reserved.</span>
        <span>GSTIN: 33BVJPP9868G1ZW</span>
      </div>
`;

const headerEl = document.querySelector(".site-header");
if (headerEl) headerEl.innerHTML = renderHeader();

// Logo goes to the home page; when already there, return to the top instead of reloading.
const brandLink = document.querySelector(".site-header .brand");
if (brandLink) {
  brandLink.addEventListener("click", (event) => {
    if (currentPage === "index.html") {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  });
}

const footerEl = document.querySelector(".site-footer");
if (footerEl) footerEl.innerHTML = renderFooter();

const menuToggle = document.querySelector(".menu-toggle");
const primaryNavigation = document.querySelector("#primary-navigation");

if (menuToggle && primaryNavigation) {
  const closeMenu = () => {
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
    primaryNavigation.classList.remove("is-open");
    document.body.classList.remove("menu-open");
  };

  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
    primaryNavigation.classList.toggle("is-open", !isOpen);
    document.body.classList.toggle("menu-open", !isOpen);
  });

  primaryNavigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });
}

const heroSlideshow = document.querySelector(".hero-slideshow");
if (heroSlideshow) {
  const slides = [...heroSlideshow.querySelectorAll(".hero-slide")];
  const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");

  if (slides.length > 1) {
    let activeIndex = 0;
    let timer;

    const showSlide = (index) => {
      activeIndex = (index + slides.length) % slides.length;
      slides.forEach((slide, slideIndex) => {
        slide.classList.toggle("is-active", slideIndex === activeIndex);
      });
    };

    const stopSlideshow = () => window.clearInterval(timer);
    const startSlideshow = () => {
      stopSlideshow();
      if (!motionPreference.matches && !document.hidden) {
        timer = window.setInterval(() => showSlide(activeIndex + 1), 6500);
      }
    };

    document.addEventListener("visibilitychange", startSlideshow);

    showSlide(activeIndex);
    startSlideshow();
  }
}

const year = document.querySelector("#year");
if (year) year.textContent = String(new Date().getFullYear());

/* ---------- Motion: scroll reveal, counters, parallax ---------- */
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

const formatCount = (value, decimals, comma) => {
  let text = decimals > 0 ? value.toFixed(decimals) : String(Math.round(value));
  if (comma) text = Number(text).toLocaleString("en-IN");
  return text;
};

const runCounter = (el) => {
  const target = parseFloat(el.dataset.count);
  const decimals = parseInt(el.dataset.decimals || "0", 10);
  const comma = el.dataset.format === "comma";

  if (reduceMotion.matches || Number.isNaN(target)) {
    el.textContent = formatCount(target || 0, decimals, comma);
    return;
  }

  const duration = 1500;
  const start = performance.now();

  const step = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = formatCount(target * eased, decimals, comma);
    if (progress < 1) requestAnimationFrame(step);
    else el.textContent = formatCount(target, decimals, comma);
  };

  requestAnimationFrame(step);
};

const revealItems = document.querySelectorAll(".reveal");
const counters = document.querySelectorAll("[data-count]");

if (reduceMotion.matches || !("IntersectionObserver" in window)) {
  revealItems.forEach((el) => el.classList.add("is-visible"));
  counters.forEach((el) => runCounter(el));
} else {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.15, rootMargin: "0px 0px -8% 0px" });

  revealItems.forEach((el) => revealObserver.observe(el));

  const counterObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      runCounter(entry.target);
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.5 });

  counters.forEach((el) => counterObserver.observe(el));
}

const parallaxItems = document.querySelectorAll("[data-parallax]");

const header = document.querySelector(".site-header");
const progressBar = document.createElement("div");
progressBar.className = "scroll-progress";
document.body.appendChild(progressBar);

let scrollTicking = false;

const onScroll = () => {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  progressBar.style.width = `${scrollable > 0 ? (scrollTop / scrollable) * 100 : 0}%`;
  if (header) header.classList.toggle("is-scrolled", scrollTop > 12);

  if (parallaxItems.length && !reduceMotion.matches) {
    const viewport = window.innerHeight;
    parallaxItems.forEach((img) => {
      const frame = img.parentElement;
      if (!frame) return;
      const rect = frame.getBoundingClientRect();
      const ratio = (rect.top + rect.height / 2 - viewport / 2) / viewport;
      const shift = Math.max(-1, Math.min(1, ratio)) * -20;
      img.style.transform = `translate3d(0, ${shift.toFixed(1)}px, 0) scale(1.12)`;
    });
  }

  scrollTicking = false;
};

const requestScrollUpdate = () => {
  if (scrollTicking) return;
  scrollTicking = true;
  requestAnimationFrame(onScroll);
};

window.addEventListener("scroll", requestScrollUpdate, { passive: true });
window.addEventListener("resize", requestScrollUpdate);
onScroll();

const enquiryForm = document.querySelector("#enquiry-form");
const formNote = document.querySelector("#form-note");
if (enquiryForm && formNote) {
  enquiryForm.addEventListener("submit", (event) => {
    event.preventDefault();
    formNote.classList.remove("is-error");
    if (!enquiryForm.reportValidity()) return;

    const formData = new FormData(enquiryForm);
    const name = String(formData.get("name")).trim();
    const phone = String(formData.get("phone")).trim();
    const requirement = String(formData.get("requirement")).trim();
    const details = String(formData.get("message")).trim();

    if (!name || !phone) {
      formNote.classList.add("is-error");
      formNote.textContent = "Please enter your name and phone number before continuing.";
      return;
    }

    const message = [
      "Hello Sandeep Engineering, I have a project enquiry.",
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Requirement: ${requirement}`,
      details ? `Project details: ${details}` : ""
    ].filter(Boolean).join("\n");

    const whatsappUrl = `https://wa.me/918248464186?text=${encodeURIComponent(message)}`;
    const whatsappWindow = window.open(whatsappUrl, "_blank");
    if (whatsappWindow) {
      whatsappWindow.opener = null;
      formNote.textContent = "WhatsApp is opening with your enquiry. Please review and send the message there.";
    } else {
      formNote.classList.add("is-error");
      formNote.textContent = "Your browser blocked the WhatsApp window. Please allow pop-ups or call us using the numbers on this page.";
    }
  });
}

/* ---------- Lightbox ---------- */
const lightbox = document.querySelector("#lightbox");
if (lightbox) {
  const lightboxImage = lightbox.querySelector(".lightbox-image");
  const lightboxCaption = lightbox.querySelector(".lightbox-caption");
  const lightboxClose = lightbox.querySelector(".lightbox-close");
  const lightboxPrev = lightbox.querySelector(".lightbox-prev");
  const lightboxNext = lightbox.querySelector(".lightbox-next");
  const viewButtons = [...document.querySelectorAll(".project-view")];
  let currentIndex = 0;

  const showImage = (index) => {
    currentIndex = (index + viewButtons.length) % viewButtons.length;
    const btn = viewButtons[currentIndex];
    lightboxImage.src = btn.dataset.image;
    lightboxImage.alt = btn.getAttribute("aria-label");
    lightboxCaption.textContent = btn.dataset.caption || "";
  };

  const openLightbox = (index) => {
    showImage(index);
    lightbox.hidden = false;
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    lightbox.hidden = true;
    document.body.style.overflow = "";
  };

  viewButtons.forEach((btn, index) => {
    btn.addEventListener("click", (event) => {
      event.stopPropagation();
      openLightbox(index);
    });
  });

  // Also allow clicking anywhere on the card (except existing links) to open
  document.querySelectorAll(".project-card").forEach((card, index) => {
    card.addEventListener("click", (event) => {
      const tag = event.target.tagName;
      if (tag === "A") return;
      openLightbox(index);
    });
  });

  lightboxClose.addEventListener("click", closeLightbox);
  lightboxPrev.addEventListener("click", () => showImage(currentIndex - 1));
  lightboxNext.addEventListener("click", () => showImage(currentIndex + 1));

  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) closeLightbox();
  });

  document.addEventListener("keydown", (event) => {
    if (lightbox.hidden) return;
    if (event.key === "Escape") closeLightbox();
    if (event.key === "ArrowLeft") showImage(currentIndex - 1);
    if (event.key === "ArrowRight") showImage(currentIndex + 1);
  });
}
