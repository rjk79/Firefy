
//create
export const createFriendship = friendship => {
    return $.ajax({
        method: 'post',
        url: "api/friendships",
        data: { friendship }
    })
}

//the friend's id
export const deleteFriendship = id => {
    return $.ajax({
        method: 'delete',
        url: `api/friendships/${id}`,
    })
} 