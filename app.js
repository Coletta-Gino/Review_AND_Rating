document.addEventListener('DOMContentLoaded', () => {
  // Functions to open and close a modal
  function openModal($el) {
    $el.classList.add('is-active');
  }

  function closeModal($el) {
    $el.classList.remove('is-active');
  }

  function closeAllModals() {
    (document.querySelectorAll('.modal') || []).forEach(($modal) => {
      closeModal($modal);
    });
  }

  // Add a click event on buttons to open a specific modal
  (document.querySelectorAll('.js-modal-trigger') || []).forEach(($trigger) => {
    const modal = $trigger.dataset.target;
    const $target = document.getElementById(modal);

    $trigger.addEventListener('click', () => {
      openModal($target);
    });
  });

  // Add a click event on various child elements to close the parent modal
  (document.querySelectorAll('.modal-background, .delete, #save_review') || []).forEach(($close) => {
    const $target = $close.closest('.modal');

    $close.addEventListener('click', () => {
      closeModal($target);
    });
  });

  // Add a keyboard event to close all modals
  document.addEventListener('keydown', (event) => {
    const e = event || window.event;

    if (e.keyCode === 27) { // Escape key
      closeAllModals();
    }
  });
});

$(document).ready(function() {
  var rating_data = 0;

  $(document).on('mouseenter', '.submit_star', function() {
    var rating = $(this).data('rating');

    reset_background();

    for (var count = 1; count <= rating; count++) {
      $('#submit_star_' + count).addClass('has-text-warning')
    }
  });

  function reset_background() {
    for (var count = 1; count <= 5; count++) {
      $('#submit_star_' + count).addClass('has-text-grey-lighter');
      $('#submit_star_' + count).removeClass('has-text-warning');
    }
  }

  $(document).on('mouseleave', '.submit_star', function() {
    reset_background();

    for (var count = 1; count <= rating_data; count++) {
      $('#submit_star_' + count).removeClass('has-text-grey-lighter');
      $('#submit_star_' + count).addClass('has-text-warning');
    }
  });

  $(document).on('click', '.submit_star', function() {
    rating_data = $(this).data('rating');
  });

  $('#save_review').click(function() {
    var user_name = $('#user_name').val();
    var user_review = $('#user_review').val();

    if (user_name == '' && user_review == '') {
      $('#user_name').addClass(' is-danger');
      $('#user_review').addClass(' is-danger');
      $('.help').addClass(' is-danger').html('Please fill both field !').show();
      return false;
    }
    else {
      $.ajax({
        url: "submit_rating.php",
        method: "POST",
        data: {
          rating_data: rating_data,
          user_name: user_name,
          user_review: user_review
        },
        success: function(data) {
          load_rating_data();

          alert(data);
        }
      });
    }
  });

  load_rating_data();

  function load_rating_data() {
    $.ajax({
      url: "submit_rating.php",
      method: "POST",
      data: {
        action: 'load_data'
      },
      dataType: "JSON",
      success: function(data) {
        $('#average_rating').text(data.average_rating);
        $('#total_review').text(data.total_review);

        if (data.total_review > 1) {
          $('.is-3').text(data.total_review + ' reviews');
        }

        var count_star = 0;

        $('.main_star').each(function() {
          count_star++;

          if (Math.ceil(data.average_rating) >= count_star) {
            $(this).addClass('has-text-warning');
            $(this).removeClass('has-text-grey-lighter');
          }
        });

        $('#total_five_star_review').text(data.five_star_review);
        $('#total_four_star_review').text(data.four_star_review);
        $('#total_three_star_review').text(data.three_star_review);
        $('#total_two_star_review').text(data.two_star_review);
        $('#total_one_star_review').text(data.one_star_review);

        $('#five_star_progress').attr('value', (data.five_star_review/data.total_review) * 100);
        $('#four_star_progress').attr('value', (data.four_star_review/data.total_review) * 100);
        $('#three_star_progress').attr('value', (data.three_star_review/data.total_review) * 100);
        $('#two_star_progress').attr('value', (data.two_star_review/data.total_review) * 100);
        $('#one_star_progress').attr('value', (data.one_star_review/data.total_review) * 100);

        if (data.review_data.length > 0) {
          var html = '';

          for (var count = 0; count < data.review_data.length; count++) {
            html += '<div class="columns mb-5">';

              html += '<div class="column is-1"><div class="has-background-danger-dark has-text-white-ter py-3"><h3 class="has-text-centered">' + data.review_data[count].user_name.charAt(0) + '</h3></div></div>';

              html += '<div class="column">';

                html += '<div class="card">';

                  html += '<header class="card-header has-background-grey-lighter py-2 pl-3"><b>' + data.review_data[count].user_name + '</b></header>';

                  html += '<div class="card-content has-background-white-ter">';

                    for (var star = 1; star <= 5; star++) {
                      var class_name = '';

                      if (data.review_data[count].rating >= star) {
                        class_name = ' has-text-warning';
                      }
                      else {
                        class_name = ' has-text-grey-lighter';
                      }

                      html += '<i class="fa fa-star' + class_name + ' mr-1"></i>';
                    }

                    html += '<br>';

                    html += data.review_data[count].user_review;

                  html += '</div>';

                  html += '<footer class="card-footer has-background-white-bis is-justify-content-right py-2 pr-3"><em>On ' + data.review_data[count].datetime + '</em></footer>';

                html += '</div>';

              html += '</div>';

            html += '</div>';
          }

          $('#review_content').html(html);
        }
      }
    });
  }
});