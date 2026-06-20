https://autosuggest-backend.onrender.com/api/autosuggest?q=a&weighted=true&algorithm=trie&limit=8

var API_URL = "https://autosuggest-backend.onrender.com/api/autosuggest";

var searchInput = document.getElementById("search-input");
var searchSuggestions = document.getElementById("search-suggestions");
//this is the input box where we will type the search query and get the suggestions
searchInput.addEventListener("input", function(){
//this function will be called whenever the user types something in the input box
//get the data which user has typed
//put this data in the query parameter of the API call
//append all the search suggestions to the div tag in UI
    var query = searchInput.value.trim();
    //console.log(query);//we store the value entered by the user in this query
    fetchSuggestions(query);//we call the function fetchSuggestions and pass the query as parameter
    
})

function fetchSuggestions(query){//forms the query into url then calls the API and gets the suggestions
    var fullAPI = API_URL + "?q=" + query + "&weighted=true&algorithm=trie&limit=8";
    fetch(fullAPI)//we get raw data we convert it into json format using res.json() and then we get the data in json format
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        //after getting the data we will append it to the div tag in UI for suggestions
        showSuggestions(data);
        console.log(data);
    })
    .catch(function(err){
        console.log("Error:" +err);
    })

}
function showSuggestions(data){
    var values = data.results;
    if(data.count == 0){
        searchSuggestions.innerHTML = "<div>No Suggestions found</div>";
    }
    else{
        var htmlString = "";
        for(var i=0;i<values.length;i++){
            htmlString +="<div><span class='suggestion-item'>"+values[i].text+"</span></div>";
        }
        searchSuggestions.innerHTML = htmlString;
    }
}