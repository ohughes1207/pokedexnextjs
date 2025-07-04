export default function GetVariantResist(variant, moveType) {
  if (!variant || !variant.combinedDefenses) {
    return null;
  }

  const key = moveType.charAt(0).toUpperCase() + moveType.slice(1);
  return variant.combinedDefenses[key] ?? 1; // default to 1 if type not found
}
