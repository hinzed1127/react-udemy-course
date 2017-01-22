const ROOT_URL = 'https://www.googleapis.com/youtube/v3/search';

export default function searchYoutube(options, callback) {
    const params = {
        part: 'snippet',
        key: options.key,
        q: options.term,
        type: 'video'
    };

    const esc = encodeURIComponent;
    const query = Object.keys(params)
                    .map(k => esc(k) + '=' + esc(params[k]))
                    .join('&');

    var myHeaders = new Headers();

    var myInit = { method: 'GET',
                   headers: myHeaders,
                   mode: 'cors',
                   cache: 'default' };

    fetch(ROOT_URL + '?' + query, myInit)
        .then(response => response.json())
        .then( (response) => {
            if (callback) {
                callback(response.items);
            }
        })
        .catch((error) => console.error(error));
}
