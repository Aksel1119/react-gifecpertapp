
export const getGif= async (categoria) =>{

    const url=`https://api.giphy.com/v1/gifs/search?api_key=aWEhzJXCllHt2AQAUBgaAI2MenJwUkfC&q=${encodeURI(categoria)}&limit=10`;

    const resp =await fetch( url);
    const {data} = await resp.json();

    const gif= data.map( img =>{
        return {id: img.id,
                title: img.title,
                url: img.images.downsized_medium.url}
    });

    return gif;
}