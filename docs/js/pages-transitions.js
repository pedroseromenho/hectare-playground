const config = [{
  page: "home",
  text: "yellow",
  bg: "red",
},
{
  page: "gallery",
  text: "yellow",
  bg: "red",
},
{
  page: "creators",
  text: "purple",
  bg: "green",
},
{
  page: "shop",
  text: "orange",
  bg: "yellow",
},
{
  page: "sur-mesure",
  text: "green",
  bg: "purple",
}]

const updateMenuTextColor = () => {
  const _page = window.location.pathname;
  const [{ text: color }] = config.filter(({page}) => _page.includes(`/${page}/`)) || []; 
  const nav = document.querySelector('.ap-nav');
    nav.classList.add(`text-${color}`);
}

updateMenuTextColor();

const style = ({namespace, selector}) => {
  const [{ text, bg }] = config.filter(({page}) => page === namespace) || []; 

  const _style = (color) =>`${selector}-${color}`;
  switch(selector){
    case 'bg':
      return _style(bg);
    case 'text':
        return _style(text);
    default:
        return null
  }
}

const transtion = (data) => {
  const {
    current:{ namespace: namespaceCurrent } ={}, 
    next:{ container: containerNext, namespace: namespaceNext } ={}
  } = data || {};

  const prevBgColor = style({namespace: namespaceCurrent, selector: 'bg'});
  const nextTextColor = style({namespace: namespaceNext, selector: 'text'});

  document.body.className = "";
  document.body.classList.add(prevBgColor);

  const nav = document.querySelector('.ap-nav');
  nav.className = "ap-nav";
  nav.classList.add(nextTextColor);

    TweenLite.from(containerNext, 1, 
        {height:0, marginTop: "100vh", delay:0});
    TweenLite.to(containerNext, 4, 
        {height:"100vh", marginTop: 0, delay:2});
}

barba.init({
    views: [{
        namespace: 'home',
        beforeEnter(data) {
            transtion(data);
        },
      }, 
      {
        namespace: 'gallery',
        beforeEnter(data) {
          console.log(data);
            transtion(data);
        },
      }, 
      {
        namespace: 'creators',
        beforeEnter(data) {
          console.log(data);
            transtion(data);
        },
      },
      {
        namespace: 'shop',
        beforeEnter(data) {
          console.log(data);
            transtion(data);
        },
      },
      {
        namespace: 'sur-mesure',
        beforeEnter(data) {
          console.log(data);
            transtion(data);
        },
      }]
});
