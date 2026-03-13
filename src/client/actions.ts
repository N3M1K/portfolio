/** Svelte action: scroll-reveal via IntersectionObserver */
export function reveal(node: HTMLElement) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          e.target
            .querySelectorAll(".sbf")
            .forEach((b) => b.classList.add("on"));
        }
      });
    },
    { threshold: 0.12 }
  );

  observer.observe(node);

  return {
    destroy() {
      observer.unobserve(node);
    },
  };
}
