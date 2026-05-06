const flowerCatalog = [
  {
    id: "rose",
    name: "Crimson Rose",
    type: "rose",
    role: "focal",
    petalColor: "#8f0d25",
    petalInner: "#d64664",
    petalShadow: "#320712",
    centerColor: "#4b0716",
    foliageColor: "#344f3a"
  },
  {
    id: "tulip",
    name: "Velvet Tulip",
    type: "tulip",
    role: "support",
    petalColor: "#7f1526",
    petalInner: "#d25b6b",
    petalShadow: "#2e0710",
    centerColor: "#e5ad72",
    foliageColor: "#4e6f4d"
  },
  {
    id: "sunflower",
    name: "Sunflower",
    type: "sunflower",
    role: "focal",
    petalColor: "#f0b53f",
    petalInner: "#ffe07d",
    petalShadow: "#cb8a1b",
    centerColor: "#6e4a32",
    foliageColor: "#779b54"
  },
  {
    id: "daisy",
    name: "Daisy",
    type: "daisy",
    role: "filler",
    petalColor: "#fff8ef",
    petalInner: "#ffffff",
    petalShadow: "#ece0d4",
    centerColor: "#edbb51",
    foliageColor: "#6e9764"
  },
  {
    id: "hibiscus",
    name: "Red Hibiscus",
    type: "hibiscus",
    role: "focal",
    petalColor: "#b5001c",
    petalInner: "#f55362",
    petalShadow: "#350008",
    centerColor: "#ffd66f",
    foliageColor: "#345b3b"
  },
  {
    id: "cherry",
    name: "Blossom",
    type: "cherry",
    role: "filler",
    petalColor: "#f6b9c9",
    petalInner: "#ffedf3",
    petalShadow: "#e59eb3",
    centerColor: "#f0c885",
    foliageColor: "#6c9863"
  },
  {
    id: "peony",
    name: "Wine Peony",
    type: "peony",
    role: "focal",
    petalColor: "#783143",
    petalInner: "#c17a8b",
    petalShadow: "#2c0e18",
    centerColor: "#7d3445",
    foliageColor: "#415d40"
  },
  {
    id: "ranunculus",
    name: "Ranunculus",
    type: "rose",
    role: "support",
    petalColor: "#f7b36e",
    petalInner: "#ffe2ba",
    petalShadow: "#d68a46",
    centerColor: "#ebac5a",
    foliageColor: "#6d945e"
  },
  {
    id: "lily",
    name: "Ruby Lily",
    type: "lily",
    role: "focal",
    petalColor: "#8e1822",
    petalInner: "#d76a6d",
    petalShadow: "#371014",
    centerColor: "#f0bc72",
    foliageColor: "#486b45"
  },
  {
    id: "orchid",
    name: "Wine Orchid",
    type: "orchid",
    role: "support",
    petalColor: "#9d2643",
    petalInner: "#ec92a8",
    petalShadow: "#3c0a1a",
    centerColor: "#f2d28e",
    foliageColor: "#4c654d"
  },
  {
    id: "anemone",
    name: "Ink Anemone",
    type: "anemone",
    role: "support",
    petalColor: "#c4a2ef",
    petalInner: "#efe3ff",
    petalShadow: "#544092",
    centerColor: "#161221",
    foliageColor: "#53684e"
  },
  {
    id: "lavender",
    name: "Lavender",
    type: "daisy",
    role: "filler",
    petalColor: "#b99ae3",
    petalInner: "#e7ddfa",
    petalShadow: "#8d71ba",
    centerColor: "#8d71ba",
    foliageColor: "#6a8f68"
  },
  {
    id: "babybreath",
    name: "Baby's Breath",
    type: "cherry",
    role: "filler",
    petalColor: "#fffaf7",
    petalInner: "#ffffff",
    petalShadow: "#e8dfda",
    centerColor: "#f0dbc8",
    foliageColor: "#759374"
  },
  {
    id: "dahlia",
    name: "Burgundy Dahlia",
    type: "dahlia",
    role: "focal",
    petalColor: "#9a001a",
    petalInner: "#df3d4d",
    petalShadow: "#2b0309",
    centerColor: "#4d0d18",
    foliageColor: "#394f3c"
  },
  {
    id: "hydrangea",
    name: "Lilac Hydrangea",
    type: "hydrangea",
    role: "support",
    petalColor: "#9f8de3",
    petalInner: "#f0eaff",
    petalShadow: "#5648a0",
    centerColor: "#e9d88e",
    foliageColor: "#50644e"
  },
  {
    id: "poppy",
    name: "Red Poppy",
    type: "poppy",
    role: "support",
    petalColor: "#c90c16",
    petalInner: "#ff5c58",
    petalShadow: "#300407",
    centerColor: "#241a1b",
    foliageColor: "#4d613e"
  },
  {
    id: "camellia",
    name: "Camellia",
    type: "rose",
    role: "focal",
    petalColor: "#f2c7cf",
    petalInner: "#fff0f4",
    petalShadow: "#d893a3",
    centerColor: "#d99aaa",
    foliageColor: "#466f4f"
  },
  {
    id: "cosmos",
    name: "Cosmos",
    type: "daisy",
    role: "filler",
    petalColor: "#f4a7bd",
    petalInner: "#ffe5ec",
    petalShadow: "#ca6d86",
    centerColor: "#e6b650",
    foliageColor: "#6d8f65"
  },
  {
    id: "iris",
    name: "Iris",
    type: "iris",
    role: "support",
    petalColor: "#8f78cf",
    petalInner: "#d8ccff",
    petalShadow: "#5c4a9b",
    centerColor: "#f0c65c",
    foliageColor: "#5c7f64"
  },
  {
    id: "magnolia",
    name: "Magnolia",
    type: "magnolia",
    role: "focal",
    petalColor: "#fff1df",
    petalInner: "#ffffff",
    petalShadow: "#d8bda7",
    centerColor: "#c9a25b",
    foliageColor: "#4f7559"
  },
  {
    id: "eucalyptus",
    name: "Eucalyptus",
    type: "eucalyptus",
    role: "filler",
    petalColor: "#a9bca5",
    petalInner: "#dce7d9",
    petalShadow: "#788d75",
    centerColor: "#8ba086",
    foliageColor: "#7e9880"
  },
  {
    id: "purplelily",
    name: "Purple Lily",
    type: "lily",
    role: "focal",
    petalColor: "#6f35b5",
    petalInner: "#cf9fff",
    petalShadow: "#251042",
    centerColor: "#dfb36d",
    foliageColor: "#495f4d"
  },
  {
    id: "gerbera",
    name: "Lilac Gerbera",
    type: "gerbera",
    role: "support",
    petalColor: "#c8a7ff",
    petalInner: "#efe4ff",
    petalShadow: "#6f55b8",
    centerColor: "#71418f",
    foliageColor: "#52684d"
  },
  {
    id: "carnation",
    name: "Blush Carnation",
    type: "carnation",
    role: "support",
    petalColor: "#e8b6aa",
    petalInner: "#fff0ea",
    petalShadow: "#a4544c",
    centerColor: "#b6766c",
    foliageColor: "#4e6449"
  },
  {
    id: "cosmosdark",
    name: "Chocolate Cosmos",
    type: "cosmos",
    role: "filler",
    petalColor: "#3d0b16",
    petalInner: "#8e4052",
    petalShadow: "#100206",
    centerColor: "#d8b46d",
    foliageColor: "#4c6047"
  },
  {
    id: "clematis",
    name: "Violet Clematis",
    type: "anemone",
    role: "support",
    petalColor: "#7155c5",
    petalInner: "#cfc2ff",
    petalShadow: "#251848",
    centerColor: "#eee4ae",
    foliageColor: "#50644a"
  },
  {
    id: "amaryllis",
    name: "Scarlet Amaryllis",
    type: "lily",
    role: "focal",
    petalColor: "#a70817",
    petalInner: "#f47370",
    petalShadow: "#300406",
    centerColor: "#efd38c",
    foliageColor: "#445c41"
  }
];

const defaultState = {
  flowers: ["rose", "tulip", "sunflower"],
  flowerDensity: 16,
  wrapColor: "#f4d3d8",
  accentColor: "#ce7c87",
  backgroundTheme: "dawn",
  holderStyle: "paper",
  cardStyle: "romantic",
  recipientName: "For someone special",
  messageTitle: "A little bouquet for your day",
  messageBody: "You've been on my mind, so I made something bright just for you.",
  senderName: "From someone who cares",
  songTitle: "",
  songUrl: "",
  emailAddress: ""
};

const wrapPalette = ["#f4d3d8", "#f3ddca", "#e5d9c9", "#d8e3d1", "#d8dff1", "#ecd7e9", "#1f2c42", "#111015", "#6b1725", "#efe2d1"];
const accentPalette = ["#ce7c87", "#c89b64", "#7e8f5e", "#6e86c9", "#9b6ab2", "#b45f74", "#7b1020", "#f3c4d4", "#f5eee6", "#0c1628"];
const optionLabels = {
  backgroundTheme: {
    dawn: "Dawn Blush",
    garden: "Garden Mist",
    midnight: "Midnight Velvet",
    sunset: "Apricot Sunset",
    noir: "Noir Rose",
    ivory: "Ivory Studio",
    moss: "Moss Room",
    wine: "Wine Velvet"
  },
  holderStyle: {
    paper: "Soft Paper",
    glass: "Frosted Glass",
    satin: "Satin Wrap",
    luxe: "Luxe Bouquet",
    paperbow: "Paper Bow",
    winebow: "Wine Bow",
    midnightpaper: "Midnight Paper",
    starnet: "Starry Net",
    velvet: "Velvet Sleeve",
    ceramic: "Ceramic Vase",
    linen: "Linen Tie",
    metallic: "Metallic Wrap"
  },
  cardStyle: {
    romantic: "Romantic",
    modern: "Modern",
    storybook: "Storybook",
    minimal: "Minimal",
    noir: "Noir",
    editorial: "Editorial",
    letterpress: "Letterpress",
    vellum: "Vellum"
  }
};
const presetStyles = {
  romantic: {
    backgroundTheme: "dawn",
    holderStyle: "paper",
    cardStyle: "romantic",
    wrapColor: "#f4d3d8",
    accentColor: "#ce7c87",
    flowerDensity: 16
  },
  sunlit: {
    backgroundTheme: "sunset",
    holderStyle: "satin",
    cardStyle: "storybook",
    wrapColor: "#f1d8bf",
    accentColor: "#c89b64",
    flowerDensity: 20
  },
  midnight: {
    backgroundTheme: "midnight",
    holderStyle: "glass",
    cardStyle: "modern",
    wrapColor: "#d9d5e8",
    accentColor: "#9b6ab2",
    flowerDensity: 14
  },
  editorial: {
    backgroundTheme: "garden",
    holderStyle: "luxe",
    cardStyle: "minimal",
    wrapColor: "#e5d9c9",
    accentColor: "#7e8f5e",
    flowerDensity: 18
  }
};

const flowerMeanings = {
  rose: "love",
  tulip: "care",
  sunflower: "joy",
  daisy: "hope",
  hibiscus: "admiration",
  cherry: "gentleness",
  peony: "romance",
  ranunculus: "charm",
  lily: "grace",
  orchid: "devotion",
  anemone: "thoughtfulness",
  lavender: "calm",
  babybreath: "tenderness",
  dahlia: "elegance",
  hydrangea: "gratitude",
  poppy: "remembrance",
  camellia: "devotion",
  cosmos: "harmony",
  iris: "wisdom",
  magnolia: "dignity",
  eucalyptus: "renewal",
  purplelily: "wonder",
  gerbera: "cheer",
  carnation: "affection",
  cosmosdark: "mystery",
  clematis: "inspiration",
  amaryllis: "strength"
};

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const state = loadState();
let messageRevealTimeout = 0;

const refs = {
  flowerGrid: document.querySelector("#flowerGrid"),
  bouquetFlowers: document.querySelector("#bouquetFlowers"),
  bouquetWrap: document.querySelector("#bouquetWrap"),
  previewFrame: document.querySelector("#previewFrame"),
  sceneShell: document.querySelector("#sceneShell"),
  sceneBackground: document.querySelector("#sceneBackground"),
  sceneMidground: document.querySelector("#sceneMidground"),
  sceneForeground: document.querySelector("#sceneForeground"),
  atmosphereParticles: document.querySelector("#atmosphereParticles"),
  messageCard: document.querySelector("#messageCard"),
  previewRecipient: document.querySelector("#previewRecipient"),
  bouquetMeaning: document.querySelector("#bouquetMeaning"),
  previewTitle: document.querySelector("#previewTitle"),
  previewBody: document.querySelector("#previewBody"),
  previewSender: document.querySelector("#previewSender"),
  previewSongTitle: document.querySelector("#previewSongTitle"),
  musicBadge: document.querySelector("#musicBadge"),
  audioPlayer: document.querySelector("#audioPlayer"),
  audioShell: document.querySelector("#audioShell"),
  spotifyShell: document.querySelector("#spotifyShell"),
  spotifyEmbed: document.querySelector("#spotifyEmbed"),
  spotifyTypeLabel: document.querySelector("#spotifyTypeLabel"),
  spotifyOpenLink: document.querySelector("#spotifyOpenLink"),
  musicEmpty: document.querySelector("#musicEmpty"),
  wrapColor: document.querySelector("#wrapColor"),
  accentColor: document.querySelector("#accentColor"),
  backgroundTheme: document.querySelector("#backgroundTheme"),
  holderStyle: document.querySelector("#holderStyle"),
  cardStyle: document.querySelector("#cardStyle"),
  flowerDensity: document.querySelector("#flowerDensity"),
  densityLabel: document.querySelector("#densityLabel"),
  densityBadge: document.querySelector("#densityBadge"),
  wrapSwatches: document.querySelector("#wrapSwatches"),
  accentSwatches: document.querySelector("#accentSwatches"),
  backgroundOptions: document.querySelector("#backgroundOptions"),
  holderOptions: document.querySelector("#holderOptions"),
  cardOptions: document.querySelector("#cardOptions"),
  presetGrid: document.querySelector("#presetGrid"),
  summaryTitle: document.querySelector("#summaryTitle"),
  summaryCopy: document.querySelector("#summaryCopy"),
  recipientName: document.querySelector("#recipientName"),
  messageTitle: document.querySelector("#messageTitle"),
  messageBody: document.querySelector("#messageBody"),
  senderName: document.querySelector("#senderName"),
  songTitle: document.querySelector("#songTitle"),
  songUrl: document.querySelector("#songUrl"),
  emailAddress: document.querySelector("#emailAddress"),
  copyLinkBtn: document.querySelector("#copyLinkBtn"),
  emailBtn: document.querySelector("#emailBtn"),
  randomizeBtn: document.querySelector("#randomizeBtn"),
  shareStatus: document.querySelector("#shareStatus"),
  flowerOptionTemplate: document.querySelector("#flowerOptionTemplate")
};

hydrateInputs();
renderFlowerOptions();
renderCustomizationStudio();
render();
bindEvents();
initializeParallax();
initializeAtmosphere();

function loadState() {
  const params = new URLSearchParams(window.location.hash.replace(/^#/, ""));
  const encoded = params.get("bouquet");

  if (encoded) {
    try {
      const parsed = JSON.parse(decodeURIComponent(atob(encoded)));
      return normalizeState(parsed);
    } catch (error) {
      console.warn("Could not load bouquet from link", error);
    }
  }

  const saved = window.localStorage.getItem("bloomnote-state");

  if (!saved) {
    return normalizeState();
  }

  try {
    return normalizeState(JSON.parse(saved));
  } catch (error) {
    console.warn("Could not load saved bouquet", error);
    return normalizeState();
  }
}

function normalizeState(candidate = {}) {
  const validFlowerIds = new Set(flowerCatalog.map((flower) => flower.id));
  const validThemes = new Set(Object.keys(optionLabels.backgroundTheme));
  const validHolders = new Set(Object.keys(optionLabels.holderStyle));
  const validCards = new Set(Object.keys(optionLabels.cardStyle));
  const stateFromSource = { ...defaultState, ...candidate };
  const flowers = Array.isArray(stateFromSource.flowers)
    ? stateFromSource.flowers.filter((id) => validFlowerIds.has(id))
    : defaultState.flowers;
  const flowerDensity = Number(stateFromSource.flowerDensity);

  return {
    ...stateFromSource,
    flowers: flowers.length ? flowers : defaultState.flowers,
    flowerDensity: Number.isFinite(flowerDensity)
      ? Math.min(36, Math.max(8, Math.round(flowerDensity)))
      : defaultState.flowerDensity,
    backgroundTheme: validThemes.has(stateFromSource.backgroundTheme) ? stateFromSource.backgroundTheme : defaultState.backgroundTheme,
    holderStyle: validHolders.has(stateFromSource.holderStyle) ? stateFromSource.holderStyle : defaultState.holderStyle,
    cardStyle: validCards.has(stateFromSource.cardStyle) ? stateFromSource.cardStyle : defaultState.cardStyle,
    wrapColor: isHexColor(stateFromSource.wrapColor) ? stateFromSource.wrapColor : defaultState.wrapColor,
    accentColor: isHexColor(stateFromSource.accentColor) ? stateFromSource.accentColor : defaultState.accentColor
  };
}

function isHexColor(value) {
  return /^#[0-9a-f]{6}$/i.test(value || "");
}

function hydrateInputs() {
  refs.wrapColor.value = state.wrapColor;
  refs.accentColor.value = state.accentColor;
  refs.backgroundTheme.value = state.backgroundTheme;
  refs.holderStyle.value = state.holderStyle;
  refs.cardStyle.value = state.cardStyle;
  refs.flowerDensity.value = String(state.flowerDensity);
  updateDensityCopy();
  refs.recipientName.value = state.recipientName === defaultState.recipientName ? "" : state.recipientName;
  refs.messageTitle.value = state.messageTitle === defaultState.messageTitle ? "" : state.messageTitle;
  refs.messageBody.value = state.messageBody === defaultState.messageBody ? "" : state.messageBody;
  refs.senderName.value = state.senderName === defaultState.senderName ? "" : state.senderName;
  refs.songTitle.value = state.songTitle;
  refs.songUrl.value = state.songUrl;
  refs.emailAddress.value = state.emailAddress;
}

function bindEvents() {
  refs.wrapColor.addEventListener("input", ({ target }) => updateState("wrapColor", target.value));
  refs.accentColor.addEventListener("input", ({ target }) => updateState("accentColor", target.value));
  refs.backgroundTheme.addEventListener("change", ({ target }) => updateState("backgroundTheme", target.value));
  refs.holderStyle.addEventListener("change", ({ target }) => updateState("holderStyle", target.value));
  refs.cardStyle.addEventListener("change", ({ target }) => updateState("cardStyle", target.value));
  refs.flowerDensity.addEventListener("input", ({ target }) => updateDensity(Number(target.value)));
  refs.recipientName.addEventListener("input", ({ target }) => updateState("recipientName", target.value.trim() || defaultState.recipientName));
  refs.messageTitle.addEventListener("input", ({ target }) => updateState("messageTitle", target.value.trim() || defaultState.messageTitle));
  refs.messageBody.addEventListener("input", ({ target }) => updateState("messageBody", target.value.trim() || defaultState.messageBody));
  refs.senderName.addEventListener("input", ({ target }) => updateState("senderName", target.value.trim() || defaultState.senderName));
  refs.songTitle.addEventListener("input", ({ target }) => updateState("songTitle", target.value.trim()));
  refs.songUrl.addEventListener("input", ({ target }) => updateState("songUrl", target.value.trim()));
  refs.emailAddress.addEventListener("input", ({ target }) => updateState("emailAddress", target.value.trim()));
  refs.copyLinkBtn.addEventListener("click", copyShareLink);
  refs.emailBtn.addEventListener("click", sendEmail);
  refs.randomizeBtn.addEventListener("click", randomizeBouquet);
}

function initializeParallax() {
  if (reducedMotion) {
    return;
  }

  const target = { x: 0, y: 0 };
  const current = { x: 0, y: 0 };
  let rafId = 0;

  const tick = () => {
    current.x += (target.x - current.x) * 0.08;
    current.y += (target.y - current.y) * 0.08;
    refs.sceneBackground.style.transform = `translate3d(${(current.x * 0.18).toFixed(2)}px, ${(current.y * 0.18).toFixed(2)}px, 0)`;
    refs.sceneMidground.style.transform = `translate3d(${(current.x * 0.42).toFixed(2)}px, ${(current.y * 0.42).toFixed(2)}px, 0)`;
    refs.sceneForeground.style.transform = `translate3d(${(current.x * 0.82).toFixed(2)}px, ${(current.y * 0.82).toFixed(2)}px, 0)`;

    if (Math.abs(target.x - current.x) > 0.05 || Math.abs(target.y - current.y) > 0.05) {
      rafId = window.requestAnimationFrame(tick);
    } else {
      rafId = 0;
    }
  };

  const requestTick = () => {
    if (!rafId) {
      rafId = window.requestAnimationFrame(tick);
    }
  };

  refs.previewFrame.addEventListener("mousemove", (event) => {
    const bounds = refs.previewFrame.getBoundingClientRect();
    const offsetX = (event.clientX - bounds.left) / bounds.width - 0.5;
    const offsetY = (event.clientY - bounds.top) / bounds.height - 0.5;
    target.x = offsetX * 24;
    target.y = offsetY * 18;
    requestTick();
  });

  refs.previewFrame.addEventListener("mouseleave", () => {
    target.x = 0;
    target.y = 0;
    requestTick();
  });
}

function renderFlowerOptions() {
  refs.flowerGrid.innerHTML = "";

  for (const flower of flowerCatalog) {
    const option = refs.flowerOptionTemplate.content.firstElementChild.cloneNode(true);
    option.dataset.id = flower.id;
    option.querySelector(".flower-emoji").replaceChildren(buildFlowerPreview(flower));
    option.querySelector(".flower-name").textContent = flower.name;

    if (state.flowers.includes(flower.id)) {
      option.classList.add("is-selected");
    }

    option.addEventListener("click", () => toggleFlower(flower.id));
    refs.flowerGrid.appendChild(option);
  }
}

function toggleFlower(flowerId) {
  const hasFlower = state.flowers.includes(flowerId);

  if (hasFlower && state.flowers.length === 1) {
    setStatus("Keep at least one flower in the bouquet.");
    return;
  }

  state.flowers = hasFlower
    ? state.flowers.filter((id) => id !== flowerId)
    : [...state.flowers, flowerId];

  renderFlowerOptions();
  persistAndRender();
}

function updateState(key, value) {
  state[key] = value;
  persistAndRender();
}

function updateDensity(value) {
  state.flowerDensity = value;
  updateDensityCopy();
  persistAndRender();
}

function updateDensityCopy() {
  refs.densityLabel.textContent = `${state.flowerDensity} stems for a ${getDensityLabel().toLowerCase()} bouquet.`;
  refs.densityBadge.textContent = getDensityLabel();
}

function persistAndRender() {
  window.localStorage.setItem("bloomnote-state", JSON.stringify(state));
  renderCustomizationStudio();
  render();
}

function render() {
  refs.previewFrame.className = `preview-frame theme-${state.backgroundTheme} style-${state.cardStyle} holder-${state.holderStyle}`;
  refs.previewFrame.style.setProperty("--accent", state.accentColor);
  refs.previewFrame.style.setProperty("--wrap-color", state.wrapColor);
  refs.bouquetWrap.style.setProperty("--wrap-color", state.wrapColor);
  refs.bouquetWrap.style.setProperty("--accent", state.accentColor);
  refs.bouquetWrap.dataset.holderStyle = state.holderStyle;
  refs.previewRecipient.textContent = state.recipientName;
  refs.bouquetMeaning.textContent = buildMeaningText();
  refs.previewTitle.textContent = state.messageTitle;
  refs.previewBody.textContent = state.messageBody;
  refs.previewSender.textContent = state.senderName;
  refs.previewSongTitle.textContent = state.songTitle || "No song selected";
  updateStyleSummary();
  refs.messageCard.classList.remove("is-visible");
  renderMusic();
  renderBouquet();
  scheduleMessageReveal();
  syncHash();
}

function renderBouquet() {
  refs.bouquetFlowers.innerHTML = "";
  refs.bouquetFlowers.dataset.fullness = state.flowerDensity > 30 ? "max" : state.flowerDensity > 24 ? "lush" : "classic";
  const stemLayouts = buildStemLayouts(state.flowerDensity);
  const arrangement = buildArrangementFlowers(stemLayouts);
  const total = arrangement.length;

  renderFillerSprigs(total);

  arrangement.forEach((flowerId, index) => {
    const flower = flowerCatalog.find((item) => item.id === flowerId) || flowerCatalog[0];
    refs.bouquetFlowers.appendChild(buildFlowerStem(flower, stemLayouts[index] || stemLayouts[0], index, total));
  });
}

function buildStemLayouts(total) {
  const layouts = [];
  const rows = buildBouquetRows(total);
  const rowCount = rows.length;
  const densityTightness = total > 30 ? 0.86 : total > 24 ? 0.92 : 1;

  rows.forEach((count, rowIndex) => {
    const progress = rowCount === 1 ? 0.5 : rowIndex / (rowCount - 1);
    const dome = Math.sin((0.18 + progress * 0.72) * Math.PI);
    const width = (82 + dome * 126) * densityTightness;
    const crownY = 62 + dome * 28 - progress * 20;
    const anchorScale = 8 + progress * 18;

    for (let index = 0; index < count; index += 1) {
      const ratio = count === 1 ? 0 : index / (count - 1) - 0.5;
      const edgeDrop = Math.abs(ratio) * 44;
      const staggerX = ((index % 2) - 0.5) * 9;
      const staggerY = ((index % 2) - 0.5) * 12;
      layouts.push({
        x: ratio * width + staggerX,
        y: crownY - edgeDrop + staggerY,
        anchor: ratio * anchorScale,
        spread: ratio * (1.4 + progress),
        rowIndex,
        rowCount: count,
        ratio,
        progress
      });
    }
  });

  return layouts;
}

function buildBouquetRows(total) {
  const rowPresets = [
    [3, 3, 2],
    [3, 4, 3],
    [4, 4, 3],
    [4, 5, 3],
    [4, 5, 4],
    [5, 5, 4],
    [5, 6, 4],
    [5, 6, 5],
    [5, 7, 5],
    [6, 7, 5],
    [6, 7, 6],
    [6, 8, 6],
    [6, 8, 7],
    [7, 8, 7],
    [7, 9, 7],
    [7, 9, 8],
    [8, 9, 8]
  ];

  if (total > rowPresets.length + 7) {
    const rowCount = total > 30 ? 5 : 4;
    const rows = Array.from({ length: rowCount }, () => 0);
    const weights = rowCount === 5 ? [0.18, 0.23, 0.24, 0.2, 0.15] : [0.22, 0.3, 0.28, 0.2];
    let placed = 0;

    weights.forEach((weight, index) => {
      rows[index] = Math.max(2, Math.floor(total * weight));
      placed += rows[index];
    });

    for (let index = 0; placed < total; index = (index + 1) % rowCount) {
      rows[rowCount - 1 - index] += 1;
      placed += 1;
    }

    for (let index = 0; placed > total; index = (index + 1) % rowCount) {
      const rowIndex = rowCount - 1 - index;
      if (rows[rowIndex] > 2) {
        rows[rowIndex] -= 1;
        placed -= 1;
      }
    }

    return rows;
  }

  return normalizeBouquetRows(rowPresets[Math.max(0, Math.min(rowPresets.length - 1, total - 8))], total);
}

function normalizeBouquetRows(rows, total) {
  const balanced = [...rows];
  let count = balanced.reduce((sum, row) => sum + row, 0);

  for (let index = 0; count < total; index = (index + 1) % balanced.length) {
    const rowIndex = Math.min(balanced.length - 1, Math.floor(balanced.length / 2) + (index % 2 === 0 ? 0 : index));
    balanced[rowIndex % balanced.length] += 1;
    count += 1;
  }

  for (let index = 0; count > total; index = (index + 1) % balanced.length) {
    const rowIndex = balanced.length - 1 - (index % balanced.length);
    if (balanced[rowIndex] > 2) {
      balanced[rowIndex] -= 1;
      count -= 1;
    }
  }

  return balanced;
}

function buildArrangementFlowers(layouts) {
  const selectedFlowers = (state.flowers.length ? state.flowers : defaultState.flowers)
    .map((id) => flowerCatalog.find((flower) => flower.id === id))
    .filter(Boolean);

  const rolePools = {
    focal: selectedFlowers.filter((flower) => flower.role === "focal"),
    support: selectedFlowers.filter((flower) => flower.role === "support"),
    filler: selectedFlowers.filter((flower) => flower.role === "filler")
  };

  const all = selectedFlowers;
  const arrangement = [];

  layouts.forEach((layout, index) => {
    const desiredRole = getDesiredRole(layout, layouts.length);
    const pool = rolePools[desiredRole].length
      ? rolePools[desiredRole]
      : desiredRole === "focal"
        ? (rolePools.support.length ? rolePools.support : all)
        : desiredRole === "support"
          ? (rolePools.focal.length ? rolePools.focal : all)
          : (rolePools.support.length ? rolePools.support : all);

    const chosen = pool[index % pool.length] || all[index % all.length] || flowerCatalog[0];
    arrangement.push(chosen.id);
  });

  return arrangement;
}

function getDesiredRole(layout, total) {
  const centered = Math.abs(layout.ratio) < 0.18;
  const nearCenter = Math.abs(layout.ratio) < 0.34;
  const frontHalf = layout.progress < 0.45;
  const frontRow = layout.progress > 0.68;
  const outerEdge = Math.abs(layout.ratio) > 0.36;

  if (!frontRow && centered) {
    return "focal";
  }

  if (nearCenter) {
    return "support";
  }

  if (frontRow || outerEdge) {
    return "filler";
  }

  if (total >= 18) {
    return nearCenter ? "support" : "filler";
  }

  return outerEdge ? "filler" : "support";
}

function renderFillerSprigs(total) {
  const offsets = total >= 24
    ? [-118, -82, 82, 118]
    : total >= 14
      ? [-92, 92]
      : [];

  offsets.forEach((offset, index) => {
    const sprig = document.createElement("div");
    const variance = getVariance(`sprig-${index}`);
    const scale = 0.96 + variance.a * 0.1;

    sprig.className = "filler-sprig";
    sprig.style.left = "50%";
    sprig.style.bottom = `${118 + (index % 2) * 8}px`;
    sprig.style.setProperty("--sprig-x", `${offset}px`);
    sprig.style.setProperty("--sprig-rotate", `${offset < 0 ? -8 : 8}deg`);
    sprig.style.setProperty("--sprig-scale", scale.toFixed(3));
    sprig.style.setProperty("--sprig-duration", `${9.8 + variance.b * 2.6}s`);
    sprig.style.setProperty("--sprig-delay", `${(variance.c * -4).toFixed(2)}s`);

    const line = document.createElement("span");
    line.className = "filler-line";
    sprig.appendChild(line);

    for (let budIndex = 0; budIndex < 3; budIndex += 1) {
      const bud = document.createElement("span");
      bud.className = "filler-bud";
      bud.style.top = `${20 + budIndex * 24}px`;
      bud.style.left = `${budIndex % 2 === 0 ? 10 : -1}px`;
      bud.style.opacity = String(0.72 + budIndex * 0.08);
      sprig.appendChild(bud);
    }

    refs.bouquetFlowers.appendChild(sprig);
  });
}

function buildFlowerPreview(flower) {
  const preview = document.createElement("span");
  const variance = getFlowerVariance(flower, 0, 1);
  preview.className = "flower-preview";
  preview.style.setProperty("--petal", flower.petalColor);
  preview.style.setProperty("--petal-inner", flower.petalInner);
  preview.style.setProperty("--petal-shadow", flower.petalShadow);
  preview.style.setProperty("--center", flower.centerColor);
  preview.style.setProperty("--hue-shift", "0deg");
  preview.style.setProperty("--sat-shift", "1");
  preview.style.setProperty("--petal-brightness", "1");
  preview.style.setProperty("--breath-duration", "7s");
  preview.appendChild(buildFlowerHead(flower, true, variance));
  return preview;
}

function buildFlowerStem(flower, layout, index, total) {
  const variance = getFlowerVariance(flower, index, total);
  const densityScale = total >= 30 ? 0.7 : total >= 24 ? 0.76 : total >= 18 ? 0.84 : total >= 12 ? 0.96 : 1.04;
  const roleScale = flower.role === "focal" ? 1.08 : flower.role === "filler" ? 0.84 : 0.96;
  const rowCenter = Math.max(0, 1 - Math.abs(layout.ratio) * 1.15);
  const domeScale = 0.9 + rowCenter * 0.12 - Math.abs(layout.ratio) * 0.06;
  const stem = document.createElement("div");
  stem.className = `flower-stem flower-type-${flower.type}`;
  stem.style.left = "50%";
  stem.style.bottom = `${58 + layout.y}px`;
  stem.style.zIndex = String(12 + layout.rowIndex * 12 + Math.round((layout.ratio + 0.5) * 8));
  stem.style.setProperty("--stem-x", `${layout.x + variance.x}px`);
  stem.style.setProperty("--stem-y", `${variance.y}px`);
  stem.style.setProperty("--stem-rotate", `${(layout.ratio * 10 + variance.rotate * 0.35).toFixed(2)}deg`);
  stem.style.setProperty("--stem-anchor", `${-(layout.x * 0.46) + (layout.anchor ?? 0)}px`);
  stem.style.setProperty("--stem-spread", `${layout.spread ?? 0}`);
  stem.style.setProperty("--stem-scale", (variance.scale * densityScale * roleScale * domeScale).toFixed(3));
  stem.style.setProperty("--hover-scale", "1");
  stem.style.setProperty("--hover-tilt", "0deg");
  stem.style.setProperty("--sway-duration", `${variance.swayDuration}s`);
  stem.style.setProperty("--sway-delay", `${variance.swayDelay}s`);
  stem.style.setProperty("--rise-delay", `${index * 90}ms`);
  stem.style.setProperty("--breath-duration", `${variance.breathDuration}s`);
  stem.style.setProperty("--head-tilt", `${variance.headTilt}deg`);
  stem.style.setProperty("--stem-curve", `${variance.curve}deg`);
  stem.style.setProperty("--leaf-shift", `${variance.leafShift}px`);
  stem.style.setProperty("--petal", flower.petalColor);
  stem.style.setProperty("--petal-inner", flower.petalInner);
  stem.style.setProperty("--petal-shadow", flower.petalShadow);
  stem.style.setProperty("--center", flower.centerColor);
  stem.style.setProperty("--foliage", flower.foliageColor);
  stem.style.setProperty("--hue-shift", `${(-5 + variance.hue * 10).toFixed(2)}deg`);
  stem.style.setProperty("--sat-shift", `${(0.96 + variance.saturation * 0.08).toFixed(3)}`);
  stem.style.setProperty("--petal-brightness", `${(0.98 + variance.brightness * 0.06).toFixed(3)}`);

  const motion = document.createElement("span");
  motion.className = "flower-motion";

  const sway = document.createElement("span");
  sway.className = "flower-sway";

  const ambient = document.createElement("span");
  ambient.className = "stem-ambient-shadow";

  const line = document.createElement("span");
  line.className = "stem-line";

  const leafLeft = document.createElement("span");
  leafLeft.className = "stem-leaf leaf-left";

  const leafRight = document.createElement("span");
  leafRight.className = "stem-leaf leaf-right";

  sway.append(ambient, line, leafLeft, leafRight, buildFlowerHead(flower, false, variance));
  motion.appendChild(sway);
  stem.appendChild(motion);
  stem.addEventListener("click", () => triggerFlowerPulse(stem));
  return stem;
}

function buildFlowerHead(flower, compact, variance) {
  const head = document.createElement("span");
  head.className = `flower-head flower-head-${flower.type} flower-id-${flower.id}${compact ? " compact" : ""}`;
  head.style.setProperty("--head-twist", `${variance.headTilt}deg`);

  const bloom = document.createElement("span");
  bloom.className = "flower-bloom";

  const petalCount = getPetalCount(flower.type);
  const offset = getPetalOffset(flower.type);

  for (let index = 0; index < petalCount; index += 1) {
    const petal = document.createElement("span");
    const petalVariance = getVariance(`${flower.id}-${index}-${compact ? "mini" : "full"}`);
    petal.className = `petal petal-${flower.type} petal-id-${flower.id}`;
    petal.style.setProperty("--rotation", `${(360 / petalCount) * index + (petalVariance.a - 0.5) * 9}deg`);
    petal.style.setProperty("--petal-offset", `${offset + (petalVariance.b - 0.5) * 6}px`);
    petal.style.setProperty("--petal-scale", `${0.9 + petalVariance.c * 0.18}`);
    bloom.appendChild(petal);
  }

  if (["rose", "peony", "dahlia", "carnation", "camellia"].includes(flower.type) || flower.id === "camellia") {
    const innerCount = flower.type === "dahlia" ? 14 : flower.type === "peony" || flower.type === "carnation" ? 10 : 6;
    for (let index = 0; index < innerCount; index += 1) {
      const innerPetal = document.createElement("span");
      innerPetal.className = `petal petal-${flower.type === "dahlia" ? "dahlia" : "rose"} petal-rose-inner petal-id-${flower.id}`;
      innerPetal.style.setProperty("--rotation", `${(360 / innerCount) * index + variance.curve * 0.45}deg`);
      innerPetal.style.setProperty("--petal-offset", `${flower.type === "dahlia" ? -12 : -10}px`);
      innerPetal.style.setProperty("--petal-scale", `${0.72 + index * 0.018}`);
      bloom.appendChild(innerPetal);
    }
  }

  if (flower.type === "tulip") {
    const cup = document.createElement("span");
    cup.className = "tulip-cup";
    bloom.appendChild(cup);
  }

  if (flower.type === "hibiscus") {
    const stamen = document.createElement("span");
    stamen.className = "hibiscus-stamen";
    bloom.appendChild(stamen);
  }

  if (["lily", "orchid", "iris", "poppy", "anemone"].includes(flower.type)) {
    const stamen = document.createElement("span");
    stamen.className = `flower-stamen flower-stamen-${flower.type}`;
    bloom.appendChild(stamen);
  }

  const core = document.createElement("span");
  core.className = `flower-core flower-core-${flower.type}`;
  bloom.appendChild(core);

  head.appendChild(bloom);
  return head;
}

function getPetalCount(type) {
  const counts = {
    rose: 8,
    peony: 14,
    dahlia: 26,
    carnation: 18,
    tulip: 5,
    sunflower: 16,
    gerbera: 22,
    daisy: 12,
    hibiscus: 5,
    cherry: 5,
    lily: 6,
    orchid: 5,
    anemone: 7,
    hydrangea: 16,
    poppy: 5,
    iris: 6,
    magnolia: 7,
    eucalyptus: 10,
    cosmos: 8
  };

  return counts[type] || 8;
}

function getPetalOffset(type) {
  const offsets = {
    rose: -24,
    peony: -22,
    dahlia: -29,
    carnation: -20,
    tulip: -22,
    sunflower: -30,
    gerbera: -31,
    daisy: -28,
    hibiscus: -23,
    cherry: -20,
    lily: -25,
    orchid: -21,
    anemone: -23,
    hydrangea: -18,
    poppy: -20,
    iris: -23,
    magnolia: -25,
    eucalyptus: -18,
    cosmos: -24
  };

  return offsets[type] || -24;
}

function getFlowerVariance(flower, index, total) {
  const value = getVariance(`${flower.id}-${index}-${total}`);
  return {
    rotate: -5 + value.a * 13,
    x: (value.b - 0.5) * 10,
    y: -8 + value.c * 16,
    scale: 0.98 + value.d * 0.06,
    swayDuration: 7.8 + value.e * 3.2,
    swayDelay: value.f * -3.6,
    breathDuration: 4.4 + value.b * 2.2,
    curve: -6 + value.c * 12,
    leafShift: -3 + value.d * 6,
    headTilt: -4 + value.e * 8,
    hue: value.a,
    saturation: value.b,
    brightness: value.c
  };
}

function initializeAtmosphere() {
  if (!refs.atmosphereParticles) {
    return;
  }

  refs.atmosphereParticles.innerHTML = "";

  for (let index = 0; index < 14; index += 1) {
    const particle = document.createElement("span");
    const variance = getVariance(`particle-${index}`);
    particle.className = "atmosphere-particle";
    particle.style.left = `${8 + variance.a * 84}%`;
    particle.style.top = `${6 + variance.b * 76}%`;
    particle.style.width = `${3 + variance.c * 8}px`;
    particle.style.height = particle.style.width;
    particle.style.setProperty("--particle-drift-x", `${(-10 + variance.d * 20).toFixed(2)}px`);
    particle.style.setProperty("--particle-drift-y", `${(-12 + variance.e * 16).toFixed(2)}px`);
    particle.style.setProperty("--particle-duration", `${8 + variance.f * 8}s`);
    particle.style.setProperty("--particle-delay", `${(variance.a * -8).toFixed(2)}s`);
    particle.style.opacity = String(0.14 + variance.c * 0.22);
    refs.atmosphereParticles.appendChild(particle);
  }
}

function triggerFlowerPulse(stem) {
  stem.classList.remove("is-pulsing");
  void stem.offsetWidth;
  stem.classList.add("is-pulsing");
  window.setTimeout(() => stem.classList.remove("is-pulsing"), 520);
}

function scheduleMessageReveal() {
  window.clearTimeout(messageRevealTimeout);
  const delay = reducedMotion ? 40 : 900 + state.flowers.length * 130;
  messageRevealTimeout = window.setTimeout(() => {
    refs.messageCard.classList.add("is-visible");
  }, delay);
}

function buildMeaningText() {
  const tones = state.flowers
    .map((id) => flowerMeanings[id])
    .filter(Boolean);

  const unique = [...new Set(tones)];
  const joined = unique.slice(0, 3).join(", ");
  const noteTone = inferMessageTone();

  if (!joined) {
    return "A quiet bouquet of affection and warmth.";
  }

  return `${capitalize(noteTone)} bouquet carrying ${joined}.`;
}

function renderCustomizationStudio() {
  renderSwatches(refs.wrapSwatches, wrapPalette, state.wrapColor, (color) => updateState("wrapColor", color));
  renderSwatches(refs.accentSwatches, accentPalette, state.accentColor, (color) => updateState("accentColor", color));
  renderOptionChips(refs.backgroundOptions, "backgroundTheme", state.backgroundTheme);
  renderOptionChips(refs.holderOptions, "holderStyle", state.holderStyle);
  renderOptionChips(refs.cardOptions, "cardStyle", state.cardStyle);
  renderPresetPills();
  updateStyleSummary();
}

function renderSwatches(container, colors, activeColor, onClick) {
  container.innerHTML = "";

  colors.forEach((color) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `swatch-dot${normalizeHex(activeColor) === normalizeHex(color) ? " is-active" : ""}`;
    button.style.background = color;
    button.setAttribute("aria-label", `Choose ${color}`);
    button.addEventListener("click", () => onClick(color));
    container.appendChild(button);
  });
}

function renderOptionChips(container, key, activeValue) {
  container.innerHTML = "";
  const entries = Object.entries(optionLabels[key]);

  entries.forEach(([value, label]) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `option-chip${value === activeValue ? " is-active" : ""}`;
    button.textContent = label;
    button.addEventListener("click", () => updateState(key, value));
    container.appendChild(button);
  });
}

function renderPresetPills() {
  const buttons = refs.presetGrid.querySelectorAll("[data-preset]");
  const activePreset = getActivePreset();

  buttons.forEach((button) => {
    const preset = button.dataset.preset;
    button.classList.toggle("is-active", preset === activePreset);
    button.onclick = () => applyPreset(preset);
  });
}

function applyPreset(presetName) {
  const preset = presetStyles[presetName];

  if (!preset) {
    return;
  }

  Object.assign(state, preset);
  hydrateInputs();
  persistAndRender();
}

function getActivePreset() {
  return Object.entries(presetStyles).find(([, preset]) =>
    preset.backgroundTheme === state.backgroundTheme &&
    preset.holderStyle === state.holderStyle &&
    preset.cardStyle === state.cardStyle &&
    normalizeHex(preset.wrapColor) === normalizeHex(state.wrapColor) &&
    normalizeHex(preset.accentColor) === normalizeHex(state.accentColor) &&
    preset.flowerDensity === state.flowerDensity
  )?.[0] || "";
}

function updateStyleSummary() {
  const background = optionLabels.backgroundTheme[state.backgroundTheme];
  const holder = optionLabels.holderStyle[state.holderStyle];
  const card = optionLabels.cardStyle[state.cardStyle];
  refs.summaryTitle.textContent = `${card} ${background.toLowerCase()} bouquet`;
  refs.summaryCopy.textContent = `${holder} holder, ${getDensityLabel().toLowerCase()} composition, and a ${describeAccentColor()} accent ribbon.`;
}

function getDensityLabel() {
  if (state.flowerDensity <= 11) {
    return "Airy";
  }

  if (state.flowerDensity <= 17) {
    return "Lush";
  }

  return "Grand";
}

function normalizeHex(value) {
  return (value || "").toLowerCase();
}

function describeAccentColor() {
  const descriptions = {
    "#ce7c87": "rosewood",
    "#c89b64": "honey gold",
    "#7e8f5e": "olive sage",
    "#6e86c9": "cornflower blue",
    "#9b6ab2": "orchid plum",
    "#b45f74": "berry wine"
  };

  return descriptions[normalizeHex(state.accentColor)] || "custom";
}

function inferMessageTone() {
  const text = `${state.messageTitle} ${state.messageBody}`.toLowerCase();

  if (/(miss|love|heart|adore|romantic)/.test(text)) {
    return "romantic";
  }

  if (/(proud|congrats|celebrate|shine|joy)/.test(text)) {
    return "celebratory";
  }

  if (/(sorry|healing|hope|gentle|here for you)/.test(text)) {
    return "tender";
  }

  return "warm";
}

function capitalize(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function getVariance(seed) {
  return {
    a: seededValue(`${seed}:a`),
    b: seededValue(`${seed}:b`),
    c: seededValue(`${seed}:c`),
    d: seededValue(`${seed}:d`),
    e: seededValue(`${seed}:e`),
    f: seededValue(`${seed}:f`)
  };
}

function seededValue(seed) {
  let hash = 2166136261;

  for (let index = 0; index < seed.length; index += 1) {
    hash ^= seed.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }

  return ((hash >>> 0) % 1000) / 1000;
}

function renderMusic() {
  const spotify = parseSpotifyLink(state.songUrl);
  const directAudio = isDirectAudioLink(state.songUrl);

  refs.spotifyShell.hidden = true;
  refs.audioShell.hidden = true;
  refs.musicEmpty.hidden = true;
  refs.audioPlayer.removeAttribute("src");
  refs.spotifyEmbed.removeAttribute("src");
  refs.spotifyOpenLink.removeAttribute("href");

  if (spotify) {
    refs.musicBadge.textContent = "Spotify connected";
    refs.spotifyTypeLabel.textContent = formatSpotifyType(spotify.type);
    refs.spotifyOpenLink.href = spotify.openUrl;
    refs.spotifyEmbed.src = spotify.embedUrl;
    refs.spotifyShell.hidden = false;
    return;
  }

  if (directAudio) {
    refs.musicBadge.textContent = "Custom audio";
    refs.audioPlayer.src = state.songUrl;
    refs.audioShell.hidden = false;
    return;
  }

  refs.musicBadge.textContent = state.songUrl ? "Unsupported link" : "Add a link";
  refs.musicEmpty.hidden = false;
}

function syncHash() {
  const encoded = btoa(encodeURIComponent(JSON.stringify(state)));
  const nextHash = `bouquet=${encoded}`;

  if (window.location.hash.replace(/^#/, "") !== nextHash) {
    history.replaceState(null, "", `#${nextHash}`);
  }
}

function parseSpotifyLink(value) {
  if (!value) {
    return null;
  }

  const trimmed = value.trim();
  const uriMatch = trimmed.match(/^spotify:(track|album|playlist|episode):([A-Za-z0-9]+)$/i);

  if (uriMatch) {
    return buildSpotifyDescriptor(uriMatch[1].toLowerCase(), uriMatch[2]);
  }

  try {
    const url = new URL(trimmed);

    if (!url.hostname.includes("spotify.com")) {
      return null;
    }

    const parts = url.pathname.split("/").filter(Boolean);
    const supportedType = ["track", "album", "playlist", "episode"].includes(parts[0]) ? parts[0] : null;
    const id = parts[1];

    if (!supportedType || !id) {
      return null;
    }

    return buildSpotifyDescriptor(supportedType, id);
  } catch (error) {
    return null;
  }
}

function buildSpotifyDescriptor(type, id) {
  return {
    type,
    id,
    openUrl: `https://open.spotify.com/${type}/${id}`,
    embedUrl: `https://open.spotify.com/embed/${type}/${id}?utm_source=generator`
  };
}

function formatSpotifyType(type) {
  const labels = {
    track: "Track",
    album: "Album",
    playlist: "Playlist",
    episode: "Podcast episode"
  };

  return labels[type] || "Spotify item";
}

function isDirectAudioLink(value) {
  return /\.(mp3|wav|ogg)(\?.*)?$/i.test(value || "");
}

async function copyShareLink() {
  const url = window.location.href;

  try {
    await navigator.clipboard.writeText(url);
    setStatus("Share link copied. Anyone with it can open this bouquet.");
  } catch (error) {
    setStatus("Copy failed. You can still copy the URL from the address bar.");
  }
}

function sendEmail() {
  const subject = encodeURIComponent(`${state.senderName} sent you a virtual bouquet`);
  const body = encodeURIComponent(
    `${state.recipientName}\n\n${state.messageTitle}\n\n${state.messageBody}\n\nOpen your bouquet here:\n${window.location.href}`
  );
  const email = encodeURIComponent(state.emailAddress);
  window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  setStatus(email ? `Opening your email app for ${state.emailAddress}.` : "Opening your email app with the bouquet link.");
}

function randomizeBouquet() {
  const shuffled = [...flowerCatalog].sort(() => Math.random() - 0.5);
  state.flowers = shuffled.slice(0, 3 + Math.floor(Math.random() * 3)).map((flower) => flower.id);
  state.flowerDensity = 12 + Math.floor(Math.random() * 13);
  state.wrapColor = randomColor();
  state.accentColor = randomColor();
  state.backgroundTheme = ["dawn", "garden", "midnight", "sunset"][Math.floor(Math.random() * 4)];
  state.holderStyle = ["paper", "paperbow", "winebow", "midnightpaper", "starnet", "satin", "luxe"][Math.floor(Math.random() * 7)];
  state.cardStyle = ["romantic", "modern", "storybook", "minimal"][Math.floor(Math.random() * 4)];
  hydrateInputs();
  renderFlowerOptions();
  persistAndRender();
  setStatus("Fresh bouquet idea generated.");
}

function randomColor() {
  const palette = ["#f4d3d8", "#f1d8bf", "#d8e6c9", "#c9d8f2", "#edd0e8", "#ffd4aa"];
  return palette[Math.floor(Math.random() * palette.length)];
}

function setStatus(message) {
  refs.shareStatus.textContent = message;
}
