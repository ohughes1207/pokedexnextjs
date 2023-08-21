export default function GetVariantResist(variant, moveType) {
    if (!variant || !variant.type_1_rel) {
      return null;
    }
    return variant.type_1_rel[`def_vs_${moveType.charAt(0).toUpperCase() + moveType.slice(1)}`] * (variant.type_2_rel?.[`def_vs_${moveType.charAt(0).toUpperCase() + moveType.slice(1)}`] !== undefined ? variant.type_2_rel[`def_vs_${moveType.charAt(0).toUpperCase() + moveType.slice(1)}`] : 1);
}
  