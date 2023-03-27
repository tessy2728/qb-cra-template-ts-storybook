const lightTheme = {
    primary: '#2990a3',
    text: 'rgba(58,52,51,1)',
    textSecondary: 'rgba(58,52,51,0.7)',
    background: 'rgba(255,255,255,1)',
    backgroundVariant: 'rgba(255,255,255,0.6)',
    border: 'rgba(58,52,51,0.12)',
    borderLight: 'rgba(58,52,51,0.05)',
    headerBg: "#282c34",
    headerText: "rgba(241,233,231,1)",
    btnPrimary: 'rgb(156, 39, 176)'
};

const darkTheme: Theme = {
    primary: '#bae8f1',
    text: 'rgba(241,233,231,1)',
    textSecondary: 'rgba(241,233,231,0.6)',
    background: 'rgba(0,0,0,1)',
    backgroundVariant: '#26242E',
    border: 'rgba(241,233,231,0.15)',
    borderLight: 'rgba(241,233,231,0.05)',
    headerBg: "rgba(255,255,255,1)",
    headerText: "rgba(58,52,51,1)",
    btnPrimary: 'rgb(156, 39, 176)'
};

export type Theme = typeof lightTheme;

export const themes = {
    light: lightTheme,
    dark: darkTheme,
};