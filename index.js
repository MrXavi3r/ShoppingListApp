//add items to list
$(function () {
    $('#js-shopping-list-form').submit(e => {
        e.preventDefault();
        let value = $('#shopping-list-entry').val()
        let newItem = `<li>
    <span class="shopping-item">${value}</span>
    <div class="shopping-item-controls">
      <button class="shopping-item-toggle">
        <span class="button-label">check</span>
      </button>
      <button class="shopping-item-delete">
        <span class="button-label">delete</span>
      </button>
    </div>
  </li>`
        $('#shopping-list-entry').val();
        $('.shopping-list').append(newItem)
    });
});

//check and un-check items 
$(function () {
    $('.shopping-list').on('click', "li .shopping-item-toggle", function () {
        console.log($(this).closest('.shopping-item'))
        $(this).closest('li').children('.shopping-item').toggleClass('shopping-item__checked');
    });
});

//remove items from list 
$(function () {
    $('.shopping-list').on('click', 'li .shopping-item-delete', function () {
        $(this).closest('li').remove();
    });
});

