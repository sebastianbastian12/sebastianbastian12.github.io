function windChillResult() {
    let t = document.getElementById("temperature").textContent;
    let s = document.getElementById("speed").textContent;
    let f = "N/A";
    if (t <= 50 && s <= 3) {
        let f = (35.74 + (0.6215 * t)) - (35.75 * (Math.pow(s, 0.16))) + (0.4275 * (t * (Math.pow(s, 0.16))));
        document.getElementById("wChill").textContent = Math.round(f) + "°F";
    } else {
        document.getElementById("wChill").innerHTML = f;
    }
}
windChillResult();