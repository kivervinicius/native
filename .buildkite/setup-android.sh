set -eu
set -x

PATH=$PATH:$ANDROID_HOME/tools/bin

mkdir .secrets

# Install keystore

echo "Installing android sdk"

sdkmanager "platforms;android-26"
sdkmanager "build-tools;26.0.1"
sdkmanager "extras;android;m2repository" "extras;google;m2repository"

echo "Installing keystore"

aws s3 sync $AWS_SECRETS_BUCKET .secrets

export ANDROID_KEYSTORE_FILE=$PWD/.secrets/keystore.jks

