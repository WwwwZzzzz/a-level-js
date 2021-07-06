import { createMuiTheme } from '@material-ui/core/styles';
import LazyLoad from 'react-lazyload';
import React from 'react';

const unsplashimg = {
    src: 'https://source.unsplash.com/400x500/?',
    alt: 'random unsplash image'
};

export const Randompic = () => {
    return (
        <LazyLoad>
            <div>
                <img
                    src={unsplashimg.src}
                    alt={unsplashimg.alt}
                />
            </div>
        </LazyLoad>
    );
}

export const custom_theme = createMuiTheme({
    palette: {
        primary: {
            light: '#757ce8',
            main: '#ffffff',
            dark: '#002884',
            contrastText: '#000',
        },
        secondary: {
            light: '#ca61ff',
            main: '#f4c836',
            dark: '#ab7003',
            contrastText: '#000',
        },
    },
});

