# Photography Portfolio Template

A Squarespace-style photography portfolio website with Next.js and Tailwind CSS.

Features:

- Minimal dependencies
- Utilizes Next.js prerendering/static site generation
- Adding images to `public/_gallery/<foldername>` automically creates a new photo gallery without modifying the code. For example, to create a 'Nature' sub-gallery, simply add any number of image files to `public/_gallery/nature/`. The photos will be visible under Gallery in a Nature submenu item.

## Getting started

Install dependencies:

```sh
pnpm i
```

Run the development server:

```sh
pnpm run dev
```

Open [http://localhost:3005](http://localhost:3005) with your browser to see the result.

## Additional configuration

### Git  

When working with this repository, you may need to increase the git HTTP post buffer size due to the large image files. The following command increases the buffer to 500MB:

```sh
git config http.postBuffer 524288000
```

### Next.js build outputs

To prevent Next.js from including extra image assets in a production build, you can explicitly exclude unnecessary folders in `next.config.ts`.
