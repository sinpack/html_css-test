// Task #3
$(function () {
  $('#light').on('click', () => {
    $('body').removeClass('dark').addClass('light');

    console.log('clicked');
  });
  $('#dark').on('click', () => {
    $('body').removeClass('light').addClass('dark');
    console.log('dark');
  });
});

// Task #4
function createListItem(item) {
  $('#list').append(
    `<li class="list-group-item">${item.id} - ${item.title}</li>`
  );
}

function fetchData(count) {
  // Your ajax logic here that calls createListItem to append each list item
  $.ajax({
    /* GET request method is default no need to specify method */
    url: 'https://jsonplaceholder.typicode.com/posts',
    success: (data) => {
      // Fetch only the specified count of items
      data.slice(0, count).map(createListItem);
    },
    error: (xhr, status, error) => {
      console.error(status, error);
    },
  });
}

$(document).ready(function () {
  $('#printlist').click(function () {
    fetchData(5);
  });
});
