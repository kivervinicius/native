set -e

mkdir -p .secrets

echo "Installing certificate"

aws s3 sync $AWS_SECRETS_BUCKET .secrets --quiet

export IOS_XCCONFIG_FILE=$PWD/.secrets/ad-hoc/app.xcconfig
export IOS_CERTIFICATE_FILE=$PWD/.secrets/ad-hoc/app.p12
export IOS_PROVISIONING_FILE=~$PWD/.secrets/ad-hoc/app.mobileprovision
export IOS_PROVISIONING_UUID=`grep UUID -A1 -a $IOS_PROVISIONING_FILE | grep -io "[-A-F0-9]\{36\}"`
export IOS_PROVISIONING_NAME=`grep "<key>Name" -A1 -a $IOS_PROVISIONING_FILE | pcregrep -o1 '<string>(.*)</string>'`

