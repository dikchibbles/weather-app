export async function getImageFromGiphyAndReturnURL(word) {
    let url = `https://api.giphy.com/v1/gifs/translate?api_key=wNb2C0ucoisHtIHM1KAd4L1RRhiTqJVL&s=${word}`
    let response = await fetch(url, {mode: "cors"});
    let data = await response.json();
    let imageURL = data.data.images.original.url;
    return imageURL;
}