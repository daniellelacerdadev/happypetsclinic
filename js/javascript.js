(function() {
    const e = document.createElement("link").relList;
    if (e && e.supports && e.supports("modulepreload"))
        return;
    for (const s of document.querySelectorAll('link[rel="modulepreload"]'))
        r(s);
    new MutationObserver(s => {
        for (const o of s)
            if (o.type === "childList")
                for (const c of o.addedNodes)
                    c.tagName === "LINK" && c.rel === "modulepreload" && r(c)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function n(s) {
        const o = {};
        return s.integrity && (o.integrity = s.integrity),
        s.referrerPolicy && (o.referrerPolicy = s.referrerPolicy),
        s.crossOrigin === "use-credentials" ? o.credentials = "include" : s.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin",
        o
    }
    function r(s) {
        if (s.ep)
            return;
        s.ep = !0;
        const o = n(s);
        fetch(s.href, o)
    }
}
)();

document.addEventListener("click", t => {
    a.classList.contains("show") && !a.contains(t.target) && !l.contains(t.target) && f()
}
);
const m = document.getElementById("header");
function E() {
    window.scrollY > 50 ? m.classList.add("scrolled") : m.classList.remove("scrolled")
}
window.addEventListener("scroll", E);
const w = document.querySelectorAll(".reveal");
window.addEventListener("load", () => {
    setTimeout( () => {
        document.body.classList.add("js-loaded");
        const t = new IntersectionObserver(e => {
            e.forEach(n => {
                n.isIntersecting && (n.target.classList.add("active"),
                t.unobserve(n.target))
            }
            )
        }
        ,{
            threshold: .1,
            rootMargin: "0px 0px -50px 0px"
        });
        w.forEach(e => t.observe(e))
    }
    , 100)
}
);
const q = document.querySelectorAll("section[id]");
function I() {
    const t = window.scrollY + 100;
    q.forEach(e => {
        const n = e.offsetTop
          , r = e.offsetHeight
          , s = e.getAttribute("id");
        t >= n && t < n + r && u.forEach(o => {
            o.classList.remove("active"),
            o.getAttribute("href") === `#${s}` && o.classList.add("active")
        }
        )
    }
    )
}
window.addEventListener("scroll", I);
const h = document.querySelectorAll(".faq_item");
h.forEach(t => {
    const e = t.querySelector(".faq_question");
    e.addEventListener("click", () => {
        const n = t.classList.contains("active");
        h.forEach(r => {
            r.classList.remove("active"),
            r.querySelector(".faq_question").setAttribute("aria-expanded", "false")
        }
        ),
        n || (t.classList.add("active"),
        e.setAttribute("aria-expanded", "true"))
    }
    )
}
);
const i = document.getElementById("contact-form");
i == null || i.addEventListener("submit", t => {
    t.preventDefault(),
    new FormData(i),
    document.getElementById("name").value;
    const e = i.querySelector('button[type="submit"]')
      , n = e.innerHTML;
    e.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
        Appointment Requested!
    `,
    e.style.background = "var(--accent)",
    e.style.borderColor = "var(--accent)",
    e.disabled = !0,
    setTimeout( () => {
        e.innerHTML = n,
        e.style.background = "",
        e.style.borderColor = "",
        e.disabled = !1,
        i.reset()
    }
    , 3e3)
}
);
document.querySelectorAll('a[href^="#"]').forEach(t => {
    t.addEventListener("click", function(e) {
        const n = this.getAttribute("href");
        if (n === "#")
            return;
        const r = document.querySelector(n);
        r && (e.preventDefault(),
        r.scrollIntoView({
            behavior: "smooth",
            block: "start"
        }))
    })
}
);
function S() {
    document.querySelectorAll(".hero_stat-number").forEach(e => {
        const n = e.textContent
          , r = n.includes("+");
        if (n.includes("/"))
            return;
        const o = parseInt(n.replace(/[^0-9]/g, ""));
        if (isNaN(o))
            return;
        let c = 0;
        const p = o / 40
          , v = r ? "+" : ""
          , L = setInterval( () => {
            c += p,
            c >= o ? (e.textContent = o.toLocaleString() + v,
            clearInterval(L)) : e.textContent = Math.floor(c).toLocaleString() + v
        }
        , 30)
    }
    )
}
const g = document.querySelector(".hero")
  , y = new IntersectionObserver(t => {
    t.forEach(e => {
        e.isIntersecting && (S(),
        y.unobserve(e.target))
    }
    )
}
,{
    threshold: .3
});
g && y.observe(g);
