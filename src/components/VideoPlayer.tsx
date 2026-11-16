import { useState } from 'react';
export function VideoPlayer({src,title,poster}:{src:string;title:string;poster?:string}) {
 const [playing,setPlaying]=useState(false);
 return <div className="video-frame">{playing ? <video src={src} controls autoPlay playsInline preload="metadata" aria-label={title}/> : <button className="video-poster" onClick={()=>setPlaying(true)} aria-label={`Reproduzir ${title}`}>{poster && <img src={poster} alt="" loading="lazy"/>}<span className="video-play">▶<span>{title}</span></span></button>}</div>;
}
