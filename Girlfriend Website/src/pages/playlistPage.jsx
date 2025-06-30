import '../time.css'

export default function PlaylistPage() {

    return (
        <>
            <div id="playlistComponent">
                <h1>
                    Some songs that specifically remind me of you (and some other relevant songs for your birthday)
                </h1>
                <iframe
                    style={{ borderRadius: "20px" }}
                    src="https://open.spotify.com/embed/playlist/45nqclUMkTdK7G8lUzIimb?utm_source=generator&theme=0"
                    width="1000px"
                    height="500px"
                    frameBorder={0}
                    allowFullScreen
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                    color='#f5ebe0'
                ></iframe>
            </div>
        </>
    )
}