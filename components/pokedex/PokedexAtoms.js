import { atom } from "jotai";
import { atomWithReset } from "jotai/utils";


export const searchQueryAtom = atomWithReset('');
export const T1FilterAtom = atomWithReset('');
export const T2FilterAtom = atomWithReset('');
export const genValueAtom = atomWithReset(0);
export const isLegendaryAtom = atomWithReset(false);
export const isParadoxAtom = atomWithReset(false);
export const isPseudoLAtom = atomWithReset(false);
export const isUBAtom = atomWithReset(false);
export const isMythicalAtom = atomWithReset(false);
export const isRegionalAtom = atomWithReset(false);
export const isMegaAtom = atomWithReset(false);
export const pageNumAtom = atom(1);