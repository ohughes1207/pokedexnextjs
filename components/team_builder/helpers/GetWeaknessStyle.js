export default function GetWeaknessStyle(value) {
    return (value > 0 && value <= 2) ? 'bg-red-200' :
    (value > 2 && value <= 4) ? 'bg-red-300' :
    (value > 4 && value <= 6) ? 'bg-red-400' :
    '';
}