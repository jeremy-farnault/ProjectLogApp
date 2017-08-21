import axios from 'axios'
import { call, fork, put, select, take, all, takeLatest } from 'redux-saga/effects'
import config from '../../utils/config'
import * as meDuck from '../modules/me'
import { responseSchemasTypes } from '../middlewares/NormalizrMiddleware'

const userId = 'a@a.com' // FIXME static

function* loadMe (action: any) {
  try {
    const response = yield call<any>(axios, { // Fixme 'any'
      method: 'get',
      url: `${config.serverApi}/me/${userId}`
    })
    yield put(meDuck.loadSuccess({
      response,
      schema: responseSchemasTypes.me
    }))
  } catch (err) {
    console.warn('me failed', err)
    yield put(meDuck.loadFail(err))
    // yield put(ErrorPageActions.openErrorPage({type: ErrorPageActions.errorPageTypes.error}))
  }
}

function* root () {
  yield takeLatest(meDuck.LOAD, loadMe)
}

export default root
