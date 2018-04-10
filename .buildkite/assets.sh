set -e
set -x

ICON_FILE=$ROOT/assets/img/icon.png

while true; do
case $1 in
  -b|--bump)
  app-icon label -i $ICON_FILE -o $ROOT/tmp/icon.release.png --top $VERSION_NAME --bottom $BUILD_NUMBER
  ICON_FILE=$ROOT/tmp/icon.release.png
  shift;;
  *) break;;
esac
done

export ICON_FILE=$ICON_FILE
