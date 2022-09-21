export const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=FG3xyn5xnRv7zvUxEM0O8YoO8bvzlHRv&q=${ category }&limit=10`;
    // const url = `https://api.giphy.com/v1/gifs/search?api_key=kaJ1JwD4CuQgYun7YpTQpTr5p1qs1sQn&q=${ category }&limit=10`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    return gifs;
}