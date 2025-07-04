import GetVariantResist from "./GetVariantResist";

export default function GetTotalImmune(team, moveType) {

    const hasObject = team.some(TM => typeof TM === 'object' && TM !== null);

    if (hasObject) {
        let total = 0;

        team.forEach((TM) => {
            if (typeof TM ==='object') {
                const value = TM.combinedDefenses?.[moveType];
                if (value===0) {
                    total+=1;
                }
            }
        });
        return total;
    }
    else {
        return null;
    }
}