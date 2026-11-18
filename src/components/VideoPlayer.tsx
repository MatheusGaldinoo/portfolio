import { useState } from 'react';
export function VideoPlayer({src,title,poster}:{src:string;title:string;poster?:string}) {
 const [playing,setPlaying]=useState(false);
 return <div className="video-frame">{playing ? <video src={src} controls autoPlay playsInline preload="metadata" aria-label={title}/> : <button className="video-poster" onClick={()=>setPlaying(true)} aria-label={`Reproduzir ${title}`}>{poster && <img src={poster} alt="" loading="lazy"/>}<span className="video-play" aria-hidden="true"><svg viewBox="0 0 24 24" width="30" height="30" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></span></button>}</div>;
}
