import Alpine from "alpinejs";
import persist from "@alpinejs/persist";
import mask from "@alpinejs/mask";
import humanizeDuration from "humanize-duration";
import humanize from "humanize";

Alpine.plugin(persist);
Alpine.plugin(mask);
window.Alpine = Alpine;
window.humanizeDuration = humanizeDuration;
window.humanize = humanize;
window.shortEnglishHumanizer = humanizeDuration.humanizer({
  language: "shortEn",
  languages: {
    shortEn: {
      y: () => "y",
      mo: () => "mo",
      w: () => "w",
      d: () => "d",
      h: () => "h",
      m: () => "m",
      s: () => "s",
      ms: () => "ms",
    },
  },
});

// Add Alpine extensions here

Alpine.start();
