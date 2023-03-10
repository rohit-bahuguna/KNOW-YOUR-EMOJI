import { useState } from 'react';
import './App.css';
import * as SearchEmoji from 'emoji-api';
function App() {
	const [emoji, setEmoji] = useState();
	const [NameOfEmoji, setNameOfEmoji] = useState();

	const getEmojiName = () => {
		const data = SearchEmoji.get(emoji);
		const name = data._data.name;
		setNameOfEmoji(name);
	};
	return (
		<div className="App">
			<h1> KNOW YOUR EMOJI</h1>
			<input
				type="text"
				onChange={e => setEmoji(e.target.value)}
				placeholder="past your emoji here "
			/>
			<button onClick={() => getEmojiName()}>
				click here to know you emoji
			</button>
			{NameOfEmoji &&
				<h1 className="emojiName">
					This is a <span>{NameOfEmoji}</span> emoji
				</h1>}{' '}
			<h1>Some of the cool emojis</h1>
			<div className="emoji">
				๐ ๐ ๐ ๐ ๐ ๐ ๐ ๐คฃ ๐ฅฒ ๐ฅน โบ๏ธ ๐ ๐ ๐ ๐ ๐ ๐ ๐ ๐ฅฐ ๐ ๐ ๐ ๐ ๐
				๐ ๐ ๐คช ๐คจ ๐ง ๐ค ๐ ๐ฅธ ๐คฉ ๐ฅณ ๐ ๐ ๐ ๐ ๐ ๐ ๐ โน๏ธ ๐ฃ ๐ ๐ซ ๐ฉ ๐ฅบ ๐ข
				๐ฎโ๐จ ๐ค ๐  ๐ก ๐คฌ ๐คฏ ๐ณ ๐ฅต ๐ฅถ ๐ฑ ๐จ ๐ฐ ๐ฅ ๐ ๐ซฃ ๐ค ๐ซก ๐ค ๐ซข ๐คญ ๐คซ ๐คฅ ๐ถ
				๐ถโ๐ซ๏ธ ๐ ๐ ๐ฌ ๐ซ  ๐ ๐ฏ ๐ฆ ๐ง ๐ฎ ๐ฒ ๐ฅฑ ๐ด ๐คค ๐ช ๐ต ๐ตโ๐ซ ๐ซฅ ๐ค ๐ฅด ๐คข ๐คฎ
				๐คง ๐ท ๐ค ๐ค ๐ค ๐ค  ๐ ๐ฟ ๐น ๐บ ๐คก ๐ฉ ๐ป ๐ โ ๏ธ ๐ฝ ๐พ ๐ค ๐ ๐บ ๐ธ ๐น ๐ป ๐ผ
				๐ฝ ๐ ๐ฟ ๐พ
			</div>
			<footer>
				<p>@ | 2022 | Rohit Bahuguna</p>
				<div className="horizontal" />
				<a href="https://twitter.com/rohitba96862397" target="_blank">
					<i className="footer_icon fab fa-2x fa-twitter" />
				</a>
				<a href="https://www.linkedin.com/in/rohit--bahuguna/" target="_blank">
					<i className="footer_icon fab fa-2x fa-linkedin" />
				</a>
				<a href="https://github.com/rohit-bahuguna/" target="_blank">
					<i className="footer_icon fab fa-2x fa-github" />
				</a>
				<a href="https://rohit-bahuguna.netlify.app/" target="_blank">
					<i class="fa fa-2x fa-home" aria-hidden="true" />
				</a>
			</footer>
		</div>
	);
}

export default App;
