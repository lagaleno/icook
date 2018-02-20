<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>iCook</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
<<<<<<< HEAD


=======
>>>>>>> Sprint3-Joao
        <!--Import materialize.css-->
        <link type="text/css" rel="stylesheet" href="css/materialize.min.css"  media="screen,projection"/>

        <!-- Compiled and minified CSS
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css"> -->

        <!-- Latest compiled and minified CSS -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

        <!-- Optional theme -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">

        <script type="text/javascript" src="https://code.jquery.com/jquery-3.2.1.min.js"></script>

        <!-- Latest compiled and minified JavaScript -->
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>

        <script type="text/javascript" src="js/materialize.min.js"></script>

        <!-- Compiled and minified JavaScript -->
        <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/js/materialize.min.js"></script> -->



        <!-- Styles -->
        <style>
            html, body {
                background-color: #fff;
                color: #636b6f;
                font-family: 'Arial', sans-serif;
                font-size: 16px;
                font-weight: 100;
                height: 100vh;
                margin: 0;
            }

            .full-height {
                height: 100vh;
            }

            .flex-center {
                align-items: center;
                display: flex;
                justify-content: center;
            }

            .position-ref {
                position: relative;
            }

            .top-right {
                position: absolute;
                right: 10px;
                top: 18px;
            }

            .content {
                text-align: center;
            }

            .title {
                font-size: 84px;
            }


            .m-b-md {
                margin-bottom: 30px;
            }
        </style>
    </head>
<<<<<<< HEAD

    <body>
      <div class="container body">
        <div class="main_container">
          <form class="navbar-form navbar-left" role="search" action="{!! url('pesquisar') !!}">
            <div class="form-group">
              {!! csrf_field() !!}
              <input type="text" name="texto" class="form-control" placeholder="Search">
            </div>
            <button type="submit" class="btn btn-default">Pesquisar</button>
          </form>
          <div class="right_col row" role="main">
            <div class="page-title col-xs-12">
              <div class="title_left">
                <h1 class="">Adicione uma Receita</h1>
              </div>
            </div>
            @yield('content')
          </div>
        </div>
      </div>
    </body>
=======
    <body>
      <div class="container body">
          <div class="main_container">

              <div class="right_col row" role="main">
                  <div class="page-title col-xs-12">
                      <div class="title_left">
                          <h1 class="">Adicione uma Receita</h1>
                      </div>
                  </div>
              @yield('content')
              </div>
              <form class="navbar-form navbar-left" role="search" action="{!! url('pesquisar') !!}">
                <div class="form-group">
                  {!! csrf_field() !!}
                  <input type="text" name="texto" class="form-control" placeholder="Search">
                </div>
                <button type="submit" class="btn btn-default">Submit</button>
              </form>

          </div>
      </div>
    </body>
@yield('content')

>>>>>>> Sprint3-Joao
</html>
