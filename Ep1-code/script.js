// gsap.to('.box', {
// //   x:700,
// //   duration : 1,
// //   delay : 1,
// //   backgroundColor: "blue", 
// //   rotate : 360,
// //   scale : 0.5
// })

// gsap.from('.box',{
//     x:700,
//     duration : 1,
//     delay : 1,
//     backgroundColor: "blue", 
//     rotate : 360,
//     scale : 0.5     
// })

// gsap.from('h1',{
//     x:700,
//     duration : 0.6,
//     // delay : ,
//     // backgroundColor: "blue",
//     stagger : 0.1,  // value is interval seconds
//     // repeat  : -1
// })


// gsap.to('.box2',{
//     x  : 600,
//     yoyo : 1,
//  duration : 0.4,
//  delay  : 0.5,
//  repeat : -1,
//  yoyo : true
// })


const tl = gsap.timeline()

tl.to('h1',{
      x : 600,
      duration : 1
})
tl.to('h2',{
      x : 700,
      duration : 1
})
tl.to('h3',{
      x : 800,
      duration : 1
})


