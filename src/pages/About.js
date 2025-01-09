import data_defenses_paper from "../assets/Data_Defenses_Against_LLMs-8.pdf";
import DEFENSES from "../lib/defenses"

export default function About() {
	const title = "AI Blocker";
	return (
		<section className="section">
			<div className="container">
				<h1 className="subtitle is-3">About this Project</h1>
				<p className="is-family-secondary">
					Large language models (LLMs), such as ChatGPT and Claude, are able to
					answer questions about, summarize, and analyze text with high
					accuracy. However, these capabilities have caused privacy, copyright,
					consent, and other harms.
					<br />
					<br />
				</p>
				<h1 className="subtitle is-5">Examples</h1>
				<p className="is-family-secondary">
					<a href="https://chatgpt.com/share/6704d25a-c9c4-8010-9759-a0c6ffa6d01f">
						Defend a news article against unauthorized use
					</a>
					<br />
					<a href="https://g.co/gemini/share/f58f51a3dbd0">
						Stop inference about where you live based on your personal website
					</a>
					<br />
					<a href="https://chatgpt.com/share/6704690e-d6e8-8010-aa20-0d37e6a09cd7">
						Protecting Lady Gaga from prying questions
					</a>
				</p>
				<br />
				<h1 className="subtitle is-5">Why might text need to be protected against LLM inference?</h1>
				<p className="is-family-secondary">
					<b>Privacy harms</b> LLMs can be used to guess personal information,
					including gender, birth date, physical location, employer, and other
					potentially sensitive characteristics from a person's social media
					history (<a href="https://arxiv.org/abs/2310.07298">Staab et al.</a>).
					<br />
					<br />
					<b>Intellectual Property and Copyright harms</b> LLMs can copy or
					summarize copyrighted text, such as books, news articles, or blogs.
					They have been used{" "}
					<a href="https://cointelegraph.com/news/chatgpt-bing-integration-paused-for-helping-bypass-paywalls">
						to bypass The Atlantic's paywall
					</a>{" "}
					and to{" "}
					<a href="https://www.theverge.com/2024/6/27/24187405/perplexity-ai-twitter-lie-plagiarism">
						{" "}
						bypass Forbes' paywall and post summarized Forbes articles on other
						sites.
					</a>{" "}
					Using content from new sites without proper attribution of licensing
					takes revenue from these organizations.
					<br />
					<br />
					<b>Data Rights Harms</b> LLMs shift who owns and controls data away
					from the creators of text and to large corporations. Text data in
					instrumental for finding information, building communities, defining
					identities, maintaining culture, and countless other interactions. This
					shift in ownership and control threatens to place control of all these
					vital mechanisms in the hands of a small number of organizations that
					often lack the expertise, authority, and incentives to properly
					conduct them.
				</p>
				<br />
				<h1 className="subtitle is-5">
					{title}: Data Defenses Against Large Language Model Inference.
				</h1>
				<p className="is-family-secondary">
					To resist these harms, we developed {title}, a method that reduces
					the accuracy of large language model inference on text by adding a few
					sentences to that text. {title} will make it more
					difficult for an attacker to use an LLM to answer questions about or
					analyze your text. {title} works by using techniques from jailbreaking
					and prompt injection to trick LLMs into thinking they have answered
					the attackers question and answering a different, unrelated question
					instead. For example, consider an attacker that wants to use an LLM to
					analyze a person's social media history to infer their birth date. If
					the social media history is protected with {title}, there is a good
					chance that the LLM will instead return the answer to an unrelated
					question, preventing the attack. Further details are available in our{" "}
					<a href={data_defenses_paper}>paper</a>.
				</p>
				<br />
				<h1 className="subtitle is-5">Defense Examples</h1>
				<p className="is-family-secondary">
					Below are example defenses. They may be used by inserting them into a
					random position of the text you want to defend. These defenses were
					generated automatically using an LLM. Defenses with higher success
					rates may be generated by using{" "}

					<a href="https://github.com/wagnew3/LLMDataDefenses">our code</a> to
					create defenses specific to the defended text and/or attacking LLMs.
				</p>
				<br />
					{DEFENSES.map((paragraph) => (
						<div class="card">
							<div class="card-content">
								<div class="content">
									{paragraph}
								</div>
							</div>
						</div>
					))}
			</div>
		</section>
	)
}