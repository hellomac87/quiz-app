import create from 'zustand';

export type ThemeType = 'dark' | 'light' | 'system';

export type GlobalStateType = {
    theme: ThemeType;
    setTheme(theme: ThemeType): void;
};

const defaultTheme: ThemeType = 'dark';

export const useStore = create<GlobalStateType>((set) => ({
    theme: defaultTheme,
    setTheme: (theme: ThemeType) => set((_) => ({ theme })),
}));
