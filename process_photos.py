"""
Process team member photos to create consistent card thumbnails.
Mark Chan & Avis Lau: 1182x886 landscape - crop to 590x443 centered upper body
Steven Qin, Kevin Wong, Cecil Hoo: 1200x1800 portrait - crop top 60% for headshot
Output: 600x450 landscape cards (same aspect ratio as Mark/Avis)
"""
from PIL import Image
import os

TARGET_W = 600
TARGET_H = 450

def make_card_photo(input_path, output_path, crop_top_pct=0.0, crop_bottom_pct=0.65):
    """Crop a portrait photo to a headshot card thumbnail."""
    img = Image.open(input_path)
    w, h = img.size
    
    # For portrait photos (1200x1800): crop top portion for headshot
    top = int(h * crop_top_pct)
    bottom = int(h * crop_bottom_pct)
    
    # Crop to the headshot region
    cropped = img.crop((0, top, w, bottom))
    
    # Now resize to target dimensions maintaining aspect ratio with center crop
    cw, ch = cropped.size
    target_ratio = TARGET_W / TARGET_H
    current_ratio = cw / ch
    
    if current_ratio > target_ratio:
        # Too wide - crop sides
        new_w = int(ch * target_ratio)
        left = (cw - new_w) // 2
        cropped = cropped.crop((left, 0, left + new_w, ch))
    else:
        # Too tall - crop bottom
        new_h = int(cw / target_ratio)
        cropped = cropped.crop((0, 0, cw, new_h))
    
    # Resize to target
    result = cropped.resize((TARGET_W, TARGET_H), Image.LANCZOS)
    result.save(output_path, quality=92)
    print(f"Saved {output_path}: {result.size}")

# Process portrait photos (full body shots) - crop to upper 55% for headshot
make_card_photo('assets/steven-qin.jpg', 'assets/steven-qin-card.jpg', 0.0, 0.55)
make_card_photo('assets/kevin-wong.jpg', 'assets/kevin-wong-card.jpg', 0.0, 0.55)
make_card_photo('assets/cecil-hoo.jpg', 'assets/cecil-hoo-card.jpg', 0.0, 0.55)

# Process Mark Chan and Avis Lau (landscape headshots) - just resize
def make_landscape_card(input_path, output_path):
    img = Image.open(input_path)
    w, h = img.size
    target_ratio = TARGET_W / TARGET_H
    current_ratio = w / h
    
    if current_ratio > target_ratio:
        new_w = int(h * target_ratio)
        left = (w - new_w) // 2
        cropped = img.crop((left, 0, left + new_w, h))
    else:
        new_h = int(w / target_ratio)
        cropped = img.crop((0, 0, w, new_h))
    
    result = cropped.resize((TARGET_W, TARGET_H), Image.LANCZOS)
    result.save(output_path, quality=92)
    print(f"Saved {output_path}: {result.size}")

make_landscape_card('assets/mark-chan.jpg', 'assets/mark-chan-card.jpg')
make_landscape_card('assets/avis-lau.jpg', 'assets/avis-lau-card.jpg')

print("All card photos processed!")
