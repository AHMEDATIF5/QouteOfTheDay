
function qouteGenerator()
{

    var qouteList = [

        {qoute : "You only live once, but if you do it right, once is enough.",
        author : "Mae West",
        },

        {qoute : "So many books, so little time",
        author : "Frank Zappa"
        },

        {qoute : "Be the change that you wish to see in the world",
        author : "Mahatma Gandhi"
        },

        {qoute : "If you tell the truth, you don't have to remember anything.",
        author : "Mark Twain"
        }
    ]

    var random = Math.floor(Math.random() * qouteList.length);

    document.getElementById("h4").innerHTML = `<i class="fas fa-quote-left"></i>  ${qouteList[random].qoute}  <i class="fas fa-quote-right"></i>`;
    
    document.getElementById("h5").innerHTML = "--" + " " +qouteList[random].author;
    console.log(random)
}
