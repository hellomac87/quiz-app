import { SetState, GetState } from 'zustand';

import { StoreType } from 'src/store';

export type ResultType = {
    startTime: Date | null;
    endTime: Date | null;
    setStartTime(startTime: Date): void;
    setEndTime(endTime: Date): void;
    resetTime(): void;
};

export const createResultSlice = (set: SetState<StoreType>, get: GetState<StoreType>) => ({
    startTime: null,
    endTime: null,
    setStartTime: (startTime: Date) =>
        set((state) => {
            return {
                ...state,
                startTime,
            };
        }),
    setEndTime: (endTime: Date) =>
        set((state) => {
            return {
                ...state,
                endTime,
            };
        }),
    resetTime: () =>
        set((state) => ({
            ...state,
            startTime: null,
            endTime: null,
        })),
});
