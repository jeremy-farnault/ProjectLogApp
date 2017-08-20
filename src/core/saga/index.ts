import axios, { AxiosRequestConfig } from 'axios'
import { call, fork, put, select, take, all, takeLatest } from 'redux-saga/effects'
import config from '../../utils/config'
// import * as meDuck from '../modules/me'
import * as users from '../modules/entities/users'
import { responseSchemasTypes } from '../middlewares/NormalizrMiddleware'

// const userId = 'a@a.com' // FIXME static

// function* loadMe (action: any) {
//   try {
//     const response = yield call<any>(axios, { // Fixme 'any'
//       method: 'get',
//       url: `${config.serverApi}/me/${userId}`
//     })
//     yield put(meDuck.loadSuccess({
//       response,
//       schema: responseSchemasTypes.me
//     }))
//   } catch (err) {
//     console.warn('me failed', err)
//     yield put(meDuck.loadFail(err))
//     // yield put(ErrorPageActions.openErrorPage({type: ErrorPageActions.errorPageTypes.error}))
//   }
// }

function* root () {
  yield takeLatest(users.GET, getUsers)
  // yield takeLatest(meDuck.LOAD, loadMe)
}

function* getUsers(action: any) {
  try {
    const axiosConfig: AxiosRequestConfig = {
      method: 'get',
      headers: {'x-remote-user': 'bmh@smithstone.biz'},
      url: `${config.serverApi}/oneview-rest/users`
    }
    const response = yield call<any>(axios, axiosConfig)
    // yield put(users.getSuccess(response.data))
    yield put({ type: users.GET_SUCCESS, payload: response.data })
  } catch (err) {
    console.warn('users get failed', err)
    // yield put(users.getFail(err))
    yield put({ type: users.GET_FAIL })
  }
}

export default root
