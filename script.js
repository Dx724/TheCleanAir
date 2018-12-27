var controller = new ScrollMagic.Controller();

var timeline1 = new TimelineMax();
timeline1.to("#pinnedElement", 5, {width: "600px", height: "600px", margin: "0px", marginLeft: "500px"});
timeline1.to("#elementText", 3, {autoAlpha: 1}, "-=5");
timeline1.to("#subtitle", 3, {autoAlpha: 0}, "-=3");
timeline1.to("#subtitle", 0, {display: "none"});
timeline1.to("#pinnedElement", 5, {width: "200px", height: "200px"}, "+=10");
timeline1.to("#pinnedElement", 5, {fontSize: "20px"}, "-=5");

new ScrollMagic.Scene({
	duration: 1000,
	offset: 10,
	triggerElement: "#pinnedElement",
	triggerHook: 0
})
	.setTween(timeline1)
	.setPin("#pinnedElement")

	.addTo(controller);

//SPACER 1000
	
var timeline2 = new TimelineMax();
timeline2.to("body", 10, {backgroundColor: "#555a5a"});

new ScrollMagic.Scene({
	duration: 450,
	triggerElement: "#pinnedElement2",
	triggerHook: 0,
	offset: -1700
})
	.setTween(timeline2)

	.addTo(controller);

var timeline3 = new TimelineMax();
timeline3.to("#pinnedElement2", 10, {backgroundColor: "#555a5a"});
	
new ScrollMagic.Scene({
	duration: 750,
	triggerElement: "#pinnedElement2",
	triggerHook: 0.5,
	offset: 200
})
	.setTween(timeline3)
	.setPin("#pinnedElement2")

	.addTo(controller);

//SPACER 500

var timeline4 = new TimelineMax();
timeline4.to("#text1", 30, {autoAlpha: 0}, "+=50");
timeline4.to("#text1", 0, {display: "none"});
timeline4.to("#text2", 0, {display: "initial"});
timeline4.to("#text2", 30, {autoAlpha: 1});
timeline4.to("body", 75, {});
timeline4.to("#pinnedElement3", 50, {backgroundColor: "#555a5a"});
timeline4.to("#text2", 25, {autoAlpha: 0}, "-=50")
timeline4.to("#info1", 50, {width: 0}, "-=50");

new ScrollMagic.Scene({
	duration: 3500,
	triggerElement: "#pinnedElement3",
	triggerHook: 0.5,
	offset: 450
})
	.setTween(timeline4)
	.setPin("#pinnedElement3")

	.addTo(controller);
//SPACER 500

var timeline5 = new TimelineMax();
timeline5.to("#text3", 30, {autoAlpha: 0}, "+=50");
timeline5.to("#text3", 0, {display: "none"});
timeline5.to("#text4", 0, {display: "initial"});
timeline5.to("#text4", 30, {autoAlpha: 1});
timeline5.to("body", 75, {});
timeline5.to("#pinnedElement4", 50, {backgroundColor: "#555a5a"});
timeline5.to("#text4", 25, {autoAlpha: 0}, "-=50")
timeline5.to("#info2", 50, {width: 0}, "-=50");

new ScrollMagic.Scene({
	duration: 4000,
	triggerElement: "#pinnedElement4",
	triggerHook: 0.5,
	offset: 450
})
	.setTween(timeline5)
	.setPin("#pinnedElement4")

	.addTo(controller);

//SPACER 250

var timeline5b = new TimelineMax();
timeline5b.to("#text11", 30, {autoAlpha: 0}, "+=50");
timeline5b.to("#text11", 0, {display: "none"});
timeline5b.to("#text12", 0, {display: "initial"});
timeline5b.to("#text12", 30, {autoAlpha: 1});
timeline5b.to("body", 75, {});
timeline5b.to("#pinnedElement4b", 50, {backgroundColor: "#555a5a"});
timeline5b.to("#text12", 25, {autoAlpha: 0}, "-=50")
timeline5b.to("#info3", 50, {width: 0}, "-=50");

new ScrollMagic.Scene({
	duration: 4000,
	triggerElement: "#pinnedElement4b",
	triggerHook: 0.5,
	offset: 450
})
	.setTween(timeline5b)
	.setPin("#pinnedElement4b")

	.addTo(controller);
	

//SPACER 750

var timeline6 = new TimelineMax();
timeline6.to("#pinnedElement5", 50, {left: "0%"});

new ScrollMagic.Scene({
	duration: 500,
	triggerElement: "#pinnedElement5_container",
	triggerHook: 0.5,
	offset: 175
})
	.setPin("#pinnedElement5_container")
	.setTween(timeline6)

	.addTo(controller);
	
var timeline7 = new TimelineMax();
timeline7.staggerTo("#text5, #text6, #text7, #text8, #text9, #text10", 10, {left: "-=90%", autoAlpha: 1}, 50);

new ScrollMagic.Scene({
	duration: 20000,
	triggerElement: "#pinnedElement5_container",
	triggerHook: 0.5,
	offset: 675
})
	.setTween(timeline7)
	.setPin("#pinnedElement5_container")

	.addTo(controller);
	
new ScrollMagic.Scene({
	duration: 5000,
	triggerElement: "#pinnedElement5_container",
	triggerHook: 0.5,
	offset: 20675
})
	.setPin("#pinnedElement5_container")

	.addTo(controller);
	
new ScrollMagic.Scene({
	duration: 1000,
	triggerElement: "#image3",
	triggerHook: 0.5,
	offset: 333.5
})
	.setPin("#image3")
	.addTo(controller);
new ScrollMagic.Scene({
	duration: 1000,
	triggerElement: "#image4",
	triggerHook: 0.5,
	offset: 333.5
})
	.setPin("#image4")
	.addTo(controller);
new ScrollMagic.Scene({
	duration: 1000,
	triggerElement: "#image5",
	triggerHook: 0.5,
	offset: 333.5
})
	.setPin("#image5")
	.addTo(controller);
new ScrollMagic.Scene({
	duration: 1000,
	triggerElement: "#image6",
	triggerHook: 0.5,
	offset: 333.5
})
	.setPin("#image6")
	.addTo(controller);
	
var timeline8 = new TimelineMax();
timeline8.to("body", 100, {backgroundColor: "#d9f6ff"});

new ScrollMagic.Scene({
	duration: 4000,
	triggerElement: "#image3",
	triggerHook: 0.5,
	offset: 0
})
	.setTween(timeline8)
	.addTo(controller);

new ScrollMagic.Scene({
	duration: 2500,
	triggerElement: "#info4",
	triggerHook: 0.5,
	offset: 400
})
	.setPin("#info4")
	.addTo(controller);