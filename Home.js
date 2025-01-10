"use strict"

//Create a Home object.
function Home( path, layContent )
{
		var self = this;
		var picture = "https://photos.app.goo.gl/u7Wf9W8davyhXAV98";
    //Get page states.
    this.IsVisible = function() { return lay.IsVisible() }
    this.IsChanged = function() { return false }
    
    //Show or hide this page.
    this.Show = function( show )
    {
        if( show ) lay.Animate("FadeIn");
        else lay.Animate( "FadeOut" );
    }
    
  
this.handleReply = function( error, reply )
{
    if( error ) alert( reply );
    else
    {
    web.LoadHtml( reply )
    //alert(reply);
       // var funfact = reply.slice( reply.indexOf("<i>") + 3, reply.indexOf("</i>") );
        //alert( funfact );
    }
}

    //Create layout for app controls.
    var lay = app.CreateLayout( "Linear", "Top,FillXY,HCenter" );
    lay.Hide();
    layContent.AddChild( lay );
    
    //Add a logo.
	var img = app.CreateImage( "Img/Lexi Marvel.png", 0.85 );
	lay.AddChild( img );
	
	//Create a text with formatting.
    var text = "<p><font color=#4285F4><big>Welcome</big></font></p>" + 
    "Todo: Put your home page controls here! </p>" + 
    "<p>You can add links too - <a href=https://play.google.com/store>Play Store</a></p>" +
    "<br><br><p><font color=#4285F4><big><big><b>&larr;</b></big></big> Try swiping from the " + 
    "left and choosing the <b>'New File'</b> option</font></p>";
    var txt = app.CreateText( text, 1, -1, "Html,Link" );
    txt.SetPadding( 0.03, 0.03, 0.03, 0.03 );
    txt.SetTextSize( 18 );
    txt.SetTextColor( "#444444" );
    var web = app.CreateWebView( 1, -1 );
    web.LoadUrl( picture );
    lay.AddChild( web )
    var x, y, c;
    img.SetPaintColor( "#000000" )
  // img.SetColor( "#00ffffff" )
    img.DrawText("Lexy", img.GetWidth()/2, img.GetHeight()/2+2.05)
    img.Update()
 //   lay.AddChild( txt );
      //app.HttpRequest( "GET", picture, null, null, self.handleReply );

}