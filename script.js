var algChapters=[]



algTC(subject){
  let theLength = subject.length
  let randNum = Math.floor(Math.random*(theLength-1))
  if(document.getElementById('algtext').innerHTML != "help"){
  document.getElementById('algtext').innerHTML = "help";
  }
}
