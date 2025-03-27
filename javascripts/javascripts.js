document.addEventListener("DOMContentLoaded", function () {

  // preloader

  const progressbar = document.querySelector(".progress-bar");
  const progress = document.querySelector(".progress");
  const ptxt = document.querySelector(".preloader-txt");
  const enter = document.querySelector(".enter-btn");
  const preloader = document.querySelector(".preloader");
  
  function adaptTextPosition() {
    const screenWidth = window.innerWidth;
  
    if (screenWidth >= 1920) {
      ptxt.style.bottom = "21%";
      ptxt.style.left = "42%";
    } else if (screenWidth >= 1680) {
      ptxt.style.bottom = "20%";
      ptxt.style.left = "41%";
    } else if (screenWidth >= 1536) {
      ptxt.style.bottom = "17%";
      ptxt.style.left = "39%";
    } else if (screenWidth >= 1440) {
      ptxt.style.bottom = "19%";
      ptxt.style.left = "39%";
    } else if (screenWidth >= 1366) {
      ptxt.style.bottom = "18%";
      ptxt.style.left = "39%";
    } else if (screenWidth >= 1280) {
      ptxt.style.bottom = "19%";
      ptxt.style.left = "38%";
    } else if (screenWidth >= 1024) {
      ptxt.style.bottom = "19%";
      ptxt.style.left = "38%";
    } else if (screenWidth >= 414) {
      ptxt.style.bottom = "22%";
      ptxt.style.left = "26%";
    } else if (screenWidth >= 360) {
      ptxt.style.bottom = "25%";
      ptxt.style.left = "27%";
    } else {
      ptxt.style.bottom = "13%";
      ptxt.style.left = "30%";
    }
  }
  
  let percent = 0;
  const interval = setInterval(() => {
    percent += 1;
    progress.style.width = percent + "%";
  
    if (percent >= 101) {
      clearInterval(interval);
  
      adaptTextPosition();
  
      ptxt.textContent = "загрузка завершена.";
      enter.style.display = "inline-block";
      progressbar.style.opacity = "0";
    }
  }, 30);
  
  enter.addEventListener("click", () => {
    preloader.style.opacity = "0";
    preloader.style.visibility = "hidden";
    setTimeout(() => {
      preloader.style.display = "none";
    }, 1000);
  });
  

  // parallax
    const wrapper = document.querySelector('.backgr');
    const layers = document.querySelectorAll('.chip');
    const handleParallax = (evt) => {
      const parallaxLeftOffset = wrapper.getBoundingClientRect().left;
      const parallaxTopOffset = wrapper.getBoundingClientRect().top;
      const coordX = evt.clientX - parallaxLeftOffset - 0.5 * wrapper.offsetWidth;
      const coordY = evt.clientY - parallaxTopOffset - 0.5 *  wrapper.offsetHeight;
      layers.forEach((layer)=>{
        const layerSpeed = layer.dataset.speed;
        const x = - (coordX * layerSpeed).toFixed(2);
        const y = - (coordY * layerSpeed).toFixed(2);
        layer.setAttribute('style', `transform: translate(${x}px, ${y}px);`)
      });
    };
    const reset = () => {
      layers.forEach((layer)=>{
          layer.removeAttribute('style');
      });
    }
    wrapper.addEventListener('mousemove', handleParallax);
    wrapper.addEventListener('mouseout', reset);

    // print-btn

    const pgif = document.querySelector('.print-gif')
    const apprvd = document.querySelector('.print-approved')
    const dend = document.querySelector('.print-denied')
    const printbtn = document.querySelector(".print-btn")

    let success = 0;
    
    printbtn.addEventListener("click", function(){
    if (success === 4){
      printbtn.textContent = '';
      pgif.classList.remove("sectionnone")
      setTimeout(() => {
        pgif.classList.add("sectionnone");}, 1150);
      setTimeout(() => {
        apprvd.classList.remove("sectionnone");}, 1150);
      }
    else{
      printbtn.textContent = '';
      pgif.classList.remove("sectionnone")
      setTimeout(() => {
        pgif.classList.add("sectionnone");}, 1200);
      setTimeout(() => {
        dend.classList.remove("sectionnone");}, 1150);
      }
    })

// draggable

document.querySelectorAll(".draggable, .magnifying").forEach(draggableElement => {
  let isDragging = false;
  let offsetX = 0, offsetY = 0;

  function startDrag(event) {
    isDragging = true;
    let clientX, clientY;

    if (event.type.startsWith("touch")) {
      clientX = event.touches[0].clientX;
      clientY = event.touches[0].clientY;
    } else {
      clientX = event.clientX;
      clientY = event.clientY;
    }

    offsetX = clientX - draggableElement.getBoundingClientRect().left;
    offsetY = clientY - draggableElement.getBoundingClientRect().top;

    event.preventDefault();
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
    document.addEventListener("touchmove", onMouseMove);
    document.addEventListener("touchend", onMouseUp);
  }

  function onMouseMove(event) {
    if (!isDragging) {
      return;
    }

    let clientX, clientY;

    if (event.type.startsWith("touch")) {
      clientX = event.touches[0].clientX;
      clientY = event.touches[0].clientY;
    } else {
      clientX = event.clientX;
      clientY = event.clientY;
    }

    let x = clientX - offsetX;
    let y = clientY - offsetY;

    draggableElement.style.left = `${x}px`;
    draggableElement.style.top = `${y}px`;
  }

  function onMouseUp() {
    isDragging = false;
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseup", onMouseUp);
    document.removeEventListener("touchmove", onMouseMove);
    document.removeEventListener("touchend", onMouseUp);
  }

  draggableElement.addEventListener("mousedown", startDrag);
  draggableElement.addEventListener("touchstart", startDrag);
});


  // draggable aneks

  document.querySelectorAll(".aneks").forEach(draggableElement2 => {
    let isDragging = false;
    let offsetX = 0, offsetY = 0;

    function startDrag(event) {
        isDragging = true;
        let clientX, clientY;

        if (event.type.startsWith("touch")) {
            clientX = event.touches[0].clientX;
            clientY = event.touches[0].clientY;
        } else {
            clientX = event.clientX;
            clientY = event.clientY;
        }

        offsetX = clientX - draggableElement2.getBoundingClientRect().left;
        offsetY = clientY - draggableElement2.getBoundingClientRect().top;

        event.preventDefault();
        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseup", onMouseUp);
        document.addEventListener("touchmove", onMouseMove);
        document.addEventListener("touchend", onMouseUp);
    }

    function onMouseMove(event) {
        if (!isDragging) {
            return;
        }

        let clientX, clientY;

        if (event.type.startsWith("touch")) {
            clientX = event.touches[0].clientX;
            clientY = event.touches[0].clientY;
        } else {
            clientX = event.clientX;
            clientY = event.clientY;
        }

        let x = clientX - offsetX;
        let y = clientY - offsetY;

        draggableElement2.style.left = `${x}px`;
        draggableElement2.style.top = `${y}px`;
    }

    function onMouseUp() {
        isDragging = false;
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseup", onMouseUp);
        document.removeEventListener("touchmove", onMouseMove);
        document.removeEventListener("touchend", onMouseUp);

        groupNearbyElementsHorizontal('.anekdoti > .anek-pair-1', 70);
        groupNearbyElementsVertical('.anekdoti > .anek-pair-2', 110);
        groupNearbyElementsHorizontal('.anekdoti > .anek-pair-3', 345);
        groupNearbyElementsVertical('.anekdoti > .anek-pair-4', 55);
    }

    draggableElement2.addEventListener("mousedown", startDrag);
    draggableElement2.addEventListener("touchstart", startDrag);
});

  // hide-scale-show

  const hideButton = document.getElementById('hidebutton');
  const showButton = document.getElementById('showbutton');
  const elements = document.querySelectorAll('.tohide');
  const ToScale = document.querySelectorAll('.toscale');

  hideButton.addEventListener('click', () => {

  elements.forEach(element => {
    element.classList.add('hiddeninterface');
  });
  
  ToScale.forEach(element => {
    element.classList.add('scaled');
    });
  
    hideButton.style.display = 'none';
    showButton.classList.add('visible');

  });

  showButton.addEventListener('click', () => {
  elements.forEach(element => {
    element.classList.remove('hiddeninterface');
  });

  ToScale.forEach(element => {
    element.classList.remove('scaled');
  });

  hideButton.style.display = 'block'; 
  showButton.classList.remove('visible'); 
  });

  // change sections 

  const button1 = document.querySelector(".slot1")
  const button2 = document.querySelector(".slot2")
  const button3 = document.querySelector(".slot3")
  const button4 = document.querySelector(".slot4")
  const donebtn = document.querySelector(".done-1")
  const donebtn2 = document.querySelector(".done-2")
  const donebtn3 = document.querySelector(".done-3")
  const donebtn4 = document.querySelector(".done-4")
  let sections = document.querySelectorAll(".main, .chips-drag, .cards, .anekdoti, .slot-machine")

function showSection (main) {
    sections.forEach(function(section) {
        if (section.classList.contains(main)){
            section.classList.add("sectionblock")
            section.classList.remove("sectionnone")
        }
        else {
            section.classList.add("sectionnone")
            section.classList.remove("sectionblock")
        }
    })
    }  

    button1.addEventListener("click", function(){
        showSection("chips-drag");
        button1.classList.add('end');
    }, { once: true })  

    button2.addEventListener("click", function(){
        showSection("cards");
        button2.classList.add('end');
    }, { once: true })  

    button3.addEventListener("click", function(){
        showSection("anekdoti");
        button3.classList.add('end');
    }, { once: true })  

    button4.addEventListener("click", function(){
      showSection("slot-machine");
      button4.classList.add('end');
  }, { once: true })  

    donebtn.addEventListener("click", function(){
      endSection(donebtn);
    })    

    donebtn2.addEventListener("click", function(){
      endSection(donebtn2);
  })    

    donebtn3.addEventListener("click", function(){
      endSection(donebtn3);
  }) 

    donebtn4.addEventListener("click", function(){
      endSection(donebtn4);
    }) 

    function endSection(button){
      success+=1;
      showSection("main");
    }

    // modal

    const modal = document.getElementById('modal-window');
    const openBtn = document.getElementById('FAQ'); 
    const closeBtn = document.getElementById('FAQ-2'); 
    
    openBtn.addEventListener('click', (e) => {
      modal.classList.remove('sectionnone');
      modal.classList.add('sectionblock');
      openBtn.classList.add('sectionnone');
      closeBtn.classList.remove('sectionnone');
    });
    
    closeBtn.addEventListener('click', (e) => {
      modal.classList.remove('sectionblock');
      modal.classList.add('sectionnone');
      openBtn.classList.remove('sectionnone');
      openBtn.classList.add('sectionblock');
      closeBtn.classList.remove('sectionblock');
    });  

    // magnifier

    const magnifier = document.querySelector(".magnifying");
    const magnifierGlass = document.querySelector(".magnifier");
    const container = document.querySelector(".cards");
    
    let isDragging = false;
    
    function startDrag(event) {
        isDragging = true;
        document.body.style.userSelect = "none";
    }
    
    function moveMagnifier(event) {
        if (!isDragging) return;
    
        const clientX = event.type.includes("touch") ? event.touches[0].clientX : event.clientX;
        const clientY = event.type.includes("touch") ? event.touches[0].clientY : event.clientY;
    
        const rect = container.getBoundingClientRect();
        let x = clientX - rect.left - magnifier.offsetWidth / 2;
        let y = clientY - rect.top - magnifier.offsetHeight / 2;
    
        x = Math.max(0, Math.min(x, rect.width - magnifier.offsetWidth));
        y = Math.max(0, Math.min(y, rect.height - magnifier.offsetHeight));
    
        magnifier.style.left = `${x}px`;
        magnifier.style.top = `${y}px`;
    
        let bgX = -x * 2 + "px";
        let bgY = -y * 2 + "px";
    
        magnifierGlass.style.backgroundPosition = `${bgX} ${bgY}`;
    }
    
    function stopDrag() {
        isDragging = false;
        document.body.style.userSelect = "";
    }
    
    magnifier.addEventListener("mousedown", startDrag);
    document.addEventListener("mousemove", moveMagnifier);
    document.addEventListener("mouseup", stopDrag);
    magnifier.addEventListener("touchstart", startDrag);
    document.addEventListener("touchmove", moveMagnifier);
    document.addEventListener("touchend", stopDrag);


    // slot-machine

    let clickCount = 0;
    const centerbox = document.querySelector('.machine');
    const screwbtn = document.querySelector('.screw');
    const screwbtn2 = document.querySelector('.done-4');

        screwbtn.addEventListener("click", function() {
            clickCount++;

            document.querySelectorAll(".machines").forEach(box => {

              if (window.innerWidth <= 440) {

                if (clickCount == 1) {
                  box.style.opacity = "0.57";
                  centerbox.style.opacity = "0.85";
                  document.querySelector(".machine-left").style.transform = "translateY(25%)"; 
                  document.querySelector(".machine-right").style.transform = "translateY(-25%)";
                  screwbtn.classList.add("rotated1");
                } 
                else if (clickCount == 2) {
                  box.style.opacity = "0.73";
                  centerbox.style.opacity = "0.87"; 
                  document.querySelector(".machine-left").style.transform = "translateY(50%)"; 
                  document.querySelector(".machine-right").style.transform = "translateY(-50%)";
                  screwbtn.classList.add("rotated2");
                } 
                else if (clickCount == 3) {
                  box.style.opacity = "0"; 
                  centerbox.style.opacity = "1";
                  document.querySelector(".machine-left").style.transform = "translateY(75%)"; 
                  document.querySelector(".machine-right").style.transform = "translateY(-75%)";
                  screwbtn.classList.add("hidden");
                  screwbtn2.classList.remove("hidden");
                }
              } else {
                if (clickCount == 1) {
                  box.style.opacity = "0.57";
                  centerbox.style.opacity = "0.85";
                  document.querySelector(".machine-left").style.transform = "translateX(25%)"; 
                  document.querySelector(".machine-right").style.transform = "translateX(-25%)";
                  screwbtn.classList.add("rotated1");
                } else if (clickCount == 2) {
                  box.style.opacity = "0.73";
                  centerbox.style.opacity = "0.87"; 
                  document.querySelector(".machine-left").style.transform = "translateX(50%)"; 
                  document.querySelector(".machine-right").style.transform = "translateX(-50%)";
                  screwbtn.classList.add("rotated2");
                } else if (clickCount == 3) {
                  box.style.opacity = "0"; 
                  centerbox.style.opacity = "1";
                  document.querySelector(".machine-left").style.transform = "translateX(75%)"; 
                  document.querySelector(".machine-right").style.transform = "translateX(-75%)";
                  screwbtn.classList.add("hidden");
                  screwbtn2.classList.remove("hidden");
                }
              }
            });
        });

        // anekdoti склеивание

    function groupNearbyElementsHorizontal(selector, aneksOffset) {
      var elements = document.querySelectorAll(selector);
      let grouped = [];
  
      elements.forEach((el1) => {
          if (grouped.includes(el1)) return;
  
          var rect1 = el1.getBoundingClientRect();
          var left1 = rect1.left;
          var right1 = rect1.right;
          var top1 = rect1.top;
          var width1 = rect1.width;
          var height1 = rect1.height;
  
          elements.forEach((el2) => {
              if (el1 === el2 || grouped.includes(el2)) return;
  
              var rect2 = el2.getBoundingClientRect();
              var left2 = rect2.left;
              var right2 = rect2.right;
              var top2 = rect2.top;
              var width2 = rect2.width;
              var height2 = rect2.height;
  
              var closeHorizontally = Math.abs(right1 - left2) <= aneksOffset;
              var closeVertically = Math.abs(top1 - top2) <= aneksOffset;
  
              if (closeHorizontally && closeVertically) {
                  var container = document.createElement("div");
                  container.classList.add("group-container");
                  container.style.position = "absolute";
                  container.style.left = Math.min(left1, left2) + "px";
                  container.style.top = Math.min(top1, top2) + "px";
                  container.style.width = (right1 - left1) + width2 + "px";
                  container.style.height = Math.max(height1, height2) + "px";
                  container.classList.add("aneks");
                  container.style.display = "flex";
                  el1.style.marginRight = "-" + aneksOffset + "px";
                  el1.classList.remove("aneks");
                  el2.classList.remove("aneks");
  
                  container.addEventListener("mousedown", function (event) {
                      isDragging = true;
  
                      offsetX = event.clientX - container.getBoundingClientRect().left;
                      offsetY = event.clientY - container.getBoundingClientRect().top;
                      event.preventDefault();
                      document.addEventListener("mousemove", onMouseMove);
                      document.addEventListener("mouseup", onMouseUp);
                  });
  
                  container.addEventListener("touchstart", function (event) {
                      isDragging = true;
                      let touch = event.touches[0];
                      offsetX = touch.clientX - container.getBoundingClientRect().left;
                      offsetY = touch.clientY - container.getBoundingClientRect().top;
                      event.preventDefault();
                      document.addEventListener("touchmove", onTouchMove);
                      document.addEventListener("touchend", onTouchEnd);
                  });
  
                  function onMouseMove(event) {
                      if (!isDragging) {
                          return;
                      }
  
                      let x = event.clientX - offsetX;
                      let y = event.clientY - offsetY;
  
                      container.style.left = `${x}px`;
                      container.style.top = `${y}px`;
                  }
  
                  function onMouseUp() {
                      isDragging = false;
                      document.removeEventListener("mousemove", onMouseMove);
                      document.removeEventListener("mouseup", onMouseUp);
                  }
  
                  function onTouchMove(event) {
                      if (!isDragging) return;
                      let touch = event.touches[0];
                      let x = touch.clientX - offsetX;
                      let y = touch.clientY - offsetY;
                      container.style.left = `${x}px`;
                      container.style.top = `${y}px`;
                  }
  
                  function onTouchEnd() {
                      isDragging = false;
                      document.removeEventListener("touchmove", onTouchMove);
                      document.removeEventListener("touchend", onTouchEnd);
                  }
  
                  el1.parentNode.appendChild(container);
                  container.appendChild(el1);
                  container.appendChild(el2);
                  grouped.push(el1, el2);
                  }
              });
          });
      }
      
      // anekdoti по вертикали
      
  function groupNearbyElementsVertical(selector, aneksOffset) {
    var elements = document.querySelectorAll(selector);
    let grouped = [];

    elements.forEach((el1) => {
        if (grouped.includes(el1)) return;

        var rect1 = el1.getBoundingClientRect();
        var left1 = rect1.left;
        var right1 = rect1.right;
        var top1 = rect1.top;
        var bottom1 = rect1.bottom;
        var width1 = rect1.width;
        var height1 = rect1.height;

        elements.forEach((el2) => {
            if (el1 === el2 || grouped.includes(el2)) return;

            var rect2 = el2.getBoundingClientRect();
            var left2 = rect2.left;
            var right2 = rect2.right;
            var top2 = rect2.top;
            var bottom2 = rect2.bottom;
            var width2 = rect2.width;
            var height2 = rect2.height;

            var closeVertically = Math.abs(bottom1 - top2) <= aneksOffset;
            var closeHorizontally = Math.abs(left1 - left2) <= aneksOffset;

            if (closeVertically && closeHorizontally) {
                var container = document.createElement("div");
                container.classList.add("group-container");
                container.style.position = "absolute";
                container.style.left = Math.min(left1, left2) + "px";
                container.style.top = Math.min(top1, top2) + "px";
                container.style.width = Math.max(width1, width2) + "px";
                container.style.height = (bottom1 - top1) + height2 + "px";
                container.classList.add("aneks");
                container.style.display = "flex";
                container.style.flexDirection = "column";
                el1.style.marginBottom = "-" + aneksOffset + "px";
                el1.classList.remove("aneks");
                el2.classList.remove("aneks");

                container.addEventListener("mousedown", function (event) {
                    isDragging = true;
                    offsetX = event.clientX - container.getBoundingClientRect().left;
                    offsetY = event.clientY - container.getBoundingClientRect().top;
                    event.preventDefault();
                    document.addEventListener("mousemove", onMouseMove);
                    document.addEventListener("mouseup", onMouseUp);
                });

                container.addEventListener("touchstart", function (event) {
                    isDragging = true;
                    let touch = event.touches[0];
                    offsetX = touch.clientX - container.getBoundingClientRect().left;
                    offsetY = touch.clientY - container.getBoundingClientRect().top;
                    event.preventDefault();
                    document.addEventListener("touchmove", onTouchMove);
                    document.addEventListener("touchend", onTouchEnd);
                });

                function onMouseMove(event) {
                    if (!isDragging) return;

                    let x = event.clientX - offsetX;
                    let y = event.clientY - offsetY;

                    container.style.left = `${x}px`;
                    container.style.top = `${y}px`;
                }

                function onMouseUp() {
                    isDragging = false;
                    document.removeEventListener("mousemove", onMouseMove);
                    document.removeEventListener("mouseup", onMouseUp);
                }

                function onTouchMove(event) {
                    if (!isDragging) return;
                    let touch = event.touches[0];
                    let x = touch.clientX - offsetX;
                    let y = touch.clientY - offsetY;
                    container.style.left = `${x}px`;
                    container.style.top = `${y}px`;
                }

                function onTouchEnd() {
                    isDragging = false;
                    document.removeEventListener("touchmove", onTouchMove);
                    document.removeEventListener("touchend", onTouchEnd);
                }

                el1.parentNode.appendChild(container);
                container.appendChild(el1);
                container.appendChild(el2);
                grouped.push(el1, el2);
              }
          });
      });
  }
      
        
        
        

 })

 
