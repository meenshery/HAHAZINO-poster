document.addEventListener("DOMContentLoaded", function () {

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

// draggable

document.querySelectorAll(".draggable, .magnifying").forEach(draggableElement => {
  let isDragging = false;
  let offsetX = 0, offsetY = 0;

  draggableElement.addEventListener("mousedown", function (event) {
      isDragging = true;

      offsetX = event.clientX - draggableElement.getBoundingClientRect().left;
      offsetY = event.clientY - draggableElement.getBoundingClientRect().top;
      event.preventDefault();
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
  });

  function onMouseMove(event) {
      if (!isDragging) return;
      let x = event.clientX - offsetX;
      let y = event.clientY - offsetY;

      draggableElement.style.left = `${x}px`;
      draggableElement.style.top = `${y}px`;
  }

  function onMouseUp() {
      isDragging = false;
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
  }
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
        showSection("chips-drag")
    })  

    button2.addEventListener("click", function(){
        showSection("cards")
    })  

    button3.addEventListener("click", function(){
        showSection("anekdoti")
    })  

    button4.addEventListener("click", function(){
      showSection("slot-machine")
  })  

    donebtn.addEventListener("click", function(){
        showSection("main")
    })    

    donebtn2.addEventListener("click", function(){
      showSection("main")
  })    

    donebtn3.addEventListener("click", function(){
      showSection("main")
  }) 

    donebtn4.addEventListener("click", function(){
      showSection("main")
    }) 

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
    
    magnifier.addEventListener("mousedown", () => {
        isDragging = true;
        document.body.style.userSelect = "none"; // Отключаем выделение текста
    });
    
    document.addEventListener("mousemove", (event) => {
        if (!isDragging) return;
    
        const rect = container.getBoundingClientRect();
        let x = event.clientX - rect.left - magnifier.offsetWidth / 2;
        let y = event.clientY - rect.top - magnifier.offsetHeight / 2;
    
        // Ограничиваем перемещение в пределах контейнера
        x = Math.max(0, Math.min(x, rect.width - magnifier.offsetWidth));
        y = Math.max(0, Math.min(y, rect.height - magnifier.offsetHeight));
    
        // Устанавливаем положение лупы
        magnifier.style.left = `${x}px`;
        magnifier.style.top = `${y}px`;
    
        // Фон для эффекта увеличения
        let bgX = (-x * 1.5) + "px";  // Изменил коэффициент, чтобы не было сильного растяжения
        let bgY = (-y * 1.5) + "px";
    
        magnifierGlass.style.backgroundPosition = `${bgX} ${bgY}`;
    });
    
    document.addEventListener("mouseup", () => {
        isDragging = false;
        document.body.style.userSelect = "";
    });

    // slot-machine

    let clickCount = 0;
    const centerbox = document.querySelector('.machine');
    const screwbtn = document.querySelector('.screw');
    const screwbtn2 = document.querySelector('.done-4');

        screwbtn.addEventListener("click", function() {
            clickCount++;

            document.querySelectorAll(".machines").forEach(box => {

              if (clickCount == 1) {
                box.style.opacity = "0.57";
                centerbox.style.opacity = "0.85";
                document.querySelector(".machine-left").style.transform = "translateX(25%)"; 
                document.querySelector(".machine-right").style.transform = "translateX(-25%)";
                screwbtn.classList.add("rotated1");
            } 
            else if (clickCount == 2){
                box.style.opacity = "0.73";
                centerbox.style.opacity = "0.87"; 
                document.querySelector(".machine-left").style.transform = "translateX(50%)"; 
                document.querySelector(".machine-right").style.transform = "translateX(-50%)";
                screwbtn.classList.add("rotated2");
            }
            else if (clickCount == 3){
              box.style.opacity = "0"; 
              centerbox.style.opacity = "1";
              document.querySelector(".machine-left").style.transform = "translateX(75%)"; 
              document.querySelector(".machine-right").style.transform = "translateX(-75%)";
              screwbtn.classList.add("hidden");
              screwbtn2.classList.remove("hidden");
          }
            });
        });
    
    
    
 })
