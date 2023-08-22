import ReactGA from 'react-ga';

export const initGA = () => {
    ReactGA.initialize('G-XT1TR5ED66');
};

export const logPageView = () => {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
};
