fetch("blog.txt")
  .then((res) => res.text())
  .then((text) => {
    var title=[], summary=[], content=[];
    for(let i=0; i<text.length; i++)
    {
        var Text="";
        if(text[i] == "<"){
            if(text[i+1] == "t"){
                for(let j=i+3; text[j] != "<" && text[j+1] != "/"; j++, i++){
                    Text += text[j];
                }
                title.push(Text);
            }
            Text = "";
            if(text[i+1] == "s"){
                for(let j=i+3; text[j] != "<" && text[j+1] != "/"; j++, i++){
                    Text += text[j];
                }
                summary.push(Text)
            }
        }
    }
    const UL = document.getElementById("blog");

    for(let i=0; i<title.length; i++){
        const link = document.createElement("a");
        link.href = "blog";
        const LI = document.createElement("li");
        const S = document.createElement("p");

        LI.appendChild(document.createTextNode(title[i]));
        S.appendChild(document.createTextNode(summary[i]));

        link.appendChild(LI);
        UL.appendChild(link);
        UL.appendChild(S);
    }
});
