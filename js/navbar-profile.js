var current_title = $(document).attr('title');

var str = ' <nav class="navbar navbar-expand-lg bg-light">\
    <div class="container-fluid">\
      <a class="navbar-brand" href="/">Guvi</a>\
      <a class="nav-link disabled" href="#">'+current_title+'</a>\
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">\
        <span class="navbar-toggler-icon"></span>\
      </button>\
      <div class="collapse navbar-collapse" id="navbarSupportedContent">\
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">\
          <li class="nav-item">\
            <a class="nav-link active" aria-current="page" href="/"></a>\
          </li>\
        </ul>\
        <div class="d-flex flex gap-3">\
          <a href="./register.html"><button class="btn btn-dark" type="submit">Logout</button></a>\
        </div>\
      </div>\
    </div>\
  </nav>\ ';

$("header").append(str);