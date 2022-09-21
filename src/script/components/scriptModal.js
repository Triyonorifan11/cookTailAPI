import './drinkItem.js'
import './modalInfo.js';

$(function () {
    $('.modalInfo').on('click', function () {
        $('#exampleModalLabel').html('Info Detailss');

        const id = $(this).data('id');
        console.log(id)
    })

})