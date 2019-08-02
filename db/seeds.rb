# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Song.destroy_all
Album.destroy_all
Artist.destroy_all
Playlist.destroy_all

Playlisting.destroy_all
Follow.destroy_all
Friendship.destroy_all


aa = User.create!(username: "Guest", password: "password")
ab = User.create!(username: "user", password: "starwars")
ac = User.create!(username: "Bob", password: "orange")
ad = User.create!(username: "Ed", password: "banana")

#########################################################################
da = Artist.create!(name: "The Neighborhood")
db = Artist.create!(name: "Panic! At The Disco")
dc = Artist.create!(name: "Bingo Players")
dd = Artist.create!(name: "Ed Sheeran")
de = Artist.create!(name: "CHVRCHES")
df = Artist.create!(name: "CAZZETTE")


ca = Album.create!(name: "I Love You.", artist_id: da.id)
cb = Album.create!(name: "Death of a Bachelor", artist_id: db.id)
cc = Album.create!(name: "Love Me Right", artist_id: dc.id)
cd = Album.create!(name: "x(Deluxe Edition)", artist_id: dd.id)
ce = Album.create!(name: "Love Is Dead", artist_id: de.id)
cf = Album.create!(name: "Eject", artist_id: df.id)
cg = Album.create!(name: "Static", artist_id: df.id)

ba = Song.create!(title: "Sweater Weather", album_id: ca.id)
bb = Song.create!(title: "Death of a Bachelor", album_id: cb.id)
bc = Song.create!(title: "Love Me Right", album_id: cc.id)
bd = Song.create!(title: "Thinking out Loud", album_id: cd.id)
be = Song.create!(title: "Graffiti", album_id: ce.id)
bf = Song.create!(title: "Weapon", album_id: cf.id)
bg = Song.create!(title: "Beam Me Up", album_id: cf.id)
bh = Song.create!(title: "Static", album_id: cg.id)



ea = Playlist.create(user_id: aa.id, name: "Sounds of Summer")
eb = Playlist.create(user_id: aa.id, name: "Popular Jams")
ec = Playlist.create(user_id: ab.id, name: "Beach Blues")
ed = Playlist.create(user_id: ab.id, name: "Throwback Twists")

#########################################################################

fa = Playlisting.create!(song_id: ba.id, playlist_id: ea.id)
fb = Playlisting.create!(song_id: bb.id, playlist_id: ea.id)
fc = Playlisting.create!(song_id: ba.id, playlist_id: eb.id)
fd = Playlisting.create!(song_id: bc.id, playlist_id: ea.id)
fe = Playlisting.create!(song_id: bd.id, playlist_id: ea.id)
ff = Playlisting.create!(song_id: be.id, playlist_id: ea.id)
fg = Playlisting.create!(song_id: bh.id, playlist_id: ec.id)
fh = Playlisting.create!(song_id: bf.id, playlist_id: ec.id)

ga = Follow.create!(user_id: aa.id, playlist_id: ec.id)
gb = Follow.create!(user_id: aa.id, playlist_id: ed.id)
gc = Follow.create!(user_id: ac.id, playlist_id: eb.id)

ha = Friendship.create!(user1_id: aa.id, user2_id: ab.id)
hb = Friendship.create!(user1_id: aa.id, user2_id: ac.id)
hc = Friendship.create!(user1_id: ab.id, user2_id: ac.id)
