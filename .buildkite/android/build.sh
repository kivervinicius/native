set -e

BUILD_NUMBER=$BUILDKITE_BUILD_NUMBER
BUILD_TAG=$([ $BUILDKITE_BRANCH!="master" ] && echo $BUILDKITE_BRANCH)

bundle exec fastlane android build \
  bump:true \
  signed:true \
  build_number:$BUILDKITE_BUILD_NUMBER \
  tag:$BUILD_TAG
