const wrapper = document.getElementById("bottom")

for (var i = 0; i < 100; i++)
{
    var child = document.createElement("div")

    child.innerText = "Div " + i
    wrapper.appendChild(child)
}

function mouseScrollEvent()
{

    const children = Array.from(wrapper.childNodes)

    children.forEach(child => {
        child.style.rotate = "0deg"
        requestAnimationFrame(() => {
            const childPosTop = (child.getBoundingClientRect().top - document.body.offsetWidth / 2) / document.body.offsetWidth
            const rotation = (Math.sin((childPosTop + 5) * 10)) * 15
            child.style.rotate = rotation + "deg"
        })

    })
}
document.getElementById("bottomwrapper").addEventListener("scroll", mouseScrollEvent)

// fake mouse scroll to apply rotation
mouseScrollEvent()