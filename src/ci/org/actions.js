import { createAction } from 'redux-actions'
import * as common from '../../common/actions'
import { getObjectValue } from '../../common/helpers'
import { validateRegData } from './helpers'

export const setRegData = createAction('CI/ORG/SET_REG_DATA')
export const setRegErrors = createAction('CI/ORG/SET_REG_ERRORS')
export const submitRegistration = data => {
  return dispatch => {
    dispatch(setRegErrors(null))
    var errors = validateRegData(data)
    if (errors) {
      dispatch(common.setError('Please correct your inputs.'))
      dispatch(setRegErrors(errors))
      return
    }

    return dispatch(common.request({
      url: 'ci/org/reg',
      method: 'post',
      data
    })).then(response => {
      dispatch(common.setSuccess('Your registration has been submitted.'))
    }).catch(err => {
      dispatch(setRegErrors(getObjectValue(err, 'response.data.errors', null)))
    })
  }
}
