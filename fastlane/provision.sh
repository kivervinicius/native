#!/bin/bash

filename=$IOS_MOBILE_PROVISION
uuid=`grep UUID -A1 -a $filename | grep -io "[-A-F0-9]\{36\}"`
name=`grep "<key>Name" -A1 -a $filename | pcregrep -o1 '<string>(.*)</string>'`

cp $filename "$HOME/Library/MobileDevice/Provisioning Profiles/$uuid.mobileprovision"

echo $uuid
echo $name
