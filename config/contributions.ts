export interface contributionsInterface {
  repo: string;
  contibutionDescription: string;
  repoOwner: string;
  link: string;
}

export const contributionsUnsorted: contributionsInterface[] = [
 
  {
    repo: "puter",
    contibutionDescription:
  "Fixed offline support in documentation: Bundled all external CDN assets (jQuery, highlight.js, Google Fonts) locally",
    repoOwner: "HeyPuter",
    link: "https://github.com/HeyPuter/puter/pull/2473",
  },
  {
    repo: "puter",
    contibutionDescription:
    "Completed missing Hungarian translations in the GUI, imroving accesblity for Hungarian speakers",
    repoOwner: "HeyPuter",
    link: "https://github.com/HeyPuter/puter/pull/1572",
  },
];

export const featuredContributions: contributionsInterface[] =
  contributionsUnsorted.slice(0, 3);
