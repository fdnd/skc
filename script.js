//source: https://javascript.plainenglish.io/video-pause-play-like-netflix-8570f903e0ff
{
    const video = document.querySelector("video");
    let playState = null;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) {
            video.pause();
            playState = false;
            } else {
            video.play();
            playState = true;
            }
        });
    }, {});

    observer.observe(video);

    const onVisibilityChange = () => {
        if (document.hidden || !playState) {
            video.pause();
        } else {
            video.play();
        }
    };

    document.addEventListener("visibilitychange", onVisibilityChange);

}
