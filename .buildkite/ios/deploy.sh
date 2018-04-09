set -e

bundle exec fastlane run crashlytics \
  ipa_path:$ROOT/ios/build/EmCasa.ipa \
  api_token:$FABRIC_API_KEY \
  build_secret:$FABRIC_BUILD_SECRET \
  groups:$TESTER_GROUPS
