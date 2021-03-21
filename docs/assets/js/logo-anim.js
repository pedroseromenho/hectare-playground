/**
 * DOM elements
 */
const logo = document.querySelector('.ap-logo');
const home = document.querySelector('.ap-home');
const galleryLink = document.querySelector('.js-gallery-link');

/**
 * Logo header animation on hover
 */
if (logo) {
  const items = logo.querySelectorAll('.--item');
  Array.from(items).forEach(item => {
    const { classList, previousElementSibling } = item || {};

    const effect = ({ event, action, callback }) => {
        item.addEventListener(event, () => {
            classList[action]('active');
            previousElementSibling?.classList[action]('level1');
            previousElementSibling?.previousElementSibling?.classList[action]('level2');
            previousElementSibling?.previousElementSibling?.previousElementSibling?.classList[action]('level3');
            
            if(callback) callback();
        })
    }
    effect({
        event: 'mouseover', 
        action: 'add', 
        callback: effect({event: 'mouseleave', action: 'remove'}) 
    });
  })
}

/**
 * Scroll window elements style
 */
if(home){
    const logoClassList = logo && logo.classList
    const hideLogoClass = 'js-hide-logo';
    
    const linkClassList = galleryLink && galleryLink.classList
    const hideLinkClass = 'js-hide-gallery-link';
    

    if(window.scrollY < 150 && logoClassList){
        logoClassList.add(hideLogoClass)
    }
    if(window.scrollY > 150 && linkClassList){
        logoClassList.add(hideLogoClass)
    }
    window.onscroll = () => { 
        if(logoClassList){
            if(window.scrollY > 150){
                if(logoClassList.contains(hideLogoClass)){
                    logoClassList.remove(hideLogoClass)
                }
            }else if(!logoClassList.contains(hideLogoClass)){
                logoClassList.add(hideLogoClass)
            }
        }
        if(galleryLink){
            if(window.scrollY > 150){
                if(!linkClassList.contains(hideLinkClass)){
                    linkClassList.add(hideLinkClass);
                    linkClassList.remove('animate-pulse');
                }
            }else if(linkClassList.contains(hideLinkClass)){
                linkClassList.remove(hideLinkClass);
                linkClassList.add('animate-pulse');
            }
        }
    }
}