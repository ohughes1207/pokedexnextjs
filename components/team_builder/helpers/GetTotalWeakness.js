import GetVariantResist from "./GetVariantResist";

export default function GetTotalWeak(team, moveType) {
    let total = 0;

    team.forEach((TM) => {
        const value = GetVariantResist(TM, moveType);
        if (value > 1) {
            total+=1;
        }
    })
    return total
}