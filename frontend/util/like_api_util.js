
//index
export const fetchAllLikes = () => {
    return $.ajax({
        method: 'get',
        url: 'api/likes'
    })
}

//create
export const createLike = like => {
    return $.ajax({
        method: 'post',
        url: "api/likes",
        data: { like }
    })
}

//id is actually the playlistId
export const deleteLike = id => {
    return $.ajax({
        method: 'delete',
        url: `api/likes/${id}`,
    })
}
