"""Deriva imagens para a web sem alterar os originais enviados."""
from pathlib import Path
from PIL import Image, ImageOps
root = Path(__file__).resolve().parents[1] / 'public/media'
for path in root.iterdir():
    if path.suffix.lower() not in ('.jpg', '.jpeg', '.png'): continue
    for width in (640, 1440):
        image = ImageOps.exif_transpose(Image.open(path)).convert('RGB')
        image.thumbnail((width, width * 2))
        image.save(root / 'optimized' / f'{path.stem}-{width}.webp', 'WEBP', quality=85)
