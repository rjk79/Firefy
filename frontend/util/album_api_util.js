export const fetchAllAlbums = () => {
    return $.ajax({
        method: 'get',
        url: 'api/albums'
    })
}

export const fetchAlbum = id => {
    return $.ajax({
        method: 'get',
        url: `api/albums/${id}`,
    })
}
