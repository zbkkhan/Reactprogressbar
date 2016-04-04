var SearchResult = React.createClass({

    getInitialState: function(){
        return {typing: false , value: ""}
    },

    handleChange: function(event){
        this.setState({typing: true, value: event.target.value})
    },
    render: function(){
        var search = this.state.value;
        search = search.toLowerCase();
        var songName =  this.props.songs.map(function(song) {
            
            var re = new RegExp(search, 'g');
            var songTitle= song.title.toLowerCase();
            if( songTitle.match(re) == search){
                
               return (
                       <a href={song.link}> <h3>{song.title}</h3> </a>
                        
                    )
            }
            
      
    });
       
      return(<div className="col-md-4 col-md-offset-4"  >

          <form><input type="text" placeholder="Search" value={this.state.value} onChange={this.handleChange}/></form>
             
              {songName}
          </div>);
    }

});

var SONGS = [
    {title: 'Drake- Hotline Bling', Duration: '3:00', link: "https://www.youtube.com/watch?v=uxpDa-c-4Mc"},
    {title: 'Drake- Right Hand', Duration: '3:00', link: "https://www.youtube.com/watch?v=NSG-Ggn6Z_c"},
    {title: 'Selena Gomez - Come and Get it', Duration: '3:00', link: "https://www.youtube.com/watch?v=n-D1EB74Ckg"},
    {title: 'Tony Igy- Astronomia', Duration: '3:00', link: "https://www.youtube.com/watch?v=4Vk5DpS8hmY"}
];
React.render(<SearchResult songs={SONGS}/>,
    document.getElementById('react-container'));