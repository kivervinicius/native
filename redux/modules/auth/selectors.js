export const getAuth = (state) => state.auth

export const getUser = (state) => state.auth.user

export const getData = (state) => state.auth.data

export const getToken = (state) => state.auth.data && state.auth.data.token

export const isLoading = (state) => state.auth.loading

export const getError = (state) => state.auth.error
