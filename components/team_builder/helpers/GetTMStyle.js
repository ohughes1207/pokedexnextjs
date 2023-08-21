export default function GetTMStyle(value) {
    return (value==0) ? 'bg-sky-400' :
    (value == 0.25) ? 'bg-green-400' :
    (value == 0.5) ? 'bg-green-200' :
    (value == 2) ? 'bg-red-200' :
    (value == 4) ? 'bg-red-400' :
    '';
}