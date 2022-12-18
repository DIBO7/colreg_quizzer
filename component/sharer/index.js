import React from "react";

import {DESC, ADDRESS as adr, HEAD} from "../../generic";

let message = `${DESC}%0a%0aTake a colreg quiz now --> ${adr}`


function Share({preMessageText=null}){

	let text = (preMessageText !== null ? `${preMessageText}%0a%0a${message}` : message)

	return (
		<React.Fragment>

		<ul className="enclosure">

			<a className="twitter-share-button" target="_blank" rel="noopener noreferrer"
				href={"https://twitter.com/intent/tweet?text=" + text} data-size="large">
					Share via Twitter
			</a>

			<a href={"whatsapp://send?text=" + text} data-action="share/whatsapp/share" target="_blank" rel="noopener noreferrer">
				Share via Whatsapp
			</a>

			<a href={`https://www.linkedin.com/shareArticle?url=${adr}&mini=${true}&title=${HEAD}&summary=${text}&source=${adr}`} 
				target="_blank" rel="noopener noreferrer">
					Share via LinkedIn
			</a>

			<a href={`https://www.facebook.com/sharer.php?u=${adr}`} target="_blank" rel="noopener noreferrer">
				Share via facebook
			</a>

			<a href={`/`}> Go to FrontPage </a>
		</ul>


		</React.Fragment>
		)
}

export default Share;

/*
<a className="twitter-share-button" target="_blank" rel="noopener noreferrer"
	href={"https://twitter.com/intent/tweet?text=" + escape(tweetText)} data-size="large">
		Twitter
</a>

<a href={"whatsapp://send?text=" + whatsAppText} data-action="share/whatsapp/share" target="_blank" rel="noopener noreferrer">
	Whatsapp
</a>



*/