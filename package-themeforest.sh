#!/usr/bin/env bash
set -euo pipefail

# Packages clean ThemeForest submission archives inside ./dist-submission/
OUT_DIR="dist-submission"
rm -rf "$OUT_DIR"
mkdir -p "$OUT_DIR/main-bundle/industriq" "$OUT_DIR/main-bundle/documentation" "$OUT_DIR/main-bundle/marketplace" "$OUT_DIR/preview-images"

# Copy clean Next.js template (excluding build/cache artifacts)
rsync -a \
  --exclude 'node_modules' \
  --exclude '.next' \
  --exclude 'out' \
  --exclude '.git' \
  --exclude '.turbo' \
  industriq/ "$OUT_DIR/main-bundle/industriq/"

cp -r documentation/* "$OUT_DIR/main-bundle/documentation/"
cp -r marketplace/* "$OUT_DIR/main-bundle/marketplace/"
cp START-HERE.txt "$OUT_DIR/main-bundle/"
cp README.md "$OUT_DIR/main-bundle/"
cp CHANGELOG.md "$OUT_DIR/main-bundle/"
cp CREDITS.txt "$OUT_DIR/main-bundle/"
cp LICENSE.txt "$OUT_DIR/main-bundle/"
cp ASSET-CREDITS.md "$OUT_DIR/main-bundle/"
cp THEMEFOREST-SUBMISSION-GUIDE.md "$OUT_DIR/main-bundle/"

# Prepare ThemeForest preview.zip naming conventions
cp preview-assets/02_inline_preview_590x300.jpg "$OUT_DIR/preview-images/01_industriq_preview.jpg"
cp preview-assets/04_full_homepage_preview.png "$OUT_DIR/preview-images/02_homepage_preview.png"
cp preview-assets/06_features_and_highlights.png "$OUT_DIR/preview-images/03_features_highlights.png"
cp preview-assets/07_responsive_desktop_tablet_mobile.png "$OUT_DIR/preview-images/04_responsive_previews.png"
cp preview-assets/08_inner_pages_preview.png "$OUT_DIR/preview-images/05_inner_pages.png"

cp preview-assets/01_thumbnail_80x80.png "$OUT_DIR/thumbnail_80x80.png"

(cd "$OUT_DIR/main-bundle" && zip -qr "../industriq-themeforest-main.zip" .)
(cd "$OUT_DIR/preview-images" && zip -qr "../preview.zip" .)

echo "ThemeForest archives created inside ./$OUT_DIR/"
ls -lh "$OUT_DIR"/*.zip "$OUT_DIR/thumbnail_80x80.png"
