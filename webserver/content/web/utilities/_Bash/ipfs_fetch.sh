#!/bin/bash

# We'll ask the CID.
read -p "Enter IPFS CID: " CID

# Checking if it is not empty.
if [ -z "$CID" ]; then
    echo "❌ Error: CID must not be empty."
    exit 1
fi

# We will ask whether to create a subfolder.
read -p "Do you want to create a subfolder named after the CID? (y/n): " MAKE_SUBDIR

# Setting the destination path.
if [[ "$MAKE_SUBDIR" =~ ^[Yy]$ ]]; then
    TARGET_DIR="$(pwd)/$CID"
else
    TARGET_DIR="$(pwd)"
fi

# Downloading content.
echo "⬇️ Downloading CID $CID to $TARGET_DIR ..."
ipfs get "$CID" --output="$TARGET_DIR"

if [ $? -eq 0 ]; then
    echo "✅ Downloaded successfully to: $TARGET_DIR"
else
    echo "❌ Download failed."
    exit 1
fi

# We will ask whether to create a CAR archive.
read -p "Do you want to create a .car archive of this CID? (y/n): " MAKE_CAR

if [[ "$MAKE_CAR" =~ ^[Yy]$ ]]; then
    CAR_FILE="$(pwd)/${CID}.car"
    echo "📦 I am creating a CAR archive: $CAR_FILE ..."
    ipfs dag export "$CID" > "$CAR_FILE"
    
    if [ $? -eq 0 ]; then
        echo "✅ CAR archive created: $CAR_FILE"
    else
        echo "❌ Failed to create CAR archive."
    fi
fi

