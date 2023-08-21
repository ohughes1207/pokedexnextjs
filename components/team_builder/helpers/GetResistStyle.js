export default function GetResistStyle(value) {
    return (value > 0 && value <= 2) ? 'bg-green-200' :
    (value > 2 && value <= 4) ? 'bg-green-300' :
    (value > 4 && value <= 6) ? 'bg-green-400' :
    '';
}