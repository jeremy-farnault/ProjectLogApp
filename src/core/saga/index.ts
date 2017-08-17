import axios from 'axios'
import { call, fork, put, select, take } from 'redux-saga/effects'
import { delay, takeEvery } from 'redux-saga'

const TURLY = true;

function * grabCsrf () {
  while(TURLY) {
    try {
      yield axios({
        method: 'get',
        url: '/csrftoken',
      })
    } catch (err) {
      console.warn('grabCsrf failed')
    }
  }
}

export default function * root () {
  yield [grabCsrf]
}
