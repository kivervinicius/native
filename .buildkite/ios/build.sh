set -e

cd $ROOT/ios

ARGS=()
OPTIONS=(CODE_SIGNING_REQUIRED=NO)

if [[ ! -z $IOS_XCCONFIG_FILE ]]; then ARGS+=(-xcconfig $IOS_XCCONFIG_FILE); fi

xcodebuild \
  -scheme EmCasa \
  -archivePath $ROOT/ios/build/EmCasa.xcarchive \
  -workspace $ROOT/ios/EmCasa.xcworkspace \
  -configuration Release \
  -destination "generic/platform=iOS" \
  ${ARGS[*]} ${OPTIONS[*]} \
  archive | tee $ROOT/tmp/logs/ios.build.log | xcpretty

