import React from 'react'
import i18n from '../i18n'

const About = () => {
	const lang = i18n.language // текущий язык ("ru", "en", "kk")

	const content = {
		ru: {
			title: 'О фильме',
			text: `
Казахстан, 2012 год. В провинциальном городе погибает молодая девушка Айлин — жертва жестокой забавы сыновей влиятельных людей. Для окружающих это быстро превращается в замалчиваемую трагедию: связи и деньги хоронят дело ещё до суда. Но для семьи это становится точкой невозврата. На похороны приезжает её брат, офицер КНБ, привыкший служить закону. Однако, столкнувшись с коррупцией и безнаказанностью, он понимает, что деньги и власть уже все решили. 
Тогда он решает начать собственное расследование, которое вскоре превращается в жестокую и кровавую месть.
      `,
		},
		en: {
			title: 'About the Film',
			text: `
Kazakhstan, 2012. In a provincial town, a young woman named Ailyn dies — a victim of a cruel game by powerful men's sons. For the public, it quickly becomes a silenced tragedy: connections and money bury the case before trial. 
But for her family, it becomes a point of no return.Her brother, an officer of the National Security Committee, arrives for the funeral. Used to serving the law, he faces a wall of impunity and realizes that justice does not live here. He decides to become its embodiment and begins his own investigation — one that soon turns into cold, methodical revenge.
      `,
		},
		kk: {
			title: 'Фильм туралы',
			text: `
Қазақстан, 2012 жыл. Шағын  қалада жас қыз Айлин қаза табады — ықпалды адамдардың балаларының қатыгез ойынының құрбаны. Айналадағы адамдар үшін бұл оқиға тез ұмытылатын трагедияға айналады: байланыстар мен ақша істі сотқа дейін көміп тастайды. Бірақ отбасы үшін бұл – қайтарымсыз сәт.Жерлеуге оның ағасы, ҰҚК офицері келеді. 
Заңға адал қызмет етіп жүрген ол жазасыздық қабырғасына тап болып, әділдік мұнда жоқ екенін түсінеді. 
Содан ол әділдіктің өзі болуға бел буып, суық әрі жүйелі кекке айналған жеке тергеуін бастайды.
      `,
		},
	}

	const { title, text } = content[lang] || content.en

	return (
		<section id='about' className='max-w-4xl mx-auto px-4 py-6 text-left'>
			<h2 className='text-3xl font-bold mb-4 text-gray-800'>{title}</h2>
			<p className='text-lg leading-relaxed text-gray-600'>
				{text}
			</p>
		</section>
	)
}

export default About
