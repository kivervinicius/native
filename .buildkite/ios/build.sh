set -e

cd $ROOT/ios

ARGS=()

if [[ ! -z $IOS_XCCONFIG_FILE ]]; then ARGS+=(-xcconfig $IOS_XCCONFIG_FILE); fi

xcodebuild \
  -scheme EmCasa \
  -archivePath $ROOT/ios/build/EmCasa.xcarchive \
  -workspace $ROOT/ios/EmCasa.xcworkspace \
  -configuration Release \
  -destination "generic/platform=iOS" \
  ${ARGS[*]} archive | xcpretty

