function Stack() {
    this.dataStore = [];
    this.top = 0;
    this.push = push;
    this.pop = pop;
    this.peek = peek;
    this.length = length;
}

function push(element) {
    this.dataStore[this.top++] = element;
}

function pop() {
    return this.dataStore[--this.top];
}

function peek() {
    return this.dataStore[this.top - 1];


}

function length() {
    return this.top;
}

function clear() {
    this.top = 0;
}

var s = new Stack();
s.push("David");
s.push("Raymond");
s.push("Bryan");
print("length: " + s.length());
print(s.peek());

function isPalindrome(word) {
    var s = new Stack();
    for(var i = 0; i < word.length; ++i) {
        s.push(word[i]);
    }
    var rword = "";
    while (s.length() > 0) {
        rword += s.pop();
    }
    if (word === rword) {
        return true;
    }
    else {
        return false; 
    }
}


var word = "hello";
if(isPalindrome(word)) {
   print(word + " is a palindrome."); 
}
else {
    print(word + " is not a palindrome.");
}

var word = "racecar";
if(isPalindrome(word)) {
   print(word + " is a palindrome."); 
}
else {
    print(word + " is not a palindrome.");
}

function fact(n){
    var s = new Stack();
    while(n > 1) {
        s.push(n--);    
    }

    var product = 1;
    while (s.length() > 0) {
        product *= s.pop();    
    }
    return product;
}

print(fact(5));



function chkBalance(express) {
    var s = new Stack();
    for (var i = 0; i < express.length; ++i) {
        if (express[i] === "(" || express[i] === "[" || express[i] === "{" ) {
            s.push(express[i]);
        }
        else if (express[i] === ")") {
            if ( s.peek() === "(" ) {
                s.pop();
            }
            else { 
                s.push(express[i]);
            }
        }
        else if (express[i] === "]") {
            if ( s.peek() === "[" ) {
                s.pop();
            }
            else { 
                s.push(express[i]);
            }
        }
        else if (express[i] === "}") {
            if ( s.peek() === "{" ) {
                s.pop();
            }
            else { 
                s.push(express[i]);
            }
        }

    }

    if (s.length() === 0) {
        return true;
    }
    else {
        return false;
    }
}

var express = "{[]}()(8+9)*10()";
if (chkBalance(express)) {
    print("Balanced.");
}
else {
    print("unBalanced");
}
