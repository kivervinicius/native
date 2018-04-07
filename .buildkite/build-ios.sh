set -e

BUILD_NUMBER=$BUILDKITE_BUILD_NUMHER
VERSION_TAG=$([ $BUILDKITE_BRANCH!="master" ] && echo $BUILDKITE_BRANCH)

bundle exec fastlane ios build \
  bump:true \
  signed:true \
  build_number:$BUILDKITE_BUILD_NUMBER \
  tag:$VERSION_TAG
