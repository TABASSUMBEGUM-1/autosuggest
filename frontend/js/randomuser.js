function randomUser(){
    fetch("https://randomuser.me/api/")
    .then(function(res) {//the res will store the response from the API call
        return res.json();//the res.json() will convert the response into json format
    })
    .then(function(data){
        var user = data.results[0];//the data.results[0] will store the first result from the API call
        var fullName = user.name.title + " " + user.name.first + " " + user.name.last;
        //the user.name.title, user.name.first, user.name.last will store the title, first name and last name of the user
        document.getElementById("user-img").src = user.picture.large;
        document.getElementById("user-name").innerText = fullName;
        document.getElementById("user-gender").innerText = user.gender;
    })
    .catch(function(err){
        console.log("Error: " + err);
    })

}