let angle = 0;
let slider;

function setup() {
    createCanvas(windowWidth-5, windowHeight-5);
    slider = createSlider(0, TWO_PI, PI / 10, 0.01);
    let xdiv = createDiv(["<p id='time' style='font-family:Special Elite; font-size:50px; text-align:right; color:#d25353'></p>"]);
    xdiv.style("position", "absolute");
    xdiv.style("right", 50);
    xdiv.style("top", "0px");
    slider.position(width / 4 - 300, height - 30);
    slider.style('width', '600px');
    

}

function draw() {
    let xTime = new Date;
    background(0);
    angle = slider.value();
    stroke(0,182,148);
    translate((windowWidth) / 4, height);
    branch(200);
    // Get The element by id and add the current time to the element
    document.getElementById('time').innerHTML = xTime.toDateString() + "<br>" + xTime.toLocaleTimeString();

}

function branch(len) {
    line(0, 0, 0, -len);
    translate(0, -len);
    if (len > 6) {
        push();
        rotate(angle);
        branch(len * 0.70);
        pop();
        push();
        rotate(-angle);
        branch(len * 0.70);
        pop();
    }


}
