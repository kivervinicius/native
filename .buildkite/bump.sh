export BUILD_NUMBER=$BUILDKITE_BUILD_NUMBER
export VERSION_NAME=$(node -e 'console.log(require("./package.json").version)')
if [[ $BUILDKITE_BRANCH && $BUILDKITE_BRANCH != "master" ]]; then
  export VERSION_NAME="$VERSION_NAME-$BUILDKITE_BRANCH"
fi
