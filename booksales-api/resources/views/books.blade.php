<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Book</title>
</head>
<body>
    <h2>Daftar Buku</h2>
<table>
    <tr><th>Title</th><th>Author</th><th>Genre</th><th>Tahun</th></tr>
    @foreach($books as $book)
    <tr>
        <td>{{ $book->title }}</td>
        <td>{{ $book->author->name }}</td>
        <td>{{ $book->genre }}</td>
        <td>{{ $book->year }}</td>
    </tr>
    @endforeach
</table>

</body>
</html>