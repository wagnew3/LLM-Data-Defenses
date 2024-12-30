import { useState } from "react";
import ProtectText from "../components/ProtectText";
import data_defenses_paper from "../assets/Data_Defenses_Against_LLMs-8.pdf";
import fig_teaser from "../assets/teaser.png";
import DEFENSES from "../lib/defenses"

export default function Home() {
	return (
		<div>
			<section class="section">
				<h1 class="title">Protect your text.</h1>
				<ProtectText />
			</section>
			<section class="section">
				<h1 class="title">Test your protected text against ChatGPT.</h1>
				<p>
						Go to <a href="https://chatgpt.com">https://chatgpt.com</a> and ask
						ChatGPT to summarize your text in three bullet points, list the names
						of people mentioned in your text, or otherwise analyze your text. Is ChatGPT able
						to answer your questions on the protected text?
				</p>
				<p class="warning">
						<i>
						<b>
								Bamboozle will not protect your text from LLM inference 100% of
								the time, nor will it protect your text from use in training or
								finetuning. We recommend testing protected text against possible
								attacks on LLMs such as <a href="https://chatgpt.com">ChatGPT</a>,{" "}
								<a href="https://claude.ai/">Claude</a>, and{" "}
								<a href="https://gemini.google.com/app">Gemini</a> to assess how
								well Bamboozle will work for your text and threat model. There
								will likely be future countermeasures that significantly reduce
								the effectiveness of Bamboozle.
						</b>{" "}
						However, Bamboozle will make it more difficult for currently
						existing LLMs to analyze your text.
						</i>
				</p>
			</section>
			<img src={fig_teaser} alt="Data defenses for text overview. The attacker is using an LLM to extract PII from Alice’s social media history. A data defense inserted into Alice’s social media history causes the LLM to produce irrelevant output."/>
			<div class="dark">
				<p>
					<a href="https://mailchi.mp/4f24aa0852fd/text-ai-data-defenses-mailing-list-sign-up">
						Sign up for our mailing list!
					</a>{" "}
					If you are a text work interested in preventing LLM inference on your
					data, please consider signing up for our{" "}
					<a href="https://qualtricsxmgs946wmcc.qualtrics.com/jfe/form/SV_0re3BjXFhORvBJA">
						paid study
					</a>{" "}
					to help improve this tool!
				</p>
				<h2>Examples</h2>
				<p>
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
					<br />
				</p>
				<p>
					Large language models (LLMs), such as ChatGPT and Claude, are able to
					answer questions about, summarize, and analyze text with high
					accuracy. However, these capabilities have caused privacy, copyright,
					consent, and other harms.
					<br />
					<br />
					<h2>Why might text need to be protected against LLM inference?</h2>
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
				<h2>
					Bamboozle: Data Defenses Against Large Language Model Inference.
				</h2>
				<p>
					To resist these harms, we developed Bamboozle, a method that reduces
					the accuracy of large language model inference on text by adding a few
					sentences to that text. Bamboozle Bamboozle will make it more
					difficult for an attacker to use an LLM to answer questions about or
					analyze your text. Bamboozle work by using techniques from jailbreaking
					and prompt injection to trick LLMs into thinking they have answered
					the attackers question and answering a different, unrelated question
					instead. For example, consider an attacker that wants to use an LLM to
					analyze a person's social media history to infer their birth date. If
					the social media history is protected with Bamboozle, there is a good
					chance that the LLM will instead return the answer to an unrelated
					question, preventing the attack. Further details are available in our{" "}
					<a href={data_defenses_paper}>paper</a>.
				</p>
				<img alt="Data defenses for text overview. The attacker is using an LLM to extract PII from Alice’s social media history. A data defense inserted into Alice’s social media history causes the LLM to produce irrelevant output." />
				<h2>Defense Examples</h2>
				<p>
					Below are example defenses. They may be used by inserting them into a
					random position of the text you want to defend. These defenses were
					generated automatically using an LLM. Defenses with higher success
					rates may be generated by using{" "}

					<a href="https://github.com/wagnew3/LLMDataDefenses">our code</a> to
					create defenses specific to the defended text and\/or attacking LLMs.
					<br />
					<br />
					<br />
					{DEFENSES.map((paragraph) => (
						<p>{paragraph}</p>
					))}
				</p>
			</div>
		</div>
	);
}