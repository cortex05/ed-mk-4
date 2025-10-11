import styles from './Button.module.css'

type Props = {
  children?: any
}

const Button = (props: Props) => {
  const {children} = props
  return (
    <div className={`${styles.main} p-1`}>
      <span className='font-serif'>{children}</span>
    </div>
  )
}

export default Button