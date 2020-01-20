
/**
 * Starts the application
 * This is the function that is run when the app starts
 * 
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *  
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name){
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', onDataReceived);
  console.log(`Welcome to ${name}'s application!`)
  console.log("--------------------")
}


/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 * 
 * For example, if the user entered 
 * ```
 * node tasks.js batata
 * ```
 * 
 * The text received would be "batata"
 * This function  then directs to other functions
 * 
 * @param  {string} text data typed by the user
 * @returns {void}
 */
function onDataReceived(text) {
  var namee =text.split(" ");

  if (text === 'quit\n' || text === 'exit\n') {
    quit();
  }
  else if(text === 'hello\n'){
    hello();
  }
  else if(namee[0] === "hello"){
    hellos(namee[1]);
  }
  else if(text === 'help\n'){
   help();
  }
  else if(text === "list\n"){
    list();
  }
  else if(namee[0] === "add"){
    add(text);
  }
  else if( text === "add\n"){
    console.log("error")
  }
  else if(namee[0] === "removee"){
    removee(namee[1]);
  }
  
  else if(text === "remove\n"){
    remove();
  }
  else{
    unknownCommand(text);
  }
}


/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c){
  console.log('unknown command: "'+c.trim()+'"')
}


/**
 * Says hello
 *
 * @returns {void}
 */
function hello(){
  console.log('hello!')
}

function hellos(x){
  res = x.replace("\n","!")
  console.log(`hello ${res}`);
}


/** This function lists all the possible commands
* This function is supposed to run when you write help
*This function will write the hello variable
*/
function help(){
 
  console.log("Type 'exit' or 'quit' to quit the program")
  console.log("Type 'hello' to say Hello")
  console.log("Type 'hello Name' to say Hello Name")
  console.log("If you type an unknown command , you should type something defined")
  console.log("Type 'add' to add to the list")
  console.log("Type 'remove' to remove from  the list")
  console.log("Type 'list' to list all the elements of the list")

}
var listt = [ "Reveiller" , "Brosser les dents"  , "Prendre le petit dejeuner"] ;

function list(){
        for(var i=0 ; i<listt.length ; i++){
          console.log(1 + i +"-"+listt[i])
        }
}

function add(task){
    var AllTheSentence = task.split(" "); // elle renvoie un array avec virgules
    AllTheSentence.shift(); //remove the word add
    var sentence =AllTheSentence.toString(); // transformer toute la phrase pour un string
    sentence = sentence.replace(/\,/g," "); //remplacer tous les virgules par des spaces
    sentence= sentence.replace("\n","");  
    listt.push(sentence);
    list();
}


function removee(task){
  listt.splice(task - 1 , 1 );
  list();
}

function remove(){
  listt.pop();
  list();
}





/**
 * Exits the application
 *
 * @returns {void}
 */
function quit(){
  console.log('Quitting now, goodbye!')
  process.exit();
}

// The following line starts the application
startApp("Malak Kanaan")

