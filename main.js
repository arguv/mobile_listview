$(function () {
    create_new_list();
});

var i = localStorage.length;

function save_person() {
    this.name = $("#input_name").val();
    this.phone = $("#input_phone").val();

    if (this.name.length) {

        localStorage.setItem(this.name, this.phone);

        $("#person_list").append('<li id="' + this.name + '"><a href="dialog.html" onClick="get_id(this);">' + this.name + '=:=' + this.phone + '</a></li>');


        $("#person_list").listview("refresh");
    }
}

function create_new_list() {

    for (var i = 0; i < localStorage.length; i++) {

        name = localStorage.key(i);
        phone = localStorage.getItem(name);

        $("#person_list").append('<li id="' + name + '"><a href="dialog.html" onClick="get_id(this);">' + name + '=:=' + phone + '</a></li>');
    }

    $("#person_list").listview("refresh");
}

function get_id(e) {

    this.item = $(e).closest("li").attr("id");
    //this.val = localStorage.getItem(this.item);
}

function del_person(e) {

    localStorage.removeItem(this.item);

    $("#person_list").listview("refresh");

    $("#person_list").html("");

    create_new_list();

}