set -e

fastlane ios beta bin:$ROOT/ios/build/EmCasa.ipa groups:$TESTER_GROUPS
