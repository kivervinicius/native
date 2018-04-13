CODESIGN_PROFILE=ad-hoc

while true; do
case $1 in
  -p|--profile)
  if [[ $2 == production ]]; then
    CODESIGN_PROFILE=app-store
  fi
  shift; shift;;
  '') break;;
  *) shift;;
esac
done

export IOS_PROVISIONING_FILE=$(printf $IOS_PROVISIONING_FILE $CODESIGN_PROFILE)
