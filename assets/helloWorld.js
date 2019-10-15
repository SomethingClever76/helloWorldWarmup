   //create variable linked to the div with an id of "hello" in the HTML
   let warmupDiv = document.getElementById("hello");
        
   //create a new h1 element
    let header = document.createElement("h1");
      
   //create new text string
    let text = document.createTextNode("Hello World");
       
   //add the text string to the h1
    header.appendChild(text);

   //add the h1 (which now includes text) to the div 
    warmupDiv.appendChild(header);
