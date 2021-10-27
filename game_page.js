player_1_name = localStorage.getItem("player_1_name");
player_2_name = localStorage.getItem("player_2_name");
player_1_score=0;
player_2_score=0;

document.getElementById("player_1_name").innerHTML= player_1_name+ " : ";
document.getElementById("player_2_name").innerHTML= player_2_name+ " : ";
document.getElementById("player_1_score").innerHTML= player_1_score;
document.getElementById("player_2_score").innerHTML= player_2_score;

document.getElementById("player_question").innerHTML = "Question turn : "+player_1_name;
document.getElementById("player_answer").innerHTML = "Answer turn : "+player_2_name;


function send(){
    get_word= document.getElementById("word").value;
    word= get_word.toLowerCase();

    charat1= word.charAt(1);

    middle= Math.floor(word.length/2);
    charat2=word.charAt(middle);

    last=word.length-1;
    charat3=word.charAt(last);

    remove1= word.replace(charat1,"_");
    removemiddle=remove1.replace(charat2,"_");
    removelast=removemiddle.replace(charat3,"_");

    question_word="<h4 id='word_diplay'>Q. "+removelast+"</h4>";
    input_box="<br>Answer: <input type='text' id='inputbox'>";
    check_button="<br><br> <button class='btn btn-info' onclick='check'>Check</button>";
    row=question_word+input_box+check_button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("word").value="";
}