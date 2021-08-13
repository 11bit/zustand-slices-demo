import create from "zustand";
import { combine } from "zustand/middleware";

import {area, areaActions} from './areaStore'
import {setForSlice} from './utils'

const initialState = { bears: 0, area };

export const useStore = create(
    combine(initialState, set => ({
        increasePopulation: () => set(state => ({ bears: state.bears + 1 })),

        areaActions: areaActions(
            setForSlice<typeof initialState, typeof area>(set, "area")
        )
    }))
);
