(function(){

    let inner = document.querySelector('.inner');

    let innerContainer = document.querySelector('.inner__container');

    let ref = document.querySelector('.navigation-menu__item-trigger');

    ref.addEventListener('click',function(){

        if(!inner.classList.contains('goods-show') && !inner.classList.contains('goods-hide')){

            inner.classList.add('goods-show')

        }else if(inner.classList.contains('goods-show') && !inner.classList.contains('goods-hide')){

            inner.classList.add('goods-hide')

        }else if (inner.classList.contains('goods-show') && inner.classList.contains('goods-hide')) {

            inner.classList.remove('goods-hide')
        }


    })

    innerContainer.addEventListener('mousedown',function(){

       if(inner.classList.contains('goods-show')){

          inner.classList.add('goods-hide')
       }

    });

}())