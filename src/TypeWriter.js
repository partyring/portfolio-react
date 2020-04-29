const typeWriter = () => {

    var i = 0;
    var txt = 'Lorem ipsum dummy text blabla.';
    var speed = 50;
    console.log('wobopfgo');
    if (i < txt.length) {
        document.getElementById("demo").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

export default typeWriter;