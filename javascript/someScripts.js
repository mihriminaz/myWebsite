function showItem(item) {
    document.getElementById(item).style.display = 'block';
    if (item == 'aboutId') {
        document.getElementById('workId').style.display = 'none';
        document.getElementById('portfolioButton').style.opacity = "0.5";
        document.getElementById('aboutButton').style.opacity = "1.0";
        document.getElementById('half').style.backgroundColor = '#59beb6';
    }
    else {
        document.getElementById('aboutId').style.display = 'none';
        document.getElementById('aboutButton').style.opacity = "0.5";
        document.getElementById('portfolioButton').style.opacity = "1.0";
        document.getElementById('half').style.backgroundColor = '#f46842';
    }
}