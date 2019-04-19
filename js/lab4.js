// lab4.js
// The verse1(), verse2(), chorus1() and chorus2() are provided to you. You can change the function names and add additonal ones as needed. Be sure to follow the starter code that has been supplied.

function verse1(){
    let output = '<p>The will to greatness clouds the mind<br> Consumes the senses, veils the signs<br>We each are meant to recognize</p><br><p>Redeeming graces cast aside<br>Enduring notions<br>Newfound promise<br>That the end will never come</p><br><p>We live in times when all seems lost<br>But time will come when we look back<br>Upon ourselves<br>And on our failings</p><br><p><strong>Embrace the void even closer still</strong></p><br><p>Erase your doubts<br>As you surrender everything</p>';
    // your code here

    return output;
}

function verse2(){
    let output = '<br><p>Wide awake in a world that sleeps<br>Enduring thoughts<br>Enduring scenes<br>The knowledge of what is yet to come</p><br><p>From a time when all seems lost<br>From a dead man to a world<br>Without restraint<br>Unafraid and free</p>';
    // your code here

    return output;
}

function chorus(){
    let output = '<p>We possess the power<br>If this should start to fall apart<br> To mend divides<br> To change the world<br>To reach the farthest star<p><p>If we should stay silent<br>If fear should win our hearts<br>Our light will have long diminished<br>Before it reachs the farthest star</p>';
    // your code here

    return output;
}

function bridge(){
    let output = '<p><strong>If we fall<br>And break<br>All the tears in the world<br> Can not make<br> Us whole<br> Again</strong></p>';
    // your code here

    return output;
}



function main(){
    let finalOutput = verse1() + chorus() + verse2() + chorus() + bridge() + chorus(); // used to build lyrics string
    // call verse and chorus functions
    // each verse/chorus should return text including HTML paragraph tags
    
    // do not modify the statement below
    // it will take 
    document.getElementById('lyrics').innerHTML = finalOutput;
}

window.onload = function(){
    main();
}