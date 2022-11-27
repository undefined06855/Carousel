const req = new XMLHttpRequest()

const inner =
`
<span>[[NAME]]</span> | <small>[[DESC]]</small>
`
  
req.onreadystatechange = () => {
    if (req.readyState == 4 && req.status == 200)
    {
        console.log("Request successful.")

        const json = JSON.parse(req.response)

        json.forEach(repo => {
            if (!(repo.fork || repo.archived || repo.private))
            {
                console.log(repo)
                /*
                document.getElementById("repo_wrapper").innerHTML +=
                reponame
                .replaceAll("[[TITLE]]", repo.name)
                .replaceAll("[[DESC]]", repo.description === null ? "(No description provided)" : repo.description)
                .replaceAll("[[ID]]", repid)
                .replaceAll("[[URL]]", repo.html_url)
                .replaceAll("[[JSON]]", JSON.stringify(repo))

                stylesheet.textContent +=
                style
                .replaceAll("[[ID]]", repid)
                .replaceAll("[[RAND]]", Math.random() * 3 - 1.5)
                .replaceAll("[[RAND2]]", Math.random() < .5 ? -7 : 7)
                */

                const element = document.createElement("div")

                element.classList.add("nopointer")

                element.innerHTML =
                inner
                .replaceAll("[[NAME]]", repo.name)
                .replaceAll("[[DESC]]", repo.description)

                document.getElementById("bottom").appendChild(element)

                element.addEventListener("click", event => {
                    console.log(event.target)
                })
            }
            else {console.log("Rejected repo %s", repo.name)}
        })

        // when req done:
        document.getElementById("bottomwrapper").addEventListener("scroll", scrollEvent)
        window.addEventListener("resize", scrollEvent)

        // fake scroll to apply rotation
        scrollEvent()
    }
    else console.log("state changed to %s", req.status) 
}

req.open("get", "https://api.github.com/users/undefined06855/repos")
req.send()

