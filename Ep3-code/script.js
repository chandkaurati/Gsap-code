gsap.from('.page1 .box',{
     scale : 0,
     delay : 1,
     duration  : 1,

     
})
gsap.from('.page2 .box',{
     scale : 0,
     duration  : 0.5,
     scrollTrigger : {
          trigger: ".page2 .box",
          scroller : 'body',
          markers : true,
          start : 'top 50%',
          end :  "top 30%",
          // scrub : true
          scrub : 1
     
     }
})
gsap.from('.page3 .box',{
     scale : 0,
     duration  : 1,
     scrollTrigger : {
          trigger: ".page3 .box",
          scroller : 'body',
          markers : true,
          start : 'top 50%',
          end :  "top 30%"
     }
})

