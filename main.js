  var facts = [
    ["George Washington",false], ["John Adams",false], ["Thomas Jefferson",false], ["James Madison",false], ["James Monroe",false], ["John Quincy Adams",false], ["Andrew Jackson",false], ["Martin Van Buren",false],
	["William Harrison",false], ["John Tyler",false], ["James Polk", false], ["Zachary Taylor",false], ["Millard Fillmore",false], ["Franklin Pierce",false], ["James Buchanan",false],
	["Abraham Lincoln",false], ["Andrew Johnson",false], ["Ulysses Grant",false], ["Rutherford Hayes",false], ["James Garfield",false], ["Chester Arthur",false], ["Grover Cleveland (1)",false],
	["Benjamin Harrison",false], ["Grover Cleveland (2)",false], ["William McKinley",false], ["Theodore Roosevelt",false], ["William Taft",false], ["Woodrow Wilson",false], ["Warren Harding",false],
	["Calvin Coolidge",false], ["Herbert Hoover",false], ["Franklin Roosevelt",false], ["Harry Truman",false], ["Dwight Eisenhower",false], ["John Kennedy",false], ["Lyndon Johnson",false],
	["Richard Nixon",false], ["Gerald Ford",false], ["Jimmy Carter",false], ["Ronald Reagan",false], ["George H. W. Bush",false], ["Bill Clinton",false], ["George W. Bush",false], ["Donald Trump",false]
};
var thingelem;
var nq = 4;
var col1 = 20;
var row1 = 100;
var rowsize = 50;
var slots = [];
var answertext=" ";
var song;
var functionreference;
var v;
var res;
var ans;
function init(){
  res = document.getElementById("results");
  ans = document.getElementById("answer");
  functionreference = pickelement;
  song = document.getElementById("ruffles");
  v = document.getElementById("vid");
  row1= .5* window.innerHeight;
  setupgame();
}
function setupgame() {
        slots=[];
              answertext="";
        var i;
        var c;
        var mx = col1;
		var my = row1;
var d;
var uniqueid;
for (i=0;i<facts.length;i++) {
facts[i][2] = false;
}
        for(i=0;i<nq;i++) {
do {c = Math.floor(Math.random()*facts.length);}
while (facts[c][1]==true);
facts[c][1]=true;
uniqueid = "p"+String(c);
d = document.createElement('pres');
d.innerHTML =  "<div  class="thing" id='"+uniqueid+"'>placeholder</div>";
                document.body.appendChild(d);
thingelem = document.getElementById(uniqueid);
thingelem.textContent=String(i+1)+": "+facts[c][0];
thingelem.style.top = String(my)+"px";
 thingelem.style.left = String(mx)+"px";
thingelem.addEventListener('click',pickelement);
my +=rowsize;
}
}

 function pickelement(ev) {
var answert;
var positiont;
 var positionn;
 positiont = this.id.substring(1);
answert= this.textContent.substring(0,1);
answertext = answertext+answert+" ";
ans.innerHTML= answertext;
positionn = Number(positiont);
this.style.backgroundColor = "gold";
this.removeEventListener('click',functionreference);
slots.push(positionn);
if (slots.length==nq) {
checkorder();
}
}

function checkorder(){
var ok = true;
for (var i=0;i<nq-1;i++){
if (slots[i]>slots[i+1]){
ok = false;
break;
}
}
if (ok){
res.innerHTML= "CORRECT";
song.style.visibility="visible";
song.currentTime = 4;
song.play();
v.style.visibility="visible";
v.currentTime=0;
v.style.display="block";
v.play();
}
else {
       res.innerHTML = "WRONG";
    }

}

</script>

Close script element.
