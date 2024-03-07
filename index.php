<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Review & Rating System</title>
  <link rel="stylesheet" href="style.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.9.4/css/bulma.css">
  <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha512-Ua/7Woz9L5O0cwB/aYexmgoaD7lw3dWe9FvXejVdgqu71gRog3oJgjSWQR55fwWx+WKuk8cl7UwA1RS6QCadFA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
</head>

<body>
  <div class="container">
    <h1 class="title">Review & Rating System</h1>

    <p class="subtitle ">Made with <strong>Bulma</strong></p>

    <div class="card">
      <header class="card-header has-background-grey-lighter">
        <p class="card-header-title">Card header</p>
      </header>

      <div class="card-content has-background-white-ter">
        <div class="content">
          <div class="columns is-vcentered">
            <div class="column is-one-third has-text-centered">
              <h1 class="has-text-warning is-1 is-size-2">
                <b><span id="average_rating">0.0</span> / 5</b>
              </h1>

              <div class="mb-3">
                <i class="fa fa-star fa-lg has-text-grey-lighter mr-1 main_star" id="test"></i>
                <i class="fa fa-star fa-lg has-text-grey-lighter mr-1 main_star" id="test"></i>
                <i class="fa fa-star fa-lg has-text-grey-lighter mr-1 main_star" id="test"></i>
                <i class="fa fa-star fa-lg has-text-grey-lighter mr-1 main_star" id="test"></i>
                <i class="fa fa-star fa-lg has-text-grey-lighter mr-1 main_star" id="test"></i>
              </div>

              <h3 class="is-3"><span id="total_review">0</span> review</h3>
            </div>

            <div class="column is-one-third has-text-centered">
              <div class="columns is-vcentered">
                <div class="column">
                  <b>5 </b><i class="fa fa-star has-text-warning"></i>
                </div>

                <div class="column is-three-quarters">
                  <progress class="progress is-warning" id="five_star_progress" value="0" max="100"></progress>
                </div>

                <div class="column">
                  (<span id="total_five_star_review">0</span>)
                </div>
              </div>

              <div class="columns is-vcentered">
                <div class="column">
                  <b>4 </b><i class="fa fa-star has-text-warning"></i>
                </div>

                <div class="column is-three-quarters">
                  <progress class="progress is-warning" id="four_star_progress" value="0" max="100"></progress>
                </div>

                <div class="column">
                  (<span id="total_four_star_review">0</span>)
                </div>
              </div>

              <div class="columns is-vcentered">
                <div class="column">
                  <b>3 </b><i class="fa fa-star has-text-warning"></i>
                </div>

                <div class="column is-three-quarters">
                  <progress class="progress is-warning" id="three_star_progress" value="0" max="100"></progress>
                </div>

                <div class="column">
                  (<span id="total_three_star_review">0</span>)
                </div>
              </div>

              <div class="columns is-vcentered">
                <div class="column">
                  <b>2 </b><i class="fa fa-star has-text-warning"></i>
                </div>

                <div class="column is-three-quarters">
                  <progress class="progress is-warning" id="two_star_progress" value="0" max="100"></progress>
                </div>

                <div class="column">
                  (<span id="total_two_star_review">0</span>)
                </div>
              </div>

              <div class="columns is-vcentered">
                <div class="column">
                  <b>1 </b><i class="fa fa-star has-text-warning"></i>
                </div>

                <div class="column is-three-quarters">
                  <progress class="progress is-warning" id="one_star_progress" value="0" max="100"></progress>
                </div>

                <div class="column">
                  (<span id="total_one_star_review">0</span>)
                </div>
              </div>
            </div>

            <div class="column is-one-third has-text-centered">
              <h3>Write review here</h3>

              <button type="button" name="add_review" class="button is-info js-modal-trigger" id="add_review" data-target="modal-js-example">Add review</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-5" id="review_content"></div>
  </div>

  <?php include_once('modal.html'); ?>

  <script src="app.js"></script>
</body>
</html>