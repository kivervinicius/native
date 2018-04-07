set -e

cd $(dirname $(dirname "$0"))

echo "Installing dependencies"

bundle install
yarn install
(cd ios && pod install)

if [[ $1 =~ android|ios ]]; then
  PLATFORM=$1; shift;
  ./.buildkite/setup-$PLATFORM.sh
fi
