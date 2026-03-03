document.addEventListener("DOMContentLoaded", () => {
    // 1. Inject the floating Navigation and Theme Switcher
    const nav = document.createElement("div");
    nav.id = "floating-nav";
    nav.innerHTML = `
        <label style="font-size: 0.75rem; color: var(--text); font-weight: bold; text-transform: uppercase;">🎨 Change Theme</label>
        <select id="theme-switcher">
            <option value="default">Dark (Default)</option>
            <option value="light">Normal White</option>
            <option value="creamy">Creamy (Warm)</option>
            <option value="matrix">Matrix (Hacker)</option>
            <option value="rainbow">Rainbow (Bright)</option>
            <option value="elegant">Elegant (Gold/Black)</option>
            <option value="blueprint">Blueprint (Engineering)</option>
            <option value="wireframe">Wireframe (Minimal)</option>
            <option value="cyberpunk">Cyberpunk (Neon)</option>
            <option value="miami">Miami Synthwave</option>
        </select>
        <div style="margin: 10px 0 5px 0; font-size: 0.75rem; color: var(--text); font-weight: bold; text-transform: uppercase;">🧭 Navigation</div>
        <a href="index.html">🏠 Home (Math & Theory)</a>
        <a href="pf_calc.html">⚡ v1: Basic Calculator</a>
        <a href="pf_calc_v2.html">🌊 v2: Sine Wave Viz</a>
        <a href="pf_calc_v3.html">📐 v3: Phasor Vectors</a>
        <a href="pf_calc_v4.html">⚙️ v4: 3-Phase Basic</a>
        <a href="pf_calc_v6.html">🔬 v6: 3-Phase Physics</a>
        <a href="pf_calc_v5.html">💶 v5: Master Lab + ROI</a>
    `;
    document.body.appendChild(nav);

    // 2. Handle Theme Switching logic
    const switcher = document.getElementById("theme-switcher");
    const savedTheme = localStorage.getItem("pf_theme") || "default";
    switcher.value = savedTheme;
    document.documentElement.setAttribute("data-theme", savedTheme);

    switcher.addEventListener("change", (e) => {
        const theme = e.target.value;
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("pf_theme", theme);
    });
});
