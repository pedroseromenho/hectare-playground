const changeBackgroundColor = () => {
    const page = window.location.pathname;
    const changeColor = (p) => page.includes(`/${p}/`) && document.body.classList.add(`ap-${p}`);

    changeColor('gallery');
    changeColor('creators');
    changeColor('shop');
    changeColor('sur-mesure');
}

changeBackgroundColor();