# Project Images

Drop real project photos here, then update the URLs in the data files:

- Hero & feature shots → referenced in `src/data/images.ts`
- Ceiling design gallery → referenced in `src/data/projects.ts`

## Suggested folders

```
hero/          # main hero background
ceilings/      # false ceiling design shots for the gallery
services/      # optional per-service imagery
projects/      # large showcase / masonry gallery photos
before-after/  # matched before & after pairs
```

## How to swap a placeholder for a local image

1. Add the file, e.g. `src/assets/images/hero/living-room.jpg`
2. Import it in the relevant data file:

```ts
import heroLivingRoom from "../assets/images/hero/living-room.jpg";

export const heroImage = { src: heroLivingRoom, alt: "..." };
```

Until then, the site uses stable high-quality placeholder images so it still
looks polished.
