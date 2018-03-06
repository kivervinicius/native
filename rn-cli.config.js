module.exports = {
  // Related issues:
  // https://github.com/oblador/react-native-vector-icons/issues/626s
  // https://github.com/facebook/metro/issues/139#issuecomment-366213751
  getBlacklistRE() {
    return /.*\/__fixtures__\/.*/
  }
}
