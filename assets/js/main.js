/* =====================================================
   AJD LAW FIRM — Shared JS
   Injects the header + footer on every page so you only
   edit navigation/contact info in ONE place.
   ===================================================== */

(function () {
    // ---- WhatsApp config (edit number here once) ----
    var WA_NUMBER = "6285760024770";
    var WA_TEXT = encodeURIComponent("Halo AJD Law Firm, saya ingin konsultasi hukum.");
    var WA_LINK = "https://wa.me/" + WA_NUMBER + "?text=" + WA_TEXT;

    // WhatsApp icon (kept aesthetic, as requested)
    var WA_ICON =
        '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">' +
        '<path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.005-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/></svg>';

    // ---- Nav links (edit once) ----
    var LINKS = [
        { href: "index.html", label: "Beranda" },
        { href: "tentang.html", label: "Tentang Kami" },
        { href: "profil.html", label: "Profil" },
        { href: "artikel.html", label: "Artikel" },
        { href: "hubungi.html", label: "Hubungi Kami" }
    ];

    // Detect current page to highlight active link
    var path = window.location.pathname.split("/").pop() || "index.html";
    // Article detail pages live in /articles/ — keep "Artikel" active there
    if (window.location.pathname.indexOf("/articles/") !== -1) path = "artikel.html";

    function buildHeader() {
        var menu = LINKS.map(function (l) {
            var active = l.href === path ? ' class="active"' : "";
            return '<li><a href="' + relPrefix() + l.href + '"' + active + ">" + l.label + "</a></li>";
        }).join("");

        return (
            '<div class="topbar"><div class="container">' +
            "<span>Senin &ndash; Jumat &middot; 10.00&ndash;16.00 WIB</span>" +
            '<a href="mailto:admin.ajdlawfirm@gmail.com">admin.ajdlawfirm@gmail.com</a>' +
            "</div></div>" +
            '<header class="navbar"><div class="container nav-inner">' +
            '<a href="' + relPrefix() + 'index.html" class="logo-wrap">' +
            '<img class="logo-img" src="' + relPrefix() + 'assets/ajd-logo.jpg" alt="Logo AJD Law Firm">' +
            '<span class="logo-text"><strong>AJD Law Firm</strong><small>Andi Jamaro Dulung &amp; Associates</small></span>' +
            "</a>" +
            '<div class="nav-right">' +
            '<nav><ul class="nav-menu" id="navMenu">' + menu + "</ul></nav>" +
            '<a data-wa class="btn-gold nav-cta-mobile-hide">' + WA_ICON + " Konsultasi Sekarang</a>" +
            '<button class="hamburger" id="hamburger" aria-label="Buka menu">&#9776;</button>' +
            "</div></div></header>"
        );
    }

    function buildFooter() {
        return (
            '<div class="container"><div class="footer-grid">' +
            "<div>" +
            '<div class="footer-brand"><img src="' + relPrefix() + 'assets/ajd-logo.jpg" alt="Logo AJD Law Firm"><span>AJD Law Firm</span></div>' +
            '<p class="footer-about">Law Office Andi Jamaro Dulung &amp; Associates. Kantor hukum profesional yang berkomitmen pada keadilan substantif, integritas, dan pendampingan hukum yang berpihak pada masyarakat.</p>' +
            "</div>" +
            '<div class="footer-col"><h4>Navigasi</h4>' +
            LINKS.map(function (l) { return '<a href="' + relPrefix() + l.href + '">' + l.label + "</a>"; }).join("") +
            "</div>" +
            '<div class="footer-col"><h4>Layanan</h4>' +
            '<a href="' + relPrefix() + 'tentang.html">Litigasi &amp; Perdata</a>' +
            '<a href="' + relPrefix() + 'tentang.html">Hukum Pidana</a>' +
            '<a href="' + relPrefix() + 'tentang.html">Korporasi &amp; Bisnis</a>' +
            '<a href="' + relPrefix() + 'tentang.html">Konsultasi Hukum</a>' +
            "</div>" +
            '<div class="footer-col"><h4>Kontak</h4>' +
            '<p>Jl. Percetakan Negara No. 158, Lt. 3, Rawasari, Jakarta Pusat</p>' +
            '<a href="mailto:admin.ajdlawfirm@gmail.com">admin.ajdlawfirm@gmail.com</a>' +
            '<p>Senin &ndash; Jumat &middot; 10.00&ndash;16.00 WIB</p>' +
            "</div>" +
            "</div>" +
            '<div class="footer-bottom">&copy; ' + new Date().getFullYear() + " AJD Law Firm &mdash; Andi Jamaro Dulung &amp; Associates. All Rights Reserved.</div>" +
            "</div>"
        );
    }

    // Pages inside /articles/ need "../" to reach root assets
    function relPrefix() {
        return window.location.pathname.indexOf("/articles/") !== -1 ? "../" : "";
    }

    function init() {
        var headerMount = document.getElementById("site-header");
        var footerMount = document.getElementById("site-footer");
        if (headerMount) headerMount.innerHTML = buildHeader();
        if (footerMount) footerMount.innerHTML = buildFooter();

        // Wire up any element that should open WhatsApp
        document.querySelectorAll("[data-wa]").forEach(function (el) {
            el.setAttribute("href", WA_LINK);
            el.setAttribute("target", "_blank");
            el.setAttribute("rel", "noopener");
        });

        // Mobile menu toggle
        var hamburger = document.getElementById("hamburger");
        var navMenu = document.getElementById("navMenu");
        if (hamburger && navMenu) {
            hamburger.addEventListener("click", function () { navMenu.classList.toggle("active"); });
            navMenu.querySelectorAll("a").forEach(function (a) {
                a.addEventListener("click", function () { navMenu.classList.remove("active"); });
            });
        }
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }
})();
