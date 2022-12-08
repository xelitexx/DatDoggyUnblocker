export class FakeConsole {
    constructor() {
        this.erroroccur = false;
    }
    log(text, source, time) {
        const fConsole = document.getElementById('fakeconsole_output');
        fConsole.innerHTML += "[" + source + "]:" + time + " " + text + "<br>";
    }
    error(errmsg, err, source, time) {
        const fConsole = document.getElementById('fakeconsole_output');
        fConsole.innerHTML += "<span style='color: red;' class='error' >[" + source + "]:" + time + " " + errmsg + " | " + err + "</span><br>";
        this.erroroccur = true;
    }
    elapse() {
        const fConsole = document.getElementById('fakeconsole_output');
        var second = 0;
        fConsole.innerHTML += "<span id='console_elapsed'></span><br>"
        setInterval(() => {if(this.erroroccur == false) {second++; document.getElementById('console_elapsed').innerHTML = second / 10 + "s";}}, 100);
    }
    end() {
        const fConsoleTimer = document.getElementById('console_elapsed');
        var second = 0;
        setInterval(()=>{second++},100)
        this.erroroccur = true
        fConsoleTimer.innerHTML = "process closed in " + second / 10 + "s";
    }
}
