const transtion = (data) => {

  const {current:{ namespace } ={}, next:{ container } ={}} = data || {};

  document.body.className = "";
  document.body.classList.add(namespace ? `ap-${namespace}` : "");

    TweenLite.from(container, 1, 
        {height:0, marginTop: "100vh", delay:0});
    TweenLite.to(container, 4, 
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
