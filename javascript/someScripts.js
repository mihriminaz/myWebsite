function showItem(item) {
    document.getElementById(item).style.display = 'block';
    if (item == 'aboutId') {
        document.getElementById('workId').style.display = 'none';
    }
    else {
        document.getElementById('aboutId').style.display = 'none';
    }
}