import os
import sys
import base64
import io
import shutil
from PIL import Image, ImageFilter

# Paths
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
LOGO_DIR = os.path.join(ROOT, 'public', 'images', 'logo')
PUBLIC_DIR = os.path.join(ROOT, 'public')
APP_DIR = os.path.join(ROOT, 'src', 'app')

os.makedirs(LOGO_DIR, exist_ok=True)
os.makedirs(PUBLIC_DIR, exist_ok=True)
os.makedirs(APP_DIR, exist_ok=True)

raw_light = os.path.join(LOGO_DIR, 'logo.png')
raw_dark = os.path.join(LOGO_DIR, 'logo_dark.png')
backup_light = os.path.join(LOGO_DIR, 'logo_master_raw.png')
backup_dark = os.path.join(LOGO_DIR, 'logo_dark_master_raw.png')

# Backup master raw files
if not os.path.exists(backup_light):
    shutil.copyfile(raw_light, backup_light)
    shutil.copyfile(raw_dark, backup_dark)
    print('Raw logos backed up.')

img_light_orig = Image.open(backup_light)
img_dark_orig = Image.open(backup_dark)

# Tight crops of both logos
c_light = img_light_orig.crop(img_light_orig.getbbox())
c_dark = img_dark_orig.crop(img_dark_orig.getbbox())

# Target web resolution: width 2400 (3x retina for 800px display)
target_w = 2400
h_l = int(c_light.height * (target_w / c_light.width))
h_d = int(c_dark.height * (target_w / c_dark.width))

scaled_light = c_light.resize((target_w, h_l), Image.Resampling.LANCZOS)
scaled_dark = c_dark.resize((target_w, h_d), Image.Resampling.LANCZOS)

# Save tight web-ready logos
scaled_light.save(os.path.join(LOGO_DIR, 'logo.png'), optimize=True)
scaled_dark.save(os.path.join(LOGO_DIR, 'logo_dark.png'), optimize=True)
print('Saved web logos: logo.png (', scaled_light.size, '), logo_dark.png (', scaled_dark.size, ')')

# Extract star icons
# Star from img_dark_orig (black lines + red swoosh)
star_dark_tight = img_dark_orig.crop((660, 642, 1472, 1447)).crop(img_dark_orig.crop((660, 642, 1472, 1447)).getbbox())
# Star from img_light_orig (white lines + red swoosh)
star_light_tight = img_light_orig.crop((660, 432, 1440, 1280)).crop(img_light_orig.crop((660, 432, 1440, 1280)).getbbox())

# Make square master stars with 12% padding
def make_square_star(tight_img, size=1024, pad_pct=0.12):
    w, h = tight_img.size
    dim = max(w, h)
    canvas = Image.new('RGBA', (dim, dim), (0, 0, 0, 0))
    canvas.paste(tight_img, ((dim - w) // 2, (dim - h) // 2), tight_img)
    
    pad = int(dim * pad_pct)
    padded_dim = dim + pad * 2
    padded_canvas = Image.new('RGBA', (padded_dim, padded_dim), (0, 0, 0, 0))
    padded_canvas.paste(canvas, (pad, pad), canvas)
    return padded_canvas.resize((size, size), Image.Resampling.LANCZOS)

master_star_dark = make_square_star(star_dark_tight, size=1024)
master_star_light = make_square_star(star_light_tight, size=1024)

# Bordered star (dark star with crisp subtle white contour for cross-theme visibility)
def make_bordered_star(square_star):
    alpha = square_star.split()[3]
    dilated = alpha.filter(ImageFilter.MaxFilter(19))
    smoothed = dilated.filter(ImageFilter.GaussianBlur(1))
    
    bordered = Image.new('RGBA', square_star.size, (0, 0, 0, 0))
    white_layer = Image.new('RGBA', square_star.size, (255, 255, 255, 255))
    bordered.paste(white_layer, (0, 0), smoothed)
    bordered.paste(square_star, (0, 0), square_star)
    return bordered

master_star_bordered = make_bordered_star(master_star_dark)

# Save standalone star icons in logo directory
master_star_dark.resize((512, 512), Image.Resampling.LANCZOS).save(os.path.join(LOGO_DIR, 'star_dark.png'), optimize=True)
master_star_light.resize((512, 512), Image.Resampling.LANCZOS).save(os.path.join(LOGO_DIR, 'star_light.png'), optimize=True)
master_star_bordered.resize((512, 512), Image.Resampling.LANCZOS).save(os.path.join(LOGO_DIR, 'star.png'), optimize=True)

# Generate Luxury Badges
# Dark badge (#141210 obsidian with light star)
def make_badge(star_img, bg_color, size=512, inner_scale=0.80):
    badge = Image.new('RGBA', (size, size), bg_color)
    star_scaled = star_img.resize((int(size * inner_scale), int(size * inner_scale)), Image.Resampling.LANCZOS)
    offset = (size - star_scaled.width) // 2
    badge.paste(star_scaled, (offset, offset), star_scaled)
    return badge

apple_badge = make_badge(master_star_light, (20, 18, 16, 255), size=180, inner_scale=0.82)
apple_badge.save(os.path.join(PUBLIC_DIR, 'apple-touch-icon.png'), optimize=True)
apple_badge.save(os.path.join(APP_DIR, 'apple-icon.png'), optimize=True)
print('Saved apple-touch-icon.png and apple-icon.png (180x180)')

# Save multi-size favicon PNGs
sizes = [16, 32, 48, 96, 192, 512]
for s in sizes:
    resized = master_star_bordered.resize((s, s), Image.Resampling.LANCZOS)
    if s in [16, 32, 48, 96]:
        resized.save(os.path.join(PUBLIC_DIR, f'favicon-{s}x{s}.png'), optimize=True)
    if s in [192, 512]:
        resized.save(os.path.join(PUBLIC_DIR, f'android-chrome-{s}x{s}.png'), optimize=True)
    if s == 512:
        resized.save(os.path.join(APP_DIR, 'icon.png'), optimize=True)

# Multi-resolution ICO (16, 32, 48)
master_star_bordered.save(os.path.join(PUBLIC_DIR, 'favicon.ico'), format='ICO', sizes=[(16, 16), (32, 32), (48, 48)])
master_star_bordered.save(os.path.join(APP_DIR, 'favicon.ico'), format='ICO', sizes=[(16, 16), (32, 32), (48, 48)])
print('Saved multi-resolution favicon.ico (16, 32, 48)')

# Create Adaptive SVG favicon
buf_dark = io.BytesIO()
master_star_dark.resize((256, 256), Image.Resampling.LANCZOS).save(buf_dark, format='PNG')
b64_dark = base64.b64encode(buf_dark.getvalue()).decode('utf-8')

buf_light = io.BytesIO()
master_star_light.resize((256, 256), Image.Resampling.LANCZOS).save(buf_light, format='PNG')
b64_light = base64.b64encode(buf_light.getvalue()).decode('utf-8')

svg_content = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
  <style>
    @media (prefers-color-scheme: dark) {{
      .star-light {{ display: block; }}
      .star-dark {{ display: none; }}
    }}
    @media (prefers-color-scheme: light) {{
      .star-light {{ display: none; }}
      .star-dark {{ display: block; }}
    }}
  </style>
  <g class="star-dark">
    <image href="data:image/png;base64,{b64_dark}" width="256" height="256" />
  </g>
  <g class="star-light" style="display:none;">
    <image href="data:image/png;base64,{b64_light}" width="256" height="256" />
  </g>
</svg>
'''

with open(os.path.join(PUBLIC_DIR, 'favicon.svg'), 'w', encoding='utf-8') as f:
    f.write(svg_content)
with open(os.path.join(APP_DIR, 'icon.svg'), 'w', encoding='utf-8') as f:
    f.write(svg_content)
print('Saved adaptive SVG favicons: favicon.svg and icon.svg')

