$ErrorActionPreference = "Stop"

$OutDir = "dist-submission"
if (Test-Path $OutDir) {
    Remove-Item -Recurse -Force $OutDir
}

$MainBundle = Join-Path $OutDir "main-bundle"
$PreviewImages = Join-Path $OutDir "preview-images"

New-Item -ItemType Directory -Force -Path (Join-Path $MainBundle "industriq") | Out-Null
New-Item -ItemType Directory -Force -Path (Join-Path $MainBundle "documentation") | Out-Null
New-Item -ItemType Directory -Force -Path (Join-Path $MainBundle "marketplace") | Out-Null
New-Item -ItemType Directory -Force -Path $PreviewImages | Out-Null

Write-Host "Copying industriq template (excluding node_modules, .next, out, .git)..."
$excludeDirs = @('node_modules', '.next', 'out', '.git', '.turbo')
Get-ChildItem -Path "industriq" | Where-Object { $excludeDirs -notcontains $_.Name } | ForEach-Object {
    Copy-Item -Path $_.FullName -Destination (Join-Path $MainBundle "industriq") -Recurse -Force
}

Write-Host "Copying documentation..."
Copy-Item -Path "documentation\*" -Destination (Join-Path $MainBundle "documentation") -Recurse -Force

Write-Host "Copying marketplace..."
Copy-Item -Path "marketplace\*" -Destination (Join-Path $MainBundle "marketplace") -Recurse -Force

Write-Host "Copying root files..."
$rootFiles = @("START-HERE.txt", "README.md", "CHANGELOG.md", "CREDITS.txt", "LICENSE.txt", "ASSET-CREDITS.md", "THEMEFOREST-SUBMISSION-GUIDE.md")
foreach ($f in $rootFiles) {
    if (Test-Path $f) {
        Copy-Item -Path $f -Destination $MainBundle -Force
    }
}

Write-Host "Preparing ThemeForest preview images..."
Copy-Item -Path "preview-assets\02_inline_preview_590x300.jpg" -Destination (Join-Path $PreviewImages "01_industriq_preview.jpg") -Force
Copy-Item -Path "preview-assets\04_full_homepage_preview.png" -Destination (Join-Path $PreviewImages "02_homepage_preview.png") -Force
Copy-Item -Path "preview-assets\06_features_and_highlights.png" -Destination (Join-Path $PreviewImages "03_features_highlights.png") -Force
Copy-Item -Path "preview-assets\07_responsive_desktop_tablet_mobile.png" -Destination (Join-Path $PreviewImages "04_responsive_previews.png") -Force
Copy-Item -Path "preview-assets\08_inner_pages_preview.png" -Destination (Join-Path $PreviewImages "05_inner_pages.png") -Force
Copy-Item -Path "preview-assets\01_thumbnail_80x80.png" -Destination (Join-Path $OutDir "thumbnail_80x80.png") -Force

Write-Host "Compressing ZIP archives..."
$mainZip = Join-Path $OutDir "industriq-themeforest-main.zip"
$previewZip = Join-Path $OutDir "preview.zip"

Compress-Archive -Path "$MainBundle\*" -DestinationPath $mainZip -Force
Compress-Archive -Path "$PreviewImages\*" -DestinationPath $previewZip -Force

Write-Host "ThemeForest archives created successfully in ./$OutDir/"
Get-ChildItem -Path $OutDir -File | Select-Object Name, Length | Format-Table -AutoSize
