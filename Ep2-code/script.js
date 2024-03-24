let tl =  gsap.timeline()
 
 tl.from('nav img, h3, button',{
      y: -100,
      duration : 1,
      opacity : 0, 
      stagger : 0.2

})

tl.from('main h1',{
  y : 100,
  opacity : 0, 
  duration : 0.4,
   stagger : 0.2
})


tl.from('main > img',{
   scale:0,
   duration : 0.3,
   opacity : 0,
   stagger : 0.3
})


tl.from('main h5',{
 scale  : 0 ,
 opacity : 0,
  
})

tl.to('main h5',{
   y : 30,
  repeat : -1 ,
  duration :0.7,
  yoyo : true
  
})





