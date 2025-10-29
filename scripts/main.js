document.addEventListener("DOMContentLoaded", () => {
    const root = document.documentElement;
    const themeToggle = document.querySelector(".theme-toggle");
    const navToggle = document.querySelector(".nav-toggle");
    const navLinks = document.querySelector(".nav-links");
    const typewriterTarget = document.querySelector("[data-typing] .typewriter");
    const sections = document.querySelectorAll(".section");
    const timelineItems = document.querySelectorAll(".timeline-item");
    const subscribeForm = document.querySelector(".subscribe-form");
    const yearHolder = document.querySelector("[data-year]");

    const typingPhrases = [
        "Documenting the crossroads of product, design, and frontend",
        "Turning complex problems into readable stories",
        "Exploring user-centered practices in public",
    ];
    let typingIndex = 0;
    let isDeleting = false;
    let currentText = "";

    const setTheme = (mode) => {
        if (mode === "dark") {
            root.classList.add("theme-dark");
        } else {
            root.classList.remove("theme-dark");
        }
        localStorage.setItem("theme-preference", mode);
    };

    const initTheme = () => {
        const stored = localStorage.getItem("theme-preference");
        if (stored) {
            setTheme(stored);
            return;
        }
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        setTheme(prefersDark ? "dark" : "light");
    };

    const toggleTheme = () => {
        const nextTheme = root.classList.contains("theme-dark") ? "light" : "dark";
        setTheme(nextTheme);
    };

    const toggleNav = () => {
        const expanded = navToggle.getAttribute("aria-expanded") === "true";
        navToggle.setAttribute("aria-expanded", String(!expanded));
        navLinks.classList.toggle("is-open", !expanded);
    };

    const closeNavOnLink = () => {
        if (window.innerWidth > 960) {
            return;
        }
        navToggle.setAttribute("aria-expanded", "false");
        navLinks.classList.remove("is-open");
    };

    const typewriterLoop = () => {
        const fullText = typingPhrases[typingIndex % typingPhrases.length];
        const speed = isDeleting ? 70 : 110;

        if (!isDeleting && currentText.length < fullText.length) {
            currentText = fullText.substring(0, currentText.length + 1);
        } else if (isDeleting && currentText.length > 0) {
            currentText = fullText.substring(0, currentText.length - 1);
        } else {
            if (!isDeleting) {
                isDeleting = true;
                setTimeout(typewriterLoop, 1200);
                return;
            }
            isDeleting = false;
            typingIndex += 1;
        }

        if (typewriterTarget) {
            typewriterTarget.textContent = currentText;
        }
        setTimeout(typewriterLoop, speed);
    };

    const revealElements = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            }
        });
    };

    const attachReveal = () => {
        const observer = new IntersectionObserver(revealElements, {
            threshold: 0.18,
            rootMargin: "0px 0px -40px 0px",
        });
        document.querySelectorAll("[data-reveal]").forEach((element) => {
            observer.observe(element);
        });
    };

    const parallaxTimeline = () => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-active");
                }
            });
        }, { threshold: 0.35 });

        timelineItems.forEach((item) => observer.observe(item));
    };

    const setupSubscribeForm = () => {
        if (!subscribeForm) {
            return;
        }
        const message = subscribeForm.querySelector(".form-message");
        subscribeForm.addEventListener("submit", (event) => {
            event.preventDefault();
            const emailInput = subscribeForm.email;
            const email = emailInput.value.trim();
            if (!email) {
                message.textContent = "Please enter a valid email address.";
                message.style.color = "#ef4444";
                return;
            }
            message.textContent = "You're subscribed. Welcome aboard!";
            message.style.color = "var(--primary)";
            subscribeForm.reset();
        });
    };

    const flagSectionsForReveal = () => {
        sections.forEach((section) => {
            section.classList.add("with-divider");
            section.querySelectorAll(
                "article, .post-grid, .contact-card, .section-header, .timeline-item"
            ).forEach((child) => {
                child.setAttribute("data-reveal", "true");
            });
        });
    };

    initTheme();
    themeToggle?.addEventListener("click", toggleTheme);
    navToggle?.addEventListener("click", toggleNav);
    navLinks?.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", closeNavOnLink);
    });
    if (typewriterTarget) {
        typewriterLoop();
    }

    flagSectionsForReveal();
    attachReveal();
    parallaxTimeline();
    setupSubscribeForm();

    if (yearHolder) {
        yearHolder.textContent = new Date().getFullYear();
    }
});
