async function getDataAPI(content="people", page=1){
    const url = `https://swapi.dev/api/${content}/?page=${page.toString()}`
    const response = await fetch(url)
    const data = await response.json()
    return data.results
}
async function getNumberOfPages(content="people"){
    const url = `https://swapi.dev/api/${content}/`
    const response = await fetch(url)
    const data = await response.json()
    const contentCount = data.count;
    const resultsCount = data.results.length;
    const numberOfPages = Math.ceil(contentCount/resultsCount);
    return numberOfPages

}


export {getDataAPI, getNumberOfPages }