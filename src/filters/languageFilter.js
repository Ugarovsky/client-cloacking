export default function (lanuguage) {
    const userLang = navigator.language;
    return (userLang != lanuguage && userLang != 'EN') ? false : true;
}