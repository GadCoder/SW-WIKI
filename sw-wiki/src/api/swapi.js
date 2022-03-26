async function getDataAPI(page=1){
    const url = `https://swapi.dev/api/people/?page=${page.toString()}`
    const response = await fetch(url)
    const people = await response.json()
    return people

}
export default getDataAPI