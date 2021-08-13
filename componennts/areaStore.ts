import {createSliceActions} from './utils'

export const area = {
    type: "forest",
    pop: 0
};

export const areaActions = createSliceActions<typeof area>(set => ({
    inc: () =>
        set(state => ({
            pop: state.pop + 1
        })),
    double: () =>
        set(state => ({
            pop: state.pop * 2
        }))
}));