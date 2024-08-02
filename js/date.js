function time() {
    today = new Date;
    h = today.getHours();
    m = today.getMinutes();
    day = today.getDate();
    month = today.getMonth();
    year = today.getFullYear();

    document.getElementById('time').innerHTML = `${h}:${m}`;
    setTimeout('time()',500);

    document.getElementById('date').innerHTML = `${day}/${month}/${year}`;
    
}