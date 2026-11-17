$ErrorActionPreference = 'Stop'
$repo = Split-Path $PSScriptRoot -Parent
$ffmpeg = python -c "import imageio_ffmpeg; print(imageio_ffmpeg.get_ffmpeg_exe())"
$source = Join-Path $repo 'private-media/demonstracao-chatbot.mp4'
$output = Join-Path $repo 'public/media/demonstracao-chatbot-editada.mp4'
# Source times: typing at 0-14, 18-30, 35-42, 58-65. Keep reading at normal speed.
# Drop navigation into other chats after 95s. Blur only the group-name area in the invite card.
$filter = "[0:v]trim=end=95,setpts=PTS-STARTPTS,split=4[base][a][b][c];[a]crop=480:80:280:1200,scale=10:2,scale=480:80:flags=bilinear,gblur=sigma=25[ba];[b]crop=450:80:180:980,scale=10:2,scale=450:80:flags=bilinear,gblur=sigma=25[bb];[c]crop=450:80:180:800,scale=10:2,scale=450:80:flags=bilinear,gblur=sigma=25[bc];[base][ba]overlay=280:1200:enable='between(t,88,89)'[one];[one][bb]overlay=180:980:enable='between(t,88.8,93)'[two];[two][bc]overlay=180:800:enable='gte(t,92.5)'[safe];[safe]setpts='(T-0.75*(min(T,14)+max(0,min(T-18,12))+max(0,min(T-35,7))+max(0,min(T-58,7))))/TB',fps=24,format=yuv420p[out]"
& $ffmpeg -hide_banner -loglevel warning -y -i $source -filter_complex $filter -map '[out]' -an -c:v libx264 -preset fast -crf 19 -movflags +faststart -map_metadata -1 $output
if ($LASTEXITCODE -ne 0) { throw 'Video render failed' }
& $ffmpeg -hide_banner -loglevel error -y -ss 26 -i $output -frames:v 1 (Join-Path $repo 'public/media/chatbot-poster.jpg')
