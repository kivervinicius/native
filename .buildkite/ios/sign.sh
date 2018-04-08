set -eu

export IOS_PROVISIONING_UUID=`grep UUID -A1 -a $IOS_PROVISIONING_FILE | grep -io "[-A-F0-9]\{36\}"`
export IOS_PROVISIONING_NAME=`grep "<key>Name" -A1 -a $IOS_PROVISIONING_FILE | pcregrep -o1 '<string>(.*)</string>'`
export IOS_TEAM_ID=`grep "<key>TeamIdentifier" -A2 -a $IOS_PROVISIONING_FILE | pcregrep -o1 '<string>(.*)</string>'`

cp $IOS_PROVISIONING_FILE ~/Library/MobileDevice/Provisioning\ Profiles/$IOS_PROVISIONING_UUID.mobileprovision

sed \
  -e "s/\$TEAM_ID/$IOS_TEAM_ID/g" \
  -e "s/\$PROVISIONING_NAME/$IOS_PROVISIONING_NAME/g" \
  -e "s/\$PROVISIONING_UUID/$IOS_PROVISIONING_UUID/g" \
  -e "s/\$CODESIGN_IDENTITY/$IOS_CODESIGN_IDENTITY/g" \
  $ROOT/.buildkite/ios/templates/exportOptions.plist > \
  $ROOT/tmp/release.plist

cd $ROOT/ios && xcodebuild -verbose \
  -exportArchive \
  -exportPath $ROOT/ios/build \
  -archivePath $ROOT/ios/build/EmCasa.xcarchive \
  -exportOptionsPlist $ROOT/tmp/release.plist | xcpretty
