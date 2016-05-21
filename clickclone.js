(function () {
    function getRepoURL(container) {
        var field = container.querySelector(".clone-options.ssh-clone-options input.js-url-field");
        return field.value;
    }

    function addCloneButton(container, url) {
        var btn = document.createElement("a");
        btn.appendChild(document.createTextNode("Click Clone"))
        btn.classList.add("btn")
        btn.classList.add("btn-sm")
        btn.classList.add("btn-primary")

        container.appendChild(btn)

        btn.onclick = function () {
            alert(url);
        }
    }

    var container = document.querySelector("#js-repo-pjax-container .in-mid-page.file-navigation");
    if (!container) {
        return;
    }

    var url = getRepoURL(container);
    addCloneButton(container, url);
})();
