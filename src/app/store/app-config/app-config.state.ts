import { State, Action, StateContext, Selector } from '@ngxs/store';
import {
		UpdateConfig,
		UpdateSideNavCollapse,
		UpdateMobileNavCollapse
} from './app-config.action';
import { AppConfiguration } from '@constant/app-config';
import { AppConfig } from '@interfaces/general/app-config.interface';
import { Injectable } from '@angular/core';

@State<AppConfig>({
		name: 'app',
		defaults: AppConfiguration
})
@Injectable()

export class AppConfigState {

		@Selector()
		static getUsers(state: AppConfig) {
				return state.mobileNavCollapse;
		}

		@Action(UpdateConfig)
		updateConfig({getState, patchState }: StateContext<AppConfig>, { payload }: UpdateConfig) {
				const state = getState();
				patchState({
						...state,
						...payload
				});
		}

		@Action(UpdateSideNavCollapse)
		changeSideNavCollapse({getState, patchState}: StateContext<AppConfig>, { sideNavCollapse }: UpdateSideNavCollapse) {
				const state = getState();
				patchState({
						...state,
						sideNavCollapse
				});
		}

		@Action(UpdateMobileNavCollapse)
		changeMobileNavCollapse({getState, patchState}: StateContext<AppConfig>, { mobileNavCollapse }: UpdateMobileNavCollapse) {
				const state = getState();
				patchState({
						...state,
						mobileNavCollapse
				});
		}


		// @Action(UpdateCurrentLanguage)
		// changeCurrentLanguage({getState, patchState}: StateContext<AppConfig>, { lang }: UpdateCurrentLanguage) {
		// 		const state = getState();
		// 		patchState({
		// 				...state,
		// 				lang
		// 		});
		// }
}
