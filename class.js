'use strict';

class Books {
  constructor(title, ask, url) {
    this.title = title;
	this.ask = ask;
	this.url = url;
  }

  author() {
    alert("Author: " + this.title);
  }
}

class javascript extends Books {
  author() {
    super.author();
           if(confirm(this.ask)){
               document.location.href = this.url;
           } 
  }
}

new javascript("Mikhalkevich","ќзнакомьтесь с моей книгой по JavaScript","http://mikhalkevich.colony.by/media/JavaScript%20PRO.docx").author();