const updateMenuTextColor = () => {
    const _page = window.location.pathname;
    const [{ text: color }] = config.filter(({page}) => _page.includes(`/${page}/`)) || []; 
    const nav = document.querySelector('.ap-nav');
      nav.classList.add(`text-${color}`);
}

updateMenuTextColor();