window.onload = () => {
    const copyTag = () => {
        const x = document.createElement("input");
        x.value = "Greenman#0001";
        document.body.append(x);
        x.select();
        document.execCommand("copy");
        x.remove();
        // alert("Copied Discord tag to clipboard!\nTo add me:\n1. Go to Friends\n2. Click Add Friend\n3. Paste in my tag\n4.Click Send Friend Request");
        document.getElementById("popup").style.display = "block";
        document.getElementById("cover").style.display = "block";
    }

    const closePopup = () => {
        document.getElementById("popup").style.display = "none";
        document.getElementById("cover").style.display = "none";
    }

    document.getElementById('cbtn').onclick = copyTag;
    document.getElementById("popup").getElementsByTagName("button")[0].onclick = closePopup;
}
