#!/bin/bash

# sync-obsidian.sh – Sync Obsidian vault to Astro content folders

# CONFIGURATION – UPDATE THESE PATHS!
OBSIDIAN_VAULT="$HOME/Documents/motorsports-os/motorsports-os"   # <-- CHANGE THIS
ASTRO_CONTENT="$HOME/Desktop/Portfolio/motorsports-os/src/content"

# Ensure the source exists
if [ ! -d "$OBSIDIAN_VAULT" ]; then
    echo "❌ Obsidian vault not found at: $OBSIDIAN_VAULT"
    exit 1
fi

# Ensure the destination exists
if [ ! -d "$ASTRO_CONTENT" ]; then
    echo "❌ Astro content folder not found at: $ASTRO_CONTENT"
    exit 1
fi

echo "🔄 Syncing from Obsidian to Astro..."

# Use rsync to copy all markdown files, preserving folder structure
# --archive : preserve permissions, timestamps, etc.
# --delete  : remove files in destination that no longer exist in source
# --verbose : show what's being copied
# --exclude : ignore any hidden files like .DS_Store or .obsidian
rsync -av --delete \
    --exclude=".obsidian/" \
    --exclude=".DS_Store" \
    --exclude="*.tmp" \
    "$OBSIDIAN_VAULT/" "$ASTRO_CONTENT/"

echo "✅ Sync complete!"

# Optional: auto-stage and commit the changes to git
read -p "Do you want to commit the changes now? (y/n) " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    cd "$ASTRO_CONTENT/.."  # go to repo root
    git add src/content/
    git commit -m "Sync content from Obsidian"
    echo "📦 Changes committed. You can now push to remote."
fi