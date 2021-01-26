var editTodo=false;
var selectedTodoIndex;

$(document).on('click', '.fa-edit', function(){
    $("input[type='text'").fadeToggle();
});

//Checl off specific Todos by clicking
$("ul").on("click", "li", function(){
    editTodo=false;
    $(this).toggleClass("completedTask");
});  


//CLick on del
$("ul").on("click", ".deleteButton", function(e){
    editTodo=false;
    $(this).parent().parent().siblings("input[type='text']").val("");
    $(this).parent().fadeOut(350, function(){
        $(this).remove();
    });
    e.stopPropagation();
});

//create new todo
$("input[type='text']").keypress(function(e){
    if(!editTodo){
        if(e.which===13){
        var todoText = $(this).val();
        $(this).val("");
        $("ul").append(`<li><span class="del-edit deleteButton"><i class="fas fa-trash"></i></span><span class="del-edit editButton"><i class="fas fa-edit"></i></span> ${todoText} </li>`);
        }
        }
    else{
        if(e.which===13){
            var todoText = $(this).val();
            var temp = $(this).siblings("ul");
            temp.children(`li:nth-of-type(${selectedTodoIndex})`).html(`<span class="del-edit deleteButton"><i class="fas fa-trash"></i></span><span class="del-edit editButton"><i class="fas fa-edit"></i></span>${todoText}`);
            $(this).val("")
            editTodo=false;
        }

    }
});

//edit todo
$("ul").on("click", ".editButton", function(e){
    editTodo=true;
    edit = $(this).parent().text();
    $(this).parent().parent().siblings("input[type='text']").val(edit);
     //set selectedtodoindex to the nth edit button
   selectedTodoIndex = $(this).parent().index();
   selectedTodoIndex++;

    
    e.stopPropagation();
});
