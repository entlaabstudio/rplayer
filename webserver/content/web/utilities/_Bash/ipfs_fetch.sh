#!/bin/bash

# Zeptáme se na CID
read -p "Zadej IPFS CID: " CID

# Kontrola, jestli není prázdný
if [ -z "$CID" ]; then
    echo "❌ Chyba: CID nesmí být prázdný."
    exit 1
fi

# Zeptáme se, zda vytvořit podsložku
read -p "Chceš vytvořit podsložku pojmenovanou podle CID? (y/n): " MAKE_SUBDIR

# Nastavení cílové cesty
if [[ "$MAKE_SUBDIR" =~ ^[Yy]$ ]]; then
    TARGET_DIR="$(pwd)/$CID"
else
    TARGET_DIR="$(pwd)"
fi

# Stažení obsahu
echo "⬇️ Stahuji CID $CID do $TARGET_DIR ..."
ipfs get "$CID" --output="$TARGET_DIR"

if [ $? -eq 0 ]; then
    echo "✅ Staženo úspěšně do: $TARGET_DIR"
else
    echo "❌ Stažení selhalo."
    exit 1
fi

# Zeptáme se, zda vytvořit CAR archiv
read -p "Chceš vytvořit .car archiv tohoto CID? (y/n): " MAKE_CAR

if [[ "$MAKE_CAR" =~ ^[Yy]$ ]]; then
    CAR_FILE="$(pwd)/${CID}.car"
    echo "📦 Vytvářím CAR archiv: $CAR_FILE ..."
    ipfs dag export "$CID" > "$CAR_FILE"
    
    if [ $? -eq 0 ]; then
        echo "✅ CAR archiv vytvořen: $CAR_FILE"
    else
        echo "❌ Nepodařilo se vytvořit CAR archiv."
    fi
fi

