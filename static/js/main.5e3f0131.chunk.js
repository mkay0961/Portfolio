(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{250:function(e,t,a){e.exports=a(430)},255:function(e,t,a){},359:function(e,t,a){e.exports=a.p+"static/media/proPic.c77ba174.png"},429:function(e,t,a){},430:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(64),i=a.n(o),r=(a(255),a(20)),c=a(21),s=a(24),m=a(22),d=a(25),u=a(447),p=a(67),h=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).handleItemClick=function(t,a){var n=a.name;return e.setState({activeItem:n})},e.openResume=function(){window.open("https://drive.google.com/file/d/153Q0ccFD95T1uDcHgKyVb7wp0M6K_Ap2/view","_self")},e.state={activeItem:"About Me"},e}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.state.activeItem;return l.a.createElement(u.a,{pointing:!0,inverted:!0},l.a.createElement(p.b,{to:"/AboutMe"},l.a.createElement(u.a.Item,{name:"About",active:"About"===t,onClick:this.handleItemClick})),l.a.createElement(p.b,{to:"/Portfolio"},l.a.createElement(u.a.Item,{name:"Portfolio",active:"Portfolio"===t,onClick:this.handleItemClick})),l.a.createElement(p.b,{to:"/ContactMe"},l.a.createElement(u.a.Item,{name:"Contact",active:"Contact"===t,onClick:this.handleItemClick})),l.a.createElement(u.a.Item,{name:"Resume",active:!1,onClick:function(){return e.openResume()}}))}}]),t}(n.Component),E=a(448),b=a(243),f=function(e){return l.a.createElement("div",{id:"proPic"},l.a.createElement(E.a,{textAlign:"center"},l.a.createElement(E.a.Content,null,l.a.createElement(b.a,{centered:!0,circular:!0,src:a(359)}),l.a.createElement("br",null),l.a.createElement("p",null,"My passion for problem solving is one of the reasons I became interested in technology and software development.  I received a Computer Science and Data Science degree from the College of Charleston and immediately enrolled in the Flatiron School where I completed a full stack immersive web development program."),l.a.createElement("br",null),l.a.createElement("p",null,"These programs helped strengthened my skills and provided a strong foundation in software development and database management. I am proficient Python, Java, JavaScript, Ruby, HTML, CSS, Ruby on Rails, React, Redux and SQL."))))},g=a(449),v=a(445),y=a(438),w=a(453),k=a(90),C=a(439),S=a(440),O=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).handleUpdate=function(t,a){var n=a.calculations;n.onScreen&&!e.state.transition&&e.setState({transition:!0,calculations:n})},e.state={transition:!1,calculations:{direction:"none",height:0,width:0,topPassed:!1,bottomPassed:!1,pixelsPassed:0,percentagePassed:0,topVisible:!1,bottomVisible:!1,fits:!1,passing:!1,onScreen:!1,offScreen:!1}},e}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state.transition;return l.a.createElement(y.a,{offset:[10,10],updateOn:"repaint",onUpdate:this.handleUpdate},l.a.createElement(w.a,{visible:e,animation:"zoom",duration:500},l.a.createElement(g.a,null,l.a.createElement(v.a,null,l.a.createElement(v.a.Content,null,l.a.createElement(v.a.Header,null,l.a.createElement(k.a,null,this.props.name)),l.a.createElement(C.a,null),l.a.createElement(S.a,{textAlign:"left"},l.a.createElement(v.a.Meta,null,l.a.createElement(k.a,{size:"tiny",color:"teal",ribbon:!0},"Graduated: ",this.props.gradDate)),l.a.createElement("br",null),l.a.createElement(v.a.Description,null,this.props.description)))))))}}]),t}(n.Component),j=[{name:"Flatiron School",graduated:"April 2019",description:"Full Stack Web Development, Ruby, Ruby on Rails, JavaScript and React / Redux"},{name:"College of Charleston",graduated:"December 2018",description:"Major in Bachelor of Science Computer Science and a minor in Data Science"}],P=function(e){return l.a.createElement("div",{id:"container"},l.a.createElement(g.a,null,l.a.createElement(E.a,{as:"h1"},"Education")),l.a.createElement(v.a.Group,null,j.map(function(e,t){return l.a.createElement(O,{key:t,name:e.name,gradDate:e.graduated,description:e.description})})))},M=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).handleUpdate=function(t,a){var n=a.calculations;n.onScreen&&!e.state.transition&&e.setState({transition:!0,calculations:n})},e.state={transition:!1,calculations:{direction:"none",height:0,width:0,topPassed:!1,bottomPassed:!1,pixelsPassed:0,percentagePassed:0,topVisible:!1,bottomVisible:!1,fits:!1,passing:!1,onScreen:!1,offScreen:!1}},e}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state.transition;return l.a.createElement("div",{id:"skill"},l.a.createElement(y.a,{offset:[10,10],updateOn:"repaint",onUpdate:this.handleUpdate},l.a.createElement(w.a,{visible:e,animation:"tada",duration:700},l.a.createElement("div",null,this.props.name))))}}]),t}(n.Component),x=["Python","Java","JavaScript","React","Ruby","Ruby on Rails","Redux","SQL","HTML","CSS"],I=function(e){return l.a.createElement("div",{id:"container"},l.a.createElement(g.a,null,l.a.createElement(E.a,{as:"h1"},"Skills")),l.a.createElement("div",{className:"ui cards"},x.map(function(e,t){return l.a.createElement(M,{name:e,key:t})})))},R=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).handleUpdate=function(t,a){var n=a.calculations;n.onScreen&&!e.state.transition&&e.setState({transition:!0,calculations:n})},e.state={transition:!1,calculations:{direction:"none",height:0,width:0,topPassed:!1,bottomPassed:!1,pixelsPassed:0,percentagePassed:0,topVisible:!1,bottomVisible:!1,fits:!1,passing:!1,onScreen:!1,offScreen:!1}},e}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state.transition;return l.a.createElement(y.a,{offset:[10,10],updateOn:"repaint",onUpdate:this.handleUpdate},l.a.createElement(w.a,{visible:e,animation:"zoom",duration:500},l.a.createElement(g.a,null,l.a.createElement(v.a,null,l.a.createElement(v.a.Content,null,l.a.createElement(v.a.Header,null,l.a.createElement(k.a,{size:"big"},this.props.name)),l.a.createElement(C.a,null),l.a.createElement(S.a,{textAlign:"left"},l.a.createElement(v.a.Meta,null,l.a.createElement("h4",null,this.props.position),l.a.createElement(C.a,null)),l.a.createElement(v.a.Meta,null,l.a.createElement(k.a,{size:"tiny",color:"teal",ribbon:!0},this.props.date)),l.a.createElement("br",null),l.a.createElement(v.a.Description,null,this.props.description.map(function(e){return l.a.createElement("p",null,e)}))))))))}}]),t}(n.Component),A=[{name:"BodyTech Weight Loss and Health",position:"Admin Support",date:"August 2013 - Present",description:["Assisted the CEO, data entry, order processing","Monitored inventory, greeted clients and managed databases"]},{name:"HackerX",position:"Event Coordinator",date:"October 2016",description:["Coordinated a full-stack developer event and connected for over 100 developers with companies","Managed communications with local businesses standardized event process and schedule"]},{name:"Camp Monroe",position:"Counselor / Snack Bar Manager",date:"Summer 2013, 2014, 2015, 2016",description:["Coordinated and supervised activities for kids at sleep-away camp","Managed snack bar including inventory, ordering and collecting payments"]},{name:"Unipark Valet & Parking Services",position:"Valet",date:"August 2014 - December 2014",description:["Specialty parking at major sporting events and arenas, country clubs, restaurants, and private residences"]}],W=function(e){return l.a.createElement("div",{id:"container"},l.a.createElement(g.a,null,l.a.createElement(E.a,{as:"h1"},"Employment History")),l.a.createElement(v.a.Group,null,A.map(function(e,t){return l.a.createElement(R,{key:t,name:e.name,position:e.position,date:e.date,description:e.description})})))},z=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).handleUpdate=function(t,a){var n=a.calculations;n.onScreen&&!e.state.transition&&e.setState({transition:!0,calculations:n})},e.state={transition:!1,calculations:{direction:"none",height:0,width:0,topPassed:!1,bottomPassed:!1,pixelsPassed:0,percentagePassed:0,topVisible:!1,bottomVisible:!1,fits:!1,passing:!1,onScreen:!1,offScreen:!1}},e}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state.transition;return l.a.createElement(y.a,{offset:[10,10],updateOn:"repaint",onUpdate:this.handleUpdate},l.a.createElement(w.a,{visible:e,animation:"zoom",duration:500},l.a.createElement(g.a,null,l.a.createElement(v.a,null,l.a.createElement(v.a.Content,null,l.a.createElement(v.a.Header,null,l.a.createElement(k.a,null,this.props.name)),l.a.createElement(C.a,null),l.a.createElement(S.a,{textAlign:"left"},l.a.createElement(v.a.Meta,null,l.a.createElement(k.a,{size:"tiny",color:"teal",ribbon:!0},this.props.date)),l.a.createElement("br",null),l.a.createElement(v.a.Description,null,this.props.description)))))))}}]),t}(n.Component),D=[{name:"Village at Rockville Retirement Community",date:"Jan 2013 \u2013 May 2014",description:"Assisted residents with physical activities"},{name:"Hospice Caring Montgomery County",date:"Aug 2010 \u2013 Oct 2012",description:"Assisted with annual fundraiser events"}],U=function(e){return l.a.createElement("div",{id:"container"},l.a.createElement(g.a,null,l.a.createElement(E.a,{as:"h1"},"Volunteer History")),l.a.createElement(v.a.Group,null,D.map(function(e,t){return l.a.createElement(z,{key:t,name:e.name,date:e.date,description:e.description})})))},V=a(454),H=a(450),F=function(e){return l.a.createElement("div",{id:"backImage"},l.a.createElement(V.a,{minWidth:V.a.onlyMobile.minWidth,maxWidth:V.a.onlyTablet.minWidth},l.a.createElement(k.a,{size:"massive",color:"white"},l.a.createElement(E.a,{as:"h1"},"Matthew Kay")),l.a.createElement(f,null),l.a.createElement(C.a,{inverted:!0}),l.a.createElement(P,null),l.a.createElement(C.a,{inverted:!0}),l.a.createElement(I,null),l.a.createElement(C.a,{inverted:!0}),l.a.createElement(W,null),l.a.createElement(C.a,{inverted:!0}),l.a.createElement(U,null)),l.a.createElement(V.a,{minWidth:V.a.onlyTablet.minWidth+1,maxWidth:V.a.onlyLargeScreen.minWidth},l.a.createElement(k.a,{size:"massive"},l.a.createElement(E.a,{as:"h1"},"Matthew Kay")),l.a.createElement(H.a,{columns:2,padded:!0},l.a.createElement(H.a.Row,null,l.a.createElement(H.a.Column,null,l.a.createElement(f,null)),l.a.createElement(H.a.Column,null,l.a.createElement(H.a.Row,null,l.a.createElement(P,null)),l.a.createElement(H.a.Row,null,l.a.createElement(I,null)))),l.a.createElement(H.a.Row,null,l.a.createElement(H.a.Column,{id:"widen"},l.a.createElement(W,null))),l.a.createElement(H.a.Row,null,l.a.createElement(H.a.Column,{id:"widen"},l.a.createElement(U,null))))),l.a.createElement(V.a,{minWidth:V.a.onlyLargeScreen.minWidth},l.a.createElement(k.a,{size:"massive"},l.a.createElement(E.a,{as:"h1"},"Matthew Kay")),l.a.createElement(H.a,{columns:2,padded:!0},l.a.createElement(H.a.Row,null,l.a.createElement(H.a.Column,null,l.a.createElement(f,null)),l.a.createElement(H.a.Column,null,l.a.createElement(H.a.Row,null,l.a.createElement(P,null)),l.a.createElement(H.a.Row,null,l.a.createElement(I,null)))),l.a.createElement(H.a.Row,null,l.a.createElement(H.a.Column,null,l.a.createElement(W,null)),l.a.createElement(H.a.Column,null,l.a.createElement(U,null))))))},L=a(225),T=a(71),_=a(443),B=a(441),N=a(442),G=a(431),K=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).handleChange=function(t){var a=t.target,n=a.value,l=a.name;e.setState(Object(L.a)({},l,n))},e.handSubmit=function(t){t.preventDefault(),document.getElementById("email").href="mailto:mkay0961@gmail.com?subject=".concat(e.state.name," wants to connect!&body=Phone number: ").concat(e.state.phone," %0D%0A%0D%0A Message: ").concat(e.state.mess),document.getElementById("email").click()},e.state={name:"",phone:"",mess:""},e}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{id:"container",className:"contactStuff"},l.a.createElement(k.a,{siz:"massive"},l.a.createElement(T.a,{name:"mail",size:"large"}),"Mkay0961@gmail.com"),l.a.createElement(_.a,{onChange:this.handleChange},l.a.createElement(_.a.Field,{name:"name",control:B.a,label:"Name",placeholder:"Name"}),l.a.createElement(_.a.Field,{name:"phone",control:B.a,label:"Phone number",placeholder:"Phone number"}),l.a.createElement(_.a.Field,{name:"mess",control:N.a,label:"Message",placeholder:"Message..."}),l.a.createElement(_.a.Field,{onClick:this.handSubmit,control:G.a},"Submit")),l.a.createElement("a",{href:"mailto:nowhere@mozilla.org",id:"email"}))}}]),t}(n.Component),J=a(451),q=a(39),Q=function(e){return l.a.createElement("div",{id:"container",className:"contactStuff"},l.a.createElement(J.a,{trigger:l.a.createElement(q.SocialIcon,{url:"https://www.linkedin.com/in/matthew-kay-b70104b8/"}),content:"Linkedin"}),l.a.createElement(J.a,{trigger:l.a.createElement(q.SocialIcon,{url:"https://github.com/mkay0961/"}),content:"Github"}),l.a.createElement(J.a,{trigger:l.a.createElement(q.SocialIcon,{url:"https://medium.com/@mkay0961"}),content:"Personal Blog"}),l.a.createElement(J.a,{trigger:l.a.createElement(q.SocialIcon,{url:"https://matthewpkay.wordpress.com/"}),content:"Personal Blog"}),l.a.createElement(J.a,{trigger:l.a.createElement(q.SocialIcon,{url:"https://www.facebook.com/matthew.kay.528"}),content:"Facebook"}),l.a.createElement(J.a,{trigger:l.a.createElement(q.SocialIcon,{url:"https://www.instagram.com/mkay0961/"}),content:"Instagram"}))},X=function(e){return l.a.createElement("div",{id:"backImage",className:"contactPage"},l.a.createElement(k.a,{size:"massive",color:"white"},l.a.createElement(E.a,{as:"h1"},"Matthew Kay")),l.a.createElement(K,null),l.a.createElement(Q,null))},$=a(446),Y=a(444),Z=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).onOpen=function(){console.log("open"),e.setState({show:!0})},e.onClose=function(){console.log("CLOSE ME"),e.setState({show:!1})},e.handleUpdate=function(t,a){var n=a.calculations;n.onScreen&&!e.state.transition&&e.setState({transition:!0,calculations:n})},e.state={show:!1,transition:!1,calculations:{direction:"none",height:0,width:0,topPassed:!1,bottomPassed:!1,pixelsPassed:0,percentagePassed:0,topVisible:!1,bottomVisible:!1,fits:!1,passing:!1,onScreen:!1,offScreen:!1}},e}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.state.transition;return l.a.createElement(J.a,{content:"Click me to find out more about ".concat(this.props.name,"!"),trigger:l.a.createElement("div",{id:"project"},l.a.createElement(y.a,{offset:[10,10],updateOn:"repaint",onUpdate:this.handleUpdate},l.a.createElement(w.a,{visible:t,animation:"zoom",duration:500},l.a.createElement($.a,{onClick:function(){return e.onOpen()}},l.a.createElement(k.a,{size:"massize"},this.props.name),l.a.createElement($.a.Content,null,this.props.pic?l.a.createElement(b.a,{src:"".concat(this.props.pic)}):l.a.createElement(b.a,{src:"https://images.pexels.com/photos/747964/pexels-photo-747964.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"}))))),l.a.createElement(Y.a,{size:"fullscreen",open:this.state.show,onClose:function(){return e.onClose()}},l.a.createElement(Y.a.Header,null,this.props.name),l.a.createElement(Y.a.Content,{image:!0},this.props.demo?l.a.createElement("iframe",{title:"Demo",width:"1200",height:"600",src:"".concat(this.props.demo),frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}):null,l.a.createElement(C.a,null),l.a.createElement(Y.a.Description,null,this.props.description?l.a.createElement(E.a,null,this.props.description):null,l.a.createElement(C.a,null),this.props.details.map(function(e){return l.a.createElement("p",null,e)}),l.a.createElement(C.a,null),this.props.links.map(function(e){return l.a.createElement("a",{href:"".concat(Object.values(e)[0])},l.a.createElement(k.a,{id:"links"},l.a.createElement(q.SocialIcon,{url:"".concat(Object.values(e)[0])}),l.a.createElement("br",null),Object.keys(e)[0]))}))),l.a.createElement(Y.a.Actions,null,l.a.createElement(G.a,{color:"red",onClick:function(){return e.onClose()}},"Close"))))})}}]),t}(n.Component),ee=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).onOpen=function(){console.log("open"),e.setState({show:!0})},e.onClose=function(){console.log("CLOSE ME"),e.setState({show:!1})},e.handleUpdate=function(t,a){var n=a.calculations;n.onScreen&&!e.state.transition&&e.setState({transition:!0,calculations:n})},e.state={show:!1,transition:!1,calculations:{direction:"none",height:0,width:0,topPassed:!1,bottomPassed:!1,pixelsPassed:0,percentagePassed:0,topVisible:!1,bottomVisible:!1,fits:!1,passing:!1,onScreen:!1,offScreen:!1}},e}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.state.transition;return l.a.createElement("div",{id:"project"},l.a.createElement(y.a,{offset:[10,10],updateOn:"repaint",onUpdate:this.handleUpdate},l.a.createElement(w.a,{visible:t,animation:"zoom",duration:500},l.a.createElement($.a,{onClick:function(){return e.onOpen()}},l.a.createElement(k.a,{size:"massize"},this.props.name),l.a.createElement($.a.Content,null,this.props.pic?l.a.createElement(b.a,{src:"".concat(this.props.pic)}):l.a.createElement(b.a,{src:"https://images.pexels.com/photos/747964/pexels-photo-747964.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"}))))),l.a.createElement(Y.a,{open:this.state.show,onClose:function(){return e.onClose()}},l.a.createElement(Y.a.Header,null,this.props.name),l.a.createElement(Y.a.Content,{image:!0},this.props.demo?l.a.createElement("iframe",{title:"Demo",width:"100%",height:"100%",src:"".concat(this.props.demo),frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}):null,l.a.createElement(Y.a.Description,null,this.props.description?l.a.createElement(E.a,null,this.props.description):null,l.a.createElement(C.a,null),this.props.details.map(function(e){return l.a.createElement("p",null,e)}),l.a.createElement(C.a,null),this.props.links.map(function(e){return l.a.createElement("a",{href:"".concat(Object.values(e)[0])},l.a.createElement(k.a,null,l.a.createElement(q.SocialIcon,{url:"".concat(Object.values(e)[0])}),l.a.createElement("br",null),Object.keys(e)[0]))}))),l.a.createElement(Y.a.Actions,null,l.a.createElement(G.a,{color:"red",onClick:function(){return e.onClose()}},"Close"))))}}]),t}(n.Component),te=[{name:"Food Tracker",description:"This app helps track and reduce food waste, in addition to finding recipes based on the food in your house",details:["Developed an API to calculate food waste, recipes, and store users data.","Developed a React front-end so the user can interact with the application and add, eat, and view all their data. ","Implemented Redux for better state management and authentication "],links:[{Frontend:"https://github.com/mkay0961/food_tracker_frontend"},{Backend:"https://github.com/mkay0961/food_tracker_backend"}],demo:"https://www.youtube.com/embed/rKszL_VdBCA",pic:"https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"},{name:"Uno!",description:"Simple version of uno in which one player plays against three computers",details:["Developed an API to calculate food waste, recipes, and store users data.","Developed a React front-end so the user can interact with the application and add, eat, and view all their data. ","Implemented Redux for better state management and authentication "],links:[{Frontend:"https://github.com/mkay0961/mod4_uno_project_frontend"},{Backend:"https://github.com/mkay0961/mod4_uno_project_backend"}],demo:"https://www.youtube.com/embed/CyNjqprbSUM",pic:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/UNO_Logo.svg/1200px-UNO_Logo.svg.png"},{name:"Squeek",description:"This app helps track your personal hygiene products and helps find new products based on specific body features",details:["Developed an API to calculate food waste, recipes, and store users data.","Developed a React front-end so the user can interact with the application and add, eat, and view all their data. ","Implemented Redux for better state management and authentication "],links:[{Frontend:"https://github.com/mkay0961/Front-end-squeek"},{Backend:"https://github.com/mkay0961/squeek"}],demo:"https://www.youtube.com/embed/RuQ4b7IVHcM",pic:"https://images.pexels.com/photos/545014/pexels-photo-545014.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"},{name:"Hashing",details:["Created implementations of open and closed hashing","Tested, analyzed and compared load factors and search efficiencies for open and closed hashing"],links:[{Github:"https://github.com/mkay0961/Hashing"}],pic:"https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"},{name:"Alarm Clock",details:["Complete design and implementation of original version of a dual alarm AM/FM clock radio using Graphical User Interface "],links:[{Github:"https://github.com/mkay0961/Alarm-Clock"}],pic:"https://images.pexels.com/photos/1198264/pexels-photo-1198264.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"}],ae=function(e){return l.a.createElement("div",{id:"container"},l.a.createElement(g.a,null,l.a.createElement(E.a,{as:"h1"},"Projects")),l.a.createElement(V.a,{minWidth:V.a.onlyMobile.minWidth,maxWidth:V.a.onlyTablet.minWidth},l.a.createElement($.a.Group,{className:"block"},te.map(function(e,t){return l.a.createElement(ee,{pic:e.pic,demo:e.demo,links:e.links,description:e.description,details:e.details,key:t,name:e.name})}))),l.a.createElement(V.a,{minWidth:V.a.onlyTablet.minWidth+1},l.a.createElement($.a.Group,null,te.map(function(e,t){return l.a.createElement(Z,{pic:e.pic,demo:e.demo,key:t,links:e.links,description:e.description,details:e.details,name:e.name})}))))},ne=function(e){return l.a.createElement("div",{id:"backImage"},l.a.createElement(V.a,{minWidth:V.a.onlyMobile.minWidth,maxWidth:V.a.onlyTablet.minWidth},l.a.createElement(k.a,{size:"massive",color:"white"},l.a.createElement(E.a,{as:"h1"},"Matthew Kay")),l.a.createElement(g.a,{id:"clickMe"},"Click on a project to find out more!"),l.a.createElement(ae,null)),l.a.createElement(V.a,{minWidth:V.a.onlyTablet.minWidth+1,maxWidth:V.a.onlyLargeScreen.minWidth},l.a.createElement(k.a,{size:"massive"},l.a.createElement(E.a,{as:"h1"},"Matthew Kay")),l.a.createElement(ae,null)),l.a.createElement(V.a,{minWidth:V.a.onlyLargeScreen.minWidth},l.a.createElement(k.a,{size:"massive"},l.a.createElement(E.a,{as:"h1"},"Matthew Kay")),l.a.createElement(ae,null)))},le=a(68),oe=(a(429),function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(h,null),l.a.createElement(le.d,null,l.a.createElement(le.b,{exact:!0,path:"/AboutMe",component:F}),l.a.createElement(le.b,{exact:!0,path:"/ContactMe",component:X}),l.a.createElement(le.b,{exact:!0,path:"/Portfolio",component:ne}),l.a.createElement(le.b,{exact:!0,path:"*",render:function(){return l.a.createElement(le.a,{to:"/AboutMe"})}})))}}]),t}(n.Component)),ie=Object(le.f)(oe);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(p.a,null,l.a.createElement(ie,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[250,1,2]]]);
//# sourceMappingURL=main.5e3f0131.chunk.js.map