const tracklist = document.getElementById("track-list")


axios.get("https://leonardoapi.onrender.com/songs")
    .then((res) => {
        console.log(res.data.songs)

        res.data.songs.map( (song) => {

        // generación de canciones
            const div = document.createElement("div")

            div.innerHTML = `
            
                <img src="${song.path.front}">
            `
            
            
            
            div.addEventListener("click", () => {
                
                document.getElementById("current-song-img").setAttribute('src',song.path.front)
                document.getElementById("current-song-audio").setAttribute('src',song.path.audio)
                document.getElementById("current-song-title").innerHTML = song.title
                document.getElementById("current-song-author").innerHTML = song.author
            })
            
            tracklist.appendChild(div)
        })
    })