json.extract! user, :id, :username
json.playlist_ids user.playlists.pluck(:id)
# pluck takes keys

follows = []
user.follows.each do |follow|
    follows << follow.playlist_id
end
json.follow_ids follows

friendships = []
user.friendships1.each do |friendship|
    friendships << friendship.user2_id
end
user.friendships2.each do |friendship|
    friendships << friendship.user1_id
end
json.friend_ids friendships

# json.follow_ids follows



# json.friend_ids do
#     user.friendships1 each
# end


# json.follow_ids do
#     json.array! user.follows do |follow| 
#         follow.playlist_id
#     end
# end

# json.follows user.follows 
