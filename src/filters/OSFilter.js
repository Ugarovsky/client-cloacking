export default function (platform) {
    for (i = 0; platform[i]; i++){
        if (platform[i].toLowerCase().indexOf(navigator.platform)){
            return true;
        }   
    return false
    }
}