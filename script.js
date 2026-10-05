const petalField = document.querySelector(".petal-field");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (petalField && !reducedMotion) {
    const petalCount = window.innerWidth < 700 ? 12 : 20;

    for (let index = 0; index < petalCount; index += 1) {
        const petal = document.createElement("span");
        petal.className = "petal";
        petal.style.setProperty("--left", `${Math.random() * 100}%`);
        petal.style.setProperty("--size", `${6 + Math.random() * 9}px`);
        petal.style.setProperty("--opacity", `${0.35 + Math.random() * 0.45}`);
        petal.style.setProperty("--blur", `${Math.random() * 1.2}px`);
        petal.style.setProperty("--rotate", `${Math.random() * 360}deg`);
        petal.style.setProperty("--drift", `${-90 + Math.random() * 180}px`);
        petal.style.setProperty("--duration", `${9 + Math.random() * 11}s`);
        petal.style.setProperty("--delay", `${-Math.random() * 18}s`);
        petalField.append(petal);
    }
}
