function App() {
    const [quotes, setQuotes] = React.useState([]);
    const [randomQuote, setRandomQuote] = React.useState("");
    const [color, setColor] = React.useState("#fff");
  
    React.useEffect(() => {
      async function fetchData() {
        const response = await fetch("https://type.fit/api/quotes");
        const data = await response.json();
  
        setQuotes(data);
        let randIndex = Math.floor(Math.random() * data.length);
        setRandomQuote(data[randIndex]);
      }
  
      fetchData();
    }, []);
  
    const getNewQuote = () => {
        const colors =[
            "#9e2500",
            "#96802e",
            "#6b127f",
            "#1c60c8",
            "#26c12f",
            "#7f1c2f",
            "#7b9c86",
            "#040ffa",
            "#b173d4",
            "#ca0a47",
            "#6f4ec3",
            "#2c8283",
            "#2e23af",
            "#bd9364",
        ];
            

        

      let randIndex = Math.floor(Math.random() * quotes.length);
      let randColorIndex = Math.floor(Math.random() * colors.length);
      setRandomQuote(quotes[randIndex]);
      setColor(colors[randColorIndex])
    };
  

 
    return (
        <div style={{background:color, minHeight: "100vh"}}>
      <div className="container pt-4" >
        <div className="jumbotron">
          <div className="card">
            <div className="card-header">Inspirational Quotes</div>
            <div className="card-body">
              {randomQuote ? (
                <div>
                  <h1>&quot;{randomQuote.text}&quot;</h1>
                  <p>{randomQuote.author}</p>
                </div>
              ) : (
                <h2>loading</h2>
              )}
              <div className="row mt-3">
                <button onClick={getNewQuote} className="btn btn-primary col-8 col-md-2 mx-1 my-1" style={{ fontSize: "1rem" }} >New Quote</button>
                <a href={"https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" + 
                  encodeURIComponent('"' + randomQuote.text + '" ' + randomQuote.author)}
                        target="_blank" 
                     className="btn btn-warning col-8 col-md-2 mx-1 my-1" style={{ fontSize: "1rem" }}>
                    <i className="fab fa-twitter"></i>
                    </a>
                    <a href={`https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=${encodeURIComponent(
                    randomQuote.author
                   )}&content=${encodeURIComponent(randomQuote.text)}&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button`}
                 target="_blank"
                 className="btn btn-danger col-8 col-md-2 mx-1 my-1" style={{ fontSize: "1rem" }}
                 onClick={() => window.open('https://www.tumblr.com')}
                 >
                    <i className="fab fa-tumblr"></i>
                    </a>

              </div>
            </div>
          </div>
        </div>
  
        
      </div>
      </div>
    );
  }
  
  ReactDOM.render(<App />, document.getElementById("app"));
  