import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useTranslation } from 'react-i18next'

const TeamRecruitment = () => {
	const { t } = useTranslation()

	const roles = [
		'producer',
		'director',
		'stunt_actor',
		'fight_coordinator',
		'videographer',
		'sound_engineer',
		'actors',
		'action_operator',
		'lighting',
		'pyrotechnician',
		'production_designer',
		'vfx_editor',
		'script_supervisor',
		'onset_editor',
		'makeup_artist',
		'costume_designer',
		'storyboard_artist',
		'composer',
		'bts_operator',
		'smm_marketer',
	]

	return (
		<section id='team' className='w-full bg-gray-50 py-8 pt-8 pb-4 px-0 lg:px-8'>
			<div className='max-w-4xl mx-auto'>
				<Card className='shadow-lg border border-gray-200'>
					<CardHeader>
						<CardTitle className='text-3xl font-bold text-center'>
							🎥 {t('team.title')}
						</CardTitle>
					</CardHeader>

					<CardContent>
						<div className='grid sm:grid-cols-2 gap-3 mt-2'>
							{roles.map(role => (
								<button
									key={role}
									className='
                    w-full text-left px-4 py-3 rounded-xl 
                    bg-white hover:bg-gray-100 
                    shadow-sm hover:shadow-md 
                    transition-all border border-gray-100
                    font-medium text-gray-800
                    focus:outline-none
                    active:scale-[0.98]
                  '
								>
									{t(`team.roles.${role}`)}
								</button>
							))}
						</div>

						<div className='mt-10 text-center'>
							<p className='text-gray-600 mb-4 text-lg'>
								💰 {t('team.salary')}
							</p>
							<Button
								size='lg'
								className='bg-black text-white hover:bg-gray-800 transition-all'
							>
								{t('team.apply')}
							</Button>
						</div>
					</CardContent>
				</Card>
			</div>
		</section>
	)
}

export default TeamRecruitment
