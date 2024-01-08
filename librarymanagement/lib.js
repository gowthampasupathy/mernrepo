let BookCollection = [
    {
      title: "Wings of fire",
      author: "APJ.Abdul Kalam",
      pubyr: 1999,
      readstatus: "Yes",
      getSummary: function () {
        return (
          "|Title: " +
          this.title +
          "|--|Author: " +
          this.author +
          "|--|PublishedYear " +
          this.pubyr +
          "|--|ReadStatus: " +
          this.readstatus+"|"
        );
      },
      toggleread: function () {
        if (this.readstatus == "Yes") {
          this.readstatus = "No";
        } else {
          this.readstatus = "Yes";
        }
      },
    },
  ];
  function displaybook(){
    let res=document.getElementById("res");
    for( let i=0;i<BookCollection.length;i++){
      let res1=document.createElement("div");
      res1.id=i;
    res1.innerHTML=BookCollection[i].getSummary();
    res.appendChild(res1);
    }
  }
  function addBook(t, a, y, s) {
    let bok = {
      title: t,
      author: a,
      pubyr: y,
      readstatus: s,
      getSummary: function () {
        return (
          "|Title: " +
          this.title +
          "|--|Author: " +
          this.author +
          "|--|PublishedYear " +
          this.pubyr +
          "|--|ReadStatus: " +
          this.readstatus+"|"
        );
      },
      toggleread: function () {
        if (this.readstatus == "Yes") {
          this.readstatus = "No";
        } else {
          this.readstatus = "Yes";
        }
      },
    };
    BookCollection.push(bok);
    displaybook();
  }
  
  function removel() {
    BookCollection.pop();
    displaybook();
  }
  function addfront(t, a, y, s) {
    let bok1 = {
      title: t,
      author: a,
      pubyr: y,
      readstatus: s,
      getSummary: function () {
        return (
          "|Title: " +
          this.title +
          "|--|Author: " +
          this.author +
          "|--|PublishedYear " +
          this.pubyr +
          "|--|ReadStatus: " +
          this.readstatus+"|"
        );
      },
      toggleread: function () {
        if (this.readstatus == "Yes") {
          this.readstatus = "No";
        } else {
          this.readstatus = "Yes";
        }
      },
    };
    BookCollection.unshift(bok1);
    displaybook();
  }
  
  function removeF() {
    BookCollection.shift();
    displaybook();
  }
  
  function getAllTitles() {
    let alltitle = (str) => str.title;
    let res1 = BookCollection.map(alltitle);
    let res=document.getElementById("res");
    for( let i=0;i<res1.length;i++){
      let res11=document.createElement("div");
      res11.id=i;
      res11.innerHTML=res1[i];
      res.appendChild(res11);
    }
  }
  function getBooksByAuthor(val) {
    let res2 = BookCollection.filter((n) => n.author == val);
    let res22 = res2.map((tit) => tit.title);
    if (res22 == "") {
      alert( "No Book Available ");
    } else {
      let res=document.getElementById("res");
    for( let i=0;i<res22.length;i++){
      let res11=document.createElement("div");
      res11.id=i;
      res11.innerHTML=res22[i];
      res.appendChild(res11);
    }
    }
  }
  function getTotalBooksPublishedBefore(yr) {
    let res3 = BookCollection.filter((va) => yr > va.pubyr);
    let res=document.getElementById("res");
    res.innerHTML="Number Of Book Published : "+ res3.length;
  }
  function removeBookByTitle(name) {
    for (let i = 0; i < BookCollection.length; i++) {
      if (BookCollection[i].title == name) {
        BookCollection.splice(i, 1);
      }
    }
    displaybook();
  }
  function getBooksByReadStatus(status) {
    let res4 = BookCollection.filter((sts) => sts.readstatus == status);
    let res=document.getElementById("res");
    for( let i=0;i<res4.length;i++){
      let res11=document.createElement("div");
      res11.id=i;
      res11.innerHTML=res4[i].getSummary();
      res.appendChild(res11);
    }
  }
  function getSubLibrary(start, end) {
    let res5 = BookCollection.slice(start, end);
    let res=document.getElementById("res");
    for( let i=0;i<res5.length;i++){
      let res11=document.createElement("div");
      res11.id=i;
      res11.innerHTML=res5[i].getSummary();
      res.appendChild(res11);
    }
  }
  function hidee() {
    //let val=document.getElementById("selec");
    console.log(val.value);
    if (val.value == 2) {
      let hidf = document.getElementById("hid");
      hidf.style.display = "none";
    } else {
      alert("hii");
    }
  }
  function call1() {
    let val = document.getElementById("hide1");
    val.style.display = "none";
  }
  function cal2() {
    let val = document.getElementById("hide1");
    val.style.display = "block";
    let val8 = document.getElementById("btn22");
    val8.style.display = "block";
  }
  function buttoncall(){
    let btnn=document.getElementById("btn2");
    if(btnn.name=="add"){
      add();
    }
    else if(btnn.name=="aut"){
     aut();
    }
    else if(btnn.name=="pub"){
      pub();
    }
    else if(btnn.name=="rem"){
      rem();
    }else if(btnn.name=="addf"){
      addf();
     }else if(btnn.name=="getsts"){
      sts();
     }else if(btnn.name=="getsub"){
      sub();
     }
    else{
      alert("nooo");
    }
  }
  function add() {
    let title = document.getElementById("name");
    let author = document.getElementById("aname");
    let year = document.getElementById("year");
    let status = document.getElementById("status");
    addBook(title.value, author.value, year.value, status.value);
    alert("passed");
  }
  function addf() {
    let title = document.getElementById("name");
    let author = document.getElementById("aname");
    let year = document.getElementById("year");
    let status = document.getElementById("status");
    addfront(title.value, author.value, year.value, status.value);
    alert("passed");
  }
  function initial() {
    let val = document.getElementById("hide1");
    val.style.display = "none";
    let val1 = document.getElementById("hide2");
    val1.style.display = "none";
    let val3 = document.getElementById("hide3");
    val3.style.display = "none";
    let val4 = document.getElementById("hide4");
    val4.style.display = "none";
    let val5 = document.getElementById("hide5");
    val5.style.display = "none";
    let val6 = document.getElementById("hide6");
    val6.style.display = "none";
    let val7 = document.getElementById("hide7");
    val7.style.display = "none";
    let val8 = document.getElementById("btn22");
    val8.style.display = "none";
  }
  function cal3() {
    initial();
    let val2 = document.getElementById("hide2");
    val2.style.display = "block";
    let val8 = document.getElementById("btn22");
    val8.style.display = "block";
    get();
  }
  function get(){
    let tit=document.getElementById("tname");
  
  }
  function cal4() {
    initial();
    let val3 = document.getElementById("hide3");
    val3.style.display = "block";
    let val8 = document.getElementById("btn22");
    val8.style.display = "block";
  }
  function aut(){
    let author=document.getElementById("gname");
    getBooksByAuthor(author.value);
  }
  function cal5() {
    initial();
    let val4 = document.getElementById("hide4");
    val4.style.display = "block";
    let val8 = document.getElementById("btn22");
    val8.style.display = "block";
  }
  function pub(){
    let pubv=document.getElementById("gyr");
    getTotalBooksPublishedBefore(pubv.value);
  }
  function cal6() {
    initial();
    let val4 = document.getElementById("hide5");
    val4.style.display = "block";
    let val8 = document.getElementById("btn22");
    val8.style.display = "block";
  }
  function rem(){
    let rem=document.getElementById("gtname")
    removeBookByTitle(rem.value);
  
  }
  function cal7() {
    initial();
    let val4 = document.getElementById("hide6");
    val4.style.display = "block";
    let val8 = document.getElementById("btn22");
    val8.style.display = "block";
  }
  function sts(){
  let st=document.getElementById("stsname");
  getBooksByReadStatus(st.value);
  }
  function cal8() {
    initial();
    let val4 = document.getElementById("hide7");
    val4.style.display = "block";
    let val8 = document.getElementById("btn22");
    val8.style.display = "block";
  }
  function sub(){
  let start=document.getElementById("start");
  let end=document.getElementById("end");
  getSubLibrary(start,end);
  }
  function clickhere() {
    let val = document.getElementById("selec");
    if (val.value == 0) {
      call1();
    } else if (val.value == 1) {
    let btnn=document.getElementById("btn2");
    btnn.name="add";
    btnn.innerHTML="AddBook"
      cal2();
    } else if (val.value == 5) {
      getAllTitles();
    } else if (val.value == 6) {
      let btnn=document.getElementById("btn2");
    btnn.name="aut";
    btnn.innerHTML="GetBookByAuthor"
      cal4();
    } else if (val.value == 7) {
      let btnn=document.getElementById("btn2");
    btnn.name="pub";
    btnn.innerHTML="GetTotalBookPublished"
      cal5();
    } else if (val.value == 8) {
      let btnn=document.getElementById("btn2");
    btnn.name="rem";
    btnn.innerHTML="RemoveBookByTitle"
      cal6();
    } else if (val.value == 9) {
      let btnn=document.getElementById("btn2");
    btnn.name="getsts";
    btnn.innerHTML="GetBooksByReadStatus"
      cal7();
    } else if (val.value == 10) {
      let btnn=document.getElementById("btn2");
    btnn.name="getsub";
    btnn.innerHTML="GetSubLibrary"
      cal8();
    } 
    else if(val.value==2){
      initial();
      alert("Book Removed");
      removel();
    }else if (val.value == 3) {
      let btnn=document.getElementById("btn2");
      btnn.name="addf";
      btnn.innerHTML="AddBookFront"
        cal2();
      }  else if(val.value==4){
        initial();
        alert("Book Removed From Front");
        removeF();
      }
    else {
      alert("hii");
    }
  }
  window.onload = function () {
    initial();
  };
  