(function () {
  "use strict";

  const cv = window.CV;
  const root = document.documentElement;

  const escapeHtml = (s) =>
    String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  const get = (path) => path.split(".").reduce((o, k) => (o ? o[k] : undefined), cv);

  const icons = {
    pin: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/></svg>',
    clock: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
    globe: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></svg>',
  };

  /* ---------- Content ---------- */
  function renderHero() {
    document.querySelectorAll("[data-bind]").forEach((el) => {
      el.textContent = get(el.dataset.bind) || "";
    });

    const p = cv.profile;
    const current = cv.experience.find((e) => !e.end);

    document.getElementById("hero-lead").innerHTML =
      `I design and build <strong>reliable backend systems</strong>: APIs, microservices and data layers ` +
      `for trading, banking and booking platforms. ${escapeHtml(p.yearsOfExperience)} years of turning complex problems into software that just works.`;

    document.getElementById("hero-badges").innerHTML = [
      `<li class="badge">${icons.pin}${escapeHtml(p.location)}</li>`,
      `<li class="badge">${icons.clock}${escapeHtml(p.yearsOfExperience)} years experience</li>`,
      `<li class="badge badge-accent">${icons.globe}${escapeHtml(p.workStatus.citizenship)}</li>`,
    ].join("");

    if (current) {
      document.getElementById("portrait-tag").textContent = `${current.role} @ ${current.employer || current.company}`;
    }

    const stack = ["C#", ".NET"];
    document.getElementById("code-card").innerHTML =
      `<span class="k">var</span> dev = <span class="k">new</span> Developer {\n` +
      `  Focus = <span class="s">"Backend"</span>,\n` +
      `  SecondaryFocus = <span class="s">"Frontend"</span>,\n` +
      `  Stack = [${stack.map((s) => `<span class="s">"${escapeHtml(s)}"</span>`).join(", ")}],\n` +
      `  Hobbies = ${p.hobbies.length}\n` +
      `};`;
  }

  /* ---------- About ---------- */
  const skillIcons = {
    api: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 7l-5 5 5 5M16 7l5 5-5 5M13.5 4l-3 16"/></svg>',
    cloud: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 18a4.5 4.5 0 0 1-.6-8.96A6 6 0 0 1 18 8.5a4.75 4.75 0 0 1-.5 9.5H7z"/><path d="M12 12v5M9.5 14.5L12 12l2.5 2.5"/></svg>',
    shield: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3l8 3v6c0 4.6-3.4 8.4-8 9-4.6-.6-8-4.4-8-9V6l8-3z"/><path d="M9 12l2 2 4-4"/></svg>',
    offline: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 21l5-9 3 4 3-6 5 11H4z"/><circle cx="17" cy="5" r="2"/></svg>',
  };

  function renderAbout() {
    const a = cv.about;
    document.getElementById("about-text").innerHTML =
      a.paragraphs.map((t) => `<p>${escapeHtml(t)}</p>`).join("") +
      `<p class="about-offline">${skillIcons.offline}<span>${escapeHtml(a.offline)}</span></p>`;

    document.getElementById("stats").innerHTML = cv.stats
      .map((s) => `<li class="stat"><span class="stat-value">${escapeHtml(s.value)}</span><span class="stat-label">${escapeHtml(s.label)}</span></li>`)
      .join("");

    document.getElementById("expertise").innerHTML = cv.expertise
      .map(
        (e, i) => `
        <li class="skill-card reveal">
          <span class="skill-num mono">0${i + 1}</span>
          <span class="skill-icon">${skillIcons[e.icon] || ""}</span>
          <h3>${escapeHtml(e.title)}</h3>
          <p>${escapeHtml(e.description)}</p>
          <div class="chips">${e.tech.map((t) => `<span class="chip">${escapeHtml(t)}</span>`).join("")}</div>
        </li>`
      )
      .join("");
  }

  /* ---------- Experience ---------- */
  const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  const FILTERS = [
    { id: "all", label: "All" },
    { id: "dotnet", label: ".NET", test: /\.NET|C#|ASP\.NET|Entity Framework/i },
    { id: "java", label: "Java", test: /^Java$|Spring|Hibernate|Maven/ },
    { id: "cpp", label: "C++", test: /C\+\+/ },
    { id: "cloud", label: "Cloud", test: /Azure|Docker|Ansible|CI\/CD|Firebase/i },
    { id: "data", label: "Data", test: /SQL|MariaDB|Elasticsearch|Stored procedures|Database|Entity Framework|Hibernate|JPA/i },
  ];

  const parseYm = (ym) => {
    if (!ym) {
      const now = new Date();
      return { y: now.getFullYear(), m: now.getMonth() + 1 };
    }
    const [y, m] = ym.split("-").map(Number);
    return { y, m };
  };
  const fmtYm = (ym) => (ym ? `${MONTHS[parseYm(ym).m - 1]} ${parseYm(ym).y}` : "Present");
  const monthsBetween = (start, end) => {
    const s = parseYm(start);
    const e = parseYm(end);
    return (e.y - s.y) * 12 + (e.m - s.m) + 1;
  };
  const fmtDuration = (months) => {
    const y = Math.floor(months / 12);
    const m = months % 12;
    const parts = [];
    if (y) parts.push(`${y} yr${y > 1 ? "s" : ""}`);
    if (m) parts.push(`${m} mo${m > 1 ? "s" : ""}`);
    return parts.join(" ");
  };

  function groupExperience(list) {
    const groups = [];
    list.forEach((role) => {
      const last = groups[groups.length - 1];
      if (last && last.company === role.company) last.roles.push(role);
      else groups.push({ company: role.company, initials: role.companyInitials, roles: [role] });
    });
    groups.forEach((g) => {
      g.start = g.roles.reduce((a, r) => (r.start < a ? r.start : a), g.roles[0].start);
      g.end = g.roles.some((r) => !r.end) ? null : g.roles.reduce((a, r) => (r.end > a ? r.end : a), g.roles[0].end);
      g.current = g.end === null;
    });
    return groups;
  }

  function renderRole(role, isGroup) {
    const title = isGroup
      ? `${escapeHtml(role.role)} <span class="at">· ${escapeHtml(role.product)}</span>`
      : escapeHtml(role.role);

    return `
      <div class="xp-role" data-role="${escapeHtml(role.id)}">
        <div class="xp-role-head">
          <h4 class="xp-role-title">${title}</h4>
          ${isGroup ? `<span class="xp-role-dates">${fmtYm(role.start)} — ${fmtYm(role.end)} · ${fmtDuration(monthsBetween(role.start, role.end))}</span>` : ""}
        </div>
        <span class="xp-domain">${escapeHtml(role.domain)}</span>
        ${role.context ? `<p class="xp-context">${escapeHtml(role.context)}</p>` : ""}
        ${
          role.bullets.length
            ? `<div class="xp-more"><ul class="xp-bullets">${role.bullets.map((b) => `<li>${escapeHtml(b)}</li>`).join("")}</ul></div>
               <button class="xp-toggle" type="button" aria-expanded="false">
                 <span>Show all</span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>
               </button>`
            : ""
        }
        <div class="chips" aria-label="Tech stack">${role.techStack.map((t) => `<span class="chip">${escapeHtml(t)}</span>`).join("")}</div>
      </div>`;
  }

  function renderExperience() {
    document.getElementById("highlights").innerHTML = cv.careerHighlights
      .map((h) => `<li class="highlight"><p class="highlight-title">${escapeHtml(h.title)}</p><p class="highlight-text">${escapeHtml(h.text)}</p></li>`)
      .join("");

    const groups = groupExperience(cv.experience);

    document.getElementById("timeline").innerHTML = groups
      .map((g) => {
        const isGroup = g.roles.length > 1;
        const single = g.roles[0];
        const sub = isGroup ? `${g.roles.length} roles` : escapeHtml(single.product);
        return `
        <li class="tl-item${g.current ? " is-current" : ""}">
          <div class="tl-meta">
            <p class="tl-dates">${fmtYm(g.start)} — ${fmtYm(g.end)}</p>
            <p class="tl-duration">${fmtDuration(monthsBetween(g.start, g.end))}</p>
          </div>
          <span class="tl-dot" aria-hidden="true"></span>
          <article class="xp-card${isGroup ? " is-group" : ""}">
            <header class="xp-company">
              <span class="xp-logo" aria-hidden="true">${escapeHtml(g.initials)}</span>
              <div>
                <h3 class="xp-company-name">${escapeHtml(g.company)}</h3>
                <p class="xp-company-sub">${sub}</p>
              </div>
            </header>
            ${g.roles.map((r) => renderRole(r, isGroup)).join("")}
          </article>
        </li>`;
      })
      .join("");

    initExperienceInteractions();
  }

  function initExperienceInteractions() {
    const timeline = document.getElementById("timeline");
    const filterBar = document.getElementById("xp-filters");
    const countEl = document.getElementById("xp-count");
    const total = cv.experience.length;

    timeline.addEventListener("click", (e) => {
      const btn = e.target.closest(".xp-toggle");
      if (!btn) return;
      const open = btn.getAttribute("aria-expanded") !== "true";
      btn.setAttribute("aria-expanded", String(open));
      btn.querySelector("span").textContent = open ? "Hide all" : "Show all";
      btn.previousElementSibling.classList.toggle("is-open", open);
    });

    const roleMatches = (role, filter) => !filter.test || role.techStack.some((t) => filter.test.test(t));

    filterBar.innerHTML = FILTERS.map((f) => {
      const n = cv.experience.filter((r) => roleMatches(r, f)).length;
      return `<button class="filter-btn" type="button" data-filter="${f.id}" aria-pressed="${f.id === "all"}">${escapeHtml(f.label)}<span class="count">${n}</span></button>`;
    }).join("");

    const apply = (filter) => {
      let shown = 0;
      timeline.querySelectorAll(".tl-item").forEach((item) => {
        let any = false;
        item.querySelectorAll(".xp-role").forEach((el) => {
          const role = cv.experience.find((r) => r.id === el.dataset.role);
          const match = roleMatches(role, filter);
          el.hidden = !match;
          if (match) {
            any = true;
            shown++;
          }
          el.querySelectorAll(".chip").forEach((chip) => {
            chip.classList.toggle("is-match", !!filter.test && filter.test.test(chip.textContent));
          });
        });
        const wasHidden = item.hidden;
        item.hidden = !any;
        if (any && wasHidden !== item.hidden) {
          item.classList.remove("is-entering");
          void item.offsetWidth;
          item.classList.add("is-entering");
        }
      });
      countEl.textContent = filter.test ? `Showing ${shown} of ${total} roles` : `${total} roles`;
    };

    filterBar.addEventListener("click", (e) => {
      const btn = e.target.closest(".filter-btn");
      if (!btn) return;
      filterBar.querySelectorAll(".filter-btn").forEach((b) => b.setAttribute("aria-pressed", String(b === btn)));
      apply(FILTERS.find((f) => f.id === btn.dataset.filter));
    });

    apply(FILTERS[0]);
  }

  /* ---------- Projects ---------- */
  const ART = {
    code: `
      <rect class="a-bg" width="400" height="225"/>
      <path class="a-grid" d="M0 56h400M0 112h400M0 168h400M100 0v225M200 0v225M300 0v225"/>
      <rect class="a-card" x="90" y="40" width="220" height="145" rx="10"/>
      <circle class="a-s" cx="108" cy="56" r="4"/><circle class="a-p" cx="122" cy="56" r="4"/><circle class="a-line-muted" cx="136" cy="56" r="4"/>
      <path class="a-line" d="M160 100l-22 18 22 18M240 100l22 18-22 18M212 92l-24 52"/>`,
    generic: `
      <rect class="a-bg" width="400" height="225"/>
      <path class="a-grid" d="M0 56h400M0 112h400M0 168h400M100 0v225M200 0v225M300 0v225"/>
      <path class="a-line" d="M150 112h100M200 62v100"/>`,
  };

  function renderProjects() {
    const grid = document.getElementById("project-grid");
    const bar = document.getElementById("project-filters");
    const projects = cv.projects || [];

    grid.innerHTML = projects
      .map((p) => {
        const links = p.links || {};
        const linkHtml = [
          links.live ? `<a href="${escapeHtml(links.live)}" target="_blank" rel="noopener noreferrer">Live ↗</a>` : "",
          links.code ? `<a href="${escapeHtml(links.code)}" target="_blank" rel="noopener noreferrer">Code ↗</a>` : "",
        ].join("");
        return `
        <li class="project-card reveal" data-cats="${escapeHtml((p.category || []).join("|"))}">
          <div class="project-art">
            ${
              p.image
                ? `<img src="${escapeHtml(p.image)}" width="1200" height="675" loading="lazy" decoding="async" alt="Screenshot of ${escapeHtml(p.title)}">`
                : `<svg viewBox="0 0 400 225" preserveAspectRatio="xMidYMid meet" role="img" aria-label="Illustration for ${escapeHtml(p.title)}">${ART[p.art] || ART.generic}</svg>`
            }
          </div>
          <div class="project-body">
            <p class="project-cats">${(p.category || []).map((c) => `<span>${escapeHtml(c)}</span>`).join("")}${p.year ? `<span>${escapeHtml(p.year)}</span>` : ""}</p>
            <h3 class="project-title">${escapeHtml(p.title)}</h3>
            <p class="project-desc">${escapeHtml(p.description)}</p>
            ${p.highlights && p.highlights.length ? `<ul class="project-highlights">${p.highlights.map((h) => `<li>${escapeHtml(h)}</li>`).join("")}</ul>` : ""}
            ${p.techStack && p.techStack.length ? `<div class="chips">${p.techStack.map((t) => `<span class="chip">${escapeHtml(t)}</span>`).join("")}</div>` : ""}
            ${linkHtml ? `<div class="project-links">${linkHtml}</div>` : ""}
          </div>
        </li>`;
      })
      .join("");

    if (projects.length < 6) {
      bar.hidden = true;
      return;
    }

    const cats = [...new Set(projects.flatMap((p) => p.category || []))];
    bar.innerHTML = ["All", ...cats]
      .map((c, i) => {
        const n = i === 0 ? projects.length : projects.filter((p) => (p.category || []).includes(c)).length;
        return `<button class="filter-btn" type="button" data-cat="${escapeHtml(c)}" aria-pressed="${i === 0}">${escapeHtml(c)}<span class="count">${n}</span></button>`;
      })
      .join("");

    bar.addEventListener("click", (e) => {
      const btn = e.target.closest(".filter-btn");
      if (!btn) return;
      bar.querySelectorAll(".filter-btn").forEach((b) => b.setAttribute("aria-pressed", String(b === btn)));
      const cat = btn.dataset.cat;
      grid.querySelectorAll(".project-card").forEach((card) => {
        const show = cat === "All" || card.dataset.cats.split("|").includes(cat);
        const wasHidden = card.hidden;
        card.hidden = !show;
        card.classList.add("is-visible");
        if (show && wasHidden) {
          card.classList.remove("is-entering");
          void card.offsetWidth;
          card.classList.add("is-entering");
        }
      });
    });
  }

  /* ---------- Education & contact ---------- */
  function renderEducation() {
    document.getElementById("edu-list").innerHTML = cv.education
      .map(
        (e) => `
        <li class="edu-item">
          <p class="edu-years">${escapeHtml(e.start)} — ${escapeHtml(e.end)}</p>
          <h3 class="edu-degree">${escapeHtml(e.degree)}</h3>
          <p class="edu-school">${escapeHtml(e.institution)}</p>
        </li>`
      )
      .join("");

  }

  function initContact() {
    document.getElementById("year").textContent = new Date().getFullYear();

    const btn = document.getElementById("copy-email");
    const label = btn.querySelector("span");
    btn.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(btn.dataset.email);
        label.textContent = "Copied!";
      } catch (e) {
        window.location.href = `mailto:${btn.dataset.email}`;
        return;
      }
      btn.classList.add("is-copied");
      setTimeout(() => {
        label.textContent = "Copy email";
        btn.classList.remove("is-copied");
      }, 2000);
    });
  }

  /* ---------- Theme ---------- */
  function initTheme() {
    const btn = document.getElementById("theme-toggle");
    const meta = document.querySelector('meta[name="theme-color"]');

    const apply = (theme, persist) => {
      root.dataset.theme = theme;
      btn.setAttribute("aria-label", theme === "dark" ? "Switch to light theme" : "Switch to dark theme");
      if (meta) meta.setAttribute("content", cv.theme[theme].bg);
      if (persist) {
        try { localStorage.setItem("theme", theme); } catch (e) {}
      }
    };

    apply(root.dataset.theme || "light", false);
    btn.addEventListener("click", () => apply(root.dataset.theme === "dark" ? "light" : "dark", true));

    matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
      let saved = null;
      try { saved = localStorage.getItem("theme"); } catch (err) {}
      if (!saved) apply(e.matches ? "dark" : "light", false);
    });
  }

  /* ---------- Header & navigation ---------- */
  function initNav() {
    const header = document.querySelector(".site-header");
    const nav = document.getElementById("nav");
    const toggle = document.getElementById("menu-toggle");
    const links = [...nav.querySelectorAll(".nav-link")];

    const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const setOpen = (open) => {
      nav.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    };
    toggle.addEventListener("click", () => setOpen(!nav.classList.contains("is-open")));
    links.forEach((a) => a.addEventListener("click", () => setOpen(false)));
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && nav.classList.contains("is-open")) {
        setOpen(false);
        toggle.focus();
      }
    });

    const byId = new Map(links.map((a) => [a.getAttribute("href").slice(1), a]));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          links.forEach((a) => {
            a.classList.remove("is-active");
            a.removeAttribute("aria-current");
          });
          const link = byId.get(entry.target.id);
          if (link) {
            link.classList.add("is-active");
            link.setAttribute("aria-current", "true");
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    byId.forEach((_, id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
  }

  /* ---------- Scroll reveal ---------- */
  function initReveal() {
    const items = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window) || matchMedia("(prefers-reduced-motion: reduce)").matches) {
      items.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    items.forEach((el, i) => {
      el.style.transitionDelay = `${Math.min(i, 6) * 70}ms`;
      observer.observe(el);
    });
  }

  renderHero();
  renderAbout();
  renderExperience();
  renderProjects();
  renderEducation();
  initContact();
  initTheme();
  initNav();
  initReveal();
})();
