const urlOn = "https://my-json-server.typicode.com/edgareslm/Alura-flix/Videos"
const urlOff = "http://localhost:3000/Videos" 

function getVideos(){
    return  fetch(urlOn).
            then( (response) => response.json() )
}

let arr = (async () => {
    try{
        let arr = await getVideos();
        return arr;
    }catch(error){
        return error
    }   
})();

export {
    getVideos,
    arr
}