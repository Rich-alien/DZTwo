let addToCart = (obj, count, fullPrice) => {
    console.log(obj);
    console.log(fullPrice);
    console.log(count);

}

// function show() {
    $.getJSON('http://localhost:3000/items', function (data) {
        let product = data[0],
            itemsShow = [],
            countPrice = 1,
            fullPrice = countPrice * data[0].priceForOne;
        data[0].allPrice = fullPrice;
        console.log( data[0].allPrice)
        $.each(data, function (key, val) {

            itemsShow.push(
                '<div class="main_container">' +
                '<div class="product-img">' +

                '</div>' +
                '<div class="product">' +
                '<div class="product-name">' +
                val.name +
                '</div>' +
                '' +
                '<div class="product-country">' +
                '<p class="product-description__text">' +
                "Country:  " +

                '</p>' +
                '<p class="product-description__text">' +
                val.country +
                '</p>' +
                '</div>' +

                '<div>' +
                val.year_of_issue +
                '</div>' +

                '<div>' +
                '<p class="product-description__text">' +
                val.blade +
                '</p>' +
                '</div>' +

                '<div class="product-description">' +
                '<p class="product-description__text">' +
                val.description +
                '</p>' +
                '</div>' +

                '<div>' +
                '<p class="product-description__text">' +
                val.priceForOne +
                '</p>' +
                '</div>' +
                '<button class="btnUp">' +

                "+1" +

                '</button>' +
                '<p class="product-description__text">' +
                 val.allPrice+
                    '</p>' +
                '</div>' +
                '</div>'
            );
        });
        // вывод эллемента , который будет выбран в Store, пока что напрямую
        let itemShow = [itemsShow[0]];
        // $('.btnUp').on('click',function (){
        //     countPrice++;
        //     console.log(countPrice);
        // });
        //
        // setInterval(showCount, 20);

        function zet() {
            countPrice++;
        }

        $('.btnUp').click(zet)

        $('<div>', {
            'class': 'main',
            html: itemShow.join('')
        }).appendTo('.container');
        addToCart(product, countPrice, fullPrice)

    });
    // $(document).ready(function () {
    //     show();
    //     setInterval('show()', 1000);
    // })
