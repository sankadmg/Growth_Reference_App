import {createSelector} from '@reduxjs/toolkit';
import {RootState} from './store';

const selectUser = (state: RootState) => state.user;

const selectGender = createSelector(selectUser, user => user.gender);
const selectMonths = createSelector(selectUser, user => user.months);
const selectBMI = createSelector(selectUser, user => user.bmi);
const selectHeight = createSelector(selectUser, user => user.height);
const selectWeight = createSelector(selectUser, user => user.weight);

export {selectGender, selectMonths, selectBMI, selectHeight, selectWeight};
