// index, create, update, show, destroy

//index
export const fetchAllPlaylists = () => {
    return $.ajax({
        method: 'get',
        url: 'api/playlists'
    })
}

//create
export const createPlaylist = playlist => {
    return $.ajax({
        method: 'post',
        url: "api/playlists",
        data: { playlist }
    })
}

// export const updatePlaylist = playlist => {
//     return $.ajax({
//         method: 'patch',
//         url: `api/playlists/${playlist.id}`,
//         data: { playlist }
//     })
// }
export const updatePlaylist = (formData, playlistId) => {
    return $.ajax({
        method: 'patch',
        url: `api/playlists/${playlistId}`,
        data: formData,
        contentType: false,
        processData: false,
    })
}
//show
export const fetchPlaylist = id => {
    return $.ajax({
        method: 'get',
        url: `api/playlists/${id}`,
    })
}

export const deletePlaylist = id => {
    return $.ajax({
        method: 'delete',
        url: `api/playlists/${id}`,
    })
}
