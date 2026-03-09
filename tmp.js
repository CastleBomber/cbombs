useEffect(() => {
  const hero = headerRef.current;
  if (!hero) return;

  let ticking = false;

  const updateHero = () => {
    const scrollY = window.scrollY;

    // fade distance (increase if you want slower fade)
    const fadePoint = 500;

    const progress = Math.min(scrollY / fadePoint, 1);

    hero.style.transform = `translateY(${progress * -120}px)`;
    hero.style.opacity = `${1 - progress}`;

    ticking = false;
  };

  const onScroll = () => {
    if (!ticking) {
      window.requestAnimationFrame(updateHero);
      ticking = true;
    }
  };

  // Run once on load so it starts correct even if page restores scroll
  updateHero();

  window.addEventListener("scroll", onScroll, { passive: true });

  // Section reveal (keep your observer)
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle("show", entry.isIntersecting);
      });
    },
    { threshold: 0.35 }
  );

  document.querySelectorAll(".scroll-reveal").forEach((el) => observer.observe(el));

  return () => {
    window.removeEventListener("scroll", onScroll);
    observer.disconnect();
  };
}, []);
