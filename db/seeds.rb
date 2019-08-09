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


ActiveRecord::Base.connection.reset_pk_sequence!('users')
ActiveRecord::Base.connection.reset_pk_sequence!('songs')
ActiveRecord::Base.connection.reset_pk_sequence!('albums')
ActiveRecord::Base.connection.reset_pk_sequence!('artists')
ActiveRecord::Base.connection.reset_pk_sequence!('playlists')
ActiveRecord::Base.connection.reset_pk_sequence!('playlistings')
ActiveRecord::Base.connection.reset_pk_sequence!('follows')
ActiveRecord::Base.connection.reset_pk_sequence!('friendships')


aa = User.create!(username: "Guest", password: "password")
ab = User.create!(username: "user", password: "starwars")
ac = User.create!(username: "Bob", password: "orange")
ad = User.create!(username: "Ed", password: "banana")

################################## ARTISTS ############################################
da = Artist.create!(name: "The Neighborhood")
db = Artist.create!(name: "Panic! At The Disco")
dc = Artist.create!(name: "Bingo Players")
dd = Artist.create!(name: "Ed Sheeran")
de = Artist.create!(name: "CHVRCHES")
df = Artist.create!(name: "CAZZETTE")
dg = Artist.create!(name: "Vacation Manor")
dh = Artist.create!(name: "Tritonal")

####
####
####
####

da.photo.attach(io: File.open('app/assets/images/neighbourhood_artist.png'), filename: 'neighbourhood_artist.png')
db.photo.attach(io: File.open('app/assets/images/panic_artist.jpg'), filename: 'panic_artist.jpg')
dc.photo.attach(io: File.open('app/assets/images/bingo_artist.jpg'), filename: 'bingo_artist.jpg')
dd.photo.attach(io: File.open('app/assets/images/sheeran_artist.jpg'), filename: 'sheeran_artist.jpg')
de.photo.attach(io: File.open('app/assets/images/chvrches_artist.jpg'), filename: 'chvrches_artist.jpg')
df.photo.attach(io: File.open('app/assets/images/cazzette_artist.jpg'), filename: 'cazzette_artist.jpg')
dg.photo.attach(io: File.open('app/assets/images/vacation_artist.jpg'), filename: 'vacation_artist.jpg')
dh.photo.attach(io: File.open('app/assets/images/tritonal_artist.jpg'), filename: 'tritonal_artist.jpg')

da.jumbo.attach(io: File.open('app/assets/images/neigh_jumbo.jpg'), filename: 'neigh_jumbo.jpg')
db.jumbo.attach(io: File.open('app/assets/images/panic_jumbo.jpg'), filename: 'panic_jumbo.jpg')
dc.jumbo.attach(io: File.open('app/assets/images/bingo_jumbo.jpg'), filename: 'bingo_jumbo.jpg')
dd.jumbo.attach(io: File.open('app/assets/images/sheeran_jumbo.jpg'), filename: 'sheeran_jumbo.jpg')
de.jumbo.attach(io: File.open('app/assets/images/chvrches_jumbo.jpg'), filename: 'chvrches_jumbo.jpg')
df.jumbo.attach(io: File.open('app/assets/images/cazzette_jumbo.jpg'), filename: 'cazzette_jumbo.jpg')
dg.jumbo.attach(io: File.open('app/assets/images/vacation_jumbo.jpg'), filename: 'vacation_jumbo.jpg')
dh.jumbo.attach(io: File.open('app/assets/images/tritonal_jumbo.jpg'), filename: 'tritonal_jumbo.jpg')


################################### ALBUMS ######################################
ca = Album.create!(name: "I Love You.", artist_id: da.id)
cb = Album.create!(name: "Death of a Bachelor", artist_id: db.id)
cc = Album.create!(name: "Love Me Right", artist_id: dc.id)
cd = Album.create!(name: "x(Deluxe Edition)", artist_id: dd.id)
ce = Album.create!(name: "Love Is Dead", artist_id: de.id)
cf = Album.create!(name: "Eject", artist_id: df.id)
cg = Album.create!(name: "Static", artist_id: df.id)
ch = Album.create!(name: "Say We'll Make It", artist_id: dg.id)
ci = Album.create!(name: "Painting with Dreams", artist_id: dh.id)
###
###
###
   
ca.photo.attach(io: File.open('app/assets/images/iloveyou_album.jpg'), filename: 'iloveyou_album.jpg')
cb.photo.attach(io: File.open('app/assets/images/bachelor_album.jpg'), filename: 'bachelor_album.jpg')
cc.photo.attach(io: File.open('app/assets/images/lovemeright_album.jpg'), filename: 'lovemeright_album.jpg')
cd.photo.attach(io: File.open('app/assets/images/x_album.jpg'), filename: 'x_album.jpg')
ce.photo.attach(io: File.open('app/assets/images/loveisdead_album.jpg'), filename: 'loveisdead_album.jpg')
cf.photo.attach(io: File.open('app/assets/images/eject_album.jpg'), filename: 'eject_album.jpg')
cg.photo.attach(io: File.open('app/assets/images/static_album.jpg'), filename: 'static_album.jpg')
ch.photo.attach(io: File.open('app/assets/images/saywell_album.jpg'), filename: 'saywell_album.jpg')
ci.photo.attach(io: File.open('app/assets/images/painting_album.jpg'), filename: 'painting_album.jpg')

ba = Song.create!(title: "Sweater Weather", album_id: ca.id)
bb = Song.create!(title: "Death of a Bachelor", album_id: cb.id)
bc = Song.create!(title: "Love Me Right", album_id: cc.id)
bd = Song.create!(title: "Thinking out Loud", album_id: cd.id)
be = Song.create!(title: "Graffiti", album_id: ce.id)
bf = Song.create!(title: "Weapon", album_id: cf.id)
bg = Song.create!(title: "Beam Me Up", album_id: cf.id)
bh = Song.create!(title: "Static", album_id: cg.id)
bi = Song.create!(title: "Say We'll Make It", album_id: ch.id)
bj = Song.create!(title: "Painting with Dreams", album_id: ci.id)

ba.audio_file.attach(io: File.open('app/assets/audio/sweater_weather.mp3'), filename: 'sweater_weather.mp3')
bb.audio_file.attach(io: File.open('app/assets/audio/death_of_a_bachelor.mp3'), filename: 'death_of_a_bachelor.mp3')
bc.audio_file.attach(io: File.open('app/assets/audio/love_me_right.mp3'), filename: 'love_me_right.mp3')
bd.audio_file.attach(io: File.open('app/assets/audio/thinking_out_loud.mp3'), filename: 'thinking_out_loud.mp3')
be.audio_file.attach(io: File.open('app/assets/audio/graffiti.mp3'), filename: 'graffiti.mp3')
bf.audio_file.attach(io: File.open('app/assets/audio/weapon.mp3'), filename: 'weapon.mp3')
bg.audio_file.attach(io: File.open('app/assets/audio/beam_me_up.mp3'), filename: 'beam_me_up.mp3')
bh.audio_file.attach(io: File.open('app/assets/audio/static.mp3'), filename: 'static.mp3')
bi.audio_file.attach(io: File.open('app/assets/audio/say_well_make_it.mp3'), filename: 'say_well_make_it.mp3')
bj.audio_file.attach(io: File.open('app/assets/audio/painting.mp3'), filename: 'painting.mp3')

ea = Playlist.create(user_id: aa.id, name: "Aa Audios")
eb = Playlist.create(user_id: ab.id, name: "Beach Bangers")
ec = Playlist.create(user_id: ab.id, name: "Cohort Chosen")
ed = Playlist.create(user_id: ab.id, name: "Dank Drops")
ee = Playlist.create(user_id: ab.id, name: "Ear Euphonies")
ef = Playlist.create(user_id: ab.id, name: "Fan Favorites")
eg = Playlist.create(user_id: ab.id, name: "Gig Grabbag")
eh = Playlist.create(user_id: ab.id, name: "Harmonica Harmonies")
ei = Playlist.create(user_id: aa.id, name: "Popular Picks")
ej = Playlist.create(user_id: aa.id, name: "Sounds of Summer")
ek = Playlist.create(user_id: ab.id, name: "Throwback Twists")

ci.photo.attach(io: File.open('app/assets/images/painting_album.jpg'), filename: 'painting_album.jpg')


# ea.photo.attach(io: File.open('app/assets/images/iloveyou_album.jpg'), filename: 'iloveyou_album.jpg')
# eb.photo.attach(io: File.open('app/assets/images/iloveyou_album.jpg'), filename: 'iloveyou_album.jpg')
# ec.photo.attach(io: File.open('app/assets/images/iloveyou_album.jpg'), filename: 'iloveyou_album.jpg')
# ca.photo.attach(io: File.open('app/assets/images/iloveyou_album.jpg'), filename: 'iloveyou_album.jpg')
# ca.photo.attach(io: File.open('app/assets/images/iloveyou_album.jpg'), filename: 'iloveyou_album.jpg')
# ca.photo.attach(io: File.open('app/assets/images/iloveyou_album.jpg'), filename: 'iloveyou_album.jpg')
# ca.photo.attach(io: File.open('app/assets/images/iloveyou_album.jpg'), filename: 'iloveyou_album.jpg')



#########################################################################

fa = Playlisting.create!(song_id: ba.id, playlist_id: ea.id)
fb = Playlisting.create!(song_id: bb.id, playlist_id: ea.id)
fc = Playlisting.create!(song_id: ba.id, playlist_id: eb.id)
fd = Playlisting.create!(song_id: bc.id, playlist_id: ea.id)
fe = Playlisting.create!(song_id: bd.id, playlist_id: ea.id)
ff = Playlisting.create!(song_id: be.id, playlist_id: ea.id)
fg = Playlisting.create!(song_id: bh.id, playlist_id: ec.id)
fh = Playlisting.create!(song_id: bf.id, playlist_id: ec.id)
fi = Playlisting.create!(song_id: bg.id, playlist_id: eb.id)
fj = Playlisting.create!(song_id: bh.id, playlist_id: eb.id)
fg = Playlisting.create!(song_id: bi.id, playlist_id: ea.id)

ga = Follow.create!(user_id: aa.id, playlist_id: ec.id)
gb = Follow.create!(user_id: aa.id, playlist_id: ed.id)
gc = Follow.create!(user_id: ac.id, playlist_id: eb.id)

ha = Friendship.create!(user1_id: aa.id, user2_id: ab.id)
hb = Friendship.create!(user1_id: aa.id, user2_id: ac.id)
hc = Friendship.create!(user1_id: ab.id, user2_id: ac.id)
