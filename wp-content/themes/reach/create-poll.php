<?php
/**
* Template Name: create polls
*
* @package WordPress
* @subpackage Twenty_Fourteen
* @since Twenty Fourteen 1.0
*/

get_header();
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="description" content="EasyVote">
    <meta name="keywords" content="HTML">
    <title>Create a Poll</title>

    <link href="https://fonts.googleapis.com/css?family=Ubuntu:400,500" rel="stylesheet">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
    <link rel="stylesheet" href="/opt/bitnami/apps/wordpress/htdocs/wp-content/themes/reach/style.css">
</head>

<body>
    <header>
        <nav class="navbar-default">
            <div class="container">
                <div class="navbar-header">
                    <!-- hamburger button -->
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#headlinks" aria-expanded="false">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                </div>
                <!-- Collect the nav links, forms, and other content for toggling -->
                <div class="collapse navbar-collapse" id="headlinks">
                    <ul class="nav navbar-nav navbar-right">
                        <li><a href="../view-polls.php">View Polls</a></li>
                        <li><a href="#">Create Poll</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>

    <form action="#" method="post">
        <div id="qBlock">
        </div>
        <div>
            <button type="button" class="btn btn-default" id="fr">Add free response</button>
            <button type="button" class="btn btn-default" id="ms">Add multiple selection</button>
            <button type="button" class="btn btn-default" id="ss">Add single selection</button>
            <br> <br>
            <button type="submit" class="btn btn-default">Submit</button>
        </div>
    </form>
    <script src="https://code.jquery.com/jquery-2.2.4.js" integrity="sha256-iT6Q9iMJYuQiMWNd9lDyBUStIq/8PuOW33aOqmvFpqI=" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
    <script src="../reach/js/test.js"></script>
</body>

</html>