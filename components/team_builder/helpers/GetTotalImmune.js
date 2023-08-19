import GetVariantResist from "./GetVariantResist";

export default function GetTotalImmune(team, moveType) {
    let total = 0;

    team.forEach((TM) => {
        const value = GetVariantResist(TM, moveType);
        if (value===0) {
            total+=1;
        }
    })
    return total
}