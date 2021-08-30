function footToMeter(foot){
    foot = parseFloat(foot);
    let meter = 0.305*foot;
    document.getElementById("changeMeter").innerText = meter + "meter";
}
function meterToFoot(meter){
    meter = parseFloat(meter);
    let foot = 3.279*meter;
    document.getElementById("changeFoot").innerText = foot + "foot";
}