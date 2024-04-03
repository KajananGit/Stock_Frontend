const AudioPlayer = () => {
    return (
        <div>
            <audio controls>
                <source src="Elevator Music.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>
        </div>
    );
};

export default AudioPlayer;