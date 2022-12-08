let addressbarform = document.getElementById('addressbarform')
var content = document.getElementById('browser-content');
var addressbar = document.getElementById('addressbar');
let backTo = [];
let index = 0;
let cbNavigator = document.getElementById('cbNavigator')
let tabs = document.getElementById('tabs');

function encode(string) {
    return __uv$config.prefix + __uv$config.encodeUrl(string)
}; 

function search() {
    window.navigator.serviceWorker.register('../../sw.js', {
        scope: __uv$config.prefix
    })
    setTimeout(() => {
            let url = addressbar.value.trim();
    if (!isUrl(url)) url = 'https://www.google.com/search?q=' + url;
    else if (!(url.startsWith('https://') || url.startsWith('http://'))) url = 'https://' + url;
    backTo.push(content.getAttribute('src'));
    content.setAttribute('src', encode(url));
    backTo.push(content.getAttribute('src'));
    index++;
    }, 1000)
}
function isUrl(val = ''){
    if (/^http(s?):\/\//.test(val) || val.includes('.') && val.substr(0, 1) !== ' ') return true;
    return false;
};
addressbarform.addEventListener('submit', () => {
    search()
})

//navigator

function Back() {
    if (backTo[index - 1] == undefined) return "can't go back";
    if (backTo[index - 1] !== undefined) {content.setAttribute('src', backTo[index - 1]);}
    index--
    addressbar.value = backTo[index]
}
function Forward() {
    if (backTo[index + 1] == undefined) return "can't go forward";
    if (backTo[index + 1] !== undefined) {content.setAttribute('src', backTo[index + 1]);}
    index++
    addressbar.value = backTo[index]
}
function Refresh() {
    let a = content.getAttribute('src');
    content.setAttribute('src', '');
    content.setAttribute('src', a);
    a = ''
}
function Home() {
    content.setAttribute('src', './browserdefaultpage.html');
    backTo.push(content.getAttribute('src'));
}
content.addEventListener('load', () => {
    addressbar.value = content.contentWindow.location;
})
