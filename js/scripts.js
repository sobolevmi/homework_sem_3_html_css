function userName () {
    let name = prompt("Как вас зовут?");
    if(confirm("Вы уверены в правильности введенного имени?"))
    {
        name = "Добро пожаловать, " + name + "!";
        alert(name)
    }
    else
    {
        name = prompt("Попробуйте снова");
        name = "Добро пожаловать, " + name + "!";
        alert(name);
    }
}

userName()