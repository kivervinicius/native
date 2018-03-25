#!/bin/bash

keychain_name=${2:-'ci.keychain'}
keychain_pass=$1
keychain_file="$HOME/Library/Keychains/$keychain_name-db"

security create-keychain -p $keychain_pass $keychain_name
security default-keychain -s $keychain_name
security unlock-keychain -p $keychain_pass $keychain_name
security set-keychain-settings -t 3600 -l $keychain_file

[[ ! -z $IOS_CERTIFICATE_CER ]] && \
  security import $IOS_CERTIFICATE_CER \
    -k $keychain_file \
    -T /usr/bin/codesign > /dev/null

[[ ! -z $IOS_CERTIFICATE_P12 ]] && \
  security import $IOS_CERTIFICATE_P12 \
    -k $keychain_file \
    -P "$IOS_CERTIFICATE_PASSWORD" \
    -T /usr/bin/codesign > /dev/null

echo $keychain_file
