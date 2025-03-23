import { OnestText } from '@/components/atoms/onest_text'
import { useLocale } from 'next-intl'

export default function HeaderDescription() {
  const locale = useLocale()

  const description =
    locale === 'en'
      ? `I am a <span class='text-orange'> web developer </span> with experience in creating <span class='text-orange'>modern and functional applications. </span> After completing an internship at a company, I am now working as a freelance web developer, helping clients turn their ideas into effective and attractive digital projects. I am eager to continue<span class='text-orange'> growing professionally and collaborate with a team </span> where I can contribute my skills and further develop my abilities.`
      : `Soy <span class='text-orange'> desarrollador web </span> con experiencia en la creación de aplicaciones <span class='text-orange'> modernas y funcionales. </span> Tras realizar prácticas en una empresa, actualmente me dedico al desarrollo web como freelancer, ayudando a clientes a convertir sus ideas en proyectos digitales efectivos y atractivos. <span class='text-orange'> Me gustaría seguir creciendo profesionalmente y colaborar con un equipo </span> donde pueda aportar mis conocimientos y continuar desarrollando mis habilidades`

  return (
    <OnestText fontSize="16px" style="bold" className="text-white">
      <span dangerouslySetInnerHTML={{ __html: description }} />
    </OnestText>
  )
}
