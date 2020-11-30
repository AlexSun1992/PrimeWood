
(function() {

    let btn = document.querySelector('.header__button');
    let navigation = document.querySelector('.navigation')
    let first = document.querySelector('.header__button-element--first');
    let second = document.querySelector('.header__button-element--second');
    let third = document.querySelector('.header__button-element--third');
    let inner = document.querySelector('.inner');

    btn.addEventListener('click', function (e) {

        if(!navigation.classList.contains('appear') && !navigation.classList.contains('disappear')){

            navigation.classList.add('appear')

        } else if(navigation.classList.contains('appear') && !navigation.classList.contains('disappear')){

            navigation.classList.add('disappear')

        } else if(navigation.classList.contains('appear') && navigation.classList.contains('disappear')){

            navigation.classList.remove('disappear')

        }
        if(!first.classList.contains('first-rotate')){
        first.classList.add('first-rotate');
        }

        else{
        first.classList.remove('first-rotate');
         }

         if(!second.classList.contains('second-rotate')){
             second.classList.add('second-rotate');
        }
         else{
            second.classList.remove('second-rotate');
        }
        if(!third.classList.contains('third-rotate')){
            third.classList.add('third-rotate');
        }
        else{
            third.classList.remove('third-rotate');
        }
        if(inner.classList.contains('goods-show')){
            inner.classList.add('goods-hide')
        }
    });
}())