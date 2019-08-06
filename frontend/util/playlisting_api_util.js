

export const createPlaylisting = playlisting => {
    return $.ajax({
        method: 'post',
        url: "api/playlistings",
        data: { playlisting }
    })
}