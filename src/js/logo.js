//PageLogo
import favicon from '../assets/images/favicon-32x32.png';

export const addPageLogo = () => {
    const pageIcon = document.createElement('link');
    pageIcon.rel = 'icon';
    pageIcon.type = 'image/x-icon';
    pageIcon.href = `${favicon}`;
    document.querySelector('head').appendChild(pageIcon);
}