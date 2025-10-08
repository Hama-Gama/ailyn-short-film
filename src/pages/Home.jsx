import About from "@/components/About";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Contacts from "@/components/Contacts";
import Director from "@/components/Director";
import Donates from "@/components/Donates";
import MovieSchema from "@/components/MovieSchema";

export default function Home() {
	return (
		<div className='flex flex-col min-h-screen'>
			<MovieSchema />
			<Header />
			<main className="flex-1"> 
				<Hero />
				<About />
				<Director />
				<Contacts />
				<Donates />
			</main>
			<Footer />
		</div>
	)
}
