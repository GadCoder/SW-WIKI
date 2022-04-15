async function getDataAPI(url){
    const response = await fetch(url,
        {
            mode: "cors"
        })
    const data = await response.json()
    return data
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
    const dataList = []
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
            const dataDict = {}
            dataDict["name"] = info.name
            dataDict["url"] = info.url
            dataList.push(dataDict)
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