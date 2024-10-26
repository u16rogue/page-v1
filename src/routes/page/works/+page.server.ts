export type PortfolioEntry = {
  icon?: string,
  title?: string,
  description?: string,
  repourl?: string,
  tags?: Array<string>,
  resolver?: {

  },
};

const entries: Array<PortfolioEntry> = [
  {
    icon: 'https://avatars.githubusercontent.com/u/61908580?v=4',
    title: 'metapp',
    description: 'A general C++ utility library for metaprogramming, templating, and other questionable things.',
    repourl: 'https://github.com/u16rogue/metapp',
    tags: [ 'cpp', 'cmake', 'header-only', 'library', 'cross-platform' ],
  },
  {
    icon: 'https://avatars.githubusercontent.com/u/61908580?v=4',
    title: 'kitakit',
    description: 'Crossplatform GUI library and framework powered by ImGui.',
    repourl: 'https://github.com/u16rogue/kitakit',
    tags: [ 'cpp', 'cmake', 'library', 'cross-platform', ],
  },
  {
    icon: 'https://avatars.githubusercontent.com/u/61908580?v=4',
    title: 'kunta',
    description: 'Finance Tracking App/Software.',
    repourl: 'https://github.com/u16rogue/kunta',
    tags: [ 'cpp', 'utility', 'cross-platform', ],
  },
  {
    icon: 'https://avatars.githubusercontent.com/u/61908580?v=4',
    title: 'khuneo',
    description: 'An embedded programming/scripting language.',
    repourl: 'https://github.com/u16rogue/khuneo',
    tags: [ 'c', 'library', 'cross-platform', 'language', 'interpreter', 'compiler', ],
  },
  {
    icon: 'https://avatars.githubusercontent.com/u/61908580?v=4',
    title: 'www-page',
    description: 'This website.',
    repourl: 'https://github.com/u16rogue/u16rogue.github.io',
    tags: [ 'svelte', 'typescript', 'bun', 'ci', 'cd', ],
  },
  {
    icon: 'https://avatars.githubusercontent.com/u/61908580?v=4',
    title: 'x64dbg-sigmaker',
    description: 'A plugin for x64dbg for generating byte patterns/signatures.',
    repourl: 'https://github.com/u16rogue/x64dbg-sigmaker',
    tags: [ 'cpp', 'x64dbg', 'plugin', ],
  },
  {
    icon: 'https://avatars.githubusercontent.com/u/61908580?v=4',
    title: 'kulam',
    description: 'Bewitch binaries for modding! A modding framework.',
    repourl: 'https://github.com/u16rogue/kulam',
    tags: [ 'cpp', 'windows', 'modding', ],
  },
  {
    icon: 'https://avatars.githubusercontent.com/u/61908580?v=4',
    title: 'winlib',
    description: 'C++ Library for interacting with x64 Windows.',
    repourl: 'https://github.com/u16rogue/winlib',
    tags: [ 'cpp', 'windows', 'library', ],
  },
  {
    icon: 'https://avatars.githubusercontent.com/u/61908580?v=4',
    title: 'memlib',
    description: 'C++ Library for interacting with raw memory and addressing in x64',
    repourl: 'https://github.com/u16rogue/memlib',
    tags: [ 'cpp', 'cmake', 'library', ],
  },
  {
    icon: 'https://avatars.githubusercontent.com/u/61908580?v=4',
    title: 'baelz',
    description: 'Build and execute lazily. A custom build system.',
    repourl: 'https://github.com/u16rogue/baelz',
    tags: [ 'cpp', 'build-system', 'utility', ],
  },
  {
    icon: 'https://avatars.githubusercontent.com/u/61908580?v=4',
    title: 'osu-key-dumper',
    description: 'Dumps osu!\'s decryption key from memory.',
    repourl: 'https://github.com/u16rogue/osu-key-dumper',
    tags: [ 'cpp', 're', 'poc', 'modding', 'games', ],
  },
  {
    icon: 'https://avatars.githubusercontent.com/u/61908580?v=4',
    title: 'handyCafe Patcher',
    description: 'Runtime patcher for the cafe client handyCafe',
    repourl: 'https://github.com/u16rogue/pk_handycafe',
    tags: [ 'cpp', 're', 'poc', 'modding', 'software', 'utility' ],
  },
  {
    icon: 'https://avatars.githubusercontent.com/u/61908580?v=4',
    title: 'bad-echo-driver PoC',
    description: 'Protect, Unprotect, Filter handles, Create handle, and Read memory by abusing a signed Kernel driver.',
    repourl: 'https://github.com/u16rogue/bad-echo-driver',
    tags: [ 'cpp', 'windows', 'poc', ],
  },
  {
    icon: 'https://avatars.githubusercontent.com/u/61908580?v=4',
    title: 'Genshin Impact Scripting Framework',
    description: 'A modding utility for Genshin Impact',
    repourl: 'https://github.com/u16rogue/genshin-scripting-framework',
    tags: [ 'cpp', 'windows', 'games', 're', 'modding', ],
  },
  {
    icon: 'https://avatars.githubusercontent.com/u/61908580?v=4',
    title: 'Dota 2 Internal',
    description: 'A modding utility for Dota 2',
    repourl: 'https://github.com/u16rogue/dota2-internal',
    tags: [ 'cpp', 'windows', 'games', 're', 'modding', ],
  },
  {
    icon: 'https://avatars.githubusercontent.com/u/61908580?v=4',
    title: 'CS2 Internal',
    description: 'A modding utility for the Counter Strike 2',
    repourl: 'https://github.com/u16rogue/cs2-internal',
    tags: [ 'cpp', 'windows', 'games', 're', 'modding', ],
  },
  {
    icon: 'https://avatars.githubusercontent.com/u/61908580?v=4',
    title: 'CS2 M03 Internal',
    description: 'A modding utility for the leaked March 2023 Counter Strike 2 build.',
    repourl: 'https://github.com/u16rogue/cs2-internal-old',
    tags: [ 'cpp', 'windows', 'games', 're', 'modding', ],
  },
  {
    icon: 'https://avatars.githubusercontent.com/u/61908580?v=4',
    title: 'OBS CS Game Capture Patcher',
    description: 'Patches OBS to enable Game Capture for Counter Strike',
    repourl: 'https://github.com/u16rogue/obs-win-cap-patcher',
    tags: [ 'python', 'windows', 'games', 'modding', 'utility', ],
  },
];

export async function load() {
  return {
    entries,
    meta: {
      page: {
        title: 'Works',
      },
      nav: {
        title: 'Works',
        route: '/page/works',
      },
    },
  };
}
