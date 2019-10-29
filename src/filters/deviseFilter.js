
export default function deviseFilter() {
    return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) ?
        true : false;
}

function detectDevise(devise) {
    const uagent = navigator.userAgent.toLowerCase();
    return (uagent.search(devise) > -1) ? true : false;
}

function screenFilter() {
    const deviseHeight = window.screen.height;
    const deviseWidth = window.screen.width;

    return (deviseHeight < 700 && deviseWidth < 1000) ? true : false; 
}

export {detectDevise, screenFilter}