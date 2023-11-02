    var product_1 = document.getElementById("product_1")
    var product_2 = document.getElementById("product_2")
    var product_3 = document.getElementById("product_3")
    var product_4 = document.getElementById("product_4")
    var product_5 = document.getElementById("product_5")
    var product_6 = document.getElementById("product_6")
    var product_7 = document.getElementById("product_7")
    var product_8 = document.getElementById("product_8")
    var product_9 = document.getElementById("product_9")
    var product_10 = document.getElementById("product_10")
    var product_11 = document.getElementById("product_11")
    var product_12 = document.getElementById("product_12")
    var product_13 = document.getElementById("product_13")
    var product_14 = document.getElementById("product_14")
    var product_15 = document.getElementById("product_15")
    //checkbox
    var womenCheckbox = document.getElementById("women-checkbox")
    var menCheckbox = document.getElementById("men-checkbox")
       function man(){
        if(menCheckbox.checked){
            // 1,4,5,6,9,12,13,14
            //2,3,7,8,10,11,15
            product_2.style.display = "none"
            product_3.style.display = "none"
            product_7.style.display = "none"
            product_8.style.display = "none"
            product_10.style.display = "none"
            product_11.style.display = "none"
            product_15.style.display = "none"
            womenCheckbox.checked = false;
            input1.checked = false
            input2.checked = false
            input3.checked = false
            pink.checked = false
            blue.checked = false
            brown.checked = false
            black.checked = false
            women()
        }else{
            product_2.style.display = "block"
            product_3.style.display = "block"
            product_7.style.display = "block"
            product_8.style.display = "block"
            product_10.style.display = "block"
            product_11.style.display = "block"
            product_15.style.display = "block"
            
        }
       }

    function women(){
        if(womenCheckbox.checked){
            // 1,4,5,6,9,12,13,14
            //2,3,7,8,10,11,15
            product_1.style.display = "none"
            product_4.style.display = "none"
            product_5.style.display = "none"
            product_6.style.display = "none"
            product_9.style.display = "none"
            product_12.style.display = "none"
            product_13.style.display = "none"
            product_14.style.display = "none"
            menCheckbox.checked = false;
            input1.checked = false
            input2.checked = false
            input3.checked = false
            blue.checked = false
            brown.checked = false
            black.checked = false
            man()
        }else{
            product_1.style.display = "block"
            product_4.style.display = "block"
            product_5.style.display = "block"
            product_6.style.display = "block"
            product_9.style.display = "block"
            product_12.style.display = "block"
            product_13.style.display = "block"
            product_14.style.display = "block"
        }
    }


    var  product = document.querySelectorAll(".product")
       var  productPrice = document.querySelectorAll(".product span")
       var input1 = document.querySelector(".max_1M")
       var input2 = document.querySelector(".min_1M")
       var input3 = document.querySelector(".min_2M")
    function max_1M(){
        for(var i = 0; i < productPrice.length; i++){
            var priceContent = productPrice[i].innerHTML
            number = parseFloat(priceContent)
            if(number < 10){
                product[i].style.display = "none"
            }else{
                product[i].style.display = "block"
            }
        }
        input2.checked = false
        input3.checked = false
        womenCheckbox.checked = false;
        menCheckbox.checked = false;
       
    }
    function min_1M(){
         for(var i = 0; i < productPrice.length; i++){
             var priceContent = productPrice[i].innerHTML
             number = parseFloat(priceContent)
             if(number >= 10){
                 product[i].style.display = "none"
             }else{
                product[i].style.display = "block"
             }
         }
         input1.checked = false
         input3.checked = false
         womenCheckbox.checked = false;
         menCheckbox.checked = false;
         
     }
     function min_2M(){
        for(var i = 0; i < productPrice.length; i++){
            var priceContent = productPrice[i].innerHTML
            number = parseFloat(priceContent)
            if(number > 20 && number < 50){
                product[i].style.display = "none"
            }else{
               product[i].style.display = "block"
            }
        }
        input1.checked = false
        input2.checked = false
        womenCheckbox.checked = false;
        menCheckbox.checked = false;
        
    }

/*  // Ẩn danh sách khi trang web được tải
    const shopPriceToggle = document.getElementById('shopPriceToggle');
    const contentLeftItems = document.querySelector('.content-left-items');
    contentLeftItems.style.display = 'none';

    // Click cho "Shop Price"
    shopPriceToggle.addEventListener('click', function() {
        if (contentLeftItems.style.display === 'none') {
            contentLeftItems.style.display = 'block';
        } else {
            contentLeftItems.style.display = 'none';
        }
    });
*/
    const gender = document.getElementById('gender');
    const price = document.getElementById('price');
    const colour = document.getElementById('colour');
    const fit = document.getElementById('fit');
    const brand = document.getElementById('brand');
    const sport = document.getElementById('sport');
    const studio = document.getElementById('studio');
    const icon = document.getElementById('icon');
    const technology = document.getElementById('technology');
    const sleeve = document.getElementById('sleeve');
    const neck = document.getElementById('neck');
    const back = document.getElementById('back');
    const length = document.getElementById('length');
    const rise = document.getElementById('rise');
    const lined = document.getElementById('lined');
    const feature = document.getElementById('feature');
    const best = document.getElementById('best');
    const benefit = document.getElementById('benefit');
    const material = document.getElementById('material');
    
    
    const contentLeftItem1 = document.querySelector('.content-left-item1');
    const contentLeftItem2 = document.querySelector('.content-left-item2');
    const contentLeftItem3 = document.querySelector('.content-left-item3');
    const contentLeftItem4 = document.querySelector('.content-left-item4');
    const contentLeftItem5 = document.querySelector('.content-left-item5');
    const contentLeftItem6 = document.querySelector('.content-left-item6');
    const contentLeftItem7 = document.querySelector('.content-left-item7');
    const contentLeftItem8 = document.querySelector('.content-left-item8');
    const contentLeftItem9 = document.querySelector('.content-left-item9');
    const contentLeftItem10 = document.querySelector('.content-left-item10');
    const contentLeftItem11 = document.querySelector('.content-left-item11');
    const contentLeftItem12 = document.querySelector('.content-left-item12');
    const contentLeftItem13 = document.querySelector('.content-left-item13');
    const contentLeftItem14 = document.querySelector('.content-left-item14');
    const contentLeftItem15 = document.querySelector('.content-left-item15');
    const contentLeftItem16 = document.querySelector('.content-left-item16');
    const contentLeftItem17 = document.querySelector('.content-left-item17');
    const contentLeftItem18 = document.querySelector('.content-left-item18');
    const contentLeftItem19 = document.querySelector('.content-left-item19');

    gender.addEventListener('click', function() {
        if (contentLeftItem1.style.display === 'none') {
            contentLeftItem1.style.display = 'block';
        } else {
            contentLeftItem1.style.display = 'none';
        }
    });
    price.addEventListener('click', function() {
        if (contentLeftItem2.style.display === 'none') {
            contentLeftItem2.style.display = 'block';
        } else {
            contentLeftItem2.style.display = 'none';
        }
    });
    colour.addEventListener('click', function() {
        if (contentLeftItem3.style.display === 'none') {
            contentLeftItem3.style.display = 'block';
        } else {
            contentLeftItem3.style.display = 'none';
        }
    });
    fit.addEventListener('click', function() {
        if (contentLeftItem4.style.display === 'none') {
            contentLeftItem4.style.display = 'block';
        } else {
            contentLeftItem4.style.display = 'none';
        }
    });
    brand.addEventListener('click', function() {
        if (contentLeftItem5.style.display === 'none') {
            contentLeftItem5.style.display = 'block';
        } else {
            contentLeftItem5.style.display = 'none';
        }
    });
    sport.addEventListener('click', function() {
        if (contentLeftItem6.style.display === 'none') {
            contentLeftItem6.style.display = 'block';
        } else {
            contentLeftItem6.style.display = 'none';
        }
    });
    studio.addEventListener('click', function() {
        if (contentLeftItem7.style.display === 'none') {
            contentLeftItem7.style.display = 'block';
        } else {
            contentLeftItem7.style.display = 'none';
        }
    });
    icon.addEventListener('click', function() {
        if (contentLeftItem8.style.display === 'none') {
            contentLeftItem8.style.display = 'block';
        } else {
            contentLeftItem8.style.display = 'none';
        }
    });
    technology.addEventListener('click', function() {
        if (contentLeftItem9.style.display === 'none') {
            contentLeftItem9.style.display = 'block';
        } else {
            contentLeftItem9.style.display = 'none';
        }
    });
    sleeve.addEventListener('click', function() {
        if (contentLeftItem10.style.display === 'none') {
            contentLeftItem10.style.display = 'block';
        } else {
            contentLeftItem10.style.display = 'none';
        }
    });
    neck.addEventListener('click', function() {
        if (contentLeftItem11.style.display === 'none') {
            contentLeftItem11.style.display = 'block';
        } else {
            contentLeftItem11.style.display = 'none';
        }
    });
    back.addEventListener('click', function() {
        if (contentLeftItem12.style.display === 'none') {
            contentLeftItem12.style.display = 'block';
        } else {
            contentLeftItem12.style.display = 'none';
        }
    });
    length.addEventListener('click', function() {
        if (contentLeftItem13.style.display === 'none') {
            contentLeftItem13.style.display = 'block';
        } else {
            contentLeftItem13.style.display = 'none';
        }
    });
    rise.addEventListener('click', function() {
        if (contentLeftItem14.style.display === 'none') {
            contentLeftItem14.style.display = 'block';
        } else {
            contentLeftItem14.style.display = 'none';
        }
    });
    lined.addEventListener('click', function() {
        if (contentLeftItem15.style.display === 'none') {
            contentLeftItem15.style.display = 'block';
        } else {
            contentLeftItem15.style.display = 'none';
        }
    });
    feature.addEventListener('click', function() {
        if (contentLeftItem16.style.display === 'none') {
            contentLeftItem16.style.display = 'block';
        } else {
            contentLeftItem16.style.display = 'none';
        }
    });
    best.addEventListener('click', function() {
        if (contentLeftItem17.style.display === 'none') {
            contentLeftItem17.style.display = 'block';
        } else {
            contentLeftItem17.style.display = 'none';
        }
    });
    benefit.addEventListener('click', function() {
        if (contentLeftItem18.style.display === 'none') {
            contentLeftItem18.style.display = 'block';
        } else {
            contentLeftItem18.style.display = 'none';
        }
    });
    material.addEventListener('click', function() {
        if (contentLeftItem19.style.display === 'none') {
            contentLeftItem19.style.display = 'block';
        } else {
            contentLeftItem19.style.display = 'none';
        }
    });

var black =  document.getElementById("black")
   black.addEventListener('click', function(){
        product_1.style.display = "none"
        product_8.style.display = "none"
        product_9.style.display = "none"
        product_10.style.display = "none"
        product_11.style.display = "none"
        product_12.style.display = "none"

        product_2.style.display = "block"
        product_3.style.display = "block"
        product_4.style.display = "block"
        product_5.style.display = "block"
        product_6.style.display = "block"
        product_7.style.display = "block"
        product_13.style.display = "block"
        product_14.style.display = "block"
        product_15.style.display = "block"

        pink.checked = false
        blue.checked = false
        brown.checked = false
        input1.checked = false
        input2.checked = false
        input3.checked = false
        womenCheckbox.checked = false;
        menCheckbox.checked = false;
    })
    var blue = document.getElementById("blue")
    blue.addEventListener('click', function(){
        product_1.style.display = "none"
        product_8.style.display = "none"
        product_9.style.display = "none"
        product_10.style.display = "none"
        product_11.style.display = "none"
        product_12.style.display = "none"

        product_2.style.display = "none"
        product_3.style.display = "none"
        product_4.style.display = "none"
        product_5.style.display = "none"
        product_6.style.display = "none"
        product_7.style.display = "none"
        product_13.style.display = "none"
        product_14.style.display = "none"
        product_15.style.display = "none"
        
        black.checked = false
        pink.checked = false
        brown.checked = false
        input1.checked = false
        input2.checked = false
        input3.checked = false
        womenCheckbox.checked = false;
        menCheckbox.checked = false;
    })
    var pink = document.getElementById("pink")
    pink.addEventListener('click', function(){
        product_8.style.display = "block"
        product_1.style.display = "none"
        product_9.style.display = "none"
        product_10.style.display = "none"
        product_11.style.display = "none"
        product_12.style.display = "none"

        product_2.style.display = "none"
        product_3.style.display = "none"
        product_4.style.display = "none"
        product_5.style.display = "none"
        product_6.style.display = "none"
        product_7.style.display = "none"
        product_13.style.display = "none"
        product_14.style.display = "none"
        product_15.style.display = "none"

        black.checked = false
        blue.checked = false
        brown.checked = false
        input1.checked = false
        input2.checked = false
        input3.checked = false
        womenCheckbox.checked = false;
        menCheckbox.checked = false;
    })

    var brown = document.getElementById("brown")
    brown.addEventListener('click', function(){
        product_8.style.display = "none"
        product_1.style.display = "block"
        product_9.style.display = "block"
        product_10.style.display = "none"
        product_11.style.display = "none"
        product_12.style.display = "none"
        product_2.style.display = "none"
        product_3.style.display = "none"
        product_4.style.display = "none"
        product_5.style.display = "none"
        product_6.style.display = "none"
        product_7.style.display = "none"
        product_13.style.display = "none"
        product_14.style.display = "none"
        product_15.style.display = "none"

        pink.checked = false
        blue.checked = false
        black.checked = false
        input1.checked = false
        input2.checked = false
        input3.checked = false
        womenCheckbox.checked = false;
        menCheckbox.checked = false;
    })

document.addEventListener('DOMContentLoaded', function() {
    const contentLeft = document.getElementById('content-left');
    const hideShowButton = document.getElementById('hide-show-button');

    hideShowButton.addEventListener('click', function() {
        if (contentLeft.style.width === '20%' || contentLeft.style.width === '') {
            contentLeft.style.width = '0';
            hideShowButton.textContent = "Show Filters";
        } else {
            contentLeft.style.width = '20%';
            hideShowButton.textContent = "Hide Filters";
        }
    });
});