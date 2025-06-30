import styles from './Modal.module.css'

type Props = {
  isOpen: boolean;
  onClose: () => void;
  children?: any;
  // tall?: boolean
};

const Modal = (props: Props) => {
  const { isOpen, onClose, children } = props
  if (!isOpen) return null

  return (
    <div
      onClick={onClose}
      className={styles.wrapper}
    >
      <div>
        {children}
      </div>
    </div>
  )
}

export default Modal