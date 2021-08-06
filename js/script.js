                        //////            MY FIRST TREEHOUSE TECHDEGREE PROJECT         ////////

/***
 * Created an array with my quotes stored inside.*/
  var quotes = [
    {
      quote: "The good news about computers is that they do what you tell them to do. The bad news is that they do what you tell them to do.",
      source: "Ted Nelson", 
      citation: "BrainyQuote"
    },
    {
      quote: "When we love, we always strive to become better than we are. When we strive to become better than we are, everything around us becomes better too.", 
      source: "Paulo Coelho", 
      citation: "The Alchemist", 
      year: "1988"
    },
    {
      quote: "It will soon be possible to transmit wireless messages around the world so simply that any individual can carry and operate his own apparatus.",
      source: "Nikola Tesla",
      citation: "Popular Mechanics",
      year: "1909",
      tags: "Technology"
    },
    {
      quote: "Believe in yourself. You are braver than you think, more talented than you know, and capable of more than you imagine.",
      source: "Roy T. Bennett",
      citation: "The Light in the Heart",
      year: "2020",
      tags: "Inspirational"
    },
    {
      quote: "No thief, however skillful, can rob one of knowledge, and that is why knowledge is the best and safest treasure to acquire.",
      source: "L. Frank Baum",
      citation: "The Lost Princess Of Oz",
      year: "1917"
    },
    {
      quote: "The menu is not the meal.",
      source: "Alan Watts"
    },
    {
      quote: "Intelligence plus character - that is the goal of true education.",
      source: "Martin Luther King Jr.",
      citation: "The Maroon Tiger",
      year: "1947"
    },
    {
      quote: "Hide not your Talents, they for Use were made. What’s a Sun-Dial in the shade!",
      source: "Benjamin Franklin",
      citation: "Poor Richard's Almanack",
      year: "1750"
    },
    {
      quote: "The gifted man bears his gifts into the world, not for his own benefit, but for the people among whom he is placed; for the gifts are not his, he himself is a gift to the community.",
      source: "Henry Ford",
      citation: "Ford News, p. 2",
      year: "1922"
    }
    ]; 
/**
 * Added a random color function.*/
function randomRGB(){
  return Math.floor(Math.random() * 256);
}


/***
 * `getRandomQuote` function
***/
function getRandomQuote() {
  var quoteIndex = (Math.floor(Math.random() * quotes.length) );
  return quotes[quoteIndex];
 };

function printQuote() {

/***
 * Created variables of color.
 * They will be used to generate random colors.
 */
  var red = randomRGB();
  var green = randomRGB();
  var blue = randomRGB();
  let rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';


/***
 * Created a getRandomQuote using "outcome" as my properties "manager", that contains the objects in my quote array.
 */
  let outcome = getRandomQuote('messages');
  var messages = "<p class=quote>" + outcome.quote + "</p>";
    messages += "<p class='source'>" + outcome.source;
      /***
       * Had to add "citation", "year", "tags" if some of the quotes used these objects, using the "if" statements
       */
      if ("citation" in outcome) {
        messages += "<span class='citation'>" + outcome.citation + "</span>";
      }

      if ("year" in outcome) {
        messages += "<span class='year'>" + outcome.year + "</span>" + ", ";
      }

      if ("tags" in outcome){
        messages += "<span class='tags'>" + outcome.tags + "</span>" + "</p>";
      }
/**
 * Added to put my random colors into the body of the html.
 */
  document.body.style.backgroundColor = rgbColor;
  document.getElementById('quote-box').innerHTML = messages;
    

}

document.getElementById('load-quote').addEventListener("click", printQuote, false);

