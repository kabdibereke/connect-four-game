import styles from './Footer.module.scss'

interface FooterProps {
  winner: number
  
}

const Footer = ({winner}: FooterProps) => {
  return (
    <footer className={winner==0 || winner==3? styles.footer: winner==1? styles.footer1: styles.footer2}>
        
    </footer>
  )
}

export default Footer