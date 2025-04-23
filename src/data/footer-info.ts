import type { footerNavigations, SocialMediaItem } from "@interfaces/footerInfo.interface";


export const socialMediaItems: SocialMediaItem[] = [
    {
        id: '1',
        href: 'https://www.facebook.com/study.fp',
        icon: 'facebook',
      },
      {
        id: '2',
        href: 'https://www.instagram.com/study.fp.cursos/',
        icon: `instagram`,
      },
      {
        id: '3',
        href: 'https://www.linkedin.com/company/formacionprofesionalstudy/mycompany/',
        icon: `linkedin`,
      },
      {
        id: '4',
        href: 'https://www.tiktok.com/@study_fp_?lang=es',
        icon: `tiktok`,
      },
      {
        id: '5',
        href: 'https://api.whatsapp.com/send?phone=34665888804',
        icon: `whatsapp`,
      },
]


export const footerNavigation: footerNavigations[] = [
    {
      id: '1',
      title: 'ENLACES',
      links: [
        {
          label: 'Inicio',
          href: 'https://studyfp.com/',
        },
        {
          label: 'Nosotros',
          href: 'https://studyfp.com/quienes-somos/',
        },
        {
          label: 'Contacto',
          href: 'https://studyfp.com/contacto/',
        },
      ],
    },
    {
      id: '2',
      title: 'SÍGUENOS',
      links: [
        {
          label: 'Facebook',
          href: 'https://www.facebook.com/study.fp',
        },
        {
          label: 'Instagram',
          href: 'https://www.instagram.com/studyformacionprofesional/',
        },
      ],
    },
    {
      id: '3',
      title: 'LEGAL',
      links: [
        {
          label: 'Política te privacidad',
          href: 'https://studyfp.com/privacidad/',
        },
        {
          label: 'Aviso legal',
          href: 'https://studyfp.com/aviso-legal/',
        },
      ],
    },
  ];