// Получаем видимую часть слайда
let viewport = document.getElementById("viewport").offsetWidth;
let sliderWrapper = document.getElementById('viewport');
// Получаем кнопку вперёд
let btnNext = document.getElementById("next");
// Получаем кнопку назад
let btnPrev = document.getElementById("prev");
// Получаем элемент со всеми слайдами
let slider = document.querySelector(".slider");
// Получаем слайды
let slides = document.querySelectorAll(".slide");
// Получаем элементы показа слайда
let viewSliders = document.querySelectorAll(".viewSlide");
// Объявляем переменную номера слайда
let viewSlide = 0;

let slidesLength = slides.length;


let initSlideStyles = function() {
  // slider.style.width = `calc(100% * ${slidesLength})`;
  console.log(slidesLength);
}
initSlideStyles();


let sliderIndicators = function() {
  let indicatorsContainer = document.createElement('ol');
  indicatorsContainer.classList.add('viewSlider')
  for(let i = 0; i < slidesLength; i++) {
    let sliderIndicatorsItem = document.createElement('li');
    sliderIndicatorsItem.innerHTML = `<span>${i + 1}</span>`;
    if(i === 0) {
      sliderIndicatorsItem.classList.add('active');
    }
    indicatorsContainer.appendChild(sliderIndicatorsItem);
  }
  sliderWrapper.appendChild(indicatorsContainer); 
}

sliderIndicators();

// Назначаем цвет индикатор слайда зелёный
// viewSliders[0].style.backgroundColor = "green";

// Обработка клика на кнопку вперёд
btnNext.addEventListener("click", function () {
    // Делаем индикатор слайда красный
    // viewSliders[viewSlide].style.backgroundColor = "red";
    // Условие, если номер слайда меньше четырёх
    
    if (viewSlide < slidesLength - 1) { // Если верно то
        // Увеличиваем номер слайда на один
        viewSlide++;
    } else { // Иначе
        // Номер слайда равен нулю
        viewSlide = 0;
    }
    // Закрашиваем индикатор слайда в зелёный
    // viewSliders[viewSlide].style.backgroundColor = "green";
    // Меняем позицию всего слайда
    slider.style.left = -viewSlide * viewport + "px";
});
 
// Обработка клика на кнопку назад
btnPrev.addEventListener("click", function () {
    // Делаем индикатор слайда красный
    // viewSliders[viewSlide].style.backgroundColor = "red";
    // Условие, если номер слайда больше нуля
    if (viewSlide > 0) { // Если верно то
        // Уменьшаем номер слайда
        viewSlide--; 
    } else { // Иначе
        // Номер слайда равен четырём
        viewSlide = slidesLength - 1; 
    }
    // Закрашиваем индикатор слайда в зелёный
    // viewSliders[viewSlide].style.backgroundColor = "green";
    // Меняем позицию всего слайда
    slider.style.left = -viewSlide * viewport + "px";
});