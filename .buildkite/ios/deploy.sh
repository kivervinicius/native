set -e

IPA_FILE="$ROOT/ios/build/EmCasa.ipa"
PATH="$PATH:$(dirname "$(xcode-select -p)")/Applications/Application Loader.app/Contents/Frameworks/ITunesSoftwareService.framework/Support/"

case $RELEASE_PROFILE in
  beta)
    bundle exec fastlane run crashlytics \
      ipa_path:$IPA_FILE \
      api_token:"$FABRIC_API_KEY" \
      build_secret:"$FABRIC_BUILD_SECRET" \
      groups:"$TESTER_GROUPS"
    ;;
  production)
    ARGS=(--type ios)
    ARGS+=(--file $IPA_FILE)
    ARGS+=(--username "$APPLE_ID")
    ARGS+=(--password "$APPLE_PASSWORD")
    altool --validate-app ${ARGS[*]}
    altool --upload-app ${ARGS[*]}
    ;;
esac

