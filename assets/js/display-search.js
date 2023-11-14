var resultTextEl = document.querySelector('#result-text');
var resultContentEl = document.querySelector('#result-content');
var searchFormEl = document.querySelector('#search-form')

function getParams() {
    // Get the search params out of the URL (i.e. `?q=london&format=photo`) and convert it to an array (i.e. ['?q=london', 'format=photo'])
    var searchParamsArr = document.location.search.split('&');
   

    // get the query and format values
    var query = searchParamsArr[0].split('=').pop();
    var format = searchParamsArr[1].split('=').pop();
    
    // searchApi(query, format)
}


function handleSearchFormSubmit(event) {
    event.preventDefault();

    var searchInputVal = document.querySelector('#search-input').value;
    var formatInputVal = document.querySelector('#format-input').value

    if(!searchInputVal) {
        console.error('You need a search input value!')
        return;
    }
    
    // searchApi(searchInputVal, formatInputVal)
}



searchFormEl.addEventListener('submit', handleSearchFormSubmit);

getParams()