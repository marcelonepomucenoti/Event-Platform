import { CheckCircle } from 'phosphor-react'
import { Lock } from 'phosphor-react'
import { isPast, format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

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

    return (
        <a href="#">
            <span className="text-gray-300">
                {availableDateFormatted}
            </span>
            <div className="rounded border border-gray-500 p-4 mt-2">
                <header className="flex items-center justify-between">
                    {
                        isLessonAvailable ? (
                            <span className="flex text-sm text-blue-500 font-medium items-center gap-2">
                                <CheckCircle size={20} />
                                Conteúdo Liberado
                            </span>
                        ) : (
                            <span className="flex text-sm text-orange-500 font-medium items-center gap-2">
                                <Lock size={20} />
                                Em Breve
                            </span>
                        )
                    }

                    <span className="text-xs rounded px-2 py-[0.125rem] text-white border border-green-300 font-bold">
                        {props.type == 'live' ? 'AO VIVO' : 'Aula Prática'}
                    </span>
                </header>
                <strong className="text-gray-200 mt-5 block">
                    {props.title}
                </strong>
            </div>
        </a>
    )
}