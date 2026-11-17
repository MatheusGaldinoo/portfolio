$ErrorActionPreference = 'Stop'
$repo = Split-Path $PSScriptRoot -Parent
$ffmpeg = python -c "import imageio_ffmpeg; print(imageio_ffmpeg.get_ffmpeg_exe())"
$source = Join-Path $repo 'private-media/demonstracao-chatbot.mp4'
$output = Join-Path $repo 'public/media/demonstracao-chatbot-editada.mp4'
# Source times: typing at 0-14, 18-30, 35-42, 58-65. Keep reading at normal speed.
# Drop navigation into other chats after 95s. Blur only the group-name area in the invite card.
$filter = "[0:v]trim=end=95,setpts=PTS-STARTPTS,split=2[base][sensitive];[sensitive]crop=450:270:180:780,scale=10:10,scale=450:270:flags=bilinear,gblur=sigma=25[blur];[base][blur]overlay=180:780:enable='gte(t,88)'[safe];[safe]setpts='(T-0.75*(min(T,14)+max(0,min(T-18,12))+max(0,min(T-35,7))+max(0,min(T-58,7))))/TB',fps=24,format=yuv420p[out]"
& $ffmpeg -hide_banner -loglevel warning -y -i $source -filter_complex $filter -map '[out]' -an -c:v libx264 -preset fast -crf 19 -movflags +faststart -map_metadata -1 $output
if ($LASTEXITCODE -ne 0) { throw 'Video render failed' }
& $ffmpeg -hide_banner -loglevel error -y -ss 26 -i $output -frames:v 1 (Join-Path $repo 'public/media/chatbot-poster.jpg')
