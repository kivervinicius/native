set -eu

PATH=$PATH:$ANDROID_HOME/tools/bin

echo "Installing android sdk"

sdkmanager "platforms;android-26"
sdkmanager "build-tools;26.0.1"
sdkmanager "extras;android;m2repository" "extras;google;m2repository"
