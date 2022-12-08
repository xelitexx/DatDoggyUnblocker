import { FakeConsole } from "./console.js";
import { encode } from "./bookmarks.js";
const fConsole = new FakeConsole();

const form = document.getElementById('proxf');
const input = document.getElementById('prox');

form.addEventListener('submit', async event => {
    fConsole.elapse()
    fConsole.log("starting", "main@index.js", Date.now())
    event.preventDefault();
    try {
        window.navigator.serviceWorker.register('../../sw.js', {
        scope: __uv$config.prefix
    }).then(() => {
        fConsole.log("starting service worker", "sw@index.js", Date.now())
        let url = input.value;
        if (!isUrl(url)) url = 'https://www.google.com/search?q=' + url;
        else if (!(url.startsWith('https://') || url.startsWith('http://'))) url = 'http://' + url;

        fConsole.log("relocating", "sw", Date.now())
        window.location.href = encode(url)
    });}
    catch(e) {
        fConsole.error("failed to start sw", e, "sw@index.js", Date.now());
        fConsole.end()
    }
});

function isUrl(val = ''){
    if (/^http(s?):\/\//.test(val) || val.includes('.') && val.substr(0, 1) !== ' ') return true;
    return false;
};
const startbtn = document.getElementById('startbtn')
startbtn.addEventListener('click', async event => {
    fConsole.elapse()
    fConsole.log("starting", "main@index.js", Date.now())
    event.preventDefault();
    try {
        window.navigator.serviceWorker.register('../../sw.js', {
        scope: __uv$config.prefix
    })
    fConsole.log("started manually", "sw@index.js", Date.now())    
    fConsole.end()
    }
    catch(e) {
        fConsole.error("failed to start sw", e, "sw@index.js", Date.now());
        fConsole.end()
    }
    setTimeout(() => {
        navigator.serviceWorker.getRegistrations().then(registrations => {
            if(registrations != "") {
                document.getElementById('startbtn').style.display = "none"
                document.getElementById('warning').style.display = "none"
                document.getElementById('addbtn').style.display = "block"
            }
        });
    }, 100)
});
