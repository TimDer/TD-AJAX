<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>TD-AJAX</title>
</head>
<body>
    <form action="submit.php" method="POST" class="td-ajax" enctype="multipart/form-data">
        <div>
            <input type="text" name="name">
        </div>
        <div>
            <input type="email" name="email">
        </div>
        <div>
            <textarea name="Message" cols="30" rows="10"></textarea>
        </div>
        <div>
            <input type="radio" name="radioTest">
        </div>
        <div>
            <input type="checkbox" name="mycheckbox">
        </div>
        <div>
            <input type="file" name="myfile">
        </div>
        <div>
            <select name="cars">
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="fiat">Fiat</option>
                <option value="audi">Audi</option>
            </select>
        </div>
        <div>
            <input list="browsers" name="browser">
            <datalist id="browsers">
                <option value="Internet Explorer">
                <option value="Firefox">
                <option value="Chrome">
                <option value="Opera">
                <option value="Safari">
            </datalist>
        </div>
        <input type="submit" value="Send">
    </form>
    
    <script src="https://code.jquery.com/jquery-3.1.1.js" integrity="sha256-16cdPddA6VdVInumRGo6IbivbERE8p7CQR3HzTBuELA=" crossorigin="anonymous"></script>
    <script src="td-ajax.js"></script>
</body>
</html>