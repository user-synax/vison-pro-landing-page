gsap.from('.content img', {
    opacity: 0,
    duration: 3,
    y: 50,
    width: 9000
})

gsap.from('.img-grid', {
    scrollTrigger: {
        trigger: '.img-grid',
        start: 'top 50%',
        end: 'bottom -100%',
    },
    opacity: 0,
    duration: 2,
    y: 100,
})

gsap.from('.tech-spec',{
    scrollTrigger: {
        trigger: '.tech-spec',
        start: 'top 50%',
        end: 'bottom -50%',
    },
    opacity: 0,
    duration: 2,
    stagger: 1
})
