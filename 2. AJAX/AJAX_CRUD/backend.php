<?php
$con = mysqli_connect("localhost", "root");
mysqli_select_db($con, 'itvmhajax');

extract($_POST);
// $firstname = $_POST['firstname'];

// insert data into database
if (isset($_POST['firstname']) && isset($_POST['lastname']) && isset($_POST['email']) && isset($_POST['mob'])) {
    $query = "INSERT INTO `ajaxcrud`(`firstname`, `lastname`, `email`, `mob`) VALUES ('$firstname','$lastname','$email','$mob')";
    mysqli_query($con, $query);
}

// display database Records
if (isset($_POST['readrecord'])) {
    $data = '<table class="table table-bordered table-striped">
                <tr>
                    <th>NO.</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Mobile Number</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>';

    $displayquery = "SELECT * from `ajaxcrud` ";
    // echo $displayquery;
    $result = mysqli_query($con, $displayquery);
    if (mysqli_num_rows($result) > 0) {
        $number = 1;
        while ($row = mysqli_fetch_array($result)) {
            $data .= ' <tr>
                        <td>' . $number . '</td>
                        <td>' . $row['firstname'] . '</td>
                        <td>' . $row['lastname'] . '</td>
                        <td>' . $row['email'] . '</td>
                        <td>' . $row['mob'] . '</td>
                        <td>
                        <button onclick="GetUserDetails(' . $row['id'] . ')" class="btn btn-warning">Edit</button>
                        </td>
                        <td>
                        <button onclick="DeleteUser(' . $row['id'] . ')" class="btn btn-danger">Delete</button>
                        </td>
                    </tr>';
            $number++;
        }
    }
    $data .= '</table>';
    echo $data;
}
// delete record from the database
if (isset($_POST['deleteid'])) {
    $userid = $_POST['deleteid'];
    $query = "DELETE FROM ajaxcrud where id = '$userid'";
    mysqli_query($con, $query);
}


// to update data we need to call specific data before they are updated

if (isset($_POST['id']) && isset($_POST['id']) != "") {
    $user_id = $_POST['id'];
    $query = "select * from `ajaxcrud` where id = '$user_id'";
    $msg = "";
    if (!$result = mysqli_query($con, $query)) {
        exit(mysqli_error($msg));
    }
    $response = array();
    // notesObj = [];
    if (mysqli_num_rows($result) > 0) {
        while ($row = mysqli_fetch_array($result)) {
            $response = $row;
        }
    } else {
        $response['status'] = 200;
        $response['message'] = "Data not found";
    }
    // JSON.stringify();
    echo json_encode($response);
} else {
    $response['status'] = 200;
    $response['message'] = "invalid request";
}


if (isset($_POST['hidden_user_idupd'])) {
    $hidden_user_idupd = $_POST['hidden_user_idupd'];
    $firstnameupd = $_POST['firstnameupd'];
    $lastnameupd = $_POST['lastnameupd'];
    $emailupd = $_POST['emailupd'];
    $mobupd = $_POST['mobupd'];

    $query = "UPDATE `ajaxcrud` SET `firstname`='$firstnameupd',`lastname`='$lastnameupd',`email`='$emailupd',`mob`='$mobupd' WHERE `id` = '$hidden_user_idupd' ";
    mysqli_query($con, $query);
}