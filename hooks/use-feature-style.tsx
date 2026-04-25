const TAG_STYLES: Record<string, string> = {
  Enterprise: "bg-indigo-100 text-indigo-800 border border-indigo-400",
  Design: "bg-fuchsia-100 text-fuchsia-800 border border-fuchsia-400",
  Engineering: "bg-teal-100 text-teal-800 border border-teal-400",
  Growth: "bg-orange-100 text-orange-800 border border-orange-400",
  Productivity: "bg-lime-100 text-lime-800 border border-lime-400",
};

// 12 fixed colors — one per feature card, in order
// All chosen to work on #1a1a1a dark header bars (warm, earthy, brutalist palette)
const HEADER_COLORS: string[] = [
  "#E76F51", // burnt orange — your existing accent
  "#F0C040", // warm amber
  "#A8C5A0", // muted sage green
  "#D4A5A5", // dusty rose
  "#7EB8C9", // steel blue
  "#C9B99A", // warm tan
  "#B5C4A1", // olive green
  "#E8A87C", // peach
  "#9BB5C8", // slate blue
  "#D4B896", // sand
  "#A0B4A0", // forest green
  "#C4A882", // caramel
];

export function useFeatureStyles(tag: string, index: number) {
  const headerColor = HEADER_COLORS[index % HEADER_COLORS.length];

  const tagStyle =
    TAG_STYLES[tag] || "bg-gray-100 text-gray-800 border border-gray-300";

  return { headerColor, tagStyle };
}
