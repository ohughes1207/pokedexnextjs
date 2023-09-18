import { useResetAtom } from 'jotai/utils'
import { T1FilterAtom, T2FilterAtom, genValueAtom, isLegendaryAtom, isMegaAtom, isMythicalAtom, isParadoxAtom, isPseudoLAtom, isRegionalAtom, isUBAtom, searchQueryAtom } from '../PokedexAtoms'

export default function ResetFilters() {
    const resetSearchQuery = useResetAtom(searchQueryAtom);
    const resetT1Filter = useResetAtom(T1FilterAtom);
    const resetT2Filter = useResetAtom(T2FilterAtom);
    const resetGenValue = useResetAtom(genValueAtom);
    const resetIsLegendary = useResetAtom(isLegendaryAtom);
    const resetIsParadox = useResetAtom(isParadoxAtom);
    const resetIsPseudoL = useResetAtom(isPseudoLAtom);
    const resetIsUB = useResetAtom(isUBAtom);
    const resetIsMythical = useResetAtom(isMythicalAtom);
    const resetIsRegional = useResetAtom(isRegionalAtom);
    const resetIsMega = useResetAtom(isMegaAtom);
  
    resetSearchQuery();
    resetT1Filter();
    resetT2Filter();
    resetGenValue();
    resetIsLegendary();
    resetIsParadox();
    resetIsPseudoL();
    resetIsUB();
    resetIsMythical();
    resetIsRegional();
    resetIsMega();
}