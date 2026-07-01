# AI Image Generation Prompts — Salaar Pallet Solutions

High-quality prompts for generating product/brand images with **Midjourney** (preferred), DALL·E 3, Leonardo AI, or Stable Diffusion.

---

## 1. Wooden Pallets — Top Image

**File**: `public/images/wooden-pallets.jpg` · **Aspect**: 3:2 · **Area**: 600×400 px

**Midjourney Prompt:**

```
Photorealistic close-up of a neatly stacked pile of high-quality wooden pallets made from warm-toned pine wood, outdoor industrial setting, soft golden hour lighting, depth of field, rich wood grain details, professional commercial product photography, 8K, --ar 3:2 --v 6.1
```

**DALL·E 3:** Remove `--ar 3:2 --v 6.1`, request landscape orientation.

---

## 2. Plastic Pallets — Image 1 (Top)

**File**: `public/images/plastic-pallets.jpg` · **Aspect**: 3:2 · **Area**: 600×400 px

**Midjourney Prompt:**

```
Photorealistic stack of blue high-density polyethylene (HDPE) plastic pallets in a clean modern warehouse, bright professional lighting, sleek industrial aesthetic, shallow depth of field, sterile hygienic environment, commercial product photography, 8K, --ar 3:2 --v 6.1
```

**DALL·E 3:** Remove `--ar 3:2 --v 6.1`, request landscape orientation.

---

## 3. Plastic Pallets — Image 2 (Bottom Banner)

**File**: `public/images/plastic-pallets-2.jpg` · **Aspect**: 3:1 · **Area**: 1200×400 px

**Midjourney Prompt:**

```
Wide-angle photorealistic interior of a modern automated warehouse with rows of neatly organized plastic pallets on metal shelving, bright overhead LED lighting, clean organized aisles, industrial logistics setting, professional commercial photography, 8K, --ar 3:1 --v 6.1
```

**DALL·E 3:** Remove `--ar 3:1 --v 6.1`, request landscape wide orientation.

---

## 4. Custom Pallet Manufacturing

**File**: `public/images/custom-pallets.jpg` · **Aspect**: 3:2 · **Area**: 600×400 px

**Midjourney Prompt:**

```
Skilled craftsman in a woodworking workshop measuring and building a custom wooden pallet by hand, sawdust in air, warm workshop lighting, detailed wood textures, ruler and tools visible, industrial craftsmanship photography, photorealistic, 8K, --ar 3:2 --v 6.1
```

**DALL·E 3:** Remove `--ar 3:2 --v 6.1`, request landscape orientation.

---

## 5. About — Warehouse Image

**File**: `public/images/about-warehouse.jpg` · **Aspect**: 3:2 · **Area**: 600×400 px

**Midjourney Prompt:**

```
Modern industrial logistics warehouse exterior in Karachi Pakistan, bright sunny day, blue sky, large warehouse building with loading docks, a few wooden pallets visible near entrance, professional commercial building photography, photorealistic, 8K, --ar 3:2 --v 6.1
```

**DALL·E 3:** Remove `--ar 3:2 --v 6.1`, request landscape orientation.

---

## 6. Brand Logo

**Current**: Text-based "SP" in a brown square. No image file.
**Replace**: `public/images/logo.png` (transparent PNG) + update `header.tsx` to use it.

**Midjourney Prompt (Option A — Minimalist):**

```
Minimalist modern logo design for "Salaar Pallet Solutions" — a pallet company. Mark consists of a stylized letter "S" integrated with a wooden pallet icon or wooden plank motif. Warm brown and forest green color palette. Clean vector style, flat design, professional corporate identity, transparent background, --ar 1:1 --v 6.1
```

**Midjourney Prompt (Option B — Illustrative):**

```
Professional logo for a pallet supply company called "Salaar Pallet Solutions". Icon combining the letter "S" with a stack of wooden pallets. Earthy brown and green tones. Clean modern vector illustration style, scalable design, suitable for website header, professional branding, --ar 1:1 --v 6.1
```

**DALL·E 3:** Use "Generate a logo for..." style prompts, remove `--ar 1:1 --v 6.1`.

---

## Tips

| Setting | Midjourney | DALL·E 3 | Leonardo AI |
|---------|-----------|----------|-------------|
| Stylize | `--s 250` (balanced) | N/A | Preset: "Cinematic" |
| Aspect | Use `--ar` flag | Request in text | Crop afterward |
| Export format | JPEG (photos), PNG (logo) | PNG | PNG/JPEG |
| Min resolution | 1200px wide | 1792×1024 | 1024+ wide |

- Generate 3–4 variants per prompt, pick the best match
- After generating, overlay a subtle warm brown gradient on photos if they feel too cold
- For the logo, generate on transparent background, save as `public/images/logo.png`, then update `header.tsx` line 33–35 to use `<Image>` instead of the text "SP" placeholder
