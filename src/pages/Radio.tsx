import React, { useState, useEffect, useRef } from "react";
import "./Radio.css";

const AudioPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  const radioStations = ["Diamond City Radio", "Minutemen Radio", "Enclave Radio", "Institute Radio", "Unknown Signal"];
  const radioPlaylists = {
    "Unknown Signal": [
      "./audio/mus_radio_silvershroud_intro_01.mp3",
    ],
    "Diamond City Radio": [
      "./audio/mus_radio_diamond_thefivestars_atombombbaby.mp3",
      "./audio/mus_radio_diamond_bingcrosby_accentuatethepositive.mp3",
      "./audio/mus_radio_diamond_sheldonallman_crawloutthroughthefallout.mp3",
      "./audio/mus_radio_diamond_theinkspots_idontwanttoset.mp3",
      "./audio/mus_radio_diamond_billywardandthedominoes_sixtyminuteman.mp3",
    ],
    "Minutemen Radio" : [
      "./audio/mus_radio_minutemen_01.mp3",
      "./audio/mus_radio_minutemen_03.mp3",
      "./audio/mus_radio_minutemen_09.mp3",
      "./audio/mus_radio_minutemen_11.mp3",
    ],
    "Institute Radio": [
      "./audio/mus_institute_camillesaintsaens_carnivalcuckoos.mp3",
      "./audio/mus_institute_masson_valsediable.mp3",
      "./audio/mus_institute_chechova_troipolkasdessalonop7.mp3",
      "./audio/mus_institute_camillesaintsaens_carnivalcuckoos.mp3"
    ],
    "Enclave Radio" : [
      "./audio/mus_easycitydowns_rabbit_a_reveille.mp3",
      "./audio/mus_easycitydowns_rabbit_b_firstcall.mp3",
      "./audio/mus_easycitydowns_rabbit_c_cavalrycharge.mp3",
      "./audio/mus_easycitydowns_rabbit_d_calltomess.mp3",
      "./audio/mus_easycitydowns_rabbit_e_drill.mp3",
      "./audio/mus_easycitydowns_rabbit_f_assembly.mp3"
    ],
  }
  
  const [selectedStation, setSelectedStation] = useState<string | number>(radioStations[0]);
  const [tracks, setTracks] = useState<string[]>(Object(radioPlaylists)[selectedStation]);
  const [currentTrack, setCurrentTrack] = useState(0);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);

  useEffect(() => {
    const audioElement = new Audio(tracks[currentTrack]);
    const endedHandler = () => {
      setIsPlaying(false);
      setCurrentTrack((prevTrack) => (prevTrack + 1) % tracks.length);
    };
    audioElement.addEventListener("ended", endedHandler);
    setAudio(audioElement); // new Audio(tracks[currentTrack])

    return () => {
      if (audioElement) {
        audioElement.removeEventListener("ended", endedHandler);
      }
    };
  }, [tracks, currentTrack]);

  useEffect(() => {
    if (!audio) return;

    const audioContext = new AudioContext();
    audioContextRef.current = audioContext;

    const source = audioContext.createMediaElementSource(audio);
    const analyser = audioContext.createAnalyser();
    analyser.fftSize = 128;
    analyserRef.current = analyser;

    source.connect(analyser);
    analyser.connect(audioContext.destination);

    const canvas = canvasRef.current;
    if (!canvas) return;

    const canvasCtx = canvas.getContext("2d");
    if (!canvasCtx) return;

    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    const draw = () => {
      requestAnimationFrame(draw);
      analyser.getByteTimeDomainData(dataArray);
      canvasCtx.clearRect(0, 0, canvas.width, canvas.height);
      canvasCtx.fillStyle = "rgb(24, 24, 24)";
      canvasCtx.fillRect(0, 0, canvas.width, canvas.height);
      canvasCtx.beginPath();
      canvasCtx.lineWidth = 2;
      canvasCtx.strokeStyle = "rgb(46, 159, 11)";
      canvasCtx.moveTo(0, canvas.height / 2);
      for (let i = 0; i < bufferLength; i++) {
        const x = canvas.width * i / bufferLength;
        const y = canvas.height - (dataArray[i] * canvas.height / 256);
        canvasCtx.lineTo(x, y);
      }
      canvasCtx.stroke();
    };

    draw();

    return () => {
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
    };
  }, [audio]);

  const handleSelection = (selection:string) => {
    setSelectedStation(selection);
    setTracks(Object(radioPlaylists)[selection])
    setIsPlaying(false);
  };

  const handleStartStop = () => {
    if (audio && isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else if (audio) {
      audio.play();
      setIsPlaying(true);
    }
  };

  return (
    <>
      <button className="radio-button" onClick={handleStartStop}>{isPlaying ? "PAUSE" : "PLAY"}</button>

      <div className="radio-ui">

        <div className="radio-menu">
          {radioStations.map((v) => 
            <button 
              className={selectedStation == v? "radio-menu-item active" : "radio-menu-item"} 
              onClick={() => handleSelection(v)}
            >{typeof v === "number"? v : v.toUpperCase()}</button>           
          )}
        </div>
        
        <div className="radio-display">
          <canvas ref={canvasRef} width={400} height={200} />
        </div>

      </div>
    </>
  );
};

export default AudioPlayer;
