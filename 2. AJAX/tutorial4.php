<?php
$con = mysqli_connect('localhost', 'root');
mysqli_select_db($con, 'itvmhajax'); ?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" />

    <!-- jQuery library -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

    <!-- Popper JS -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>

    <!-- Latest compiled JavaScript -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</head>

<body>
    <div class="container">
        <h2 class="text-center text-success">Get data from database</h2>
        <br><br><br>
        <form action="">
            Degree:<select name="" class="form-control" onchange="myfun(this.value)">
                <option>Choose any one</option>
                <?php
                $q = "select * from degree";
                $result = mysqli_query($con, $q);
                while ($rows = mysqli_fetch_array($result)) {
                ?>
                <option value=<?php echo $rows['mid']; ?>>
                    <?php echo $rows['degrees']; ?>
                </option>
                <?php
                }
                ?>
            </select>
            <br><br><br>

            Class/Semester:<select name="" class="form-control" id="dataget">
                <option>Choose any one</option>
            </select>
            <br><br><br>
            <button class="btn btn-primary">SHOW OFF</button>
            <br><br><br>
        </form>
    </div>
    <script>
    function myfun(datavalue) {
        $.ajax({
            url: "class.php",
            type: "POST",
            data: {
                datapost: datavalue
            },
            success: function(result) {
                $('#dataget').html(result);
            }
        })
    }
    </script>
</body>

</html>