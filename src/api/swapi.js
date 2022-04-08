async function getDataAPI(content="people", page=1){
    const url = `https://swapi.dev/api/${content}/?page=${page.toString()}`
    const response = await fetch(url,
        {
            mode: "cors"
        })
    const data = await response.json()
    return data.results
}


async function getNumberOfPages(content="people"){
    const url = `https://swapi.dev/api/${content}/`
    const response = await fetch(url,
        {
            mode: "cors"
        })
    const data = await response.json()
    const contentCount = data.count;
    const resultsCount = data.results.length;
    const numberOfPages = Math.ceil(contentCount/resultsCount);
    return numberOfPages

}

async function getListOfData(content="people"){
    const dataList = {}
    const numberOfPages = await getNumberOfPages(content).then((info) => info)

    let pageNumber = 1
    let urlBase = `https://swapi.dev/api/${content}/?page=`
    let response = await fetch(`${urlBase}${pageNumber}`,
        {
            mode: "cors"
        })
    let data = await response.json()

    while(pageNumber <= numberOfPages){
        pageNumber += 1;
        data.results.forEach((info) => {
            dataList[info.name] = info.url 
        })
        response = await fetch(`${urlBase}${pageNumber}`,
        {
            mode: "cors"
        })
        data = await response.json()

    }
    return dataList
   
}


export {getDataAPI, getNumberOfPages, getListOfData }