import { CheckCircle } from 'phosphor-react'
import { Lock } from 'phosphor-react'
import { isPast, format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { Link, useParams } from 'react-router-dom';
import clasNames from 'classnames'

interface LessonProps {
	title: string;
	slug: string;
	availabletAt: Date;
	type: 'live' | 'class';
}
export function Lesson(props: LessonProps) {
	const isLessonAvailable = isPast(props.availabletAt);
	const availableDateFormatted = format(props.availabletAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", {
		locale: ptBR
	})

	const { slug } = useParams<{ slug: string }>();

	const isActiveLesson = slug == props.slug;

	return (
		<Link to={`/event/lesson/${props.slug}`} className='group'>
			<span className="text-gray-300">
				{availableDateFormatted}
			</span>
			<div
				className={clasNames(
					'rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500 transition-colors', {
					'bg-green-500': isActiveLesson
				})}>
				<header className="flex items-center justify-between">
					{
						isLessonAvailable ? (
							<span className={clasNames('flex text-sm font-medium items-center gap-2 transition-colors', {
								'text-white': isActiveLesson,
								'text-blue-500': !isActiveLesson
							})}>
								<CheckCircle size={20} />
								Conteúdo Liberado
							</span>
						) : (
							<span className={clasNames('flex text-sm text-orange-500 font-medium items-center gap-2')}>
								<Lock size={20} />
								Em Breve
							</span>
						)
					}

					<span className={clasNames('text-xs rounded px-2 py-[0.125rem] text-white border font-bold', {
						'border-white font-bold': isActiveLesson,
						'border-green-300 font-bold': !isActiveLesson
					})}>
						{props.type == 'live' ? 'AO VIVO' : 'Aula Prática'}
					</span>
				</header>
				<strong className={clasNames(' mt-5 block', {
					'text-white': isActiveLesson,
					'text-gray-200': !isActiveLesson
				})}>
					{props.title}
				</strong>
			</div>
		</Link>
	)
}