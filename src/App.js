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
				😀 😃 😄 😁 😆 😅 😂 🤣 🥲 🥹 ☺️ 😊 😇 🙂 🙃 😉 😌 😍 🥰 😘 😗 😙 😚 😋
				😝 😜 🤪 🤨 🧐 🤓 😎 🥸 🤩 🥳 😏 😒 😞 😔 😟 😕 🙁 ☹️ 😣 😖 😫 😩 🥺 😢
				😮‍💨 😤 😠 😡 🤬 🤯 😳 🥵 🥶 😱 😨 😰 😥 😓 🫣 🤗 🫡 🤔 🫢 🤭 🤫 🤥 😶
				😶‍🌫️ 😐 😑 😬 🫠 🙄 😯 😦 😧 😮 😲 🥱 😴 🤤 😪 😵 😵‍💫 🫥 🤐 🥴 🤢 🤮
				🤧 😷 🤒 🤕 🤑 🤠 😈 👿 👹 👺 🤡 💩 👻 💀 ☠️ 👽 👾 🤖 🎃 😺 😸 😹 😻 😼
				😽 🙀 😿 😾
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
