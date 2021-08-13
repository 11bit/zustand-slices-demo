import {SetState} from 'zustand'

type Action<State extends object> = (set: SetState<State>) => () => void;

export function createSliceActions<SliceState extends object, Actions = Record<string, () => void>>(
    actions: (set: SetState<SliceState>) => Actions
): (sliceSet: SetState<SliceState>) => Actions {
    return sliceSet => actions(sliceSet);
}

export function setForSlice<State extends object, SliceState extends object>(
    set: SetState<State>,
    namespace: keyof State
): SetState<SliceState> {
    return setter =>
        // TODO: figure out this typings
        // @ts-ignore
        set(state => ({
            // @ts-ignore
            [namespace]: { ...state[namespace], ...setter(state[namespace]) }
        }));
}