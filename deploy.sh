#!/usr/bin/env bash
set -euo pipefail

# args
ENVIRONMENT=${1:-production}   # production | staging | development
APP_NAME="investortrust-$ENVIRONMENT"
RELEASES_DIR="/var/www/releases"
KEEP_RELEASES=3

# symlink path berbeda per env
if [[ "$ENVIRONMENT" == "production" ]]; then
  CURRENT_SYMLINK="/var/www/html"
elif [[ "$ENVIRONMENT" == "staging" ]]; then
  CURRENT_SYMLINK="/var/www/html/staging"
elif [[ "$ENVIRONMENT" == "development" ]]; then
  CURRENT_SYMLINK="/var/www/html/development"
else
  echo "Unknown environment: $ENVIRONMENT"
  exit 1
fi

TIMESTAMP=$(date +%Y%m%d%H%M%S)
NEW_RELEASE="$RELEASES_DIR/${APP_NAME}-${TIMESTAMP}"

echo "Building $ENVIRONMENT -> $NEW_RELEASE"

mkdir -p "$NEW_RELEASE"

if [[ "$ENVIRONMENT" == "production" ]]; then
  npx ng build --configuration=production --output-path="$NEW_RELEASE"
elif [[ "$ENVIRONMENT" == "staging" ]]; then
  npx ng build --configuration=staging --base-href=/staging/ --output-path="$NEW_RELEASE"
elif [[ "$ENVIRONMENT" == "development" ]]; then
  npx ng build --configuration=development --base-href=/development/ --output-path="$NEW_RELEASE"
fi

sudo chown -R www-data:www-data "$NEW_RELEASE"

PREV_RELEASE="$(readlink -f "$CURRENT_SYMLINK" || true)"
echo "Previous release: $PREV_RELEASE"

sudo ln -sfn "$NEW_RELEASE" "$CURRENT_SYMLINK"
sudo systemctl reload nginx

echo "Switched $ENVIRONMENT to $NEW_RELEASE"

cd "$RELEASES_DIR"
ls -dt ${APP_NAME}-* | tail -n +$((KEEP_RELEASES+1)) | xargs -r sudo rm -rf --
