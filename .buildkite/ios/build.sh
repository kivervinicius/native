set -e

ARGS=()
OPTIONS=(CODE_SIGNING_REQUIRED=NO CODE_SIGN_IDENTITY=)

if [[ ! -z $IOS_XCCONFIG_FILE ]]; then ARGS+=(-xcconfig $IOS_XCCONFIG_FILE); fi

cd $ROOT/ios && xcodebuild \
  -scheme EmCasa \
  -archivePath $ROOT/ios/build/EmCasa.xcarchive \
  -workspace $ROOT/ios/EmCasa.xcworkspace \
  -configuration Release \
  -destination "generic/platform=iOS" \
  ${ARGS[*]} ${OPTIONS[*]} \
  archive | tee $ROOT/tmp/logs/ios.build.log | xcpretty
