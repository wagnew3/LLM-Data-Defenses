import ProtectText from "../components/ProtectText";
import fig_teaser from "../assets/teaser.png";

export default function Home() {
	return (
		<div>
			<section className="hero is-small">
				<div className="hero-body">
					<div className="container">
						<h1 className="subtitle is-3">Protect your text.</h1>
						<ProtectText />
					</div>
				</div>
				<div className="hero-body">
					<div className="container">
						<h1 className="subtitle is-3">Test your protected text against ChatGPT.</h1>
						<div className="columns is-tablet">
							<div className="column is-7">
								<div className="content is-family-secondary">
									<p>
											Go to <a href="https://chatgpt.com">https://chatgpt.com</a> and ask
											ChatGPT to summarize your text in three bullet points, list the names
											of people mentioned in your text, or otherwise analyze your text. Is ChatGPT able
											to answer your questions on the protected text?
									</p>
								</div>
								<div className="notification is-danger is-family-secondary">
									<p>
											<i><b>
													Bamboozle will not protect your text from LLM inference 100% of
													the time, nor will it protect your text from use in training or
													finetuning. We recommend testing protected text against possible
													attacks on LLMs such as <a href="https://chatgpt.com">ChatGPT</a>,{" "}
													<a href="https://claude.ai/">Claude</a>, and{" "}
													<a href="https://gemini.google.com/app">Gemini</a> to assess how
													well Bamboozle will work for your text and threat model. There
													will likely be future countermeasures that significantly reduce
													the effectiveness of Bamboozle.
											</b> However, Bamboozle will make it more difficult for currently
											existing LLMs to analyze your text.
											</i>
									</p>
								</div>
							</div>
							<div className="column is-5 is-family-secondary">
								<figure class="image">
									<img src={fig_teaser} alt="Data defenses for text overview. The attacker is using an LLM to extract PII from Alice’s social media history. A data defense inserted into Alice’s social media history causes the LLM to produce irrelevant output."/>
								</figure>
							</div>
						</div>
					</div>
				</div>
				<div className="hero-body">
					<div className="container">
					</div>
				</div>
			</section>
		</div>
	);
}