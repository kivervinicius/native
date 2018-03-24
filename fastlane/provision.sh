filename=$IOS_MOBILE_PROVISION
uuid=`grep UUID -A1 -a $filename | grep -io "[-A-F0-9]\{36\}"`

cp $filename "$HOME/Library/MobileDevice/Provisioning Profiles/$uuid.mobileprovision"

echo $uuid
