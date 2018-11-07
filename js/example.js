// ADD NEW ITEM TO END OF LIST
    var li, text, li2;
    li2 = document.createElement("li");
    text = document.createTextNode("cream");
    li2.appendChild(text);
    li2.setAttribute("id", "six");
    document.getElementsByTagName("ul")[0].appendChild(li2);

    // ADD NEW ITEM START OF LIST

    li = document.createElement("li");
    text = document.createTextNode("Kale");
    li.appendChild(text);
    li.setAttribute("id", "five");
    var ul = document.getElementsByTagName("ul");
    ul[0].insertBefore(li, ul[0].childNodes[0]);

// ADD A CLASS OF COOL TO ALL LIST ITEMS
    var n = ul[0].childNodes.length;
    for (i = 0 ; i < n; i = i + 2){
        ul[0].childNodes[i].setAttribute("class", "cool");
    }

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
    var h2 = document.getElementsByTagName("h2");
    h2[0].innerHTML = h2[0].innerHTML + "<span>" + (n + 1)/2 + "</span>"