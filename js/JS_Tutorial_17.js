console.log("This is tutorial 17")

// Events & Event Object in Javascript
document.getElementById('heading').addEventListener('mouseover'/*'click'*/, function(e) {
    let variable;
    console.log("You have clicked the heading")
    variable = e.target;
    variable = e.target.className;
    variable = Array.from(e.target.classList);
    //variable = e.target.id;
    variable = e.offsetX
    variable = e.offsetY
    variable = e.clientX
    variable = e.clientY
    console.log(variable)
    // location.href = "https://computerscience.z13.web.core.windows.net/" 
})