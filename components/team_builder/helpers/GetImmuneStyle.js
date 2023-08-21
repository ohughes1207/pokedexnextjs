export default function GetImmuneStyle(value) {
    return (value === 1) ? 'bg-sky-200' :
    (value === 2) ? 'bg-sky-300' :
    (value >= 3) ? 'bg-sky-400' :
    '';
}