// Code for the index of bobylito.me
// 
// http://bobylito.me 
// 
// Licenced under MIT licence : http://bobylito.mit-license.org
//
// Animate an iframe (so DHTML) using transitions and just underscore

// Let's see if we can use querySelectorAll
document.querySelectorAll && 
// if we can, let's play. Underscore is passed as a parameter.
(function(_){
// yes let's get crazy strict
  "use strict";
// All the toys links
  var toys = document.querySelectorAll("a.toy"),
// Let's create the iframe
      iframe = (function initFrame(){
              var d = document.createElement("iframe");
              d.id = "toyFrame";
              d.className = "toyOut";

// To be really cross browser on the transitionEnd event, we need to attach the same handler to multiple events.
              (function(d){ 
                var transitionEnd = [
                      'webkitTransitionEnd', 
                      'transitionend', 
                      'oTransitionEnd', 
                      'msTransitionEnd', 
                      'transitionEnd'];
// Here we add helper functions to the frame, so we don't have to go through all the events everytme we set a transitionEnd callback.
                d.removeTransitionEndEventListener = function(f){
                  _.each(transitionEnd, function(eventName){
                    d.removeEventListener(eventName, f);
                  }); 
                };
                d.addTransitionEndEventListener = function(f){
                  _.each(transitionEnd, function(eventName){
                    d.addEventListener(eventName, f);
                  }); 
                };
              })(d);
              
// Hide the frame, and takes a callback to permit to doing something else afterward
              d.hide = function hide(callback){
                var f = function(e){
                  d.removeTransitionEndEventListener(f);
                  d.src="about:blank";
                  if(callback){
// Let the browser breath for a sec...
                    setTimeout(callback, 0);
                    return;
                  }
                };
                d.addTransitionEndEventListener(f);
                d.className = "toyOut";
                _(toys).each(function(e){e.style.backgroundPosition = ""; e.style.color=""});
              };

              d.showLink = function sl(target, url, height, width){
// If the link clicked is the same as the one currently shown hide the frame
                if(d.src===url){
                  d.hide();
                  return;
                }
// if the frame is out, hide it and then open the newly clicked link
                else if(d.className==="toyIn"){
                  d.hide(function(){
                    d.showLink(target, url, height, width);
                  });
                  return;
                }
                d.src=url;
                d.height= height;
                d.width= width;
                
                setTimeout(function(){
                  d.className="toyIn";
// Style attribute has a higher priority in css so it overrides the css class properties
                  target.style.backgroundPosition = "-200px";
                  target.style.color = "#FFF";
                }, 0);
                
              }

              return d;
          })();        
          
// Attaching the frame node to the DOM
  document.body.appendChild(iframe);

// Event handler for the toy links
  function clickListener(evt){
    var e = evt.target,
        uri = e.href,
        h = e.dataset.height || "300px",
        w = e.dataset.width || "300px";
// We don't want clicking on the link to open the link...
    evt.preventDefault();
    iframe.showLink(e, e.href, h, w);   
  }

// Attach the handler to all toys links
  _(toys).each(function(e){
    e.addEventListener("click", clickListener);
  });
})(_);
