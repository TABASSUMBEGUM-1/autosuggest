var users = [
    {
        "name": "John Doe",
        "gender": "Male",
        "image": "/images/john.png"
    },
    {
        "name": "Jane Doe",
        "gender": "Female",
        "image": "/images/jane.png"
    }
]

var curId = 0;
function toggle() {
    //toggle btw 0 and 1
    curId = (curId + 1) % 2;
    //src is attribute of img tag, textContent/innerText is a property of h2 and p tags
    var user = users[curId];

    document.getElementById("user-img").src = user.image;
    document.getElementById("user-name").innerText = user.name;
    document.getElementById("user-gender").innerText = user.gender;
}