import cn from 'clsx'


import dynamic from 'next/dynamic'
import s from './footer.module.scss'

// const Mail = dynamic(() => import('icons/mail.svg'), { ssr: false })

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.top}>
        <p className="font-semibold uppercase text-neutral-500  text-9xl font-serif text-slate-300 mx-16 text-[#808080] my-28">
          Škabrijel <br />
          <span className="contrast font-serif">hill in Nova Gorica</span>
        </p>
        <div className={s['shameless-plug']}>
          {/* <p className="h4">Prepad</p> */}
          <p className="text-5xl font-serif text-slate-300 mx-16 my-32">
            You are welcomed to <br /> visit as any time.
          </p>
        </div>
        {/* <p className={cn(s['last-line'], 'h1')}>
          & open to <span className="hide-on-desktop">&nbsp;</span> features,{' '}
          <br /> forks or prs &nbsp;
        </p> */}
        {/* <Button
          className={s.cta}
          arrow
          icon={<Mail />}
          href="mailto:info@prepad.si"
        >
          Let's make greate work together
        </Button> */}
      </div>
      {/* <div className={cn(s.top, 'layout-block hide-on-desktop')}>
        <div className={s['shameless-plug']}>
          <p className="h4">Prepad</p>
          <p className="p-s">
            An independent creative <br /> studio built on principle
          </p>
        </div>
        <p className={cn(s['first-line'], 'h1')}>
          Prepad is <br />
          <span className="contrast">Digital studio</span>

        </p>
      </div> */}
      <div className={s.bottom}>
        <div className={s.links}>
          {/* <Link
            className={cn(s.link, 'p-xs')}
            href="https://twitter.com/studiofreight"
          >
            Twitter
          </Link>
          <Link
            className={cn(s.link, 'p-xs')}
            href="https://github.com/studio-freight"
          >
            GitHub
          </Link>
          <Link
            className={cn(s.link, 'p-xs')}
            href="https://awwwards.com/studiofreight"
          >
            Awwwards
          </Link>
          <Link className={cn(s.link, 'p-xs')} href="https://studiofreight.com">
            Website
          </Link>
          <Link
            className={cn(s.link, 'p-xs')}
            href="https://darkroom.studiofreight.com"
          >
            Darkroom
          </Link> */}
        </div>
        <p className={cn('p-xs', s.tm)}>
          <span>©</span> {new Date().getFullYear()} Prepad d.o.o.
        </p>
        {/* <div
          className={cn(s.cta, 'hide-on-desktop')}
          arrow
          // icon={<Mail />}
          href="mailto:info@prepad.si"
        >
          Let's make work together
        </div> */}
      </div>
    </footer>
  )
}

export default Footer;