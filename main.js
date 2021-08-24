let myform = document.getElementById('myform');
let targetimage = document.getElementById('targetimage');
let inputrange = document.querySelectorAll('.slider');
let btnDownload=document.getElementById('save');
myform.addEventListener('submit', function(e){
    let urlimage = document.getElementById('onlineurl');
    let urlimageval = urlimage.value;
    if(urlimageval.length){
        targetimage.setAttribute('src',urlimageval);
        urlimage.value = '';
    }
    
    e.preventDefault();
    console.log('done');
});

for(let i=0; i<=inputrange.length-1; i++ ){
    inputrange[i].addEventListener('input', editimage);
}

function editimage(){
    let gs = document.getElementById('gs');
    let blur = document.getElementById('blur');
    let huerotate = document.getElementById('hue-rotate');
    let sepia = document.getElementById('sepia');
    // let opacity = document.getElementById('opacity');

    let gsval = gs.value;
    let blurval = blur.value;
    let huerotateval = huerotate.value;
    let sepiaval = sepia.value;
    // let opacityval = opacity.value;

    targetimage.style.filter = 'grayscale('+gsval+'%) blur('+blurval+'px) hue-rotate('+huerotateval+'deg) sepia('+sepiaval+'%)';
};

let sliderform = document.getElementById('slider-form');
sliderform.addEventListener('reset', function(){
    sliderform.reset();
    setTimeout(function(){
        editimage();
    },0)
})

let img = document.querySelector('img');

btnDownload.addEventListener('click', () => {
    let imagePath = img.getAttribute('src');
    let fileName = getFileName(imagePath);
    saveAs(imagePath, fileName);
});
 
function getFileName(str) {
    return str.substring(str.lastIndexOf('/') + 1)
}
