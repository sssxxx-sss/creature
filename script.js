// Superformula: r(θ) = ( |cos(m·θ/4)/a|^n2 + |sin(m·θ/4)/b|^n3 ) ^ (-1/n1)
// Lower n values = sharper spikes

const shapes = [
    // Triangular spikes
    { m: 3, n1: 0.1, n2: 0.1, n3: 0.1, a: 1, b: 1 },
    { m: 3, n1: 0.08, n2: 0.08, n3: 0.08, a: 1, b: 1 },
    { m: 3, n1: 0.15, n2: 0.15, n3: 0.15, a: 1, b: 1 },
    { m: 3, n1: 0.1, n2: 0.05, n3: 0.1, a: 1, b: 1 },
    { m: 3, n1: 0.05, n2: 0.1, n3: 0.05, a: 1, b: 1 },
    { m: 3, n1: 0.08, n2: 0.08, n3: 0.08, a: 1, b: 1 },
    { m: 3, n1: 0.1, n2: 0.2, n3: 0.1, a: 1, b: 1 },
    { m: 3, n1: 0.2, n2: 0.1, n3: 0.2, a: 1, b: 1 },
    { m: 3, n1: 0.1, n2: 0.1, n3: 0.1, a: 0.7, b: 1.3 },
    { m: 3, n1: 0.1, n2: 0.1, n3: 0.1, a: 1.3, b: 0.7 },
    { m: 3, n1: 0.15, n2: 0.05, n3: 0.15, a: 1, b: 1 },
    { m: 3, n1: 0.05, n2: 0.15, n3: 0.05, a: 1, b: 1 },

    // Quad spikes
    { m: 4, n1: 0.1, n2: 0.1, n3: 0.1, a: 1, b: 1 },
    { m: 4, n1: 0.08, n2: 0.08, n3: 0.08, a: 1, b: 1 },
    { m: 4, n1: 0.15, n2: 0.15, n3: 0.15, a: 1, b: 1 },
    { m: 4, n1: 0.1, n2: 0.05, n3: 0.1, a: 1, b: 1 },
    { m: 4, n1: 0.05, n2: 0.1, n3: 0.05, a: 1, b: 1 },
    { m: 4, n1: 0.1, n2: 0.1, n3: 0.1, a: 0.7, b: 1.3 },
    { m: 4, n1: 0.1, n2: 0.1, n3: 0.1, a: 1.4, b: 0.6 },
    { m: 4, n1: 0.15, n2: 0.05, n3: 0.15, a: 1, b: 1 },
    { m: 4, n1: 0.05, n2: 0.15, n3: 0.05, a: 1, b: 1 },
    { m: 4, n1: 0.2, n2: 0.1, n3: 0.2, a: 1, b: 1 },

    // Penta spikes
    { m: 5, n1: 0.1, n2: 0.1, n3: 0.1, a: 1, b: 1 },
    { m: 5, n1: 0.08, n2: 0.08, n3: 0.08, a: 1, b: 1 },
    { m: 5, n1: 0.15, n2: 0.15, n3: 0.15, a: 1, b: 1 },
    { m: 5, n1: 0.1, n2: 0.05, n3: 0.1, a: 1, b: 1 },
    { m: 5, n1: 0.05, n2: 0.1, n3: 0.05, a: 1, b: 1 },
    { m: 5, n1: 0.1, n2: 0.1, n3: 0.1, a: 0.8, b: 1.2 },
    { m: 5, n1: 0.1, n2: 0.1, n3: 0.1, a: 1.2, b: 0.8 },
    { m: 5, n1: 0.15, n2: 0.05, n3: 0.15, a: 1, b: 1 },

    // Hexa spikes
    { m: 6, n1: 0.1, n2: 0.1, n3: 0.1, a: 1, b: 1 },
    { m: 6, n1: 0.08, n2: 0.08, n3: 0.08, a: 1, b: 1 },
    { m: 6, n1: 0.15, n2: 0.15, n3: 0.15, a: 1, b: 1 },
    { m: 6, n1: 0.1, n2: 0.05, n3: 0.1, a: 1, b: 1 },
    { m: 6, n1: 0.1, n2: 0.1, n3: 0.1, a: 0.6, b: 1.4 },
    { m: 6, n1: 0.1, n2: 0.1, n3: 0.1, a: 1.4, b: 0.6 },

    // Hepta spikes
    { m: 7, n1: 0.1, n2: 0.1, n3: 0.1, a: 1, b: 1 },
    { m: 7, n1: 0.08, n2: 0.08, n3: 0.08, a: 1, b: 1 },
    { m: 7, n1: 0.15, n2: 0.15, n3: 0.15, a: 1, b: 1 },

    // Octa spikes
    { m: 8, n1: 0.1, n2: 0.1, n3: 0.1, a: 1, b: 1 },
    { m: 8, n1: 0.08, n2: 0.08, n3: 0.08, a: 1, b: 1 },
    { m: 8, n1: 0.15, n2: 0.15, n3: 0.15, a: 1, b: 1 },

    // High symmetry spikes
    { m: 10, n1: 0.1, n2: 0.1, n3: 0.1, a: 1, b: 1 },
    { m: 10, n1: 0.08, n2: 0.08, n3: 0.08, a: 1, b: 1 },
    { m: 12, n1: 0.1, n2: 0.1, n3: 0.1, a: 1, b: 1 },
    { m: 12, n1: 0.08, n2: 0.08, n3: 0.08, a: 1, b: 1 },
    { m: 16, n1: 0.1, n2: 0.1, n3: 0.1, a: 1, b: 1 },
    { m: 16, n1: 0.08, n2: 0.08, n3: 0.08, a: 1, b: 1 },

    // Asymmetric spikes
    { m: 4, n1: 0.1, n2: 0.05, n3: 0.15, a: 1, b: 1 },
    { m: 5, n1: 0.05, n2: 0.1, n3: 0.15, a: 1, b: 1 },
    { m: 6, n1: 0.15, n2: 0.05, n3: 0.1, a: 1, b: 1 },
    { m: 4, n1: 0.1, n2: 0.1, n3: 0.1, a: 0.6, b: 1.4 },
    { m: 5, n1: 0.1, n2: 0.1, n3: 0.1, a: 1.4, b: 0.6 },
    { m: 6, n1: 0.08, n2: 0.08, n3: 0.08, a: 0.5, b: 1.5 },
    { m: 3, n1: 0.1, n2: 0.1, n3: 0.1, a: 0.5, b: 1.5 },
    { m: 4, n1: 0.08, n2: 0.08, n3: 0.08, a: 1.5, b: 0.5 },
];

// Shuffle
function shuffle(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

const shuffled = shuffle(shapes);
let currentIndex = 0;

const shapeElement = document.getElementById('shape');

function superformula(theta, params) {
    const { m, n1, n2, n3, a, b } = params;
    const cosVal = Math.cos(m * theta / 4) / a;
    const sinVal = Math.sin(m * theta / 4) / b;
    const t1 = Math.pow(Math.abs(cosVal), n2);
    const t2 = Math.pow(Math.abs(sinVal), n3);
    const sum = t1 + t2;
    if (sum === 0) return 0;
    const r = Math.pow(sum, -1 / n1);
    return r;
}

function generatePath(params) {
    const points = 360;
    const pathPoints = [];
    let maxR = 0;

    for (let i = 0; i <= points; i++) {
        const theta = (2 * Math.PI * i) / points;
        const r = superformula(theta, params);
        if (isFinite(r) && !isNaN(r) && r > 0) {
            maxR = Math.max(maxR, r);
            pathPoints.push({ x: r * Math.cos(theta), y: r * Math.sin(theta) });
        }
    }

    // Fallback: circle if shape failed
    if (pathPoints.length < 3) {
        const fallback = [];
        for (let i = 0; i <= points; i++) {
            const theta = (2 * Math.PI * i) / points;
            fallback.push({ x: Math.cos(theta), y: Math.sin(theta) });
        }
        maxR = 1;
        fallback.forEach(p => pathPoints.push(p));
    }

    const scale = maxR > 0 ? 1 / maxR : 1;
    const normalized = pathPoints.map(p => ({
        x: p.x * scale,
        y: p.y * scale
    }));

    let d = `M ${normalized[0].x.toFixed(4)} ${normalized[0].y.toFixed(4)}`;
    for (let i = 1; i < normalized.length; i++) {
        d += ` L ${normalized[i].x.toFixed(4)} ${normalized[i].y.toFixed(4)}`;
    }
    d += ' Z';
    return d;
}

// Set initial shape
shapeElement.setAttribute('d', generatePath(shuffled[0]));

let tapLocked = false;
let lastTouchTime = 0;

function handleTap() {
    if (tapLocked) return;
    tapLocked = true;

    currentIndex = (currentIndex + 1) % shuffled.length;

    if (currentIndex === 0) {
        const newOrder = shuffle(shapes);
        shuffled.length = 0;
        newOrder.forEach(s => shuffled.push(s));
    }

    shapeElement.setAttribute('d', generatePath(shuffled[currentIndex]));

    setTimeout(() => { tapLocked = false; }, 100);
}

document.addEventListener('touchend', (e) => {
    e.preventDefault();
    e.stopPropagation();
    lastTouchTime = Date.now();
    handleTap();
}, { passive: false, capture: true });

document.addEventListener('click', () => {
    if (Date.now() - lastTouchTime < 500) return;
    handleTap();
});
