// Our published titles. Info and artwork from the Arkline Games developer page on Google Play.
export type Game = {
  slug: string;
  name: string;
  tagline: string;
  genre: string;
  googlePlay: string;
  accent: string;
};

const play = (id: string) => `https://play.google.com/store/apps/details?id=${id}`;

export const games: Game[] = [
  {
    slug: "farm-match",
    name: "Farm Match: Jam Puzzle",
    tagline: "Match cute veggies, clear the jam and harvest fun on the farm!",
    genre: "Puzzle",
    googlePlay: play("com.twimhgames.farmmatch"),
    accent: "from-emerald-300 to-lime-200",
  },
  {
    slug: "cube-tap",
    name: "Cube Tap: Category Sort",
    tagline: "Match symbols, sort crates and clear the cube in this fun 3D puzzle game!",
    genre: "3D Puzzle",
    googlePlay: play("com.twimhgames.cubetap"),
    accent: "from-sky-300 to-indigo-200",
  },
  {
    slug: "pool-match",
    name: "Pool Match 3D",
    tagline: "Dive into a fun pool puzzle! Find and match items to fill the toolboxes!",
    genre: "Match 3D",
    googlePlay: play("com.arkline.poolmatch"),
    accent: "from-cyan-300 to-sky-200",
  },
  {
    slug: "jelly-block",
    name: "Jelly Block",
    tagline: "Slide colourful jelly blocks, solve puzzles and fill every target slot!",
    genre: "Block Puzzle",
    googlePlay: play("com.arkline.jellyblock"),
    accent: "from-pink-300 to-fuchsia-200",
  },
  {
    slug: "knit-maze",
    name: "Knit Maze",
    tagline: "Match 3 yarns and clear the jam in this cosy, colourful puzzle.",
    genre: "Puzzle",
    googlePlay: play("com.twimhgames.knitmaze"),
    accent: "from-amber-300 to-orange-200",
  },
];
