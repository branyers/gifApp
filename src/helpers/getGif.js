




export const getGif = async (category) => {
    const url = `http://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=oAilDgJZfgzg38LMTGIGtmpDf8sH7FEX`
    const resp = await fetch(url)
    const { data } = await resp.json()

    const gift = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized.url,
        }
    })
    return gift;

}
