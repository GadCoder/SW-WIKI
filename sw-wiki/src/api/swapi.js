async function getDataAPI(content="people", page=1){
    const url = `https://swapi.dev/api/${content}/?page=${page.toString()}`
    console.log(url)
    const response = await fetch(url)
    const data = await response.json()
    return data.results
}
async function getNumberOfPages(content="people"){
    const url = `https://swapi.dev/api/${content}/`
    console.log("Url in get number of pages: " +  url)
    const response = await fetch(url)
    const data = await response.json()
    const contentCount = data.count;
    const resultsCount = data.results.length;
    const numberOfPages = Math.floor(contentCount/resultsCount);
    console.log("Number of pages in api: " + numberOfPages)
    return numberOfPages

}


export {getDataAPI, getNumberOfPages }