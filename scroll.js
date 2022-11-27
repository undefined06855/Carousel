const wrapper = document.getElementById("bottom")

/*
for (var i = 0; i < 100; i++)
{
    var child = document.createElement("div")

    child.innerText = "Div " + i
    wrapper.appendChild(child)
}*/

function scrollEvent()
{
    const children = Array.from(wrapper.childNodes)

    var index = 0
    children.forEach(child => {
        child.style.rotate = "0deg"
        child.style.translate = "15% 0"
        const childPosTop = (child.getBoundingClientRect().top - document.body.offsetHeight / 2) / document.body.offsetHeight
        const rotation = Math.sin(childPosTop) * -30
        child.style.rotate = rotation + "deg"
        child.style.translate = `15% ${rotation * 20}%`
        index++
    })
}